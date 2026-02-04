// Analytics module exports

export {
  GA_MEASUREMENT_ID,
  isAnalyticsEnabled,
  pageview,
  event,
  getUserType,
  markUserAsVisited,
  getFirstVisitDate,
  setUserProperties,
  initUserTracking,
} from './gtag';

export type { UserType } from './gtag';

export {
  trackContactFormSubmit,
  trackDocumentDownload,
  trackNewsView,
  trackProcedureView,
  trackArticleReadTime,
  trackSearch,
  trackSocialShare,
  trackOutboundLink,
  trackButtonClick,
  trackUserEngagement,
  trackScrollDepth,
  trackSessionStart,
  trackSummaryButtonClick,
} from './events';
