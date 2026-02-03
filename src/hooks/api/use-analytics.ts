import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/axios';
import { queryKeys } from '@/lib/react-query';
import type { AnalyticsStats } from '@/types/api';

// Fetch analytics stats
export function useAnalyticsStats() {
  return useQuery({
    queryKey: queryKeys.analytics.stats(),
    queryFn: () => api.get<AnalyticsStats>('/analytics/stats'),
    staleTime: 30 * 1000, // 30 seconds - stats should be relatively fresh
    refetchInterval: 60 * 1000, // Refetch every minute
  });
}
