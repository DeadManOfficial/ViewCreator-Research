-- ViewCreator.AI Database Schema
-- Extracted from Technical Architecture Document

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
