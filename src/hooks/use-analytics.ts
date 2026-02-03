'use client';

import { useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import {
  pageview,
  trackContactFormSubmit,
  trackDocumentDownload,
  trackNewsView,
  trackProcedureView,
  trackSearch,
  trackSocialShare,
  trackOutboundLink,
  trackButtonClick,
} from '@/lib/analytics';

/**
 * Hook to use analytics tracking in client components
 * Automatically tracks page views on route changes
 */
export function useAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views on route change
  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    pageview(url);
  }, [pathname, searchParams]);

  // Memoized tracking functions
  const trackFormSubmit = useCallback((subject: string) => {
    trackContactFormSubmit(subject);
  }, []);

  const trackDownload = useCallback((fileName: string, fileType?: string) => {
    trackDocumentDownload(fileName, fileType);
  }, []);

  const trackNews = useCallback((newsId: string | number, newsTitle: string) => {
    trackNewsView(newsId, newsTitle);
  }, []);

  const trackProcedure = useCallback((procedureId: string | number, procedureTitle: string) => {
    trackProcedureView(procedureId, procedureTitle);
  }, []);

  const trackSearchQuery = useCallback((searchTerm: string) => {
    trackSearch(searchTerm);
  }, []);

  const trackShare = useCallback(
    (platform: string, contentType?: string, itemId?: string | number) => {
      trackSocialShare(platform, contentType, itemId);
    },
    []
  );

  const trackOutbound = useCallback((url: string) => {
    trackOutboundLink(url);
  }, []);

  const trackClick = useCallback((buttonName: string, location?: string) => {
    trackButtonClick(buttonName, location);
  }, []);

  return {
    trackFormSubmit,
    trackDownload,
    trackNews,
    trackProcedure,
    trackSearchQuery,
    trackShare,
    trackOutbound,
    trackClick,
  };
}
