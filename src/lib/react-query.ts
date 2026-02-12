import { QueryClient } from '@tanstack/react-query';

// Create a singleton query client
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute
        gcTime: 5 * 60 * 1000, // 5 minutes
        retry: 1,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
      },
      mutations: {
        retry: 0,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
  if (typeof window === 'undefined') {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

// Query keys factory for consistent key management
export const queryKeys = {
  // Organization
  organization: {
    all: ['organization'] as const,
    detail: () => [...queryKeys.organization.all, 'detail'] as const,
  },

  // Articles
  articles: {
    all: ['articles'] as const,
    lists: () => [...queryKeys.articles.all, 'list'] as const,
    list: (filters: object) => [...queryKeys.articles.lists(), filters] as const,
    details: () => [...queryKeys.articles.all, 'detail'] as const,
    detail: (slug: string) => [...queryKeys.articles.details(), slug] as const,
    latest: (limit?: number) => [...queryKeys.articles.all, 'latest', limit] as const,
    popular: (limit?: number) => [...queryKeys.articles.all, 'popular', limit] as const,
    featured: (limit?: number) => [...queryKeys.articles.all, 'featured', limit] as const,
    search: (params: object) => [...queryKeys.articles.all, 'search', params] as const,
    related: (slug: string, limit?: number) => [...queryKeys.articles.all, 'related', slug, limit] as const,
  },

  // Categories
  categories: {
    all: ['categories'] as const,
    list: () => [...queryKeys.categories.all, 'list'] as const,
    tree: (depth?: number) => [...queryKeys.categories.all, 'tree', depth] as const,
    detail: (slug: string) => [...queryKeys.categories.all, 'detail', slug] as const,
    articles: (slug: string, params?: object) => [...queryKeys.categories.all, 'articles', slug, params] as const,
    page: (slug: string, params?: object) => [...queryKeys.categories.all, 'page', slug, params] as const,
  },

  // Banners
  banners: {
    all: ['banners'] as const,
    list: (position?: string) => [...queryKeys.banners.all, 'list', position] as const,
    active: (position?: string) => [...queryKeys.banners.all, 'active', position] as const,
    byCode: (code: string) => [...queryKeys.banners.all, 'code', code] as const,
  },

  // Links
  links: {
    all: ['links'] as const,
    list: (category?: string) => [...queryKeys.links.all, 'list', category] as const,
    byCategory: (category: string) => [...queryKeys.links.all, 'category', category] as const,
  },

  // Tags
  tags: {
    all: ['tags'] as const,
    list: (limit?: number) => [...queryKeys.tags.all, 'list', limit] as const,
    articles: (tag: string, params?: object) => [...queryKeys.tags.all, 'articles', tag, params] as const,
  },

  // Pages
  pages: {
    all: ['pages'] as const,
    list: () => [...queryKeys.pages.all, 'list'] as const,
    detail: (slug: string) => [...queryKeys.pages.all, 'detail', slug] as const,
  },

  // Documents
  documents: {
    all: ['documents'] as const,
    sections: (doc_type?: string) => [...queryKeys.documents.all, 'sections', doc_type] as const,
    sectionDetail: (slug: string) => [...queryKeys.documents.all, 'section', slug] as const,
    detail: (slug: string) => [...queryKeys.documents.all, 'detail', slug] as const,
    fullTree: (doc_type?: string) => [...queryKeys.documents.all, 'full-tree', doc_type] as const,
  },

  // Search
  search: {
    all: ['search'] as const,
    global: (params: object) => [...queryKeys.search.all, 'global', params] as const,
  },

  // Feedback
  feedback: {
    all: ['feedback'] as const,
    comments: (articleSlug: string, params?: object) => [...queryKeys.feedback.all, 'comments', articleSlug, params] as const,
    forms: () => [...queryKeys.feedback.all, 'forms'] as const,
    form: (formSlug: string) => [...queryKeys.feedback.all, 'form', formSlug] as const,
  },

  // Composite
  composite: {
    homepage: (params?: object) => ['homepage', params] as const,
    categoryPage: (slug: string, params?: object) => ['category-page', slug, params] as const,
    archive: (params?: object) => ['archive', params] as const,
    sitemap: () => ['sitemap'] as const,
    statistics: () => ['statistics'] as const,
  },
};
