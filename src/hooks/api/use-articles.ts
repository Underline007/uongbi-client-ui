import { useQuery, useQueryClient } from '@tanstack/react-query';
import { articlesApi } from '@/lib/api';
import { queryKeys } from '@/lib/react-query';
import type {
  ArticleListParams,
  ArticleSearchParams,
} from '@/types/api';

export function useArticlesList(params?: ArticleListParams) {
  return useQuery({
    queryKey: queryKeys.articles.list(params || {}),
    queryFn: () => articlesApi.list(params),
    staleTime: 2 * 60 * 1000,
  });
}

export function useArticleDetail(slug: string) {
  return useQuery({
    queryKey: queryKeys.articles.detail(slug),
    queryFn: () => articlesApi.getBySlug(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  });
}

export function useLatestArticles(limit?: number) {
  return useQuery({
    queryKey: queryKeys.articles.latest(limit),
    queryFn: () => articlesApi.getLatest(limit),
    staleTime: 2 * 60 * 1000,
  });
}

export function usePopularArticles(limit?: number) {
  return useQuery({
    queryKey: queryKeys.articles.popular(limit),
    queryFn: () => articlesApi.getPopular(limit),
    staleTime: 5 * 60 * 1000,
  });
}

export function useFeaturedArticles(limit?: number) {
  return useQuery({
    queryKey: queryKeys.articles.featured(limit),
    queryFn: () => articlesApi.getFeatured(limit),
    staleTime: 5 * 60 * 1000,
  });
}

export function useArticlesSearch(params: ArticleSearchParams) {
  return useQuery({
    queryKey: queryKeys.articles.search(params),
    queryFn: () => articlesApi.search(params),
    enabled: params.q.length >= 2,
    staleTime: 60 * 1000,
  });
}

export function useRelatedArticles(slug: string, limit?: number) {
  return useQuery({
    queryKey: queryKeys.articles.related(slug, limit),
    queryFn: () => articlesApi.getRelated(slug, limit),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  });
}

export function usePrefetchArticleDetail() {
  const queryClient = useQueryClient();

  return (slug: string) => {
    queryClient.prefetchQuery({
      queryKey: queryKeys.articles.detail(slug),
      queryFn: () => articlesApi.getBySlug(slug),
      staleTime: 5 * 60 * 1000,
    });
  };
}
