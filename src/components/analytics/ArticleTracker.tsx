'use client';

import { useEffect, useRef, useCallback } from 'react';
import {
  trackNewsView,
  trackProcedureView,
  trackScrollDepth,
  trackArticleReadTime,
} from '@/lib/analytics';

interface ArticleTrackerProps {
  type: 'news' | 'procedure';
  id: string | number;
  title: string;
  children: React.ReactNode;
}

/**
 * Wrapper component that tracks:
 * - Article view on mount
 * - Scroll depth milestones (25%, 50%, 75%, 100%)
 * - Reading time when user leaves the page
 */
export function ArticleTracker({ type, id, title, children }: ArticleTrackerProps) {
  const scrollMilestones = useRef<Set<25 | 50 | 75 | 100>>(new Set());
  const hasTrackedView = useRef(false);
  const startTime = useRef<number>(Date.now());
  const maxScrollDepth = useRef<number>(0);

  // Track article view on mount
  useEffect(() => {
    if (hasTrackedView.current) return;
    hasTrackedView.current = true;
    startTime.current = Date.now();

    if (type === 'news') {
      trackNewsView(id, title);
    } else {
      trackProcedureView(id, title);
    }
  }, [type, id, title]);

  // Track scroll depth with article info
  const handleScroll = useCallback(() => {
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

  // Track reading time when user leaves
  const trackReadTime = useCallback(() => {
    const readTimeSeconds = (Date.now() - startTime.current) / 1000;

    // Only track if user spent at least 3 seconds on the article
    if (readTimeSeconds >= 3) {
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

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      // Track reading time when component unmounts (navigation)
      trackReadTime();
    };
  }, [handleScroll, trackReadTime]);

  return <>{children}</>;
}
