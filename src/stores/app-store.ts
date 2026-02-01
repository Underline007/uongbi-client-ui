import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// UI State
interface UIState {
  isSidebarOpen: boolean;
  isMobileMenuOpen: boolean;
  isSearchOpen: boolean;
  theme: 'light' | 'dark' | 'system';
}

interface UIActions {
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
  setMobileMenuOpen: (open: boolean) => void;
  toggleSearch: () => void;
  setSearchOpen: (open: boolean) => void;
  setTheme: (theme: UIState['theme']) => void;
}

export const useUIStore = create<UIState & UIActions>()((set) => ({
  // State
  isSidebarOpen: true,
  isMobileMenuOpen: false,
  isSearchOpen: false,
  theme: 'light',

  // Actions
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setSidebarOpen: (open) => set({ isSidebarOpen: open }),
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  toggleSearch: () => set((state) => ({ isSearchOpen: !state.isSearchOpen })),
  setSearchOpen: (open) => set({ isSearchOpen: open }),
  setTheme: (theme) => set({ theme }),
}));

// User preferences (persisted)
interface PreferencesState {
  fontSize: 'small' | 'medium' | 'large';
  language: 'vi' | 'en';
  recentSearches: string[];
  viewedNews: string[];
}

interface PreferencesActions {
  setFontSize: (size: PreferencesState['fontSize']) => void;
  setLanguage: (lang: PreferencesState['language']) => void;
  addRecentSearch: (query: string) => void;
  clearRecentSearches: () => void;
  addViewedNews: (newsId: string) => void;
  clearViewedNews: () => void;
}

export const usePreferencesStore = create<PreferencesState & PreferencesActions>()(
  persist(
    (set) => ({
      // State
      fontSize: 'medium',
      language: 'vi',
      recentSearches: [],
      viewedNews: [],

      // Actions
      setFontSize: (fontSize) => set({ fontSize }),
      setLanguage: (language) => set({ language }),
      addRecentSearch: (query) =>
        set((state) => ({
          recentSearches: [
            query,
            ...state.recentSearches.filter((s) => s !== query),
          ].slice(0, 10), // Keep only last 10 searches
        })),
      clearRecentSearches: () => set({ recentSearches: [] }),
      addViewedNews: (newsId) =>
        set((state) => ({
          viewedNews: [
            newsId,
            ...state.viewedNews.filter((id) => id !== newsId),
          ].slice(0, 50), // Keep only last 50 viewed
        })),
      clearViewedNews: () => set({ viewedNews: [] }),
    }),
    {
      name: 'user-preferences',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        fontSize: state.fontSize,
        language: state.language,
        recentSearches: state.recentSearches,
        viewedNews: state.viewedNews,
      }),
    }
  )
);

// Notification/Toast state
interface NotificationState {
  notifications: Array<{
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    title: string;
    message?: string;
    duration?: number;
  }>;
}

interface NotificationActions {
  addNotification: (notification: Omit<NotificationState['notifications'][0], 'id'>) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
}

export const useNotificationStore = create<NotificationState & NotificationActions>()((set) => ({
  notifications: [],

  addNotification: (notification) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        { ...notification, id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}` },
      ],
    })),

  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),

  clearNotifications: () => set({ notifications: [] }),
}));
