import { useQuery } from '@tanstack/react-query';
import { compositeApi } from '@/lib/api';
import { queryKeys } from '@/lib/react-query';
import type { HomepageParams, ArchiveParams } from '@/types/api';

export function useHomepage(params?: HomepageParams) {
  return useQuery({
    queryKey: queryKeys.composite.homepage(params),
    queryFn: () => compositeApi.getHomepage(params),
    staleTime: 2 * 60 * 1000,
  });
}

export function useArchive(params?: ArchiveParams) {
  return useQuery({
    queryKey: queryKeys.composite.archive(params),
    queryFn: () => compositeApi.getArchive(params),
    staleTime: 5 * 60 * 1000,
  });
}

export function useSitemap() {
  return useQuery({
    queryKey: queryKeys.composite.sitemap(),
    queryFn: () => compositeApi.getSitemap(),
    staleTime: 30 * 60 * 1000,
  });
}

export function useStatistics() {
  return useQuery({
    queryKey: queryKeys.composite.statistics(),
    queryFn: () => compositeApi.getStatistics(),
    staleTime: 5 * 60 * 1000,
  });
}
