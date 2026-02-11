import { useQuery } from '@tanstack/react-query';
import { bannersApi } from '@/lib/api';
import { queryKeys } from '@/lib/react-query';
import {
  getMockBannersByPosition,
  getMockActiveBanners,
  getMockBannerByCode,
} from '@/lib/mock-data/banners';

export function useBannerList(position?: string) {
  return useQuery({
    queryKey: queryKeys.banners.list(position),
    queryFn: async () => {
      try {
        const result = await bannersApi.list(position);
        if (result.items.length > 0) return result;
      } catch {
        console.warn('[Banners] API không khả dụng, sử dụng mock data');
      }
      return getMockBannersByPosition(position);
    },
    staleTime: 5 * 60 * 1000,
  });
}

export function useActiveBanners(position?: string) {
  return useQuery({
    queryKey: queryKeys.banners.active(position),
    queryFn: async () => {
      try {
        const result = await bannersApi.getActive(position);
        if (result.length > 0) return result;
      } catch {
        console.warn('[Banners] API active không khả dụng, sử dụng mock data');
      }
      return getMockActiveBanners(position);
    },
    staleTime: 5 * 60 * 1000,
  });
}

export function useBannerByCode(code: string) {
  return useQuery({
    queryKey: queryKeys.banners.byCode(code),
    queryFn: async () => {
      try {
        return await bannersApi.getByCode(code);
      } catch {
        console.warn(`[Banners] API by-code/${code} không khả dụng, sử dụng mock data`);
        const mock = getMockBannerByCode(code);
        if (!mock) throw new Error(`Banner with code "${code}" not found`);
        return mock;
      }
    },
    enabled: !!code,
    staleTime: 5 * 60 * 1000,
  });
}
