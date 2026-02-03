'use client';

import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google';
import { GA_MEASUREMENT_ID } from '@/lib/analytics';

/**
 * Google Analytics 4 component
 * Only renders in production environment with valid Measurement ID
 */
export function GoogleAnalytics() {
  // Don't render in development or if no valid measurement ID
  if (
    process.env.NODE_ENV !== 'production' ||
    !GA_MEASUREMENT_ID ||
    GA_MEASUREMENT_ID === 'G-XXXXXXXXXX'
  ) {
    return null;
  }

  return <NextGoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}
