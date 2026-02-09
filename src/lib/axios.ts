import axios, { AxiosError, type AxiosInstance, type InternalAxiosRequestConfig } from 'axios';

// API Base URL - CMS backend
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

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
  (error: AxiosError<{ detail?: string | { msg: string }[] }>) => {
    // Handle common errors
    if (error.response) {
      const { status } = error.response;

      switch (status) {
        case 401:
          // Unauthorized - clear token
          if (typeof window !== 'undefined') {
            localStorage.removeItem('auth_token');
          }
          break;
        case 403:
          console.error('Forbidden: You do not have permission');
          break;
        case 404:
          console.error('Not Found:', error.config?.url);
          break;
        case 422:
          console.error('Validation Error:', error.response.data?.detail);
          break;
        case 429:
          console.error('Rate Limited: Too many requests');
          break;
        case 500:
          console.error('Server Error');
          break;
        default:
          console.error('API Error:', status, error.message);
      }
    } else if (error.request) {
      console.error('Network Error: No response received');
    } else {
      console.error('Request Error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
