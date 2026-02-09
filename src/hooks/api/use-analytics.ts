// DEPRECATED: Use useStatistics() from use-homepage.ts for new API
// This backward-compatible hook still works with old AnalyticsStats shape
import { useQuery } from '@tanstack/react-query';
import { compositeApi } from '@/lib/api';
import { queryKeys } from '@/lib/react-query';

export function useAnalyticsStats() {
  return useQuery({
    queryKey: queryKeys.composite.statistics(),
    queryFn: () => compositeApi.getStatistics(),
    staleTime: 30 * 1000,
    refetchInterval: 60 * 1000,
  });
}
