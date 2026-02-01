import axios, { AxiosError, type AxiosInstance, type InternalAxiosRequestConfig } from 'axios';

// API Base URL - defaults to same origin for Next.js API routes
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

// Create axios instance
export const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Add auth token if exists
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('auth_token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    // Add request timestamp for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`);
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    // Log response in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[API Response] ${response.config.url}:`, response.status);
    }
    return response;
  },
  (error: AxiosError<{ error?: { message?: string; code?: string } }>) => {
    // Handle common errors
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 401:
          // Unauthorized - clear token and redirect to login
          if (typeof window !== 'undefined') {
            localStorage.removeItem('auth_token');
            // Optionally redirect to login
            // window.location.href = '/login';
          }
          break;
        case 403:
          console.error('Forbidden: You do not have permission');
          break;
        case 404:
          console.error('Not Found:', error.config?.url);
          break;
        case 500:
          console.error('Server Error:', data?.error?.message || 'Internal server error');
          break;
        default:
          console.error('API Error:', data?.error?.message || error.message);
      }
    } else if (error.request) {
      console.error('Network Error: No response received');
    } else {
      console.error('Request Error:', error.message);
    }

    return Promise.reject(error);
  }
);

// Helper types for API responses
export interface ApiResponse<T> {
  success: true;
  data: T;
  meta?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
  };
}

// Generic API request functions
export const api = {
  get: <T>(url: string, params?: object) =>
    apiClient.get<ApiResponse<T>>(url, { params }).then(res => res.data),

  post: <T>(url: string, data?: object) =>
    apiClient.post<ApiResponse<T>>(url, data).then(res => res.data),

  put: <T>(url: string, data?: object) =>
    apiClient.put<ApiResponse<T>>(url, data).then(res => res.data),

  patch: <T>(url: string, data?: object) =>
    apiClient.patch<ApiResponse<T>>(url, data).then(res => res.data),

  delete: <T>(url: string) =>
    apiClient.delete<ApiResponse<T>>(url).then(res => res.data),
};

export default apiClient;
