// Google Analytics 4 gtag.js types and utilities

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Check if Google Analytics is enabled
 */
export function isAnalyticsEnabled(): boolean {
  return (
    typeof window !== 'undefined' &&
    process.env.NODE_ENV === 'production' &&
    !!GA_MEASUREMENT_ID &&
    GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX'
  );
}

/**
 * Track page views
 */
export function pageview(url: string): void {
  if (!isAnalyticsEnabled()) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[GA4 Debug] pageview:', url);
    }
    return;
  }

  window.gtag('config', GA_MEASUREMENT_ID!, {
    page_path: url,
  });
}

/**
 * Track custom events
 */
export function event(
  action: string,
  params?: Record<string, unknown>
): void {
  if (!isAnalyticsEnabled()) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[GA4 Debug] event:', action, params);
    }
    return;
  }

  window.gtag('event', action, params);
}
