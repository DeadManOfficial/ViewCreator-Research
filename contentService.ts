/**
 * ViewCreator.AI - Content Service
 * Handles all content-related API calls
 */

import { api } from "@/lib/api";
import type {
  Content,
  CreateContentRequest,
  PublishContentRequest,
  SocialPlatform,
} from "../types/index";

export const contentService = {
  /**
   * Create new content
   */
  async createContent(data: CreateContentRequest): Promise<Content> {
    return api.post<Content>("/content", data);
  },

  /**
   * Get all user content
   */
  async getContent(filters?: {
    status?: string;
    type?: string;
    page?: number;
    limit?: number;
  }): Promise<{ data: Content[]; total: number }> {
    return api.get("/content", { params: filters });
  },

  /**
   * Get specific content by ID
   */
  async getContentById(id: string): Promise<Content> {
    return api.get<Content>(`/content/${id}`);
  },

  /**
   * Update content
   */
  async updateContent(id: string, data: Partial<Content>): Promise<Content> {
    return api.put<Content>(`/content/${id}`, data);
  },

  /**
   * Delete content
   */
  async deleteContent(id: string): Promise<void> {
    await api.delete(`/content/${id}`);
  },

  /**
   * Publish content to platforms
   */
  async publishContent(contentId: string, platforms: SocialPlatform[]): Promise<Content> {
    return api.post<Content>(`/content/${contentId}/publish`, { platforms });
  },

  /**
   * Schedule content for future publishing
   */
  async scheduleContent(
    contentId: string,
    publishDate: string,
    platforms: SocialPlatform[]
  ): Promise<Content> {
    return api.post<Content>(`/content/${contentId}/schedule`, {
      publishDate,
      platforms,
    });
  },

  /**
   * Duplicate content
   */
  async duplicateContent(id: string): Promise<Content> {
    return api.post<Content>(`/content/${id}/duplicate`);
  },

  /**
   * Archive content
   */
  async archiveContent(id: string): Promise<Content> {
    return api.post<Content>(`/content/${id}/archive`);
  },

  /**
   * Restore archived content
   */
  async restoreContent(id: string): Promise<Content> {
    return api.post<Content>(`/content/${id}/restore`);
  },

  /**
   * Get content analytics
   */
  async getContentAnalytics(id: string): Promise<any> {
    return api.get(`/content/${id}/analytics`);
  },

  /**
   * Get content by platform
   */
  async getContentByPlatform(
    platform: SocialPlatform,
    filters?: any
  ): Promise<Content[]> {
    return api.get(`/content/platform/${platform}`, { params: filters });
  },

  /**
   * Batch publish content
   */
  async batchPublish(
    contentIds: string[],
    platforms: SocialPlatform[]
  ): Promise<{ successful: string[]; failed: string[] }> {
    return api.post("/content/batch-publish", {
      contentIds,
      platforms,
    });
  },

  /**
   * Get draft content
   */
  async getDrafts(): Promise<Content[]> {
    return api.get("/content", { params: { status: "draft" } });
  },

  /**
   * Get scheduled content
   */
  async getScheduled(): Promise<Content[]> {
    return api.get("/content", { params: { status: "scheduled" } });
  },

  /**
   * Get published content
   */
  async getPublished(): Promise<Content[]> {
    return api.get("/content", { params: { status: "published" } });
  },

  /**
   * Upload media for content
   */
  async uploadMedia(file: File, type: string): Promise<{ url: string }> {
    return api.uploadFile("/content/upload", file, { type });
  },

  /**
   * Get content suggestions
   */
  async getContentSuggestions(): Promise<any[]> {
    return api.get("/content/suggestions");
  },

  /**
   * Search content
   */
  async searchContent(query: string): Promise<Content[]> {
    return api.get("/content/search", { params: { q: query } });
  },
};
