import { apiClient } from '@/lib/axios';
import type {
  OrganizationResponse,
  ArticleResponse,
  ArticleDetailResponse,
  ArticleListResponse,
  ArticleListParams,
  ArticleSearchParams,
  CategoryResponse,
  CategoryListResponse,
  CategoryTreeResponse,
  CategoryPageResponse,
  BannerResponse,
  BannerListResponse,
  LinkResponse,
  LinkListResponse,
  TagListResponse,
  PageListResponse,
  PageDetailResponse,
  DocSectionTreeResponse,
  DocSectionDetailResponse,
  DocumentDetailResponse,
  DataSheetDetailResponse,
  GlobalSearchResponse,
  CreateCommentRequest,
  ReactionRequest,
  SubmitFormRequest,
  FeedbackFormSummary,
  FeedbackFormDetail,
  HomepageResponse,
  HomepageParams,
  ArchiveResponse,
  ArchiveParams,
  SitemapResponse,
  StatisticsResponse,
  PaginationParams,
} from '@/types/api';

// Organization code from environment
const ORG_CODE = process.env.NEXT_PUBLIC_ORG_CODE;
const PREFIX = `/api/v1/${ORG_CODE}`;

// Helper: extract response data from axios
function getData<T>(response: { data: T }): T {
  return response.data;
}

// --- Organization ---
export const organizationApi = {
  get: () =>
    apiClient.get<OrganizationResponse>(`${PREFIX}`).then(getData),
};

// --- Articles ---
export const articlesApi = {
  list: (params?: ArticleListParams) =>
    apiClient.get<ArticleListResponse>(`${PREFIX}/articles`, { params }).then(getData),

  getBySlug: (slug: string) =>
    apiClient.get<ArticleDetailResponse>(`${PREFIX}/articles/${slug}`).then(getData),

  getLatest: (limit?: number) =>
    apiClient.get<ArticleResponse[]>(`${PREFIX}/articles/latest`, { params: { limit } }).then(getData),

  getPopular: (limit?: number) =>
    apiClient.get<ArticleResponse[]>(`${PREFIX}/articles/popular`, { params: { limit } }).then(getData),

  getFeatured: (limit?: number) =>
    apiClient.get<ArticleResponse[]>(`${PREFIX}/articles/featured`, { params: { limit } }).then(getData),

  search: (params: ArticleSearchParams) =>
    apiClient.get<ArticleListResponse>(`${PREFIX}/articles/search`, { params }).then(getData),

  getRelated: (slug: string, limit?: number) =>
    apiClient.get<ArticleResponse[]>(`${PREFIX}/articles/${slug}/related`, { params: { limit } }).then(getData),
};

// --- Categories ---
export const categoriesApi = {
  list: () =>
    apiClient.get<CategoryListResponse>(`${PREFIX}/categories`).then(getData),

  getTree: (depth?: number) =>
    apiClient.get<CategoryTreeResponse>(`${PREFIX}/categories/tree`, { params: depth ? { depth } : undefined }).then(getData),

  getBySlug: (slug: string) =>
    apiClient.get<CategoryResponse>(`${PREFIX}/categories/${slug}`).then(getData),

  getArticles: (slug: string, params?: PaginationParams) =>
    apiClient.get<ArticleListResponse>(`${PREFIX}/categories/${slug}/articles`, { params }).then(getData),

  getPage: (slug: string, params?: PaginationParams) =>
    apiClient.get<CategoryPageResponse>(`${PREFIX}/categories/${slug}/page`, { params }).then(getData),
};

// --- Banners ---
export const bannersApi = {
  list: (position?: string) =>
    apiClient.get<BannerListResponse>(`${PREFIX}/banners`, { params: position ? { position } : undefined }).then(getData),

  getActive: (position?: string) =>
    apiClient.get<BannerResponse[]>(`${PREFIX}/banners/active`, { params: { position: position || 'homepage' } }).then(getData),

  getByCode: (code: string) =>
    apiClient.get<BannerResponse>(`${PREFIX}/banners/by-code/${code}`).then(getData),
};

// --- Links ---
export const linksApi = {
  list: (category?: string) =>
    apiClient.get<LinkListResponse>(`${PREFIX}/links`, { params: category ? { category } : undefined }).then(getData),

  getByCategory: (category: string) =>
    apiClient.get<LinkResponse[]>(`${PREFIX}/links/category/${category}`).then(getData),
};

// --- Tags ---
export const tagsApi = {
  list: (limit?: number) =>
    apiClient.get<TagListResponse>(`${PREFIX}/tags`, { params: limit ? { limit } : undefined }).then(getData),

  getArticles: (tag: string, params?: PaginationParams) =>
    apiClient.get<ArticleListResponse>(`${PREFIX}/tags/${tag}/articles`, { params }).then(getData),
};

// --- Pages ---
export const pagesApi = {
  list: () =>
    apiClient.get<PageListResponse>(`${PREFIX}/pages`).then(getData),

  getBySlug: (slug: string) =>
    apiClient.get<PageDetailResponse>(`${PREFIX}/pages/${slug}`).then(getData),
};

// --- Documents ---
export const documentsApi = {
  getSections: (doc_type?: string) =>
    apiClient.get<DocSectionTreeResponse>(`${PREFIX}/documents/sections`, { params: doc_type ? { doc_type } : undefined }).then(getData),

  getSectionBySlug: (slug: string) =>
    apiClient.get<DocSectionDetailResponse>(`${PREFIX}/documents/sections/${slug}`).then(getData),

  getBySlug: (slug: string) =>
    apiClient.get<DocumentDetailResponse>(`${PREFIX}/documents/${slug}`).then(getData),

  getDataSheet: (slug: string) =>
    apiClient.get<DataSheetDetailResponse>(`${PREFIX}/documents/data-sheets/${slug}`).then(getData),
};

// --- Search ---
export const searchApi = {
  global: (params: { q: string; page?: number; page_size?: number }) =>
    apiClient.get<GlobalSearchResponse>(`${PREFIX}/search`, { params }).then(getData),
};

// --- Feedback ---
export const feedbackApi = {
  getComments: (articleSlug: string, params?: PaginationParams) =>
    apiClient.get(`${PREFIX}/feedback/articles/${articleSlug}/comments`, { params }).then(getData),

  createComment: (articleSlug: string, data: CreateCommentRequest) =>
    apiClient.post(`${PREFIX}/feedback/articles/${articleSlug}/comments`, data).then(getData),

  addReaction: (commentId: string, data: ReactionRequest) =>
    apiClient.post(`${PREFIX}/feedback/comments/${commentId}/reactions`, data).then(getData),

  listForms: () =>
    apiClient.get<FeedbackFormSummary[]>(`${PREFIX}/feedback/forms`).then(getData),

  getForm: (formSlug: string) =>
    apiClient.get<FeedbackFormDetail>(`${PREFIX}/feedback/forms/${formSlug}`).then(getData),

  submitForm: (formId: string, data: SubmitFormRequest) =>
    apiClient.post(`/api/feedback/forms/${formId}/submit`, data).then(getData),
};

// --- Composite ---
export const compositeApi = {
  getHomepage: (params?: HomepageParams) =>
    apiClient.get<HomepageResponse>(`${PREFIX}/homepage`, { params }).then(getData),

  getCategoryPage: (slug: string, params?: PaginationParams) =>
    apiClient.get<CategoryPageResponse>(`${PREFIX}/categories/${slug}/page`, { params }).then(getData),

  getArchive: (params?: ArchiveParams) =>
    apiClient.get<ArchiveResponse>(`${PREFIX}/archive`, { params }).then(getData),

  getSitemap: () =>
    apiClient.get<SitemapResponse>(`${PREFIX}/sitemap`).then(getData),

  getStatistics: () =>
    apiClient.get<StatisticsResponse>(`${PREFIX}/statistics`).then(getData),
};

// --- Combined API export ---
export const cmsApi = {
  organization: organizationApi,
  articles: articlesApi,
  categories: categoriesApi,
  banners: bannersApi,
  links: linksApi,
  tags: tagsApi,
  pages: pagesApi,
  documents: documentsApi,
  search: searchApi,
  feedback: feedbackApi,
  composite: compositeApi,
};

export default cmsApi;
