import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/axios';
import { queryKeys } from '@/lib/react-query';
import type { OrganizationMember } from '@/types/api';

// Fetch organization members
export function useOrganizationMembers(type?: 'leadership' | 'staff' | 'all') {
  return useQuery({
    queryKey: [...queryKeys.organization.members(), type],
    queryFn: () => api.get<OrganizationMember[]>('/organization/members', type ? { type } : undefined),
    staleTime: 30 * 60 * 1000, // 30 minutes - organization structure rarely changes
  });
}
