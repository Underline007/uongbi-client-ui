import { useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/axios';
import { queryKeys } from '@/lib/react-query';
import type { Procedure, ProcedureDetail } from '@/types/api';

interface ProcedureListParams {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
}

// Fetch procedures list
export function useProceduresList(params: ProcedureListParams = {}) {
  return useQuery({
    queryKey: queryKeys.procedures.list(params),
    queryFn: () => api.get<Procedure[]>('/procedures', params),
    staleTime: 10 * 60 * 1000, // 10 minutes - procedures don't change often
  });
}

// Fetch single procedure detail
export function useProcedureDetail(id: string) {
  return useQuery({
    queryKey: queryKeys.procedures.detail(id),
    queryFn: () => api.get<ProcedureDetail>(`/procedures/${id}`),
    enabled: !!id,
    staleTime: 15 * 60 * 1000, // 15 minutes
  });
}

// Prefetch procedure detail
export function usePrefetchProcedureDetail() {
  const queryClient = useQueryClient();

  return (id: string) => {
    queryClient.prefetchQuery({
      queryKey: queryKeys.procedures.detail(id),
      queryFn: () => api.get<ProcedureDetail>(`/procedures/${id}`),
      staleTime: 15 * 60 * 1000,
    });
  };
}

// Get procedure categories
export function useProcedureCategories() {
  return useQuery({
    queryKey: [...queryKeys.procedures.all, 'categories'],
    queryFn: async () => {
      const response = await api.get<Procedure[]>('/procedures', { limit: 100 });
      // Extract unique categories from procedures
      const categories = [...new Set(response.data.map(p => p.category))];
      return { success: true, data: categories };
    },
    staleTime: 30 * 60 * 1000, // 30 minutes
  });
}
