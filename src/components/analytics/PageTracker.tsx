'use client';

import { Suspense } from 'react';
import { usePageTracking } from '@/hooks/use-page-tracking';

/**
 * Inner component that uses usePageTracking
 * Wrapped in Suspense because useSearchParams requires it
 */
function PageTrackerInner() {
  usePageTracking();
  return null;
}

/**
 * Component that tracks pageviews on SPA navigation
 * Place this in your root layout or providers
 */
export function PageTracker() {
  return (
    <Suspense fallback={null}>
      <PageTrackerInner />
    </Suspense>
  );
}
