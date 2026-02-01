import { QueryClient } from '@tanstack/react-query';

// Create a singleton query client
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we want to set some default staleTime
        // to avoid refetching immediately on the client
        staleTime: 60 * 1000, // 1 minute
        gcTime: 5 * 60 * 1000, // 5 minutes (previously cacheTime)
        retry: 1,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
      },
      mutations: {
        retry: 0,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
  if (typeof window === 'undefined') {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important so we don't re-make a new client if React
    // suspends during the initial render
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

// Query keys factory for consistent key management
export const queryKeys = {
  // News
  news: {
    all: ['news'] as const,
    lists: () => [...queryKeys.news.all, 'list'] as const,
    list: (filters: object) => [...queryKeys.news.lists(), filters] as const,
    details: () => [...queryKeys.news.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.news.details(), id] as const,
    featured: () => [...queryKeys.news.all, 'featured'] as const,
    highlights: () => [...queryKeys.news.all, 'highlights'] as const,
    categories: () => [...queryKeys.news.all, 'categories'] as const,
    partyBuilding: () => [...queryKeys.news.all, 'party-building'] as const,
    staffWork: () => [...queryKeys.news.all, 'staff-work'] as const,
    partyActivity: () => [...queryKeys.news.all, 'party-activity'] as const,
    election: () => [...queryKeys.news.all, 'election'] as const,
  },

  // Organization
  organization: {
    all: ['organization'] as const,
    members: () => [...queryKeys.organization.all, 'members'] as const,
  },

  // Services
  services: {
    all: ['services'] as const,
    citizen: () => [...queryKeys.services.all, 'citizen'] as const,
  },

  // Procedures
  procedures: {
    all: ['procedures'] as const,
    lists: () => [...queryKeys.procedures.all, 'list'] as const,
    list: (filters: object) => [...queryKeys.procedures.lists(), filters] as const,
    details: () => [...queryKeys.procedures.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.procedures.details(), id] as const,
  },

  // Announcements
  announcements: {
    all: ['announcements'] as const,
    lists: () => [...queryKeys.announcements.all, 'list'] as const,
    list: (filters: object) => [...queryKeys.announcements.lists(), filters] as const,
    details: () => [...queryKeys.announcements.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.announcements.details(), id] as const,
  },

  // Analytics
  analytics: {
    all: ['analytics'] as const,
    stats: () => [...queryKeys.analytics.all, 'stats'] as const,
  },

  // Plannings
  plannings: {
    all: ['plannings'] as const,
    lists: () => [...queryKeys.plannings.all, 'list'] as const,
    list: (filters: object) => [...queryKeys.plannings.lists(), filters] as const,
    featured: () => [...queryKeys.plannings.all, 'featured'] as const,
  },

  // Config
  config: {
    all: ['config'] as const,
    contact: () => [...queryKeys.config.all, 'contact'] as const,
    siteInfo: () => [...queryKeys.config.all, 'site-info'] as const,
  },
};
