import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/axios';
import { queryKeys } from '@/lib/react-query';
import type { CitizenService } from '@/types/api';

// Fetch citizen services
export function useCitizenServices() {
  return useQuery({
    queryKey: queryKeys.services.citizen(),
    queryFn: () => api.get<CitizenService[]>('/services/citizen'),
    staleTime: 60 * 60 * 1000, // 1 hour - services rarely change
  });
}
