import { useQuery } from '@tanstack/react-query';
import { tagsApi } from '@/lib/api';
import { queryKeys } from '@/lib/react-query';
import type { PaginationParams } from '@/types/api';

export function useTagList(limit?: number) {
  return useQuery({
    queryKey: queryKeys.tags.list(limit),
    queryFn: () => tagsApi.list(limit),
    staleTime: 10 * 60 * 1000,
  });
}

export function useTagArticles(tag: string, params?: PaginationParams) {
  return useQuery({
    queryKey: queryKeys.tags.articles(tag, params),
    queryFn: () => tagsApi.getArticles(tag, params),
    enabled: !!tag,
    staleTime: 2 * 60 * 1000,
  });
}
