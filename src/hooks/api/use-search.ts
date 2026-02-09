import { useQuery } from '@tanstack/react-query';
import { searchApi } from '@/lib/api';
import { queryKeys } from '@/lib/react-query';

interface SearchParams {
  q: string;
  page?: number;
  page_size?: number;
}

export function useGlobalSearch(params: SearchParams) {
  return useQuery({
    queryKey: queryKeys.search.global(params),
    queryFn: () => searchApi.global(params),
    enabled: params.q.length >= 2,
    staleTime: 60 * 1000,
  });
}
