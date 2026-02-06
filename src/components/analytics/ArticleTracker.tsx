'use client';

import { useEffect, useRef, useCallback } from 'react';
import {
  trackNewsView,
  trackProcedureView,
  trackAnnouncementView,
  trackDocumentView,
  trackPlanningView,
  trackScrollDepth,
  trackArticleReadTime,
} from '@/lib/analytics';
import { throttle } from '@/lib/analytics/gtag';
import type { ContentType } from '@/lib/analytics';

interface ArticleTrackerProps {
  type: ContentType;
  id: string | number;
  title: string;
  children: React.ReactNode;
}

// Throttle delay for scroll events (ms)
const SCROLL_THROTTLE_DELAY = 150;

// Minimum time to track (seconds)
const MIN_READ_TIME = 3;

/**
 * Wrapper component that tracks:
 * - Article view on mount
 * - Scroll depth milestones (25%, 50%, 75%, 100%) - throttled
 * - Reading time when user leaves the page - with duplicate prevention
 */
export function ArticleTracker({ type, id, title, children }: ArticleTrackerProps) {
  const scrollMilestones = useRef<Set<25 | 50 | 75 | 100>>(new Set());
  const hasTrackedView = useRef(false);
  const hasTrackedReadTime = useRef(false);
  const startTime = useRef<number>(Date.now());
  const maxScrollDepth = useRef<number>(0);

  // Track article view on mount
  useEffect(() => {
    if (hasTrackedView.current) return;
    hasTrackedView.current = true;
    startTime.current = Date.now();

    switch (type) {
      case 'news':
        trackNewsView(id, title);
        break;
      case 'procedure':
        trackProcedureView(id, title);
        break;
      case 'announcement':
        trackAnnouncementView(id, title);
        break;
      case 'document':
        trackDocumentView(id, title);
        break;
      case 'planning':
        trackPlanningView(id, title);
        break;
    }
  }, [type, id, title]);

  // Calculate scroll depth
  const calculateScrollDepth = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (docHeight <= 0) return;

    const scrollPercent = (scrollTop / docHeight) * 100;

    // Update max scroll depth
    if (scrollPercent > maxScrollDepth.current) {
      maxScrollDepth.current = scrollPercent;
    }

    const milestones: (25 | 50 | 75 | 100)[] = [25, 50, 75, 100];

    for (const milestone of milestones) {
      if (scrollPercent >= milestone && !scrollMilestones.current.has(milestone)) {
        scrollMilestones.current.add(milestone);
        trackScrollDepth(milestone, id, title, type);
      }
    }
  }, [id, title, type]);

  // Throttled scroll handler
  const handleScroll = useCallback(
    throttle(calculateScrollDepth, SCROLL_THROTTLE_DELAY),
    [calculateScrollDepth]
  );

  // Track reading time when user leaves - with duplicate prevention
  const trackReadTime = useCallback(() => {
    // Prevent duplicate tracking
    if (hasTrackedReadTime.current) return;

    const readTimeSeconds = (Date.now() - startTime.current) / 1000;

    // Only track if user spent at least MIN_READ_TIME seconds
    if (readTimeSeconds >= MIN_READ_TIME) {
      hasTrackedReadTime.current = true;
      trackArticleReadTime(
        id,
        title,
        type,
        readTimeSeconds,
        maxScrollDepth.current
      );
    }
  }, [id, title, type]);

  useEffect(() => {
    // Reset tracking state when article changes
    hasTrackedReadTime.current = false;
    scrollMilestones.current.clear();
    maxScrollDepth.current = 0;
    startTime.current = Date.now();

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Track reading time on page unload/navigation
    const handleBeforeUnload = () => {
      trackReadTime();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        trackReadTime();
      }
    };

    // Handle page hide event (more reliable on mobile)
    const handlePageHide = () => {
      trackReadTime();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', handlePageHide);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', handlePageHide);

      // Track reading time when component unmounts (SPA navigation)
      trackReadTime();
    };
  }, [handleScroll, trackReadTime, id]); // Add id to reset on article change

  return <>{children}</>;
}
