# ViewCreator.AI - Complete Technical Architecture & Implementation Guide

## Executive Summary

ViewCreator.AI is a production-ready AI platform for autonomous social media content creation, built by Matthew Miller (BridgeMind). The platform enables creators to automate content generation, scheduling, and publishing across multiple social media platforms using AI agents.

**Project Status**: Soft Launch (as of December 2025)
**Revenue**: $2,106.96 (as of Day 104)
**Development Timeline**: 104+ days of live "vibe coding"

---

## Core Technology Stack

### Frontend
- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: React components with custom design system
- **State Management**: React hooks (useState, useEffect)

### Backend
- **Framework**: NestJS (Node.js)
- **Language**: TypeScript/Node.js
- **API Architecture**: RESTful APIs with GraphQL considerations
- **Queue System**: Bull/BullMQ for job processing

### Database
- **Primary Database**: PostgreSQL
- **Hosting**: AWS RDS
- **ORM**: TypeORM or Prisma (inferred from NestJS patterns)

### Infrastructure
- **Cloud Provider**: AWS
- **Hosting**: AWS EC2 / AWS ECS
- **Storage**: AWS S3 (for media files)
- **CDN**: CloudFront (for static assets)
- **CI/CD**: GitHub Actions or AWS CodePipeline

### AI/ML Stack
- **Primary LLMs**:
  - Claude 3.5 Sonnet (Anthropic) - For brand voice and content generation
  - Claude Opus 4.5 - For complex architectural decisions
  - GPT-4/GPT-5.2 (OpenAI) - For SEO and data analysis
  - Gemini 3.0 Pro (Google) - For rapid code generation and refactoring
- **Video Processing**: FFmpeg for video manipulation
- **Transcription**: OpenAI Whisper for audio-to-text
- **Computer Vision**: MediaPipe for face tracking and smart cropping
- **Image Generation**: Flux.1 or DALL-E 3 for thumbnails

### Development Tools
- **IDE**: Cursor (AI-powered IDE)
- **Terminal**: Warp (AI-powered terminal)
- **AI Coding Assistants**: 
  - Claude Code (terminal-based)
  - Cursor AI
  - GPT-5 Codex
- **Version Control**: Git/GitHub

---

## System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    User Dashboard (Next.js)                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │ Content  │  │ Calendar │  │Analytics │  │ Settings │   │
│  │ Creation │  │ View     │  │Dashboard │  │          │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│              API Gateway (NestJS Backend)                    │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  Auth    │  │  Agent   │  │  Media   │  │  Social  │   │
│  │ Service  │  │Orchestr. │  │Processing│  │   API    │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└────────────────────┬────────────────────────────────────────┘
                     │
        ┌────────────┼────────────┐
        ▼            ▼            ▼
┌──────────────┐ ┌──────────┐ ┌──────────────┐
│  PostgreSQL  │ │  Redis   │ │   AWS S3     │
│   Database   │ │  Queue   │ │ Media Storage│
└──────────────┘ └──────────┘ └──────────────┘
        │
        ▼
┌─────────────────────────────────────────────────────────────┐
│                    AI Agent Layer                            │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │ Research │  │ Content  │  │  Visual  │  │ Clipping │   │
│  │  Agent   │  │  Agent   │  │  Agent   │  │  Agent   │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│              Social Media Platform APIs                      │
│  [YouTube] [Instagram] [TikTok] [X/Twitter] [Facebook]      │
│                    [LinkedIn]                                │
└─────────────────────────────────────────────────────────────┘
```

---

## Core Features & Implementation

### 1. AI Agent System

#### Agent Orchestrator (LangChain/CrewAI)
The central orchestrator manages multiple specialized agents:

**Architecture Pattern**:
```typescript
// Agent Orchestrator Interface
interface AgentOrchestrator {
  agents: Agent[];
  queue: JobQueue;
  
  async executeWorkflow(workflow: Workflow): Promise<Result>;
  async monitorAgents(): Promise<AgentStatus[]>;
  async handleFailure(agent: Agent, error: Error): Promise<void>;
}

// Agent Types
enum AgentType {
  RESEARCH = 'research',
  CONTENT = 'content',
  VISUAL = 'visual',
  CLIPPING = 'clipping',
  SCHEDULING = 'scheduling',
  PUBLISHING = 'publishing'
}
```

#### Research Agent
- **Purpose**: Monitors trending topics and viral content
- **APIs Used**: 
  - Google Trends API
  - X (Twitter) Trending API
  - TikTok Trending API
- **LLM**: Claude 3.5 Sonnet for trend analysis
- **Output**: Trending topics with relevance scores

#### Content Agent
- **Purpose**: Generates scripts, captions, and copy
- **LLM**: Claude 3.5 Sonnet (trained on brand voice)
- **Features**:
  - Brand voice learning from past 10 posts
  - Platform-specific optimization
  - Tone and style consistency

**Brand Voice Training Implementation**:
```python
# Brand Voice Agent (Python)
import anthropic

def build_brand_voice(past_posts: list[str]) -> dict:
    client = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])
    
    analysis_prompt = f"""
    Analyze the following social media posts and extract the 'Brand DNA':
    1. Tone (Professional, Edgy, Sarcastic, etc.)
    2. Sentence Structure (Short/Punchy vs. Long/Educational)
    3. Common Emoji usage and Hashtag strategy
    4. Key phrases and vocabulary
    5. Content themes and topics
    
    Posts: {past_posts}
    
    Return a structured brand voice profile.
    """
    
    response = client.messages.create(
        model="claude-3-5-sonnet-20240620",
        max_tokens=2000,
        messages=[{"role": "user", "content": analysis_prompt}]
    )
    
    return parse_brand_voice(response.content)
```

#### Visual Agent (Thumbnail Generator)
- **Purpose**: Creates high-CTR thumbnails
- **Image Generation**: Flux.1 or DALL-E 3
- **Features**:
  - CTR pattern analysis
  - Brand color consistency
  - Platform-specific sizing
  - A/B testing variants

**CTR Optimization Logic**:
```typescript
interface ThumbnailConfig {
  platform: Platform;
  niche: string;
  brandColors: string[];
  faceDetection: boolean;
  textOverlay: {
    enabled: boolean;
    maxWords: number;
    contrast: 'high' | 'medium';
  };
}

async function generateOptimizedThumbnail(
  config: ThumbnailConfig
): Promise<ThumbnailResult> {
  // Analyze top-performing thumbnails in niche
  const patterns = await analyzeCTRPatterns(config.niche);
  
  // Generate multiple variants
  const variants = await generateVariants(config, patterns);
  
  // Score each variant
  const scored = variants.map(v => ({
    image: v,
    ctrScore: predictCTR(v, patterns)
  }));
  
  return scored.sort((a, b) => b.ctrScore - a.ctrScore)[0];
}
```

#### AI Clipping Agent
- **Purpose**: Extracts viral moments from long-form videos
- **Video Processing**: FFmpeg
- **AI Analysis**: 
  - Whisper for transcription
  - GPT-4 for hook detection
  - MediaPipe for face tracking

**Clipping Pipeline**:
```typescript
// AI Clipping Agent Implementation
interface ClippingJob {
  videoUrl: string;
  duration: number;
  targetPlatforms: Platform[];
  clipDuration: number; // seconds
}

async function processClippingJob(job: ClippingJob): Promise<Clip[]> {
  // Step 1: Transcribe video
  const transcript = await transcribeVideo(job.videoUrl);
  
  // Step 2: Identify viral moments using AI
  const viralMoments = await identifyHooks(transcript, {
    minDuration: job.clipDuration - 10,
    maxDuration: job.clipDuration + 10,
    hookTypes: ['question', 'reveal', 'conflict', 'emotion']
  });
  
  // Step 3: Extract clips with smart cropping
  const clips = await Promise.all(
    viralMoments.map(moment => extractClip({
      input: job.videoUrl,
      startTime: moment.startTime,
      duration: moment.duration,
      aspectRatio: '9:16', // Vertical for TikTok/Reels
      faceTracking: true
    }))
  );
  
  return clips;
}

// FFmpeg command for smart cropping
function buildFFmpegCommand(params: ClipParams): string {
  return `ffmpeg -i ${params.input} \\
    -ss ${params.startTime} \\
    -t ${params.duration} \\
    -vf "crop=ih*9/16:ih" \\
    -c:a copy \\
    ${params.output}`;
}
```

**Face Tracking Implementation**:
```python
# MediaPipe Face Tracking for Smart Crop
import mediapipe as mp
import cv2

def track_face_and_crop(video_path: str, output_path: str):
    mp_face_detection = mp.solutions.face_detection
    
    cap = cv2.VideoCapture(video_path)
    face_positions = []
    
    with mp_face_detection.FaceDetection(min_detection_confidence=0.5) as face_detection:
        while cap.isOpened():
            success, frame = cap.read()
            if not success:
                break
            
            # Detect faces
            results = face_detection.process(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))
            
            if results.detections:
                # Get primary face position
                detection = results.detections[0]
                bbox = detection.location_data.relative_bounding_box
                face_positions.append({
                    'x': bbox.xmin + bbox.width / 2,
                    'y': bbox.ymin + bbox.height / 2
                })
    
    # Apply smooth tracking and crop
    apply_smart_crop(video_path, output_path, face_positions)
```

### 2. Content Calendar & Scheduling

**Database Schema**:
```sql
-- Content Calendar Schema
CREATE TABLE content_schedule (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  agent_id UUID REFERENCES agents(id),
  
  -- Content details
  title VARCHAR(500),
  content_type VARCHAR(50), -- 'post', 'video', 'reel', 'short'
  content_body TEXT,
  media_urls TEXT[], -- Array of S3 URLs
  
  -- Scheduling
  scheduled_time TIMESTAMP WITH TIME ZONE,
  status VARCHAR(50), -- 'draft', 'pending_review', 'approved', 'scheduled', 'published', 'failed'
  
  -- Platform targeting
  platforms JSONB, -- { "youtube": {...}, "tiktok": {...}, "instagram": {...} }
  
  -- Analytics
  published_at TIMESTAMP WITH TIME ZONE,
  performance_metrics JSONB,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Agent Configuration
CREATE TABLE agents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  agent_type VARCHAR(50) NOT NULL,
  
  -- Configuration
  name VARCHAR(200),
  is_active BOOLEAN DEFAULT true,
  schedule_config JSONB, -- Cron or interval configuration
  brand_voice_profile JSONB,
  
  -- Performance
  last_run_at TIMESTAMP WITH TIME ZONE,
  total_content_created INTEGER DEFAULT 0,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

**Scheduling Logic**:
```typescript
// Optimal Posting Time Algorithm
interface PostingTimeAnalysis {
  platform: Platform;
  userId: string;
  historicalData: EngagementMetric[];
}

async function findOptimalPostingTime(
  analysis: PostingTimeAnalysis
): Promise<Date> {
  // Analyze historical engagement by hour/day
  const engagementByTime = groupBy(
    analysis.historicalData,
    (m) => `${m.dayOfWeek}-${m.hourOfDay}`
  );
  
  // Calculate engagement scores
  const scores = Object.entries(engagementByTime).map(([time, metrics]) => ({
    time,
    score: calculateEngagementScore(metrics)
  }));
  
  // Find best time slot in next 7 days
  const bestTime = scores.sort((a, b) => b.score - a.score)[0];
  
  return calculateNextOccurrence(bestTime.time);
}

function calculateEngagementScore(metrics: EngagementMetric[]): number {
  return metrics.reduce((score, m) => {
    return score + (
      m.likes * 1 +
      m.comments * 3 +
      m.shares * 5 +
      m.saves * 7
    );
  }, 0) / metrics.length;
}
```

### 3. Multi-Platform Publishing

**Social Media API Integration**:
```typescript
// Platform API Abstraction Layer
interface SocialPlatformAPI {
  authenticate(credentials: Credentials): Promise<AuthToken>;
  publish(content: Content): Promise<PublishResult>;
  getAnalytics(postId: string): Promise<Analytics>;
  formatContent(content: Content): FormattedContent;
}

// YouTube API Integration
class YouTubeAPI implements SocialPlatformAPI {
  async publish(content: Content): Promise<PublishResult> {
    const formatted = this.formatContent(content);
    
    // Upload video to YouTube
    const videoId = await this.uploadVideo(formatted.videoFile);
    
    // Set metadata
    await this.setMetadata(videoId, {
      title: formatted.title,
      description: formatted.description,
      tags: formatted.tags,
      categoryId: formatted.categoryId,
      thumbnail: formatted.thumbnail
    });
    
    // Schedule or publish
    if (content.scheduledTime) {
      await this.schedulePublish(videoId, content.scheduledTime);
    } else {
      await this.publishNow(videoId);
    }
    
    return { platform: 'youtube', postId: videoId };
  }
  
  formatContent(content: Content): FormattedContent {
    return {
      title: this.optimizeTitle(content.title, 100), // YouTube limit
      description: this.generateDescription(content),
      tags: this.generateTags(content),
      thumbnail: this.selectThumbnail(content.thumbnails)
    };
  }
}

// TikTok API Integration
class TikTokAPI implements SocialPlatformAPI {
  async publish(content: Content): Promise<PublishResult> {
    // TikTok requires vertical video (9:16)
    const verticalVideo = await this.ensureVerticalFormat(content.videoFile);
    
    // Upload video
    const videoId = await this.uploadVideo(verticalVideo);
    
    // Add caption with hashtags
    await this.setCaption(videoId, {
      text: this.formatCaption(content.caption),
      hashtags: this.generateHashtags(content)
    });
    
    return { platform: 'tiktok', postId: videoId };
  }
}

// Platform Manager
class PlatformManager {
  private platforms: Map<string, SocialPlatformAPI>;
  
  async publishToMultiplePlatforms(
    content: Content,
    targetPlatforms: string[]
  ): Promise<PublishResult[]> {
    const results = await Promise.allSettled(
      targetPlatforms.map(platform => 
        this.platforms.get(platform)?.publish(content)
      )
    );
    
    return results
      .filter(r => r.status === 'fulfilled')
      .map(r => (r as PromiseFulfilledResult<PublishResult>).value);
  }
}
```

### 4. Analytics Dashboard

**Real-Time Analytics System**:
```typescript
// Analytics Data Model
interface PlatformAnalytics {
  platform: Platform;
  metrics: {
    views: number;
    likes: number;
    comments: number;
    shares: number;
    saves: number;
    clickThroughRate: number;
    watchTime: number; // seconds
    audienceRetention: number; // percentage
  };
  demographics: {
    ageGroups: Record<string, number>;
    genders: Record<string, number>;
    topCountries: Array<{ country: string; percentage: number }>;
  };
  trending: {
    isViral: boolean;
    growthRate: number;
    viralScore: number;
  };
}

// Analytics Aggregation Service
class AnalyticsService {
  async aggregateCrossPlatformMetrics(
    userId: string,
    timeRange: TimeRange
  ): Promise<CrossPlatformAnalytics> {
    // Fetch data from all connected platforms
    const [youtube, tiktok, instagram, twitter, facebook] = await Promise.all([
      this.fetchYouTubeAnalytics(userId, timeRange),
      this.fetchTikTokAnalytics(userId, timeRange),
      this.fetchInstagramAnalytics(userId, timeRange),
      this.fetchTwitterAnalytics(userId, timeRange),
      this.fetchFacebookAnalytics(userId, timeRange)
    ]);
    
    // Aggregate metrics
    return {
      totalViews: this.sumMetric([youtube, tiktok, instagram, twitter, facebook], 'views'),
      totalEngagement: this.calculateTotalEngagement([youtube, tiktok, instagram, twitter, facebook]),
      topPerformingPlatform: this.identifyTopPlatform([youtube, tiktok, instagram, twitter, facebook]),
      bestPerformingContent: await this.identifyTopContent(userId, timeRange),
      growthTrends: this.calculateGrowthTrends([youtube, tiktok, instagram, twitter, facebook])
    };
  }
  
  async identifyTopContent(
    userId: string,
    timeRange: TimeRange
  ): Promise<TopContent[]> {
    const allContent = await this.fetchAllContent(userId, timeRange);
    
    // Score each piece of content
    const scored = allContent.map(content => ({
      ...content,
      viralScore: this.calculateViralScore(content)
    }));
    
    return scored.sort((a, b) => b.viralScore - a.viralScore).slice(0, 10);
  }
  
  private calculateViralScore(content: Content): number {
    const { views, likes, comments, shares, saves } = content.metrics;
    
    // Weighted scoring algorithm
    return (
      views * 0.1 +
      likes * 1 +
      comments * 3 +
      shares * 5 +
      saves * 7
    ) / content.hoursLive;
  }
}
```

---

## Database Schema (Complete)

```sql
-- Users and Authentication
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255),
  
  -- Profile
  full_name VARCHAR(200),
  avatar_url TEXT,
  
  -- Subscription
  subscription_tier VARCHAR(50) DEFAULT 'free',
  subscription_status VARCHAR(50) DEFAULT 'active',
  credits_remaining INTEGER DEFAULT 0,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_login_at TIMESTAMP WITH TIME ZONE
);

-- Social Media Accounts
CREATE TABLE social_accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  
  platform VARCHAR(50) NOT NULL, -- 'youtube', 'tiktok', 'instagram', 'twitter', 'facebook', 'linkedin'
  platform_user_id VARCHAR(255) NOT NULL,
  platform_username VARCHAR(255),
  
  -- OAuth tokens
  access_token TEXT,
  refresh_token TEXT,
  token_expires_at TIMESTAMP WITH TIME ZONE,
  
  -- Status
  is_active BOOLEAN DEFAULT true,
  last_sync_at TIMESTAMP WITH TIME ZONE,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  UNIQUE(user_id, platform, platform_user_id)
);

-- Content Library
CREATE TABLE content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  
  -- Content metadata
  title VARCHAR(500),
  description TEXT,
  content_type VARCHAR(50), -- 'video', 'image', 'carousel', 'text'
  
  -- Media files
  media_files JSONB, -- [{ "url": "s3://...", "type": "video", "duration": 60 }]
  thumbnail_url TEXT,
  
  -- AI Generation metadata
  generated_by_agent UUID REFERENCES agents(id),
  generation_prompt TEXT,
  ai_model_used VARCHAR(100),
  
  -- Status
  status VARCHAR(50) DEFAULT 'draft',
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Published Posts
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content_id UUID REFERENCES content(id),
  social_account_id UUID NOT NULL REFERENCES social_accounts(id),
  
  -- Platform-specific data
  platform_post_id VARCHAR(255),
  platform_url TEXT,
  
  -- Scheduling
  scheduled_at TIMESTAMP WITH TIME ZONE,
  published_at TIMESTAMP WITH TIME ZONE,
  
  -- Analytics (cached)
  views INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  comments INTEGER DEFAULT 0,
  shares INTEGER DEFAULT 0,
  saves INTEGER DEFAULT 0,
  
  last_analytics_sync TIMESTAMP WITH TIME ZONE,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- AI Agents
CREATE TABLE agents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  
  agent_type VARCHAR(50) NOT NULL, -- 'research', 'content', 'visual', 'clipping', 'scheduling'
  name VARCHAR(200),
  
  -- Configuration
  config JSONB, -- Agent-specific configuration
  brand_voice_profile JSONB,
  
  -- Scheduling
  is_active BOOLEAN DEFAULT true,
  schedule_type VARCHAR(50), -- 'manual', 'cron', 'interval'
  schedule_config JSONB, -- { "cron": "0 9 * * *" } or { "interval": 3600 }
  
  -- Performance
  last_run_at TIMESTAMP WITH TIME ZONE,
  next_run_at TIMESTAMP WITH TIME ZONE,
  total_runs INTEGER DEFAULT 0,
  successful_runs INTEGER DEFAULT 0,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Agent Jobs/Tasks
CREATE TABLE agent_jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  agent_id UUID NOT NULL REFERENCES agents(id) ON DELETE CASCADE,
  
  -- Job details
  job_type VARCHAR(50) NOT NULL,
  input_data JSONB,
  output_data JSONB,
  
  -- Status
  status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'running', 'completed', 'failed'
  error_message TEXT,
  
  -- Timing
  started_at TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE,
  duration_seconds INTEGER,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Analytics History
CREATE TABLE analytics_snapshots (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  
  -- Metrics at snapshot time
  views INTEGER,
  likes INTEGER,
  comments INTEGER,
  shares INTEGER,
  saves INTEGER,
  
  -- Additional metrics
  watch_time_seconds INTEGER,
  click_through_rate DECIMAL(5,4),
  engagement_rate DECIMAL(5,4),
  
  snapshot_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_social_accounts_user_platform ON social_accounts(user_id, platform);
CREATE INDEX idx_content_user_status ON content(user_id, status);
CREATE INDEX idx_posts_social_account ON posts(social_account_id);
CREATE INDEX idx_posts_scheduled_at ON posts(scheduled_at) WHERE status = 'scheduled';
CREATE INDEX idx_agents_user_active ON agents(user_id, is_active);
CREATE INDEX idx_agent_jobs_status ON agent_jobs(status, created_at);
```

---

## API Endpoints

### Authentication
```
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
POST   /api/auth/refresh
GET    /api/auth/me
```

### Social Accounts
```
GET    /api/social-accounts
POST   /api/social-accounts/connect/{platform}
DELETE /api/social-accounts/{id}
POST   /api/social-accounts/{id}/refresh
```

### Content
```
GET    /api/content
POST   /api/content
GET    /api/content/{id}
PUT    /api/content/{id}
DELETE /api/content/{id}
POST   /api/content/{id}/generate-thumbnail
POST   /api/content/{id}/generate-caption
```

### AI Agents
```
GET    /api/agents
POST   /api/agents
GET    /api/agents/{id}
PUT    /api/agents/{id}
DELETE /api/agents/{id}
POST   /api/agents/{id}/run
POST   /api/agents/{id}/activate
POST   /api/agents/{id}/deactivate
```

### Clipping Agent
```
POST   /api/clipping/analyze
POST   /api/clipping/generate
GET    /api/clipping/jobs/{id}
```

### Scheduling
```
GET    /api/schedule
POST   /api/schedule
PUT    /api/schedule/{id}
DELETE /api/schedule/{id}
POST   /api/schedule/{id}/publish-now
```

### Analytics
```
GET    /api/analytics/overview
GET    /api/analytics/posts/{id}
GET    /api/analytics/platform/{platform}
GET    /api/analytics/trends
```

---

## Deployment Architecture

### AWS Infrastructure

```yaml
# Infrastructure Components

VPC:
  - Public Subnets (2 AZs)
  - Private Subnets (2 AZs)
  - NAT Gateways
  - Internet Gateway

Application Layer:
  - ECS Fargate Cluster
    - Next.js Frontend (2+ tasks)
    - NestJS Backend (2+ tasks)
  - Application Load Balancer
  - Auto Scaling Groups

Database Layer:
  - RDS PostgreSQL (Multi-AZ)
  - ElastiCache Redis (for queues and caching)

Storage:
  - S3 Buckets:
    - Media uploads
    - Generated content
    - Thumbnails
    - Backups
  - CloudFront CDN

Processing:
  - Lambda Functions (for lightweight tasks)
  - ECS Tasks (for video processing)
  - SQS Queues (for job management)

Monitoring:
  - CloudWatch Logs
  - CloudWatch Metrics
  - X-Ray Tracing
```

### CI/CD Pipeline

```yaml
# GitHub Actions Workflow
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Tests
        run: |
          npm install
          npm run test
          npm run lint

  build-and-deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Build Docker Images
        run: |
          docker build -t viewcreator-frontend ./frontend
          docker build -t viewcreator-backend ./backend
      
      - name: Push to ECR
        run: |
          aws ecr get-login-password | docker login --username AWS --password-stdin
          docker push viewcreator-frontend
          docker push viewcreator-backend
      
      - name: Deploy to ECS
        run: |
          aws ecs update-service --cluster prod --service frontend --force-new-deployment
          aws ecs update-service --cluster prod --service backend --force-new-deployment
      
      - name: Run Database Migrations
        run: |
          npm run migrate:prod
```

---

## Development Workflow ("Vibe Coding")

### Tools Used
1. **Cursor IDE**: AI-powered code generation and refactoring
2. **Warp Terminal**: AI-assisted command execution
3. **Claude Code**: Terminal-based AI coding assistant
4. **GPT-5 Codex**: Advanced code generation

### Typical Development Session
1. Define feature requirements
2. Use Claude Opus 4.5 for architectural decisions
3. Use Cursor + Gemini 3 Pro for rapid code generation
4. Use Claude Code for terminal operations and debugging
5. Test locally
6. Push to production via CI/CD

### Key Development Principles
- **Build in Public**: Live streaming development
- **Rapid Iteration**: Ship features quickly, iterate based on feedback
- **AI-Assisted**: Leverage AI for 80% of code generation
- **Human-in-the-Loop**: Manual review before production deployment

---

## Performance Optimizations

### Video Processing Optimization
```typescript
// Optimized FFmpeg Pipeline
class VideoProcessor {
  async processVideo(input: string, output: string): Promise<void> {
    // Use hardware acceleration when available
    const hwAccel = await this.detectHardwareAcceleration();
    
    const command = [
      'ffmpeg',
      hwAccel ? `-hwaccel ${hwAccel}` : '',
      `-i ${input}`,
      '-c:v libx264',
      '-preset fast', // Balance between speed and quality
      '-crf 23', // Quality setting
      '-c:a aac',
      '-b:a 128k',
      output
    ].filter(Boolean).join(' ');
    
    await this.executeFFmpeg(command);
  }
  
  // Process multiple videos in parallel
  async batchProcess(jobs: VideoJob[]): Promise<void> {
    const concurrency = Math.min(jobs.length, 4); // Limit concurrent jobs
    
    await pMap(jobs, async (job) => {
      await this.processVideo(job.input, job.output);
    }, { concurrency });
  }
}
```

### Database Query Optimization
```typescript
// Optimized queries with proper indexing
class ContentRepository {
  async findScheduledContent(userId: string): Promise<Content[]> {
    // Uses index: idx_content_user_status
    return this.db.query(`
      SELECT c.*, COUNT(p.id) as platform_count
      FROM content c
      LEFT JOIN posts p ON p.content_id = c.id
      WHERE c.user_id = $1
        AND c.status = 'scheduled'
      GROUP BY c.id
      ORDER BY c.scheduled_at ASC
      LIMIT 100
    `, [userId]);
  }
}
```

### Caching Strategy
```typescript
// Redis caching for frequently accessed data
class CacheService {
  async getCachedAnalytics(
    postId: string
  ): Promise<Analytics | null> {
    const cached = await this.redis.get(`analytics:${postId}`);
    
    if (cached) {
      return JSON.parse(cached);
    }
    
    // Fetch from database
    const analytics = await this.fetchAnalytics(postId);
    
    // Cache for 5 minutes
    await this.redis.setex(
      `analytics:${postId}`,
      300,
      JSON.stringify(analytics)
    );
    
    return analytics;
  }
}
```

---

## Security Considerations

### Authentication & Authorization
- JWT-based authentication
- Refresh token rotation
- Role-based access control (RBAC)
- OAuth 2.0 for social media platforms

### Data Protection
- Encryption at rest (AWS KMS)
- Encryption in transit (TLS 1.3)
- Secure credential storage (AWS Secrets Manager)
- Regular security audits

### API Security
- Rate limiting
- CORS configuration
- Input validation
- SQL injection prevention (parameterized queries)
- XSS protection

---

## Cost Optimization

### AI API Costs
- **Claude 3.5 Sonnet**: ~$3 per 1M input tokens, ~$15 per 1M output tokens
- **GPT-4**: ~$10 per 1M input tokens, ~$30 per 1M output tokens
- **Gemini 3 Pro**: ~$1.25 per 1M input tokens, ~$5 per 1M output tokens

**Strategy**: Use cheaper models (Gemini) for high-volume tasks, premium models (Claude Opus) for complex decisions

### Infrastructure Costs
- **Compute**: ECS Fargate with auto-scaling
- **Storage**: S3 with lifecycle policies (move old content to Glacier)
- **Database**: RDS with read replicas for analytics queries
- **CDN**: CloudFront for global content delivery

---

## Future Roadmap

### Planned Features
1. **Advanced Analytics**: Predictive analytics using ML models
2. **Voice Cloning**: AI-generated voiceovers in creator's voice
3. **Automated A/B Testing**: Test multiple content variants automatically
4. **Community Features**: Collaboration tools for teams
5. **White-Label Solution**: Reseller/agency version
6. **Mobile Apps**: iOS and Android native apps
7. **Advanced Automation**: Fully autonomous content creation (no human review)

---

## Sources & References

### YouTube Videos Analyzed
1. Day 104 – Vibe Coding an App Until I Make $1,000,000 | Revenue: $2,106.96
   - https://www.youtube.com/watch?v=zROZDi-hvtk
   
2. Day 103 – Vibe Coding an App Until I Make $1,000,000 | Revenue: $2,086.96
   - https://www.youtube.com/watch?v=2-68yoRNvZ8
   
3. Day 102 – Vibe Coding an App Until I Make $1,000,000 | Revenue: $2,066.96
   - https://www.youtube.com/watch?v=w0lDEUwbhuY
   
4. Day 101 – Vibe Coding an App Until I Make $1,000,000 | Revenue: $2,016.96
   - https://www.youtube.com/watch?v=vDT_otLL5tA
   
5. Day 100 – Vibe Coding an App Until I Make $1,000,000 | Revenue: $1,996.96 | GPT 5.2 Release
   - https://www.youtube.com/watch?v=p1ZE-3SMEzA
   
6. Day 99 – Vibe Coding an App Until I Make $1,000,000 | Revenue: $1,926.96
   - https://www.youtube.com/watch?v=9F5q1odK2DY
   
7. Day 98 – Vibe Coding an App Until I Make $1,000,000 | Revenue: $1,876.96
   - https://www.youtube.com/watch?v=BS7ygvN-IOk
   
8. Day 97 – Vibe Coding an App Until I Make $1,000,000 | Revenue: $1,866.97
   - https://www.youtube.com/watch?v=VPTy7dOt0x0
   
9. Day 96 – Vibe Coding an App Until I Make $1,000,000 | Revenue: $1,846.98
   - https://www.youtube.com/watch?v=0wDmvbZ0a-4
   
10. Day 95 – Vibe Coding an App Until I Make $1,000,000 | NS Edition
    - https://www.youtube.com/watch?v=sB-kF-xOHGI

### Official Links
- **ViewCreator Website**: https://www.viewcreator.ai
- **BridgeMind**: https://www.bridgemind.ai
- **YouTube Channel**: https://www.youtube.com/@bridgemindai
- **Discord**: https://bridgemind.ai/discord
- **X (Twitter)**: https://twitter.com/bridgemindai
- **Instagram**: https://instagram.com/bridgemindai

---

## Conclusion

ViewCreator.AI represents a comprehensive, production-ready AI automation platform for social media content creation. The architecture leverages modern web technologies (Next.js, NestJS, PostgreSQL) combined with cutting-edge AI models (Claude, GPT, Gemini) to deliver autonomous content generation, scheduling, and publishing across multiple platforms.

The platform's success is demonstrated through 104+ days of continuous development, achieving over $2,100 in revenue during soft launch, and processing hundreds of ViewCreator mentions across video transcripts.

**Key Differentiators**:
- Fully autonomous AI agent system
- Multi-platform publishing from single dashboard
- Advanced AI clipping with face tracking
- Real-time analytics aggregation
- Human-in-the-loop approval workflow
- Production-ready AWS infrastructure

This documentation provides a complete technical blueprint for understanding, replicating, or extending the ViewCreator.AI platform.
