import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/axios';
import { queryKeys } from '@/lib/react-query';
import type { PlanningsData, PlanningItem } from '@/types/api';

interface PlanningsListParams {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
}

// Fetch plannings list
export function usePlanningsList(params: PlanningsListParams = {}) {
  return useQuery({
    queryKey: queryKeys.plannings.list(params),
    queryFn: () => api.get<PlanningsData>('/plannings', params),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}

// Fetch featured plannings
export function useFeaturedPlannings() {
  return useQuery({
    queryKey: queryKeys.plannings.featured(),
    queryFn: () => api.get<{ featured: PlanningItem; sidebar: PlanningItem }>('/plannings?type=featured'),
    staleTime: 10 * 60 * 1000,
  });
}
