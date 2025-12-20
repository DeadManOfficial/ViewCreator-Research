# ViewCreator.AI - Complete Dashboard Documentation

## Overview
ViewCreator is a comprehensive AI-powered content creation and publishing platform for multi-platform social media management. The authenticated dashboard at `creator.viewcreator.ai` provides creators with tools to manage content, agents, analytics, and account settings.

---

## 1. DASHBOARD STRUCTURE

### Left Sidebar Navigation
The sidebar is organized into five main sections with collapsible navigation:

#### PLATFORM Section
- **Post** - Create and manage individual posts for publishing
- **Platform Tools** - Dropdown menu for platform-specific utilities

#### CONTENT Section
- **Create** - AI-powered content creation playground (image/video generation)
- **Profiles** - Manage brand identities and creator profiles
- **Connect Socials** - Link social media accounts (YouTube, Instagram, TikTok, X, Facebook)

#### ANALYTICS Section
- **Analytics** - Track performance metrics and engagement across platforms
- **Trends** - Discover trending topics and keywords for content planning

#### AGENTS Section
- **Agents** - Create and manage AI agents for automation
- **AI Clipping Agent** - Turn long-form videos into viral shorts
- **Spark** - AI creative assistant (Premium feature)
- **Calendar** - Content calendar for scheduling and planning

#### ACCOUNT Section
- **Settings** - Account preferences, billing, security, and integrations

#### Additional Controls
- **Light/Dark Mode Toggle** - Switch between themes
- **Feedback Button** - Send feedback to the team
- **Sign Out Button** - Logout from the account
- **Collapse Sidebar Button** - Hide/show navigation

---

## 2. MAIN DASHBOARD (HOME)

### Header
- **Greeting**: "Good morning, [Username]"
- **Subtitle**: "Here's what's happening with your content today."
- **Credits Display**: Shows available credits in top right

### Quick Action Cards (4-Column Grid)
1. **Create Post** - Navigate to post creation workflow
2. **New Agent** - Create a new AI agent
3. **Add Profile** - Create a new brand profile
4. **Connect Social** - Link a social media account

### Recent Activity Section
Displays recent actions with timestamps and credit usage:
- **Activity Type**: AI Clipping job, Monthly plan bonus, etc.
- **Credit Activity**: Shows credits consumed/added
- **Status**: Succeeded/Failed/Pending
- **Timestamp**: Date and time of activity

### Right Sidebar

#### Connected Accounts
- Shows linked social media profiles
- Displays online/offline status (green dot for online)
- Example: "DeadManAI // The Unseen" (YouTube)
- Option to manage connections

#### Brand Profiles
- Lists created brand identities
- Shows "No brand profiles" if none exist
- CTA to create first profile

#### Feedback Widget
- "Enjoying ViewCreator?" prompt
- Encourages user reviews
- "Write a Review" button

---

## 3. POST CREATION WORKFLOW

### URL: `/post`

**Four-Step Workflow**:
1. **Identity** - Select brand profile to publish as
2. **Format** - Choose content format (image, video, etc.)
3. **Channels** - Select platforms to publish to
4. **Publish** - Schedule and publish content

**Current State**: Step 1 - Select Brand Identity
- Heading: "Who is this post for?"
- Instruction: "Select the brand profile you'd like to publish as."
- Status: "No profiles found" - requires profile creation first
- CTA: "Create First Profile"

---

## 4. CREATE (PLAYGROUND)

### URL: `/create`

**Purpose**: AI-powered content generation playground

**Tabs**: Image | Video

#### Image Generation Section

**What Would You Like To Do?**
- Create from Text
- Transform Image

**Quality Level Options**:
1. **Premium ✨ Best** - 6 credits
   - "Our best image generator with 4K resolution and superior detail."
   
2. **Standard** - 2 credits
   - "Fast and affordable image generation perfect for drafts."
   
3. **Advanced model selection**
   - Nano Banana Pro - 6 credits
   - "Best image generation model."

**Aspect Ratio**:
- Square (1:1)
- Portrait
- Landscape
- Custom ratio selector

**Resolution**: Dropdown selector for output resolution

**Settings**: Expandable advanced settings

**Content Description**:
- Text area for detailed prompts
- Placeholder: "Describe what you want to create..."
- Estimated cost display (~6 credits)

**Tabs**:
- Canvas - Shows generated images
- History - View previous generations

**CTA**: "Generate" button (requires model selection and description)

---

## 5. PROFILES

### URL: `/profiles`

**Purpose**: Manage brand identities and creator profiles

**Current State**: Empty state
- Icon: Building/profile icon
- Heading: "Create Your First Profile"
- Description: "Build a complete profile with logo, colors, voice, and social links. Perfect for brands and creators managing their identity."
- CTA: "Create Profile" button

---

## 6. CONNECT SOCIALS

### URL: `/connect-socials`

**Purpose**: Manage social media integrations

**Connection Limit Display**:
- Shows: "1 / 1" (1 connected, 1 slot available)
- "0 slots available" message
- "Upgrade Plan" link for more slots

**Platform Cards** (Grid Layout):

1. **YouTube** (Red icon)
   - Status: "1 connected"
   - Account: "DeadManAI // The Unseen"
   - Expiration: "Expires soon" (warning)
   - Actions: "Add" button, "Disconnect" button

2. **Instagram** (Pink icon)
   - Status: "Not connected"
   - Description: "Share reels and stories directly to your Instagram audience."
   - CTA: "Connect Instagram"

3. **Facebook** (Blue icon)
   - Status: "Not connected"
   - Description: "Post updates and videos to your Facebook pages."
   - CTA: "Connect Facebook"

4. **TikTok** (Black icon)
   - Status: "Not connected"
   - Description: "Upload viral content to TikTok and track engagement."
   - CTA: "Connect TikTok"

5. **X** (Black icon)
   - Status: "Not connected"
   - Description: "Share updates and threads with your X followers."
   - CTA: "Connect X"

6. **Connect Another** (Plus icon)
   - Description: "Add more social profiles"
   - CTA: "Connect Another"

---

## 7. ANALYTICS

### URL: `/analytics`

**Purpose**: Track performance metrics across platforms

**Date Range Selector**: "Last 30 days" (dropdown)

**Current State**: Empty state (requires brand profile)
- Icon: People/analytics icon
- Heading: "Select a brand to get started"
- Description: "Choose a brand profile to see cross-platform analytics and trends."
- CTA: "Create Profile" button

**Expected Features** (from landing page):
- Total Views metric
- Followers metric
- Activity trends
- Cross-platform performance comparison
- Audience demographics

---

## 8. TRENDS (TOPIC RESEARCH)

### URL: `/trends`

**Purpose**: Discover trending topics and keywords

**Location Selector**: "United States" (dropdown)

**API Configuration Status**:
- DataForSEO: "Not Configured" (red badge)
- YouTube API: "Not Configured" (red badge)

**Tabs**:
1. **Analyze Topic** (Active)
2. **Compare**
3. **Trending**
4. **Tags**

#### Analyze Topic Tab
- **Heading**: "Comprehensive Topic Analysis"
- **Description**: "Enter a topic to get trend data, related keywords, search volume, competition analysis, and content opportunities"
- **Input Field**: Text input with placeholder "Enter a topic (e.g., 'AI tools for creators', 'gam...)"
- **CTA**: "Analyze" button
- **Status**: "Ready to analyze" - Enter a topic above to discover keywords, trends, and content opportunities

---

## 9. AGENTS

### URL: `/agents`

**Purpose**: Create and manage AI agents for automation

**Navigation**:
- "History" link
- "New Agent" link

**Search & Filter**:
- Search input: "Search agents..."
- Status filter: "All Status" (dropdown)
- Sort: "Newest" (dropdown)

**Current State**: Empty state
- Icon: Briefcase/agent icon
- Heading: "No agents created yet"
- Description: "Get started by building your first AI agent to automate your tasks."
- CTA: "Create Agent" button

---

## 10. AI CLIPPING AGENT

### URL: `/ai-clipping-agent`

**Purpose**: Turn long-form videos into viral shorts

**Tabs**:
1. **New** (Active) - Create new clips
2. **History** - View previous clipping jobs

#### New Tab

**Video Source**:
- Sub-tabs: "Paste URL" | "Upload File"
- **Paste URL**: Input field with placeholder "https://youtube.com/watch?v=..."
- **Upload File**: File upload interface

**Clip Duration** (Radio buttons):
- Short: 15-30s
- Medium: 30-60s
- Long: 1-2m

**Clip Count**:
- Toggle: "Auto-detect"
- Description: "AI determines optimal count"

**Caption Style** (5 Options):
1. **Viral Gold**
   - "Bold white text with gold word highlighting - classic viral TikTok style"
   
2. **Clean White**
   - "Minimal white text with subtle styling - professional and clean"
   
3. **Neon Pop**
   - "Vibrant cyan and magenta neon colors - gaming and entertainment"
   
4. **Bold Boxed**
   - "High contrast white with yellow highlights - news and podcasts"
   
5. **Gradient Glow**
   - "Modern white with coral pink accents - trendy lifestyle content"

**Advanced Instructions** (Optional):
- Text area for custom instructions

**Pricing**: "Estimated cost: 3 credits/min"

**CTA**: "Generate Clips" button
- Note: "By continuing, you agree to credit usage."

---

## 11. SPARK AI

### URL: `/spark`

**Purpose**: AI creative assistant (Premium feature)

**Status**: BETA | UPGRADE REQUIRED

**Heading**: "Spark is a paid feature"

**Message**: "Upgrade your plan to unlock the Spark AI assistant."

**Included With**: "Pro, Ultra, and Enterprise plans"

**CTA**: "View plans" link

---

## 12. CALENDAR

### URL: `/calendar`

**Purpose**: Schedule and preview upcoming content

**Stats Display**:
- "0 total" posts
- "0 upcoming" posts
- "0 this week" posts

**Controls**:
- Platform filter: "All platforms" (dropdown)
- "Refresh" button
- "New post" button

**Navigation**:
- Previous/Next month buttons
- "Today" button

**View Options** (Radio buttons):
- Month (Active)
- Week
- Day
- List

**Calendar Display**:
- Full month view (December 2025)
- Day-by-day grid
- Empty state (no scheduled posts)

---

## 13. SETTINGS

### URL: `/settings`

**Purpose**: Manage account preferences, billing, and workspace configuration

#### WORKSPACE Section

**Billing** - Credits and subscription
- **Current Plan**: Starter
- **Plan Status**: Active
- **Billing Cycle**: Dec 17, 2025 - Jan 17, 2026
- **Credits Remaining**: 1
- **Last Updated**: Jan 17, 2026
- **Description**: "View credit usage history or update the payment method for your workspace."
- **Actions**:
  - "View billing" link
  - "Change plan" button
  - "Manage billing" button

#### Account Section
- **Email**: deadmanposts@gmail.com (Verified)
- **Member Since**: Dec 17, 2025
- **Brand Profiles**: "Manage your connected brands" - "Open" button

#### Security - Password, sessions, and device access
- "Email password reset link" button
- "Manage sessions" button

#### Notifications - Control email notifications
- **Status**: "Notification preferences are coming soon. You'll be able to choose which updates we send and how often."

#### Integrations - Connect external services

**Brand Profiles**:
- "Manage connected brand profiles and assets"
- "Open" button

**Connected Accounts**:
- "Link YouTube and other platforms for direct publishing"
- "Manage" button

#### Account Management - Permanently delete your account and associated data

**Delete Account**:
- Warning: "Permanently delete your account and all associated data. This action cannot be undone after the 30-day grace period."
- Support info: "Need help? Contact support@viewcreator.ai before deleting your account."
- CTA: "Delete My Account" button (red/destructive)

---

## 14. DESIGN SYSTEM

### Color Palette (Dark Mode)
- **Background**: Dark charcoal (#0F0F0F or similar)
- **Sidebar**: Slightly lighter dark (#1A1A1A)
- **Text Primary**: White/Light gray
- **Text Secondary**: Medium gray (#6B7280)
- **Accent Colors**:
  - Blue (#3B82F6) - Primary actions, links
  - Green (#10B981) - Success, online status
  - Red (#EF4444) - Destructive actions, errors
  - Pink/Magenta - Activity badges, highlights
  - Yellow (#FBBF24) - Warnings, highlights
  - Cyan (#06B6D4) - Secondary highlights

### Typography
- **Headings**: Bold, sans-serif (appears to be system font or similar to Inter)
- **Body Text**: Regular weight, readable sans-serif
- **Small Text**: Muted gray for secondary info

### Components
- **Badges**: Numbered colored squares (1-78+) for element identification
- **Cards**: Subtle background, minimal shadows
- **Buttons**: 
  - Primary: Blue background, white text, rounded corners
  - Secondary: Outlined style with border
  - Destructive: Red background
- **Status Indicators**: Green dot for online/active
- **Input Fields**: Dark background, light text, rounded borders
- **Tabs**: Underlined active state
- **Dropdowns**: Chevron indicators

### Layout
- **Sidebar Width**: ~170px (collapsible)
- **Main Content**: Responsive, takes remaining space
- **Right Sidebar**: ~300-350px (on dashboard)
- **Grid Layouts**: 4-column for cards, responsive
- **Spacing**: Generous padding and margins

---

## 15. CREDIT SYSTEM

### Credit Usage
- **AI Clipping**: 3 credits per minute of video
- **Image Generation**:
  - Premium: 6 credits
  - Standard: 2 credits
  - Nano Banana Pro: 6 credits
- **Monthly Bonus**: Included with plan

### Plan Tiers (Inferred from UI)
- **Starter**: 25 credits/month (current user plan)
- **Pro**: 500 credits/month
- **Ultra**: 1,500 credits/month
- **Business**: 10,000 credits/month

---

## 16. USER PROFILE

### Current User
- **Username**: DeadMan
- **Email**: deadmanposts@gmail.com (Verified)
- **Member Since**: Dec 17, 2025
- **Current Plan**: Starter
- **Credits**: 1 available
- **Connected Accounts**: YouTube (DeadManAI // The Unseen)

---

## 17. FEATURES OVERVIEW

### Content Creation
- **AI Image Generation**: Multiple quality levels and models
- **AI Video Generation**: Coming soon (Video tab available)
- **AI Clipping**: Extract viral moments from long-form videos
- **Caption Styles**: 5 pre-designed caption styles for clips

### Content Management
- **Post Creation**: Multi-step workflow (Identity → Format → Channels → Publish)
- **Content Calendar**: Schedule and preview posts
- **Brand Profiles**: Manage multiple brand identities
- **Social Integration**: Connect to 5+ platforms

### Analytics & Insights
- **Performance Tracking**: Cross-platform metrics
- **Trend Research**: Topic analysis and keyword discovery
- **Activity Feed**: Recent actions and credit usage

### Automation
- **AI Agents**: Create agents for automated tasks
- **Spark AI**: Creative assistant (Premium)
- **Scheduled Publishing**: Automatic posting to multiple platforms

### Account Management
- **Billing**: Plan management and credit tracking
- **Security**: Password reset and session management
- **Notifications**: Email preference controls (coming soon)
- **Integrations**: External service connections

---

## 18. USER FLOWS

### Onboarding Flow
1. Sign up / Login
2. Create brand profile
3. Connect social media account
4. Generate first piece of content
5. Schedule and publish

### Content Creation Flow
1. Navigate to Create or Post
2. Generate content (image/video/clips)
3. Create post with generated content
4. Select brand identity
5. Choose platforms
6. Schedule or publish immediately

### Agent Creation Flow
1. Navigate to Agents
2. Click "Create Agent"
3. Configure agent settings
4. Set automation rules
5. Activate agent

### Analytics Flow
1. Navigate to Analytics
2. Select brand profile
3. Choose date range
4. View performance metrics
5. Export reports (if available)

---

## 19. EMPTY STATES

The application shows empty states for:
- **Profiles**: "Create Your First Profile"
- **Agents**: "No agents created yet"
- **Calendar**: "0 total" posts
- **Analytics**: "Select a brand to get started"
- **Trends**: "Ready to analyze" (awaiting input)
- **Spark**: "Upgrade Required" (Premium feature)

Each empty state includes:
- Descriptive icon
- Clear heading
- Helpful description
- Call-to-action button

---

## 20. RESPONSIVE DESIGN

The dashboard appears to be fully responsive with:
- Collapsible sidebar for mobile
- Responsive grid layouts
- Mobile-friendly navigation
- Touch-friendly buttons and inputs

---

## 21. ACCESSIBILITY FEATURES

- Semantic HTML structure
- Keyboard navigation support
- Color contrast for readability
- Status indicators (green/red for online/offline)
- Descriptive button labels
- Form field labels and placeholders

---

## 22. PERFORMANCE INDICATORS

- **Credit Display**: Always visible in header
- **Connection Limit**: Shows current/max connections
- **Plan Status**: Active/Inactive indicator
- **Billing Cycle**: Clear date range
- **Last Updated**: Timestamp for data freshness

---

## 23. NEXT STEPS FOR REBUILD

1. **Set up React routing** for all dashboard pages
2. **Implement sidebar navigation** with collapsible menu
3. **Create reusable components** for cards, buttons, forms
4. **Build empty state components** for all sections
5. **Implement dark mode** by default
6. **Create dashboard home page** with quick actions and activity feed
7. **Build all feature pages** (Post, Create, Profiles, etc.)
8. **Add form handling** for profile creation, social connection
9. **Implement calendar component** with scheduling
10. **Add settings pages** with billing and account management
11. **Optimize for mobile** with responsive design
12. **Add animations and transitions** for polish

---

**Document Created**: December 19, 2025
**Status**: Complete Dashboard Documentation
**Ready for**: Full Application Rebuild
