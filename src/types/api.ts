// Common API Response Types
export interface ApiResponse<T> {
  success: true;
  data: T;
  meta?: ApiMeta;
}

export interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
  };
}

export interface ApiMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// News Types
export interface NewsItem {
  id: string;
  title: string;
  slug?: string;
  description?: string;
  image: string;
  category?: {
    id: string;
    name: string;
    slug: string;
  };
  author?: string;
  views?: number;
  featured?: boolean;
  date?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface NewsDetail extends NewsItem {
  content: string;
  images?: string[];
  tags?: string[];
  attachments?: Attachment[];
  relatedNews?: NewsItem[];
}

export interface FeaturedNews {
  main: {
    id: string;
    title: string;
    description: string;
    image: string;
    createdAt: string;
  };
  sidebar: {
    id: string;
    title: string;
    image: string;
  }[];
}

export interface HighlightItem {
  id: string;
  title: string;
  date: string;
  featured?: boolean;
}

export interface HighlightColumn {
  column: number;
  items: HighlightItem[];
}

export interface NewsCategory {
  id: string;
  name: string;
  slug: string;
  featured: {
    id: string;
    title: string;
    image: string;
  };
  items: {
    id: string;
    title: string;
  }[];
}

export interface PartyBuildingColumn {
  column: number;
  featured: {
    id: string;
    title: string;
    image: string;
    description: string;
  };
  secondary?: {
    id: string;
    title: string;
    image: string;
  } | null;
}

export interface StaffWorkData {
  main: {
    id: string;
    title: string;
    image: string;
    date: string;
  }[];
  sidebar: {
    id: string;
    title: string;
    date: string;
    time: string;
  }[];
}

export interface PartyActivityData {
  featured: {
    id: string;
    title: string;
    image: string;
    description: string;
    date: string;
  };
  grid: {
    id: string;
    title: string;
    image: string;
    date: string;
  }[];
}

// Organization Types
export interface OrganizationMember {
  id: string;
  name: string;
  avatar?: string | null;
  position: string;
  position2?: string | null;
  phone?: string | null;
  email?: string | null;
  order: number;
}

// Procedure Types
export interface Procedure {
  id: string;
  code: string;
  title: string;
  category: string;
  processingTime: string;
  fee: string;
  level: number;
  status: 'active' | 'inactive';
  createdAt: string;
}

export interface ProcedureDetail extends Procedure {
  legalBasis: string[];
  requiredDocuments: {
    name: string;
    template?: string | null;
    required: boolean;
  }[];
  process: {
    step: number;
    title: string;
    description: string;
    duration: string;
  }[];
  submissionMethods: {
    type: 'online' | 'offline';
    url?: string;
    address?: string;
    description: string;
  }[];
  contact: {
    department: string;
    phone: string;
    email: string;
  };
  relatedProcedures: {
    id: string;
    title: string;
  }[];
  updatedAt: string;
}

// Service Types
export interface CitizenService {
  id: string;
  icon: string;
  label: string;
  href: string;
  order: number;
}

// Announcement Types
export interface Announcement {
  id: string;
  title: string;
  excerpt?: string;
  pinned: boolean;
  important: boolean;
  createdAt: string;
}

export interface AnnouncementDetail extends Announcement {
  content: string;
  attachments: Attachment[];
  updatedAt: string;
}

// Planning Types
export interface PlanningCategory {
  id: string;
  name: string;
  count: number;
}

export interface PlanningItem {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
  date: string;
}

export interface PlanningsData {
  categories: PlanningCategory[];
  items: PlanningItem[];
}

// Analytics Types
export interface AnalyticsStats {
  online: number;
  today: number;
  yesterday: number;
  thisWeek: number;
  thisMonth: number;
  total: number;
  lastUpdated: string;
}

// Config Types
export interface ContactInfo {
  organizationName: string;
  fullName: string;
  address: string;
  phone: string;
  fax?: string;
  email: string;
  hotline: string;
  website: string;
  mapUrl?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  socialMedia?: {
    facebook?: string;
    zalo?: string;
  };
}

export interface SiteInfo {
  siteName: string;
  shortName: string;
  tagline: string;
  logo: string;
  favicon: string;
  headerBackground: string;
  footerBackground: string;
  coatOfArms: string;
  copyright: string;
  country: string;
  province: string;
  district: string;
}

// Attachment Types
export interface Attachment {
  id: string;
  name: string;
  url: string;
  size: number;
  type: string;
}
