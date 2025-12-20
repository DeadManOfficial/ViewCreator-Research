/**
 * ViewCreator.AI - Analytics Service
 * Handles all analytics and reporting API calls
 */

import { api } from "@/lib/api";
import type {
  AnalyticsData,
  AnalyticsRequest,
  PlatformAnalytics,
  Trend,
  TrendAnalysis,
} from "../types/index";

export const analyticsService = {
  /**
   * Get analytics data for date range
   */
  async getAnalytics(request: AnalyticsRequest): Promise<AnalyticsData> {
    return api.post<AnalyticsData>("/analytics", request);
  },

  /**
   * Get platform-specific analytics
   */
  async getPlatformAnalytics(
    platform: string,
    startDate: string,
    endDate: string
  ): Promise<PlatformAnalytics> {
    return api.get(`/analytics/platform/${platform}`, {
      params: { startDate, endDate },
    });
  },

  /**
   * Get content performance
   */
  async getContentPerformance(contentId: string): Promise<any> {
    return api.get(`/analytics/content/${contentId}`);
  },

  /**
   * Get profile analytics
   */
  async getProfileAnalytics(profileId: string, dateRange?: any): Promise<any> {
    return api.get(`/analytics/profile/${profileId}`, { params: dateRange });
  },

  /**
   * Get real-time analytics
   */
  async getRealTimeAnalytics(): Promise<any> {
    return api.get("/analytics/realtime");
  },

  /**
   * Get analytics summary
   */
  async getAnalyticsSummary(dateRange?: any): Promise<any> {
    return api.get("/analytics/summary", { params: dateRange });
  },

  /**
   * Get top performing content
   */
  async getTopContent(limit?: number): Promise<any[]> {
    return api.get("/analytics/top-content", { params: { limit } });
  },

  /**
   * Get audience demographics
   */
  async getAudienceDemographics(platform?: string): Promise<any> {
    return api.get("/analytics/audience", { params: { platform } });
  },

  /**
   * Get audience growth
   */
  async getAudienceGrowth(startDate: string, endDate: string): Promise<any> {
    return api.get("/analytics/growth", { params: { startDate, endDate } });
  },

  /**
   * Get engagement metrics
   */
  async getEngagementMetrics(startDate: string, endDate: string): Promise<any> {
    return api.get("/analytics/engagement", { params: { startDate, endDate } });
  },

  /**
   * Get conversion metrics
   */
  async getConversionMetrics(startDate: string, endDate: string): Promise<any> {
    return api.get("/analytics/conversions", { params: { startDate, endDate } });
  },

  /**
   * Get trending content
   */
  async getTrendingContent(): Promise<any[]> {
    return api.get("/analytics/trending");
  },

  /**
   * Get content recommendations
   */
  async getRecommendations(): Promise<any[]> {
    return api.get("/analytics/recommendations");
  },

  /**
   * Get audience insights
   */
  async getAudienceInsights(): Promise<any> {
    return api.get("/analytics/insights");
  },

  /**
   * Get posting time recommendations
   */
  async getPostingTimeRecommendations(): Promise<any> {
    return api.get("/analytics/posting-times");
  },

  /**
   * Get hashtag performance
   */
  async getHashtagPerformance(hashtag: string): Promise<any> {
    return api.get(`/analytics/hashtags/${hashtag}`);
  },

  /**
   * Get competitor analysis
   */
  async getCompetitorAnalysis(): Promise<any> {
    return api.get("/analytics/competitors");
  },

  /**
   * Export analytics report
   */
  async exportAnalytics(
    format: "pdf" | "csv" | "xlsx",
    request: AnalyticsRequest
  ): Promise<Blob> {
    return api.post(`/analytics/export/${format}`, request);
  },

  /**
   * Schedule analytics report
   */
  async scheduleReport(
    frequency: "daily" | "weekly" | "monthly",
    email: string
  ): Promise<any> {
    return api.post("/analytics/schedule-report", { frequency, email });
  },

  /**
   * Get scheduled reports
   */
  async getScheduledReports(): Promise<any[]> {
    return api.get("/analytics/scheduled-reports");
  },

  /**
   * Delete scheduled report
   */
  async deleteScheduledReport(reportId: string): Promise<void> {
    await api.delete(`/analytics/scheduled-reports/${reportId}`);
  },

  /**
   * Get analytics dashboard data
   */
  async getDashboardData(): Promise<any> {
    return api.get("/analytics/dashboard");
  },

  /**
   * Get custom analytics
   */
  async getCustomAnalytics(config: any): Promise<any> {
    return api.post("/analytics/custom", config);
  },

  /**
   * Save custom analytics view
   */
  async saveCustomView(name: string, config: any): Promise<any> {
    return api.post("/analytics/views", { name, config });
  },

  /**
   * Get saved analytics views
   */
  async getSavedViews(): Promise<any[]> {
    return api.get("/analytics/views");
  },

  /**
   * Delete saved view
   */
  async deleteSavedView(viewId: string): Promise<void> {
    await api.delete(`/analytics/views/${viewId}`);
  },

  /**
   * Get analytics comparison
   */
  async compareAnalytics(
    period1: { start: string; end: string },
    period2: { start: string; end: string }
  ): Promise<any> {
    return api.post("/analytics/compare", { period1, period2 });
  },

  /**
   * Get ROI analysis
   */
  async getROIAnalysis(): Promise<any> {
    return api.get("/analytics/roi");
  },

  /**
   * Get attribution analysis
   */
  async getAttributionAnalysis(): Promise<any> {
    return api.get("/analytics/attribution");
  },
};
