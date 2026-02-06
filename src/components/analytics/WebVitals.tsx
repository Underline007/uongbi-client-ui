'use client';

import { useEffect } from 'react';
import { trackWebVitals } from '@/lib/analytics';

type MetricRating = 'good' | 'needs-improvement' | 'poor';

interface WebVitalsMetric {
  name: 'LCP' | 'FID' | 'CLS' | 'FCP' | 'TTFB' | 'INP';
  value: number;
  rating: MetricRating;
  id: string;
}

/**
 * Get rating for each metric based on Google's thresholds
 */
function getRating(name: string, value: number): MetricRating {
  switch (name) {
    case 'LCP':
      return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
    case 'FID':
      return value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';
    case 'CLS':
      return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';
    case 'FCP':
      return value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor';
    case 'TTFB':
      return value <= 800 ? 'good' : value <= 1800 ? 'needs-improvement' : 'poor';
    case 'INP':
      return value <= 200 ? 'good' : value <= 500 ? 'needs-improvement' : 'poor';
    default:
      return 'needs-improvement';
  }
}

/**
 * Generate unique ID for metric
 */
function generateId(): string {
  return `v${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Component that tracks Core Web Vitals metrics
 * Uses the web-vitals library pattern with native PerformanceObserver
 */
export function WebVitals() {
  useEffect(() => {
    // Only run in browser and production
    if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') {
      return;
    }

    // Track LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        const value = lastEntry.startTime;
        trackWebVitals({
          name: 'LCP',
          value,
          rating: getRating('LCP', value),
          id: generateId(),
        });
      }
    });

    try {
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch {
      // LCP not supported
    }

    // Track FCP (First Contentful Paint)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find((e) => e.name === 'first-contentful-paint');
      if (fcpEntry) {
        const value = fcpEntry.startTime;
        trackWebVitals({
          name: 'FCP',
          value,
          rating: getRating('FCP', value),
          id: generateId(),
        });
      }
    });

    try {
      fcpObserver.observe({ type: 'paint', buffered: true });
    } catch {
      // FCP not supported
    }

    // Track CLS (Cumulative Layout Shift)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Only count layout shifts without recent user input
        if (!(entry as PerformanceEntry & { hadRecentInput?: boolean }).hadRecentInput) {
          clsValue += (entry as PerformanceEntry & { value?: number }).value || 0;
        }
      }
    });

    try {
      clsObserver.observe({ type: 'layout-shift', buffered: true });
    } catch {
      // CLS not supported
    }

    // Track INP (Interaction to Next Paint) - replaces FID
    const inpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      for (const entry of entries) {
        const value = entry.duration;
        if (value > 0) {
          trackWebVitals({
            name: 'INP',
            value,
            rating: getRating('INP', value),
            id: generateId(),
          });
        }
      }
    });

    try {
      inpObserver.observe({ type: 'event', buffered: true, durationThreshold: 16 } as PerformanceObserverInit);
    } catch {
      // INP not supported, fallback to FID
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const firstEntry = entries[0];
        if (firstEntry) {
          const value = (firstEntry as PerformanceEventTiming).processingStart - firstEntry.startTime;
          trackWebVitals({
            name: 'FID',
            value,
            rating: getRating('FID', value),
            id: generateId(),
          });
        }
      });

      try {
        fidObserver.observe({ type: 'first-input', buffered: true });
      } catch {
        // FID not supported
      }
    }

    // Track TTFB on page load
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      if (ttfb > 0) {
        trackWebVitals({
          name: 'TTFB',
          value: ttfb,
          rating: getRating('TTFB', ttfb),
          id: generateId(),
        });
      }
    }

    // Send CLS on page hide
    const sendCLS = () => {
      if (clsValue > 0) {
        trackWebVitals({
          name: 'CLS',
          value: clsValue,
          rating: getRating('CLS', clsValue),
          id: generateId(),
        });
      }
    };

    window.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        sendCLS();
      }
    });

    window.addEventListener('pagehide', sendCLS);

    return () => {
      lcpObserver.disconnect();
      fcpObserver.disconnect();
      clsObserver.disconnect();
      inpObserver.disconnect();
    };
  }, []);

  return null;
}
