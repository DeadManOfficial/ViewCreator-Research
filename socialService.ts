/**
 * ViewCreator.AI - Social Service
 * Handles all social platform integration API calls
 */

import { api } from "@/lib/api";
import type { SocialAccount, SocialPlatform } from "../types/index";

export const socialService = {
  /**
   * Get all connected social accounts
   */
  async getConnectedAccounts(): Promise<SocialAccount[]> {
    return api.get<SocialAccount[]>("/socials");
  },

  /**
   * Get specific social account
   */
  async getAccount(id: string): Promise<SocialAccount> {
    return api.get<SocialAccount>(`/socials/${id}`);
  },

  /**
   * Get accounts by platform
   */
  async getAccountsByPlatform(platform: SocialPlatform): Promise<SocialAccount[]> {
    return api.get<SocialAccount[]>(`/socials/platform/${platform}`);
  },

  /**
   * Connect new social account
   */
  async connectAccount(platform: SocialPlatform, authCode: string): Promise<SocialAccount> {
    return api.post<SocialAccount>("/socials/connect", {
      platform,
      authCode,
    });
  },

  /**
   * Get OAuth URL for platform
   */
  async getOAuthUrl(platform: SocialPlatform): Promise<{ url: string }> {
    return api.get(`/socials/oauth/${platform}/url`);
  },

  /**
   * Handle OAuth callback
   */
  async handleOAuthCallback(
    platform: SocialPlatform,
    code: string
  ): Promise<SocialAccount> {
    return api.post(`/socials/oauth/${platform}/callback`, { code });
  },

  /**
   * Disconnect social account
   */
  async disconnectAccount(id: string): Promise<void> {
    await api.delete(`/socials/${id}`);
  },

  /**
   * Update social account
   */
  async updateAccount(id: string, data: Partial<SocialAccount>): Promise<SocialAccount> {
    return api.put<SocialAccount>(`/socials/${id}`, data);
  },

  /**
   * Verify social account connection
   */
  async verifyAccount(id: string): Promise<{ verified: boolean }> {
    return api.post(`/socials/${id}/verify`);
  },

  /**
   * Get platform statistics
   */
  async getPlatformStats(platform: SocialPlatform): Promise<any> {
    return api.get(`/socials/stats/${platform}`);
  },

  /**
   * Get all platform statistics
   */
  async getAllStats(): Promise<Record<SocialPlatform, any>> {
    return api.get("/socials/stats");
  },

  /**
   * Refresh social account tokens
   */
  async refreshTokens(id: string): Promise<SocialAccount> {
    return api.post<SocialAccount>(`/socials/${id}/refresh-tokens`);
  },

  /**
   * Get YouTube channel info
   */
  async getYouTubeChannelInfo(accountId: string): Promise<any> {
    return api.get(`/socials/youtube/${accountId}/channel`);
  },

  /**
   * Get TikTok account info
   */
  async getTikTokAccountInfo(accountId: string): Promise<any> {
    return api.get(`/socials/tiktok/${accountId}/account`);
  },

  /**
   * Get Instagram account info
   */
  async getInstagramAccountInfo(accountId: string): Promise<any> {
    return api.get(`/socials/instagram/${accountId}/account`);
  },

  /**
   * Get X (Twitter) account info
   */
  async getXAccountInfo(accountId: string): Promise<any> {
    return api.get(`/socials/x/${accountId}/account`);
  },

  /**
   * Get Facebook account info
   */
  async getFacebookAccountInfo(accountId: string): Promise<any> {
    return api.get(`/socials/facebook/${accountId}/account`);
  },

  /**
   * Publish to specific platform
   */
  async publishToPlatform(
    accountId: string,
    contentId: string,
    platform: SocialPlatform
  ): Promise<{ postId: string; url: string }> {
    return api.post(`/socials/${accountId}/publish`, {
      contentId,
      platform,
    });
  },

  /**
   * Get platform-specific content requirements
   */
  async getContentRequirements(platform: SocialPlatform): Promise<any> {
    return api.get(`/socials/requirements/${platform}`);
  },

  /**
   * Validate content for platform
   */
  async validateContent(platform: SocialPlatform, contentData: any): Promise<any> {
    return api.post(`/socials/validate/${platform}`, contentData);
  },

  /**
   * Get platform hashtag suggestions
   */
  async getHashtagSuggestions(
    platform: SocialPlatform,
    topic: string
  ): Promise<string[]> {
    return api.get(`/socials/hashtags/${platform}`, { params: { topic } });
  },

  /**
   * Get trending topics on platform
   */
  async getTrendingTopics(platform: SocialPlatform): Promise<any[]> {
    return api.get(`/socials/trending/${platform}`);
  },

  /**
   * Bulk disconnect accounts
   */
  async bulkDisconnect(accountIds: string[]): Promise<void> {
    await api.post("/socials/bulk-disconnect", { accountIds });
  },
};
