// ============================================
// CMS Public API Types
// Generated from OpenAPI 3.1.0 spec
// ============================================

// --- Pagination ---

export interface PaginationMeta {
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}

// --- Organization ---

export interface OrganizationResponse {
  id: string;
  code: string;
  name: string;
  description?: string | null;
  logo_url?: string | null;
  address?: string | null;
  phone?: string | null;
  email?: string | null;
  website?: string | null;
}

// --- Articles ---

export interface ArticleResponse {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  featured_image?: string | null;
  author_name: string;
  category_name?: string | null;
  category_slug?: string | null;
  tags: string[];
  views: number;
  published_at: string;
}

export interface ArticleDetailResponse {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  content: string;
  featured_image?: string | null;
  author_name: string;
  category_name?: string | null;
  category_slug?: string | null;
  tags: string[];
  views: number;
  published_at: string;
}

export interface ArticleListResponse {
  success: boolean;
  data: ArticleResponse[];
  meta: PaginationMeta;
}

// --- Categories ---

export interface CategoryResponse {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  article_count: number;
}

export interface CategoryTreeNode {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  article_count: number;
  children: CategoryTreeNode[];
}

export interface CategoryListResponse {
  items: CategoryTreeNode[];
}

export interface CategoryTreeResponse {
  items: CategoryTreeNode[];
}

export interface CategoryPageResponse {
  category: CategoryResponse;
  articles: ArticleResponse[];
  total_articles: number;
  page: number;
  page_size: number;
  total_pages: number;
  subcategories?: CategoryResponse[];
  parent_category?: CategoryResponse | null;
}

export interface CategoryArticlesSection {
  category: CategoryResponse;
  articles: ArticleResponse[];
}

export interface CategoryStats {
  id: string;
  name: string;
  slug: string;
  article_count: number;
}

// --- Banners ---

export interface BannerItemResponse {
  image_url: string;
  title?: string | null;
  link_url?: string | null;
  link_target: string;
  display_order: number;
}

export interface BannerResponse {
  id: string;
  title: string;
  image_url: string;
  subtitle?: string | null;
  link_url?: string | null;
  link_target: string;
  position: string;
  code?: string | null;
  description?: string | null;
  display_mode: string;
  layout_width?: number | null;
  layout_height?: number | null;
  items: BannerItemResponse[];
}

export interface BannerListResponse {
  items: BannerResponse[];
  total: number;
}

// --- Links ---

export interface LinkResponse {
  id: string;
  title: string;
  url: string;
  description?: string | null;
  logo_url?: string | null;
  category: string;
  target: string;
}

export interface LinkListResponse {
  items: LinkResponse[];
  total: number;
}

// --- Tags ---

export interface TagResponse {
  name: string;
  count: number;
}

export interface TagListResponse {
  items: TagResponse[];
  total: number;
}

// --- Pages ---

export interface PageSummaryResponse {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  featured_image?: string | null;
  template: string;
}

export interface PageDetailResponse {
  id: string;
  title: string;
  slug: string;
  content: Record<string, unknown>;
  excerpt?: string | null;
  featured_image?: string | null;
  template: string;
}

export interface PageListResponse {
  items: PageSummaryResponse[];
  total: number;
}

// --- Documents ---

export interface DocumentSummaryResponse {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  thumbnails: string[];
  doc_type: string;
  order: number;
  views: number;
  published_at?: string | null;
}

export interface DocumentDetailResponse {
  id: string;
  section_slug: string;
  section_name: string;
  doc_type: string;
  title: string;
  slug: string;
  content: Record<string, unknown>;
  excerpt?: string | null;
  thumbnails: string[];
  attachments: string[];
  order: number;
  views: number;
  published_at?: string | null;
}

export interface DataSheetSummaryResponse {
  id: string;
  title: string;
  slug: string;
  thumbnails: string[];
  doc_type: string;
  order: number;
  views: number;
  published_at?: string | null;
}

export interface DataSheetDetailResponse {
  id: string;
  section_slug: string;
  section_name: string;
  doc_type: string;
  title: string;
  slug: string;
  custom_fields: Record<string, unknown>[];
  thumbnails: string[];
  order: number;
  views: number;
  published_at?: string | null;
}

export interface DocSectionTreeNodeResponse {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  icon?: string | null;
  doc_type: string;
  order: number;
  published_document_count: number;
  children: DocSectionTreeNodeResponse[];
}

export interface DocSectionDetailResponse {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  icon?: string | null;
  doc_type: string;
  order: number;
  published_document_count: number;
  documents: DocumentSummaryResponse[];
  data_sheets: DataSheetSummaryResponse[];
  breadcrumb: Record<string, unknown>[];
}

export interface DocSectionTreeResponse {
  items: DocSectionTreeNodeResponse[];
  total: number;
}

// --- Menus ---

export interface MenuItemTreeNode {
  id: string;
  title: string;
  url: string;
  icon?: string | null;
  target: string;
  children: MenuItemTreeNode[];
}

export interface MenuWithItemsResponse {
  id: string;
  name: string;
  slug: string;
  position: string;
  items: MenuItemTreeNode[];
}

// --- Search ---

export interface GlobalSearchResponse {
  query: string;
  articles: ArticleListResponse;
  categories?: CategoryResponse[];
  total_results: number;
}

// --- Feedback ---

export interface CreateCommentRequest {
  author_name: string;
  content: string;
  author_email?: string | null;
  parent_id?: string | null;
}

export interface ReactionRequest {
  reaction_type: 'like' | 'dislike';
}

export interface SubmitFormRequest {
  data: Record<string, unknown>;
  submitter_name?: string | null;
  submitter_email?: string | null;
  submitter_phone?: string | null;
  is_anonymous?: boolean;
}

// --- Feedback Forms ---

export interface FeedbackFormFieldValidation {
  min_length?: number | null;
  max_length?: number | null;
  min?: number | null;
  max?: number | null;
  pattern?: string | null;
  options?: string[] | null;
  max_file_size?: number | null;
  allowed_file_types?: string[] | null;
}

export interface FeedbackFormField {
  field_id: string;
  type: 'text' | 'textarea' | 'email' | 'phone' | 'select' | 'radio' | 'checkbox' | 'rating' | 'number' | 'date';
  label: string;
  placeholder?: string | null;
  required: boolean;
  help_text?: string | null;
  default_value?: string | null;
  validation: FeedbackFormFieldValidation;
  conditional?: unknown | null;
  order: number;
}

export interface FeedbackFormSettings {
  require_captcha: boolean;
  allow_anonymous: boolean;
  success_message?: string | null;
  notification_emails?: string[] | null;
  max_submissions?: number | null;
  close_date?: string | null;
}

export interface FeedbackFormSummary {
  id: string;
  title: string;
  slug: string;
  description?: string | null;
  status: string;
  fields: FeedbackFormField[];
  settings: FeedbackFormSettings;
  submission_count: number;
  created_at: string;
  updated_at: string;
}

export interface FeedbackFormDetail {
  id: string;
  title: string;
  slug: string;
  description?: string | null;
  status: string;
  fields: FeedbackFormField[];
  settings: FeedbackFormSettings;
  submission_count: number;
  created_at: string;
  updated_at: string;
}

// --- Composite: Homepage ---

export interface HomepageResponse {
  organization: OrganizationResponse;
  featured_articles?: ArticleResponse[];
  latest_articles?: ArticleResponse[];
  popular_articles?: ArticleResponse[];
  articles_by_category?: CategoryArticlesSection[];
  banners?: BannerResponse[];
  header_menu?: MenuWithItemsResponse | null;
  footer_menu?: MenuWithItemsResponse | null;
}

// --- Composite: Archive ---

export interface ArchiveMonthStats {
  year: number;
  month: number;
  count: number;
}

export interface ArchiveResponse {
  stats: ArchiveMonthStats[];
  articles: ArticleResponse[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
  selected_year?: number | null;
  selected_month?: number | null;
}

// --- Composite: Sitemap ---

export interface SitemapArticle {
  slug: string;
  published_at: string;
  category_slug?: string | null;
}

export interface SitemapResponse {
  articles: SitemapArticle[];
  categories: string[];
  total_articles: number;
}

// --- Composite: Statistics ---

export interface StatisticsResponse {
  total_articles: number;
  total_categories: number;
  total_tags: number;
  total_banners: number;
  total_links: number;
  articles_by_category?: CategoryStats[];
  latest_article_date?: string | null;
}

// --- API Query Params ---

export interface ArticleListParams {
  page?: number;
  page_size?: number;
  category?: string;
  tag?: string;
}

export interface ArticleSearchParams {
  q: string;
  page?: number;
  page_size?: number;
}

export interface HomepageParams {
  featured_limit?: number;
  latest_limit?: number;
  popular_limit?: number;
  articles_per_category?: number;
}

export interface ArchiveParams {
  year?: number;
  month?: number;
  page?: number;
  page_size?: number;
}

export interface PaginationParams {
  page?: number;
  page_size?: number;
}

// ============================================
// Legacy Types (for mock data & existing components)
// TODO: Remove after components are updated to use new API types
// ============================================

export interface NewsItem {
  id: string;
  title: string;
  slug?: string;
  description?: string;
  image: string;
  category?: { id: string; name: string; slug: string };
  author?: string;
  views?: number;
  featured?: boolean;
  date?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface NewsDetail extends NewsItem {
  content: string;
  images?: string[];
  tags?: string[];
  attachments?: Attachment[];
  relatedNews?: NewsItem[];
}

export interface FeaturedNews {
  main: { id: string; title: string; description: string; image: string; createdAt: string };
  sidebar: { id: string; title: string; image: string }[];
}

export interface HighlightItem {
  id: string;
  title: string;
  date: string;
  featured?: boolean;
}

export interface HighlightColumn {
  column: number;
  items: HighlightItem[];
}

export interface NewsCategory {
  id: string;
  name: string;
  slug: string;
  featured: { id: string; title: string; image: string };
  items: { id: string; title: string }[];
}

export interface PartyBuildingColumn {
  column: number;
  featured: { id: string; title: string; image: string; description: string };
  secondary?: { id: string; title: string; image: string } | null;
}

export interface StaffWorkData {
  main: { id: string; title: string; image: string; date: string }[];
  sidebar: { id: string; title: string; date: string; time: string }[];
}

export interface PartyActivityData {
  featured: { id: string; title: string; image: string; description: string; date: string };
  grid: { id: string; title: string; image: string; date: string }[];
}

export interface OrganizationMember {
  id: string;
  name: string;
  avatar?: string | null;
  position: string;
  position2?: string | null;
  phone?: string | null;
  email?: string | null;
  order: number;
}

export interface Procedure {
  id: string;
  code: string;
  title: string;
  category: string;
  processingTime: string;
  fee: string;
  level: number;
  status: 'active' | 'inactive';
  createdAt: string;
}

export interface ProcedureDetail extends Procedure {
  legalBasis: string[];
  requiredDocuments: { name: string; template?: string | null; required: boolean }[];
  process: { step: number; title: string; description: string; duration: string }[];
  submissionMethods: { type: 'online' | 'offline'; url?: string; address?: string; description: string }[];
  contact: { department: string; phone: string; email: string };
  relatedProcedures: { id: string; title: string }[];
  updatedAt: string;
}

export interface CitizenService {
  id: string;
  icon: string;
  label: string;
  href: string;
  order: number;
}

export interface Announcement {
  id: string;
  title: string;
  excerpt?: string;
  pinned: boolean;
  important: boolean;
  createdAt: string;
}

export interface AnnouncementDetail extends Announcement {
  content: string;
  attachments: Attachment[];
  updatedAt: string;
}

export interface PlanningCategory {
  id: string;
  name: string;
  count: number;
}

export interface PlanningItem {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
  date: string;
}

export interface PlanningsData {
  categories: PlanningCategory[];
  items: PlanningItem[];
}

export interface AnalyticsStats {
  online: number;
  today: number;
  yesterday: number;
  thisWeek: number;
  thisMonth: number;
  total: number;
  lastUpdated: string;
}

export interface ContactInfo {
  organizationName: string;
  fullName: string;
  address: string;
  phone: string;
  fax?: string;
  email: string;
  hotline: string;
  website: string;
  mapUrl?: string;
  coordinates?: { lat: number; lng: number };
  socialMedia?: { facebook?: string; zalo?: string };
}

export interface SiteInfo {
  siteName: string;
  shortName: string;
  tagline: string;
  logo: string;
  favicon: string;
  headerBackground: string;
  footerBackground: string;
  coatOfArms: string;
  copyright: string;
  country: string;
  province: string;
  district: string;
}

export interface Comment {
  id: string;
  articleId: string;
  name: string;
  content: string;
  createdAt: string;
}

export interface Attachment {
  id: string;
  name: string;
  url: string;
  size: number;
  type: string;
}

export interface ApiResponse<T> {
  success: true;
  data: T;
  meta?: ApiMeta;
}

export interface ApiError {
  success: false;
  error: { code: string; message: string };
}

export interface ApiMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
