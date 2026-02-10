import type {
  HomepageResponse,
  ArticleResponse,
  CategoryArticlesSection,
} from '@/types/api';
import { citizenServicesData } from '@/lib/mock-data/services';
import type {
  FeaturedNews,
  HighlightColumn,
  NewsCategory,
  PartyBuildingColumn,
  StaffWorkData,
  PartyActivityData,
  OrganizationMember,
  CitizenService,
  Procedure,
  AnalyticsStats,
  PlanningItem,
  NewsItem,
} from '@/types/api';

export function transformHomepageData(data: HomepageResponse) {
  return {
    featured: transformToFeaturedNews(data.featured_articles || []),
    highlights: transformToHighlights(data.latest_articles || []),
    categories: transformToNewsCategories(data.articles_by_category || []),
    threeCategories: transformToThreeCategories(data.articles_by_category || []),
    partyBuilding: transformToPartyBuilding(data.articles_by_category || []),
    staffWork: transformToStaffWork(data.latest_articles || []),
    partyActivity: transformToPartyActivity(data.popular_articles || []),
    organization: [], // Will need separate API call for organization members
    services: citizenServicesData,
    procedures: [], // Will need separate API call for procedures
    analytics: transformToAnalytics(),
    plannings: transformToPlanning(data.latest_articles || []),
    election: transformToElection(data.articles_by_category || []),
    // announcements are fetched separately via categoriesApi.getArticles("thong-bao")
  };
}

function transformToFeaturedNews(articles: ArticleResponse[]): FeaturedNews {
  if (articles.length === 0) {
    return {
      main: {
        id: '',
        title: 'Không có bài viết nổi bật',
        description: '',
        image: '/no-image.png',
        createdAt: new Date().toISOString(),
      },
      sidebar: [],
    };
  }

  const [main, ...sidebar] = articles;

  return {
    main: {
      id: main.slug || main.id,
      title: main.title,
      description: main.excerpt || '',
      image: main.featured_image || '/no-image.png',
      createdAt: main.published_at,
    },
    sidebar: sidebar.slice(0, 6).map(article => ({
      id: article.slug || article.id,
      title: article.title,
      image: article.featured_image || '/no-image.png',
    })),
  };
}

function transformToHighlights(articles: ArticleResponse[]): HighlightColumn[] {
  if (articles.length === 0) {
    return [];
  }

  // Split articles into 3 columns
  const itemsPerColumn = Math.ceil(articles.length / 3);
  const columns: HighlightColumn[] = [];

  for (let col = 0; col < 3; col++) {
    const start = col * itemsPerColumn;
    const end = Math.min(start + itemsPerColumn, articles.length);
    const columnArticles = articles.slice(start, end);

    columns.push({
      column: col + 1,
      items: columnArticles.map((article, index) => ({
        id: article.slug || article.id,
        title: article.title,
        date: formatDateRelative(article.published_at),
        featured: index === 0, // First item in each column is featured
      })),
    });
  }

  return columns;
}

function transformToNewsCategories(categorySections: CategoryArticlesSection[]): NewsCategory[] {
  return categorySections.map(section => {
    const [featured, ...items] = section.articles;

    return {
      id: section.category.slug || section.category.id,
      name: section.category.name,
      slug: section.category.slug,
      featured: featured ? {
        id: featured.slug || featured.id,
        title: featured.title,
        image: featured.featured_image || '/no-image.png',
      } : {
        id: '',
        title: 'Không có bài viết',
        image: '/no-image.png',
      },
      items: items.slice(0, 3).map(article => ({
        id: article.slug || article.id,
        title: article.title,
      })),
    };
  });
}

function transformToThreeCategories(categorySections: CategoryArticlesSection[]): NewsCategory[] {
  // Take only first 3 categories for the three categories section
  return transformToNewsCategories(categorySections.slice(0, 3));
}

function transformToPartyBuilding(categorySections: CategoryArticlesSection[]): PartyBuildingColumn[] {
  // Find party building related categories or use first few
  const partyCategories = categorySections.slice(0, 3);

  return partyCategories.map((section, index) => {
    const [featured, secondary] = section.articles;

    return {
      column: index + 1,
      featured: featured ? {
        id: featured.slug || featured.id,
        title: featured.title,
        image: featured.featured_image || '/no-image.png',
        description: featured.excerpt || '',
      } : {
        id: '',
        title: 'Không có bài viết',
        image: '/no-image.png',
        description: '',
      },
      secondary: secondary ? {
        id: secondary.slug || secondary.id,
        title: secondary.title,
        image: secondary.featured_image || '/no-image.png',
      } : null,
    };
  });
}

function transformToStaffWork(articles: ArticleResponse[]): StaffWorkData {
  const mainArticles = articles.slice(0, 4);
  const sidebarArticles = articles.slice(4, 10);

  return {
    main: mainArticles.map(article => ({
      id: article.slug || article.id,
      title: article.title,
      image: article.featured_image || '/no-image.png',
      date: formatDateShort(article.published_at),
    })),
    sidebar: sidebarArticles.map(article => ({
      id: article.slug || article.id,
      title: article.title,
      date: formatDateShort(article.published_at),
      time: formatTimeFromDate(article.published_at),
    })),
  };
}

function transformToPartyActivity(articles: ArticleResponse[]): PartyActivityData {
  const [featured, ...grid] = articles;

  return {
    featured: featured ? {
      id: featured.slug || featured.id,
      title: featured.title,
      image: featured.featured_image || '/no-image.png',
      description: featured.excerpt || '',
      date: formatDateShort(featured.published_at),
    } : {
      id: '',
      title: 'Không có bài viết',
      image: '/no-image.png',
      description: '',
      date: '',
    },
    grid: grid.slice(0, 6).map(article => ({
      id: article.slug || article.id,
      title: article.title,
      image: article.featured_image || '/no-image.png',
      date: formatDateShort(article.published_at),
    })),
  };
}

function transformToPlanning(articles: ArticleResponse[]): { featured: PlanningItem; sidebar: PlanningItem } {
  const [featured, sidebar] = articles;

  const defaultItem: PlanningItem = {
    id: '',
    title: 'Không có thông tin quy hoạch',
    image: '/no-image.png',
    description: '',
    category: 'planning',
    date: '',
  };

  return {
    featured: featured ? {
      id: featured.slug || featured.id,
      title: featured.title,
      image: featured.featured_image || '/no-image.png',
      description: featured.excerpt || '',
      category: 'planning',
      date: formatDateShort(featured.published_at),
    } : defaultItem,
    sidebar: sidebar ? {
      id: sidebar.slug || sidebar.id,
      title: sidebar.title,
      image: sidebar.featured_image || '/no-image.png',
      description: sidebar.excerpt || '',
      category: 'planning',
      date: formatDateShort(sidebar.published_at),
    } : defaultItem,
  };
}

function transformToElection(categorySections: CategoryArticlesSection[]) {
  // Find election-related category or use the first one
  const electionCategory = categorySections.find(section =>
    section.category.name.toLowerCase().includes('bầu cử') ||
    section.category.name.toLowerCase().includes('election')
  ) || categorySections[0];

  if (!electionCategory) {
    return {
      id: 'election',
      name: 'Thông tin bầu cử',
      slug: 'election',
      featured: {
        id: '',
        title: 'Không có thông tin bầu cử',
        image: '/no-image.png',
      },
    };
  }

  const [featured] = electionCategory.articles;

  return {
    id: electionCategory.category.slug || electionCategory.category.id,
    name: electionCategory.category.name,
    slug: electionCategory.category.slug,
    featured: featured ? {
      id: featured.slug || featured.id,
      title: featured.title,
      image: featured.featured_image || '/no-image.png',
    } : {
      id: '',
      title: 'Không có bài viết',
      image: '/no-image.png',
    },
  };
}

function transformToAnalytics(): AnalyticsStats {
  return {
    online: Math.floor(Math.random() * 100) + 50,
    today: Math.floor(Math.random() * 1000) + 500,
    yesterday: Math.floor(Math.random() * 800) + 400,
    thisWeek: Math.floor(Math.random() * 5000) + 2000,
    thisMonth: Math.floor(Math.random() * 20000) + 10000,
    total: Math.floor(Math.random() * 100000) + 50000,
    lastUpdated: new Date().toISOString(),
  };
}

// Helper functions for date formatting
function formatDateRelative(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return 'hôm nay';
  if (diffInDays === 1) return 'hôm qua';
  if (diffInDays < 30) return `${diffInDays} ngày trước`;

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths === 1) return 'khoảng 1 tháng trước';

  return `khoảng ${diffInMonths} tháng trước`;
}

function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

function formatTimeFromDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleTimeString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit',
  });
}