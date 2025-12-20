/**
 * ViewCreator.AI - Authentication Service
 * Handles all authentication-related API calls
 */

import { api } from "@/lib/api";
import type { User, LoginRequest, SignupRequest, AuthResponse } from "../types/index";

export const authService = {
  /**
   * Login user with email and password
   */
  async login(email: string, password: string): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>("/auth/login", {
      email,
      password,
    });
    return response;
  },

  /**
   * Register new user
   */
  async signup(email: string, password: string, name: string): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>("/auth/signup", {
      email,
      password,
      name,
    });
    return response;
  },

  /**
   * Logout user
   */
  async logout(): Promise<void> {
    await api.post("/auth/logout");
  },

  /**
   * Get current user profile
   */
  async getProfile(): Promise<User> {
    return api.get<User>("/users/profile");
  },

  /**
   * Update user profile
   */
  async updateProfile(data: Partial<User>): Promise<User> {
    return api.put<User>("/users/profile", data);
  },

  /**
   * Change user password
   */
  async changePassword(
    currentPassword: string,
    newPassword: string
  ): Promise<void> {
    await api.post("/auth/change-password", {
      currentPassword,
      newPassword,
    });
  },

  /**
   * Request password reset
   */
  async requestPasswordReset(email: string): Promise<void> {
    await api.post("/auth/request-password-reset", { email });
  },

  /**
   * Reset password with token
   */
  async resetPassword(token: string, newPassword: string): Promise<void> {
    await api.post("/auth/reset-password", {
      token,
      newPassword,
    });
  },

  /**
   * Verify email address
   */
  async verifyEmail(token: string): Promise<void> {
    await api.post("/auth/verify-email", { token });
  },

  /**
   * Resend verification email
   */
  async resendVerificationEmail(email: string): Promise<void> {
    await api.post("/auth/resend-verification", { email });
  },

  /**
   * Enable two-factor authentication
   */
  async enableTwoFactor(): Promise<{ secret: string; qrCode: string }> {
    return api.post("/auth/2fa/enable");
  },

  /**
   * Verify two-factor authentication
   */
  async verifyTwoFactor(code: string): Promise<void> {
    await api.post("/auth/2fa/verify", { code });
  },

  /**
   * Disable two-factor authentication
   */
  async disableTwoFactor(password: string): Promise<void> {
    await api.post("/auth/2fa/disable", { password });
  },

  /**
   * Get OAuth authorization URL
   */
  async getOAuthUrl(provider: string): Promise<{ url: string }> {
    return api.get(`/auth/oauth/${provider}/url`);
  },

  /**
   * Handle OAuth callback
   */
  async handleOAuthCallback(
    provider: string,
    code: string
  ): Promise<AuthResponse> {
    return api.post(`/auth/oauth/${provider}/callback`, { code });
  },

  /**
   * Refresh authentication token
   */
  async refreshToken(): Promise<{ token: string }> {
    return api.post("/auth/refresh");
  },

  /**
   * Get login history
   */
  async getLoginHistory(): Promise<any[]> {
    return api.get("/auth/login-history");
  },

  /**
   * Get active sessions
   */
  async getActiveSessions(): Promise<any[]> {
    return api.get("/auth/sessions");
  },

  /**
   * Logout from specific session
   */
  async logoutSession(sessionId: string): Promise<void> {
    await api.post(`/auth/sessions/${sessionId}/logout`);
  },

  /**
   * Logout from all sessions
   */
  async logoutAllSessions(): Promise<void> {
    await api.post("/auth/sessions/logout-all");
  },
};
