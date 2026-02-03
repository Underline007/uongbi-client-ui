'use client';

import { useEffect, useRef, useCallback } from 'react';
import { trackNewsView, trackProcedureView, trackScrollDepth } from '@/lib/analytics';

interface ArticleTrackerProps {
  type: 'news' | 'procedure';
  id: string | number;
  title: string;
  children: React.ReactNode;
}

/**
 * Wrapper component that tracks article view and scroll depth
 */
export function ArticleTracker({ type, id, title, children }: ArticleTrackerProps) {
  const scrollMilestones = useRef<Set<25 | 50 | 75 | 100>>(new Set());
  const hasTrackedView = useRef(false);

  // Track article view on mount
  useEffect(() => {
    if (hasTrackedView.current) return;
    hasTrackedView.current = true;

    if (type === 'news') {
      trackNewsView(id, title);
    } else {
      trackProcedureView(id, title);
    }
  }, [type, id, title]);

  // Track scroll depth
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    const milestones: (25 | 50 | 75 | 100)[] = [25, 50, 75, 100];

    for (const milestone of milestones) {
      if (scrollPercent >= milestone && !scrollMilestones.current.has(milestone)) {
        scrollMilestones.current.add(milestone);
        trackScrollDepth(milestone);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return <>{children}</>;
}
