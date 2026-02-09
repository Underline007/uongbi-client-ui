import { useQuery } from '@tanstack/react-query';
import { categoriesApi } from '@/lib/api';
import { queryKeys } from '@/lib/react-query';
import type { PaginationParams } from '@/types/api';

export function useCategoryList() {
  return useQuery({
    queryKey: queryKeys.categories.list(),
    queryFn: () => categoriesApi.list(),
    staleTime: 10 * 60 * 1000,
  });
}

export function useCategoryTree(depth?: number) {
  return useQuery({
    queryKey: queryKeys.categories.tree(depth),
    queryFn: () => categoriesApi.getTree(depth),
    staleTime: 10 * 60 * 1000,
  });
}

export function useCategoryDetail(slug: string) {
  return useQuery({
    queryKey: queryKeys.categories.detail(slug),
    queryFn: () => categoriesApi.getBySlug(slug),
    enabled: !!slug,
    staleTime: 10 * 60 * 1000,
  });
}

export function useCategoryArticles(slug: string, params?: PaginationParams) {
  return useQuery({
    queryKey: queryKeys.categories.articles(slug, params),
    queryFn: () => categoriesApi.getArticles(slug, params),
    enabled: !!slug,
    staleTime: 2 * 60 * 1000,
  });
}

export function useCategoryPage(slug: string, params?: PaginationParams) {
  return useQuery({
    queryKey: queryKeys.categories.page(slug, params),
    queryFn: () => categoriesApi.getPage(slug, params),
    enabled: !!slug,
    staleTime: 2 * 60 * 1000,
  });
}
