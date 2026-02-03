// Google Analytics 4 gtag.js types and utilities

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set' | 'get',
      targetId: string,
      config?: Record<string, unknown> | ((field: unknown) => void)
    ) => void;
  }
}

// User type constants
export type UserType = 'new' | 'returning';

// Local storage key for tracking returning users
const USER_VISITED_KEY = 'ga_user_visited';
const USER_FIRST_VISIT_KEY = 'ga_first_visit';

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
 * Get user type (new or returning)
 * Uses localStorage to persist across sessions
 */
export function getUserType(): UserType {
  if (typeof window === 'undefined') return 'new';

  const hasVisited = localStorage.getItem(USER_VISITED_KEY);
  return hasVisited ? 'returning' : 'new';
}

/**
 * Mark user as visited (call after first page load)
 */
export function markUserAsVisited(): void {
  if (typeof window === 'undefined') return;

  const now = new Date().toISOString();
  if (!localStorage.getItem(USER_VISITED_KEY)) {
    localStorage.setItem(USER_FIRST_VISIT_KEY, now);
  }
  localStorage.setItem(USER_VISITED_KEY, now);
}

/**
 * Get user's first visit date
 */
export function getFirstVisitDate(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(USER_FIRST_VISIT_KEY);
}

/**
 * Set user properties for segmentation
 */
export function setUserProperties(properties: Record<string, unknown>): void {
  if (!isAnalyticsEnabled()) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[GA4 Debug] setUserProperties:', properties);
    }
    return;
  }

  window.gtag('set', 'user_properties', properties);
}

/**
 * Initialize user tracking
 * Call this on app load to set up user type tracking
 */
export function initUserTracking(): void {
  const userType = getUserType();
  const firstVisit = getFirstVisitDate();

  // Set user properties
  setUserProperties({
    user_type: userType,
    first_visit_date: firstVisit || new Date().toISOString(),
  });

  // Track first_visit event for new users
  if (userType === 'new') {
    event('first_visit', {
      engagement_time_msec: 0,
    });
  }

  // Mark user as visited for future sessions
  markUserAsVisited();

  if (process.env.NODE_ENV === 'development') {
    console.log('[GA4 Debug] User tracking initialized:', { userType, firstVisit });
  }
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
