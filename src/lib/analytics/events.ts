// Custom GA4 event tracking functions

import { event, getUserType } from './gtag';

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
 * Track news article view
 */
export function trackNewsView(
  newsId: string | number,
  newsTitle: string
): void {
  const userType = getUserType();
  event('view_item', {
    event_category: 'content',
    content_type: 'news',
    item_id: String(newsId),
    item_name: newsTitle,
    user_type: userType,
  });
}

/**
 * Track procedure/administrative process view
 */
export function trackProcedureView(
  procedureId: string | number,
  procedureTitle: string
): void {
  const userType = getUserType();
  event('view_item', {
    event_category: 'content',
    content_type: 'procedure',
    item_id: String(procedureId),
    item_name: procedureTitle,
    user_type: userType,
  });
}

/**
 * Track article reading time
 * @param articleId - Article ID
 * @param articleTitle - Article title
 * @param contentType - Type of content (news, procedure)
 * @param readTimeSeconds - Time spent reading in seconds
 * @param scrollDepthPercent - Maximum scroll depth reached (0-100)
 */
export function trackArticleReadTime(
  articleId: string | number,
  articleTitle: string,
  contentType: 'news' | 'procedure',
  readTimeSeconds: number,
  scrollDepthPercent: number
): void {
  const userType = getUserType();
  event('article_read', {
    event_category: 'engagement',
    content_type: contentType,
    item_id: String(articleId),
    item_name: articleTitle,
    engagement_time_sec: Math.round(readTimeSeconds),
    scroll_depth_percent: Math.round(scrollDepthPercent),
    user_type: userType,
  });
}

/**
 * Track search queries
 */
export function trackSearch(searchTerm: string): void {
  event('search', {
    event_category: 'engagement',
    search_term: searchTerm,
  });
}

/**
 * Track social sharing with article details
 */
export function trackSocialShare(
  platform: 'facebook' | 'twitter' | 'zalo' | 'copy' | string,
  contentType: 'news' | 'procedure' | 'announcement' | string,
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
  });
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
    article_id: articleId,
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
  contentType?: 'news' | 'procedure'
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
