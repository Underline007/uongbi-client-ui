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
  throttle,
  debounce,
} from './gtag';

export type { UserType } from './gtag';

export {
  trackContactFormSubmit,
  trackDocumentDownload,
  trackNewsView,
  trackProcedureView,
  trackAnnouncementView,
  trackDocumentView,
  trackPlanningView,
  trackArticleReadTime,
  trackSearch,
  trackSocialShare,
  trackOutboundLink,
  trackButtonClick,
  trackUserEngagement,
  trackScrollDepth,
  trackSessionStart,
  trackSummaryButtonClick,
  trackWebVitals,
  trackError,
} from './events';

export type { ContentType } from './events';
