/**
 * ViewCreator.AI - API Client
 * Centralized HTTP client for all API calls with interceptors and error handling
 */

import axios, { AxiosInstance, AxiosError } from "axios";

// Local type definitions to avoid circular imports
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
  timestamp: string;
}

interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

// ============================================================================
// API CLIENT CONFIGURATION
// ============================================================================

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

class ApiClient {
  private client: AxiosInstance;
  private tokenKey = "viewcreator_token";

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.setupInterceptors();
  }

  /**
   * Setup request and response interceptors
   */
  private setupInterceptors() {
    // Request interceptor - add auth token
    this.client.interceptors.request.use(
      (config) => {
        const token = this.getToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor - handle errors and token refresh
    this.client.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const originalRequest = error.config;

        // Handle 401 Unauthorized - token expired
        if (error.response?.status === 401 && originalRequest) {
          try {
            const newToken = await this.refreshToken();
            this.setToken(newToken);
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return this.client(originalRequest);
          } catch (refreshError) {
            this.clearToken();
            window.location.href = "/login";
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );
  }

  /**
   * Token management
   */
  private getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  private clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  /**
   * Refresh authentication token
   */
  private async refreshToken(): Promise<string> {
    try {
      const response = await this.client.post<{ token: string }>(
        "/auth/refresh"
      );
      return response.data.token;
    } catch (error) {
      throw new Error("Failed to refresh token");
    }
  }

  /**
   * Generic GET request
   */
  async get<T>(url: string, config?: any): Promise<T> {
    try {
      const response = await this.client.get<ApiResponse<T>>(url, config);
      return response.data.data as T;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Generic POST request
   */
  async post<T>(url: string, data?: any, config?: any): Promise<T> {
    try {
      const response = await this.client.post<ApiResponse<T>>(
        url,
        data,
        config
      );
      return response.data.data as T;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Generic PUT request
   */
  async put<T>(url: string, data?: any, config?: any): Promise<T> {
    try {
      const response = await this.client.put<ApiResponse<T>>(
        url,
        data,
        config
      );
      return response.data.data as T;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Generic PATCH request
   */
  async patch<T>(url: string, data?: any, config?: any): Promise<T> {
    try {
      const response = await this.client.patch<ApiResponse<T>>(
        url,
        data,
        config
      );
      return response.data.data as T;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Generic DELETE request
   */
  async delete<T>(url: string, config?: any): Promise<T> {
    try {
      const response = await this.client.delete<ApiResponse<T>>(url, config);
      return response.data.data as T;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Error handling
   */
  private handleError(error: any): ApiError {
    if (axios.isAxiosError(error)) {
      const apiError = error.response?.data?.error;
      if (apiError) {
        return apiError;
      }

      return {
        code: error.response?.status?.toString() || "UNKNOWN_ERROR",
        message: error.message || "An error occurred",
        details: error.response?.data,
      };
    }

    return {
      code: "CLIENT_ERROR",
      message: error.message || "An unexpected error occurred",
    };
  }

  /**
   * Upload file
   */
  async uploadFile(url: string, file: File, additionalData?: any): Promise<any> {
    const formData = new FormData();
    formData.append("file", file);

    if (additionalData) {
      Object.entries(additionalData).forEach(([key, value]) => {
        formData.append(key, String(value));
      });
    }

    return this.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  /**
   * Download file
   */
  async downloadFile(url: string, filename: string): Promise<void> {
    try {
      const response = await this.client.get(url, {
        responseType: "blob",
      });

      const blob = new Blob([response.data]);
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      throw this.handleError(error);
    }
  }
}

// ============================================================================
// EXPORT SINGLETON INSTANCE
// ============================================================================

export const api = new ApiClient();

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Format error message for display
 */
export function formatErrorMessage(error: any): string {
  if (typeof error === "string") {
    return error;
  }

  if (error?.message) {
    return error.message;
  }

  if (error?.details?.message) {
    return error.details.message;
  }

  return "An unexpected error occurred. Please try again.";
}

/**
 * Check if error is network error
 */
export function isNetworkError(error: any): boolean {
  return error?.code === "NETWORK_ERROR" || !navigator.onLine;
}

/**
 * Retry failed request with exponential backoff
 */
export async function retryRequest<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000
): Promise<T> {
  let lastError: any;

  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      if (i < maxRetries - 1) {
        await new Promise((resolve) => setTimeout(resolve, delay * Math.pow(2, i)));
      }
    }
  }

  throw lastError;
}
