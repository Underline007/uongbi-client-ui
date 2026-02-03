import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/axios';
import { queryKeys } from '@/lib/react-query';
import type { Announcement, AnnouncementDetail } from '@/types/api';

interface AnnouncementListParams {
  page?: number;
  limit?: number;
  pinned?: boolean;
  search?: string;
}

// Fetch announcements list
export function useAnnouncementsList(params: AnnouncementListParams = {}) {
  return useQuery({
    queryKey: queryKeys.announcements.list(params),
    queryFn: () => api.get<Announcement[]>('/announcements', params),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Fetch single announcement detail
export function useAnnouncementDetail(id: string) {
  return useQuery({
    queryKey: queryKeys.announcements.detail(id),
    queryFn: () => api.get<AnnouncementDetail>(`/announcements/${id}`),
    enabled: !!id,
    staleTime: 10 * 60 * 1000,
  });
}

// Fetch pinned announcements only
export function usePinnedAnnouncements(limit = 5) {
  return useAnnouncementsList({ pinned: true, limit });
}
