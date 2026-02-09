import { useQuery } from '@tanstack/react-query';
import { pagesApi } from '@/lib/api';
import { queryKeys } from '@/lib/react-query';

export function usePageList() {
  return useQuery({
    queryKey: queryKeys.pages.list(),
    queryFn: () => pagesApi.list(),
    staleTime: 10 * 60 * 1000,
  });
}

export function usePageDetail(slug: string) {
  return useQuery({
    queryKey: queryKeys.pages.detail(slug),
    queryFn: () => pagesApi.getBySlug(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  });
}
