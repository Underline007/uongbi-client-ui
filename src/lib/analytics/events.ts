// Custom GA4 event tracking functions

import { event, getUserType } from './gtag';

/**
 * Content types for tracking
 */
export type ContentType = 'news' | 'procedure' | 'announcement' | 'document' | 'planning';

/**
 * Track contact form submission
 */
export function trackContactFormSubmit(subject: string): void {
  event('contact_form_submit', {
    event_category: 'engagement',
    event_label: subject,
    subject: subject,
  });
}

/**
 * Track document/file download
 */
export function trackDocumentDownload(
  fileName: string,
  fileType?: string
): void {
  event('file_download', {
    event_category: 'engagement',
    event_label: fileName,
    file_name: fileName,
    file_extension: fileType,
  });
}

/**
 * Generic content view tracker - DRY principle
 */
function trackContentView(
  contentType: ContentType,
  itemId: string | number,
  itemTitle: string
): void {
  const userType = getUserType();
  event('view_item', {
    event_category: 'content',
    content_type: contentType,
    item_id: String(itemId),
    item_name: itemTitle,
    user_type: userType,
  });
}

/**
 * Track news article view
 */
export function trackNewsView(newsId: string | number, newsTitle: string): void {
  trackContentView('news', newsId, newsTitle);
}

/**
 * Track procedure/administrative process view
 */
export function trackProcedureView(procedureId: string | number, procedureTitle: string): void {
  trackContentView('procedure', procedureId, procedureTitle);
}

/**
 * Track announcement view
 */
export function trackAnnouncementView(announcementId: string | number, announcementTitle: string): void {
  trackContentView('announcement', announcementId, announcementTitle);
}

/**
 * Track document view
 */
export function trackDocumentView(documentId: string | number, documentTitle: string): void {
  trackContentView('document', documentId, documentTitle);
}

/**
 * Track planning view
 */
export function trackPlanningView(planningId: string | number, planningTitle: string): void {
  trackContentView('planning', planningId, planningTitle);
}

/**
 * Track article reading time
 * Uses sendBeacon to ensure delivery on page unload
 */
export function trackArticleReadTime(
  articleId: string | number,
  articleTitle: string,
  contentType: ContentType,
  readTimeSeconds: number,
  scrollDepthPercent: number
): void {
  const userType = getUserType();

  // Use beacon for reliable delivery on page exit
  event('article_read', {
    event_category: 'engagement',
    content_type: contentType,
    item_id: String(articleId),
    item_name: articleTitle,
    engagement_time_sec: Math.round(readTimeSeconds),
    scroll_depth_percent: Math.round(scrollDepthPercent),
    user_type: userType,
  }, true); // useBeacon = true
}

/**
 * Track search queries with debounced input
 */
export function trackSearch(searchTerm: string): void {
  // Only track if search term is meaningful
  if (!searchTerm || searchTerm.trim().length < 2) return;

  event('search', {
    event_category: 'engagement',
    search_term: searchTerm.trim(),
  });
}

/**
 * Track social sharing with article details
 */
export function trackSocialShare(
  platform: 'facebook' | 'twitter' | 'zalo' | 'copy' | string,
  contentType: ContentType | string,
  itemId: string | number,
  itemTitle?: string
): void {
  const userType = getUserType();
  event('share', {
    event_category: 'engagement',
    method: platform,
    content_type: contentType,
    item_id: String(itemId),
    item_name: itemTitle,
    user_type: userType,
  });
}

/**
 * Track outbound link clicks
 */
export function trackOutboundLink(url: string): void {
  event('click', {
    event_category: 'outbound',
    event_label: url,
    link_url: url,
    link_domain: extractDomain(url),
  });
}

/**
 * Extract domain from URL
 */
function extractDomain(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return 'unknown';
  }
}

/**
 * Track button/CTA clicks
 */
export function trackButtonClick(
  buttonName: string,
  location?: string
): void {
  event('click', {
    event_category: 'engagement',
    event_label: buttonName,
    button_name: buttonName,
    click_location: location,
  });
}

/**
 * Track summary button clicks
 */
export function trackSummaryButtonClick(
  articleId: string | number,
  articleTitle: string
): void {
  event('click_summary', {
    event_category: 'engagement',
    event_label: 'summary_button',
    article_id: String(articleId),
    article_title: articleTitle,
  });
}

/**
 * Track user engagement (time on page, scroll depth, etc.)
 */
export function trackUserEngagement(
  engagementType: 'scroll' | 'time_on_page' | 'interaction',
  value: number,
  additionalParams?: Record<string, unknown>
): void {
  const userType = getUserType();
  event('user_engagement', {
    event_category: 'engagement',
    engagement_type: engagementType,
    value: value,
    user_type: userType,
    ...additionalParams,
  });
}

/**
 * Track scroll depth milestones (25%, 50%, 75%, 100%)
 */
export function trackScrollDepth(
  depth: 25 | 50 | 75 | 100,
  articleId?: string | number,
  articleTitle?: string,
  contentType?: ContentType
): void {
  const userType = getUserType();
  event('scroll', {
    event_category: 'engagement',
    percent_scrolled: depth,
    page_location: typeof window !== 'undefined' ? window.location.pathname : '',
    item_id: articleId ? String(articleId) : undefined,
    item_name: articleTitle,
    content_type: contentType,
    user_type: userType,
  });
}

/**
 * Track session start with user type
 */
export function trackSessionStart(): void {
  const userType = getUserType();
  event('session_start', {
    user_type: userType,
  });
}

/**
 * Track Core Web Vitals (LCP, FID, CLS)
 */
export function trackWebVitals(metric: {
  name: 'LCP' | 'FID' | 'CLS' | 'FCP' | 'TTFB' | 'INP';
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  id: string;
}): void {
  event('web_vitals', {
    event_category: 'Web Vitals',
    event_label: metric.name,
    metric_name: metric.name,
    metric_value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    metric_rating: metric.rating,
    metric_id: metric.id,
    non_interaction: true,
  });
}

/**
 * Track errors/exceptions
 */
export function trackError(
  errorType: string,
  errorMessage: string,
  errorStack?: string
): void {
  event('exception', {
    description: `${errorType}: ${errorMessage}`,
    fatal: false,
    error_type: errorType,
    error_message: errorMessage.substring(0, 100), // Limit message length
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  });
}
