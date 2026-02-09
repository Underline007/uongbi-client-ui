import { useQuery } from '@tanstack/react-query';
import { linksApi } from '@/lib/api';
import { queryKeys } from '@/lib/react-query';

export function useLinkList(category?: string) {
  return useQuery({
    queryKey: queryKeys.links.list(category),
    queryFn: () => linksApi.list(category),
    staleTime: 10 * 60 * 1000,
  });
}

export function useLinksByCategory(category: string) {
  return useQuery({
    queryKey: queryKeys.links.byCategory(category),
    queryFn: () => linksApi.getByCategory(category),
    enabled: !!category,
    staleTime: 10 * 60 * 1000,
  });
}
