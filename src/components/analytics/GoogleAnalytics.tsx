'use client';

import { useEffect } from 'react';
import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google';
import { GA_MEASUREMENT_ID, initUserTracking } from '@/lib/analytics';

/**
 * Google Analytics 4 component
 * Only renders in production environment with valid Measurement ID
 * Automatically tracks new vs returning users
 */
export function GoogleAnalytics() {
  // Initialize user tracking on mount
  useEffect(() => {
    // Small delay to ensure gtag is loaded
    const timer = setTimeout(() => {
      initUserTracking();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Don't render GA script in development or if no valid measurement ID
  if (
    process.env.NODE_ENV !== 'production' ||
    !GA_MEASUREMENT_ID ||
    GA_MEASUREMENT_ID === 'G-XXXXXXXXXX'
  ) {
    return null;
  }

  return <NextGoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}
