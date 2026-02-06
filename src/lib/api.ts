import type {
  ApiResponse,
  FeaturedNews,
  HighlightColumn,
  NewsCategory,
  PartyBuildingColumn,
  StaffWorkData,
  PartyActivityData,
  OrganizationMember,
  CitizenService,
  Procedure,
  Announcement,
  AnalyticsStats,
  PlanningItem,
  Comment,
} from '@/types/api';

// Import mock data for direct use during SSR/build
import {
  featuredNewsData,
  highlightsData,
  newsCategoriesData,
  threeCategoriesData,
  partyBuildingData,
  staffWorkData,
  partyActivityData,
  organizationMembersData,
  citizenServicesData,
  proceduresData,
  analyticsStatsData,
  planningFeaturedData,
  planningSidebarData,
  electionInfoData,
  announcementsData,
  commentsData,
} from '@/lib/mock-data';

// Helper to create API response
function createResponse<T>(data: T): ApiResponse<T> {
  return { success: true, data };
}

// News API - returns mock data directly for SSR compatibility
export const newsApi = {
  getFeatured: async (): Promise<ApiResponse<FeaturedNews>> => {
    return createResponse(featuredNewsData);
  },

  getHighlights: async (): Promise<ApiResponse<HighlightColumn[]>> => {
    return createResponse(highlightsData);
  },

  getCategories: async (type?: 'three-categories'): Promise<ApiResponse<NewsCategory[]>> => {
    if (type === 'three-categories') {
      return createResponse(threeCategoriesData);
    }
    return createResponse(newsCategoriesData);
  },

  getPartyBuilding: async (): Promise<ApiResponse<PartyBuildingColumn[]>> => {
    return createResponse(partyBuildingData);
  },

  getStaffWork: async (): Promise<ApiResponse<StaffWorkData>> => {
    return createResponse(staffWorkData);
  },

  getPartyActivity: async (): Promise<ApiResponse<PartyActivityData>> => {
    return createResponse(partyActivityData);
  },

  getElectionInfo: async (): Promise<ApiResponse<typeof electionInfoData>> => {
    return createResponse(electionInfoData);
  },
};

// Organization API
export const organizationApi = {
  getMembers: async (): Promise<ApiResponse<OrganizationMember[]>> => {
    return createResponse(organizationMembersData);
  },
};

// Services API
export const servicesApi = {
  getCitizenServices: async (): Promise<ApiResponse<CitizenService[]>> => {
    return createResponse(citizenServicesData);
  },
};

// Procedures API
export const proceduresApi = {
  getList: async (params?: { page?: number; limit?: number; search?: string; category?: string }): Promise<ApiResponse<Procedure[]>> => {
    let filteredData = [...proceduresData];

    if (params?.search) {
      filteredData = filteredData.filter(p =>
        p.title.toLowerCase().includes(params.search!.toLowerCase())
      );
    }

    if (params?.category) {
      filteredData = filteredData.filter(p => p.category === params.category);
    }

    const limit = params?.limit || 10;
    const page = params?.page || 1;
    const startIndex = (page - 1) * limit;
    const paginatedData = filteredData.slice(startIndex, startIndex + limit);

    return {
      success: true,
      data: paginatedData,
      meta: {
        total: filteredData.length,
        page,
        limit,
        totalPages: Math.ceil(filteredData.length / limit)
      }
    };
  },
};

// Announcements API
export const announcementsApi = {
  getList: async (params?: { page?: number; limit?: number; pinned?: boolean }): Promise<ApiResponse<Announcement[]>> => {
    let filteredData = [...announcementsData];

    if (params?.pinned) {
      filteredData = filteredData.filter(a => a.pinned);
    }

    const limit = params?.limit || 10;
    const page = params?.page || 1;
    const startIndex = (page - 1) * limit;
    const paginatedData = filteredData.slice(startIndex, startIndex + limit);

    return {
      success: true,
      data: paginatedData,
      meta: {
        total: filteredData.length,
        page,
        limit,
        totalPages: Math.ceil(filteredData.length / limit)
      }
    };
  },
};

// Analytics API
export const analyticsApi = {
  getStats: async (): Promise<ApiResponse<AnalyticsStats>> => {
    return createResponse({
      ...analyticsStatsData,
      lastUpdated: new Date().toISOString()
    });
  },
};

// Plannings API
export const planningsApi = {
  getFeatured: async (): Promise<ApiResponse<{ featured: PlanningItem; sidebar: PlanningItem }>> => {
    return createResponse({
      featured: planningFeaturedData,
      sidebar: planningSidebarData
    });
  },
};

// Comments API
export const commentsApi = {
  getByArticleId: async (articleId: string): Promise<ApiResponse<Comment[]>> => {
    const filtered = commentsData.filter(c => c.articleId === articleId);
    return createResponse(filtered);
  },

  create: async (data: { articleId: string; name: string; content: string }): Promise<ApiResponse<Comment>> => {
    const newComment: Comment = {
      id: `cmt-${Date.now()}`,
      articleId: data.articleId,
      name: data.name,
      content: data.content,
      createdAt: new Date().toISOString(),
    };
    commentsData.push(newComment);
    return createResponse(newComment);
  },
};

// Export all APIs
export const api = {
  news: newsApi,
  organization: organizationApi,
  services: servicesApi,
  procedures: proceduresApi,
  announcements: announcementsApi,
  analytics: analyticsApi,
  plannings: planningsApi,
  comments: commentsApi,
};

export default api;
