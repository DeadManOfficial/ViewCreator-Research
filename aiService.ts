/**
 * ViewCreator.AI - AI Service
 * Handles all AI content generation API calls
 */

import { api } from "@/lib/api";
import type {
  ImageGenerationRequest,
  ImageGenerationResponse,
  VideoGenerationRequest,
  VideoGenerationResponse,
  ScriptGenerationRequest,
  ScriptGenerationResponse,
  ThumbnailGenerationRequest,
  ThumbnailGenerationResponse,
  VideoClippingRequest,
  VideoClippingResponse,
} from "../types/index";

export const aiService = {
  /**
   * Generate image from prompt
   */
  async generateImage(request: ImageGenerationRequest): Promise<ImageGenerationResponse> {
    return api.post<ImageGenerationResponse>("/ai/generate-image", request);
  },

  /**
   * Generate video from prompt
   */
  async generateVideo(request: VideoGenerationRequest): Promise<VideoGenerationResponse> {
    return api.post<VideoGenerationResponse>("/ai/generate-video", request);
  },

  /**
   * Generate script from topic
   */
  async generateScript(request: ScriptGenerationRequest): Promise<ScriptGenerationResponse> {
    return api.post<ScriptGenerationResponse>("/ai/generate-script", request);
  },

  /**
   * Generate thumbnail from video
   */
  async generateThumbnail(
    request: ThumbnailGenerationRequest
  ): Promise<ThumbnailGenerationResponse> {
    return api.post<ThumbnailGenerationResponse>("/ai/generate-thumbnail", request);
  },

  /**
   * Clip video into viral shorts
   */
  async clipVideo(request: VideoClippingRequest): Promise<VideoClippingResponse> {
    return api.post<VideoClippingResponse>("/ai/clip-video", request);
  },

  /**
   * Get generation history
   */
  async getGenerationHistory(type?: string): Promise<any[]> {
    return api.get("/ai/history", { params: { type } });
  },

  /**
   * Get specific generation result
   */
  async getGenerationResult(id: string): Promise<any> {
    return api.get(`/ai/history/${id}`);
  },

  /**
   * Delete generation result
   */
  async deleteGenerationResult(id: string): Promise<void> {
    await api.delete(`/ai/history/${id}`);
  },

  /**
   * Get AI generation styles
   */
  async getStyles(type: string): Promise<string[]> {
    return api.get(`/ai/styles/${type}`);
  },

  /**
   * Get AI generation presets
   */
  async getPresets(type: string): Promise<any[]> {
    return api.get(`/ai/presets/${type}`);
  },

  /**
   * Create custom preset
   */
  async createPreset(type: string, name: string, config: any): Promise<any> {
    return api.post(`/ai/presets/${type}`, { name, config });
  },

  /**
   * Update custom preset
   */
  async updatePreset(type: string, presetId: string, config: any): Promise<any> {
    return api.put(`/ai/presets/${type}/${presetId}`, config);
  },

  /**
   * Delete custom preset
   */
  async deletePreset(type: string, presetId: string): Promise<void> {
    await api.delete(`/ai/presets/${type}/${presetId}`);
  },

  /**
   * Get AI credits usage
   */
  async getCreditsUsage(): Promise<{ used: number; available: number }> {
    return api.get("/ai/credits");
  },

  /**
   * Get generation cost for operation
   */
  async getGenerationCost(type: string, config: any): Promise<{ credits: number }> {
    return api.post("/ai/cost-estimate", { type, config });
  },

  /**
   * Get AI model information
   */
  async getModelInfo(modelType: string): Promise<any> {
    return api.get(`/ai/models/${modelType}`);
  },

  /**
   * List available AI models
   */
  async listModels(): Promise<any[]> {
    return api.get("/ai/models");
  },

  /**
   * Get generation status
   */
  async getGenerationStatus(jobId: string): Promise<any> {
    return api.get(`/ai/jobs/${jobId}`);
  },

  /**
   * Cancel generation job
   */
  async cancelGeneration(jobId: string): Promise<void> {
    await api.post(`/ai/jobs/${jobId}/cancel`);
  },

  /**
   * Batch generate content
   */
  async batchGenerate(requests: any[]): Promise<{ jobId: string }> {
    return api.post("/ai/batch-generate", { requests });
  },

  /**
   * Get batch generation status
   */
  async getBatchStatus(jobId: string): Promise<any> {
    return api.get(`/ai/batch/${jobId}`);
  },

  /**
   * Get AI feature availability
   */
  async getFeatureAvailability(): Promise<Record<string, boolean>> {
    return api.get("/ai/features");
  },

  /**
   * Validate AI prompt
   */
  async validatePrompt(type: string, prompt: string): Promise<{ valid: boolean; suggestions?: string[] }> {
    return api.post("/ai/validate-prompt", { type, prompt });
  },

  /**
   * Get prompt suggestions
   */
  async getPromptSuggestions(type: string, topic: string): Promise<string[]> {
    return api.get("/ai/prompt-suggestions", { params: { type, topic } });
  },
};
