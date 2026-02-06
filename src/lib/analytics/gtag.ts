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

// Local storage keys
const USER_VISITED_KEY = 'ga_user_visited';
const USER_FIRST_VISIT_KEY = 'ga_first_visit';

/**
 * Safe localStorage access with error handling
 */
function safeLocalStorage() {
  try {
    if (typeof window === 'undefined') return null;
    // Test if localStorage is available
    const testKey = '__test__';
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return localStorage;
  } catch {
    return null;
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
    GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX' &&
    typeof window.gtag === 'function'
  );
}

/**
 * Get user type (new or returning)
 * Uses localStorage to persist across sessions
 */
export function getUserType(): UserType {
  const storage = safeLocalStorage();
  if (!storage) return 'new';

  return storage.getItem(USER_VISITED_KEY) ? 'returning' : 'new';
}

/**
 * Mark user as visited (call after first page load)
 */
export function markUserAsVisited(): void {
  const storage = safeLocalStorage();
  if (!storage) return;

  const now = new Date().toISOString();
  if (!storage.getItem(USER_VISITED_KEY)) {
    storage.setItem(USER_FIRST_VISIT_KEY, now);
  }
  storage.setItem(USER_VISITED_KEY, now);
}

/**
 * Get user's first visit date
 */
export function getFirstVisitDate(): string | null {
  const storage = safeLocalStorage();
  if (!storage) return null;
  return storage.getItem(USER_FIRST_VISIT_KEY);
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
 * @param action - Event name
 * @param params - Event parameters
 * @param useBeacon - Use sendBeacon for critical events (e.g., on page unload)
 */
export function event(
  action: string,
  params?: Record<string, unknown>,
  useBeacon: boolean = false
): void {
  if (!isAnalyticsEnabled()) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[GA4 Debug] event:', action, params);
    }
    return;
  }

  // Use sendBeacon for unload events to ensure delivery
  if (useBeacon && navigator.sendBeacon && GA_MEASUREMENT_ID) {
    const payload = {
      client_id: getClientId(),
      events: [{
        name: action,
        params: {
          ...params,
          send_to: GA_MEASUREMENT_ID,
        },
      }],
    };

    const url = `https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=`;
    navigator.sendBeacon(url, JSON.stringify(payload));
    return;
  }

  window.gtag('event', action, params);
}

/**
 * Get GA client ID from cookie
 */
function getClientId(): string {
  try {
    const match = document.cookie.match(/_ga=GA\d+\.\d+\.(\d+\.\d+)/);
    return match ? match[1] : 'unknown';
  } catch {
    return 'unknown';
  }
}

/**
 * Throttle function to limit execution frequency
 */
export function throttle<T extends (...args: unknown[]) => void>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  return function (this: unknown, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Debounce function to delay execution
 */
export function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return function (this: unknown, ...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
