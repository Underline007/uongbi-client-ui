import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/axios';
import { queryKeys } from '@/lib/react-query';
import type { ContactInfo, SiteInfo } from '@/types/api';

// Fetch contact info
export function useContactInfo() {
  return useQuery({
    queryKey: queryKeys.config.contact(),
    queryFn: () => api.get<ContactInfo>('/config/contact'),
    staleTime: 60 * 60 * 1000, // 1 hour - config rarely changes
  });
}

// Fetch site info
export function useSiteInfo() {
  return useQuery({
    queryKey: queryKeys.config.siteInfo(),
    queryFn: () => api.get<SiteInfo>('/config/site-info'),
    staleTime: 60 * 60 * 1000, // 1 hour
  });
}
