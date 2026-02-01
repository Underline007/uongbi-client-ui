import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/axios';
import { queryKeys } from '@/lib/react-query';
import type {
  FeaturedNews,
  HighlightColumn,
  NewsCategory,
  PartyBuildingColumn,
  StaffWorkData,
  PartyActivityData,
  NewsItem,
  NewsDetail,
} from '@/types/api';

// Fetch featured news
export function useFeaturedNews() {
  return useQuery({
    queryKey: queryKeys.news.featured(),
    queryFn: () => api.get<FeaturedNews>('/news/featured'),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Fetch highlights
export function useHighlights() {
  return useQuery({
    queryKey: queryKeys.news.highlights(),
    queryFn: () => api.get<HighlightColumn[]>('/news/highlights'),
    staleTime: 5 * 60 * 1000,
  });
}

// Fetch news categories
export function useNewsCategories(type?: 'three-categories') {
  return useQuery({
    queryKey: [...queryKeys.news.categories(), type],
    queryFn: () => api.get<NewsCategory[]>(`/news/categories${type ? `?type=${type}` : ''}`),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}

// Fetch party building news
export function usePartyBuilding() {
  return useQuery({
    queryKey: queryKeys.news.partyBuilding(),
    queryFn: () => api.get<PartyBuildingColumn[]>('/news/party-building'),
    staleTime: 5 * 60 * 1000,
  });
}

// Fetch staff work news
export function useStaffWork() {
  return useQuery({
    queryKey: queryKeys.news.staffWork(),
    queryFn: () => api.get<StaffWorkData>('/news/staff-work'),
    staleTime: 5 * 60 * 1000,
  });
}

// Fetch party activity news
export function usePartyActivity() {
  return useQuery({
    queryKey: queryKeys.news.partyActivity(),
    queryFn: () => api.get<PartyActivityData>('/news/party-activity'),
    staleTime: 5 * 60 * 1000,
  });
}

// Fetch election info
export function useElectionInfo() {
  return useQuery({
    queryKey: queryKeys.news.election(),
    queryFn: () => api.get<{ id: string; name: string; slug: string; featured: { id: string; title: string; image: string } }>('/news/election'),
    staleTime: 10 * 60 * 1000,
  });
}

// Fetch news list with filters
interface NewsListParams {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
  featured?: boolean;
  sortBy?: 'createdAt' | 'views' | 'title';
  order?: 'asc' | 'desc';
}

export function useNewsList(params: NewsListParams = {}) {
  return useQuery({
    queryKey: queryKeys.news.list(params),
    queryFn: () => api.get<NewsItem[]>('/news', params),
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
}

// Fetch single news detail
export function useNewsDetail(id: string) {
  return useQuery({
    queryKey: queryKeys.news.detail(id),
    queryFn: () => api.get<NewsDetail>(`/news/${id}`),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
}

// Prefetch news detail (for hover prefetching)
export function usePrefetchNewsDetail() {
  const queryClient = useQueryClient();

  return (id: string) => {
    queryClient.prefetchQuery({
      queryKey: queryKeys.news.detail(id),
      queryFn: () => api.get<NewsDetail>(`/news/${id}`),
      staleTime: 5 * 60 * 1000,
    });
  };
}

// Increment view count mutation
export function useIncrementViewCount() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => api.post(`/news/${id}/view`),
    onSuccess: (_, id) => {
      // Invalidate the specific news detail query
      queryClient.invalidateQueries({ queryKey: queryKeys.news.detail(id) });
    },
  });
}
