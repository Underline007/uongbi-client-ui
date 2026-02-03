// Custom GA4 event tracking functions

import { event } from './gtag';

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
  event('view_item', {
    event_category: 'content',
    content_type: 'news',
    item_id: newsId,
    item_name: newsTitle,
  });
}

/**
 * Track procedure/administrative process view
 */
export function trackProcedureView(
  procedureId: string | number,
  procedureTitle: string
): void {
  event('view_item', {
    event_category: 'content',
    content_type: 'procedure',
    item_id: procedureId,
    item_name: procedureTitle,
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
 * Track social sharing
 */
export function trackSocialShare(
  platform: 'facebook' | 'twitter' | 'zalo' | 'email' | string,
  contentType?: string,
  itemId?: string | number
): void {
  event('share', {
    event_category: 'engagement',
    method: platform,
    content_type: contentType,
    item_id: itemId,
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
