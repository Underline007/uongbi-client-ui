import { useQuery } from '@tanstack/react-query';
import { bannersApi } from '@/lib/api';
import { queryKeys } from '@/lib/react-query';

export function useBannerList(position?: string) {
  return useQuery({
    queryKey: queryKeys.banners.list(position),
    queryFn: () => bannersApi.list(position),
    staleTime: 5 * 60 * 1000,
  });
}

export function useActiveBanners(position?: string) {
  return useQuery({
    queryKey: queryKeys.banners.active(position),
    queryFn: () => bannersApi.getActive(position),
    staleTime: 5 * 60 * 1000,
  });
}

export function useBannerByCode(code: string) {
  return useQuery({
    queryKey: queryKeys.banners.byCode(code),
    queryFn: () => bannersApi.getByCode(code),
    enabled: !!code,
    staleTime: 5 * 60 * 1000,
  });
}
