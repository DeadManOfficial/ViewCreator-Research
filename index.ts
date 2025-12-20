/**
 * ViewCreator.AI - Global Type Definitions
 * Comprehensive TypeScript interfaces and types for the entire application
 */

// ============================================================================
// USER & AUTHENTICATION TYPES
// ============================================================================

export type UserPlan = "free" | "starter" | "pro" | "ultra" | "business";

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  plan: UserPlan;
  credits: number;
  createdAt: string;
  updatedAt: string;
  emailVerified: boolean;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  token?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  email: string;
  password: string;
  name: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}

// ============================================================================
// BRAND & PROFILE TYPES
// ============================================================================

export interface BrandProfile {
  id: string;
  userId: string;
  name: string;
  description?: string;
  logoUrl?: string;
  brandColors?: {
    primary: string;
    secondary: string;
    accent: string;
  };
  brandVoice?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateBrandProfileRequest {
  name: string;
  description?: string;
  logoUrl?: string;
  brandColors?: BrandProfile["brandColors"];
  brandVoice?: string;
}

// ============================================================================
// SOCIAL ACCOUNT TYPES
// ============================================================================

export type SocialPlatform = "youtube" | "tiktok" | "instagram" | "x" | "facebook";

export interface SocialAccount {
  id: string;
  userId: string;
  platform: SocialPlatform;
  accountId: string;
  accountName: string;
  accessToken: string;
  refreshToken?: string;
  tokenExpiresAt?: string;
  connectedAt: string;
  isActive: boolean;
}

export interface ConnectSocialRequest {
  platform: SocialPlatform;
  authCode: string;
}

// ============================================================================
// CONTENT TYPES
// ============================================================================

export type ContentType = "post" | "video" | "image" | "script" | "thumbnail";
export type ContentStatus = "draft" | "scheduled" | "published" | "archived";

export interface Content {
  id: string;
  userId: string;
  profileId?: string;
  title: string;
  description?: string;
  contentType: ContentType;
  mediaUrl?: string;
  status: ContentStatus;
  publishDate?: string;
  platforms: SocialPlatform[];
  metadata?: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

export interface CreateContentRequest {
  title: string;
  description?: string;
  contentType: ContentType;
  mediaUrl?: string;
  platforms: SocialPlatform[];
  profileId?: string;
  publishDate?: string;
}

export interface PublishContentRequest {
  contentId: string;
  platforms: SocialPlatform[];
}

// ============================================================================
// AI AGENT TYPES
// ============================================================================

export type AgentType =
  | "content"
  | "clipping"
  | "thumbnail"
  | "script"
  | "youtube"
  | "tiktok"
  | "instagram"
  | "x"
  | "facebook";

export interface Agent {
  id: string;
  userId: string;
  name: string;
  description?: string;
  agentType: AgentType;
  configuration: AgentConfiguration;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AgentConfiguration {
  style?: string;
  tone?: string;
  frequency?: string;
  targetAudience?: string;
  customPrompt?: string;
  [key: string]: any;
}

export interface CreateAgentRequest {
  name: string;
  description?: string;
  agentType: AgentType;
  configuration: AgentConfiguration;
}

export interface AgentExecutionResult {
  agentId: string;
  contentId: string;
  status: "success" | "failed";
  output?: any;
  error?: string;
  executedAt: string;
}

// ============================================================================
// AI GENERATION TYPES
// ============================================================================

export interface ImageGenerationRequest {
  prompt: string;
  style?: string;
  width?: number;
  height?: number;
  quality?: "low" | "medium" | "high";
}

export interface ImageGenerationResponse {
  imageUrl: string;
  prompt: string;
  generatedAt: string;
}

export interface VideoGenerationRequest {
  prompt: string;
  duration?: number;
  style?: string;
}

export interface VideoGenerationResponse {
  videoUrl: string;
  prompt: string;
  duration: number;
  generatedAt: string;
}

export interface ScriptGenerationRequest {
  topic: string;
  platform: SocialPlatform;
  length?: "short" | "medium" | "long";
  tone?: string;
}

export interface ScriptGenerationResponse {
  script: string;
  topic: string;
  platform: SocialPlatform;
  generatedAt: string;
}

export interface ThumbnailGenerationRequest {
  videoId: string;
  title?: string;
  style?: string;
}

export interface ThumbnailGenerationResponse {
  thumbnailUrl: string;
  generatedAt: string;
}

export interface VideoClippingRequest {
  videoUrl: string;
  duration?: number;
  captionStyle?: "bold" | "outline" | "shadow" | "gradient" | "minimal";
  autoClip?: boolean;
}

export interface VideoClip {
  id: string;
  startTime: number;
  endTime: number;
  caption?: string;
  thumbnail?: string;
}

export interface VideoClippingResponse {
  clips: VideoClip[];
  videoId: string;
  processedAt: string;
}

// ============================================================================
// ANALYTICS TYPES
// ============================================================================

export interface AnalyticsMetrics {
  views: number;
  followers: number;
  engagement: number;
  engagementRate: number;
  shares: number;
  comments: number;
  likes: number;
}

export interface PlatformAnalytics {
  platform: SocialPlatform;
  metrics: AnalyticsMetrics;
  date: string;
  trend?: "up" | "down" | "stable";
}

export interface AnalyticsData {
  userId: string;
  dateRange: {
    startDate: string;
    endDate: string;
  };
  platforms: PlatformAnalytics[];
  totalMetrics: AnalyticsMetrics;
}

export interface AnalyticsRequest {
  startDate: string;
  endDate: string;
  platforms?: SocialPlatform[];
}

// ============================================================================
// TRENDS TYPES
// ============================================================================

export interface Trend {
  id: string;
  keyword: string;
  category: string;
  volume: number;
  growth: number;
  platforms: SocialPlatform[];
  relatedKeywords: string[];
  discoveredAt: string;
}

export interface TrendAnalysis {
  trend: Trend;
  contentIdeas: ContentIdea[];
  competitionLevel: "low" | "medium" | "high";
  recommendedPlatforms: SocialPlatform[];
}

export interface ContentIdea {
  title: string;
  description: string;
  contentType: ContentType;
  estimatedReach: number;
}

// ============================================================================
// BILLING & CREDITS TYPES
// ============================================================================

export interface CreditPlan {
  name: UserPlan;
  price: number;
  credits: number;
  features: string[];
  isPopular?: boolean;
}

export interface Subscription {
  id: string;
  userId: string;
  plan: UserPlan;
  credits: number;
  creditsUsed: number;
  creditsRemaining: number;
  renewalDate: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreditTransaction {
  id: string;
  userId: string;
  amount: number;
  operation: "add" | "subtract" | "refund";
  description: string;
  createdAt: string;
}

export interface Invoice {
  id: string;
  userId: string;
  amount: number;
  currency: string;
  status: "paid" | "pending" | "failed";
  invoiceDate: string;
  dueDate: string;
  paidDate?: string;
  items: InvoiceItem[];
}

export interface InvoiceItem {
  description: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

// ============================================================================
// CALENDAR & SCHEDULING TYPES
// ============================================================================

export interface ScheduledContent {
  id: string;
  contentId: string;
  scheduledDate: string;
  status: "scheduled" | "published" | "failed";
  platforms: SocialPlatform[];
}

export interface CalendarEvent {
  id: string;
  userId: string;
  contentId?: string;
  title: string;
  description?: string;
  date: string;
  time?: string;
  type: "content" | "reminder" | "meeting";
  color?: string;
}

// ============================================================================
// SETTINGS TYPES
// ============================================================================

export interface UserSettings {
  userId: string;
  emailNotifications: boolean;
  pushNotifications: boolean;
  weeklyDigest: boolean;
  theme: "light" | "dark" | "auto";
  language: string;
  timezone: string;
  twoFactorEnabled: boolean;
  updatedAt: string;
}

export interface SecuritySettings {
  userId: string;
  passwordLastChanged: string;
  loginHistory: LoginHistory[];
  activeSessions: ActiveSession[];
  apiKeys: ApiKey[];
}

export interface LoginHistory {
  id: string;
  timestamp: string;
  ipAddress: string;
  userAgent: string;
  status: "success" | "failed";
}

export interface ActiveSession {
  id: string;
  device: string;
  ipAddress: string;
  lastActive: string;
  createdAt: string;
}

export interface ApiKey {
  id: string;
  name: string;
  key: string;
  createdAt: string;
  lastUsed?: string;
  isActive: boolean;
}

// ============================================================================
// API RESPONSE TYPES
// ============================================================================

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
  timestamp: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

// ============================================================================
// NOTIFICATION TYPES
// ============================================================================

export type NotificationType =
  | "success"
  | "error"
  | "warning"
  | "info";

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;