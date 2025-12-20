# DeadMan AI Agent System

## Agent Registry

This system contains 25+ specialized AI agents that Claude Code can spawn automatically based on task requirements.

---

## AI COUNCIL - Core 14 Agents

### Content & Marketing Agents

| Agent | Trigger Keywords | Description |
|-------|-----------------|-------------|
| **HYDRA** | repurpose, multiply, expand, atomize, 10x, derivatives | Content Multiplier - 1 piece in, 10+ pieces out |
| **SEXYO** | seo, ranking, keywords, optimize | SEO Expert - 15+ years in search optimization |
| **LANGSTON** | long-form, article, blog, content engine | Universal Content Engine with systematic delivery |
| **IDEAGEN** | headlines, brainstorm, ideas, 30 ideas | Headline Explosion System - 30 angles per topic |
| **EMAIL_STRATEGIST** | email, campaign, newsletter, drip | Email campaign master with full sequences |
| **LOCAL_SEO** | local seo, google business, near me | Local business domination specialist |

### Creative Agents

| Agent | Trigger Keywords | Description |
|-------|-----------------|-------------|
| **MJMASTER** | midjourney, image prompt, visual | Midjourney v6 prompt architect |
| **STORYTELLER** | story, narrative, fiction, script | Master of all narrative genres |
| **COMEDIAN** | joke, humor, comedy, funny | Stand-up and comedic content expert |
| **SONG_CURATOR** | playlist, music, soundtrack | Musical sommelier for mood-based playlists |
| **SORA2_MASTER** | sora, video prompt, cinematic | OpenAI Sora 2 video generation specialist |

### Analytical Agents

| Agent | Trigger Keywords | Description |
|-------|-----------------|-------------|
| **DEBATER** | argue, debate, logic, analysis | Dialectic master with formal logic |
| **PRODUCT_ANALYZER** | competitive, market research, swot | Product intelligence and market analysis |
| **UX_DESIGNER** | ux, ui, wireframe, user experience | Experience architect with design systems |

### Meta Agent

| Agent | Trigger Keywords | Description |
|-------|-----------------|-------------|
| **PROTEUS** | adapt, hybrid, custom role | Shapeshifter - becomes any role needed |

---

## VIEWCREATOR Production Agents

| Agent | Trigger Keywords | Description |
|-------|-----------------|-------------|
| **SARAH_CLIPPING** | clip, viral hook, shorts | Viral Hook Specialist - finds best moments |
| **MARCUS_VISUALS** | pro image, photography, visual | PRO Photography Architect - kills AI look |
| **SEO_CORE** | algorithm, youtube seo, metadata | Platform algorithm researcher |
| **RESEARCH_AGENT** | research, trends, analyze | Trending topic and market research |
| **SCRIPT_AGENT** | script, draft, outline | Video script and outline generator |
| **PUBLISH_AGENT** | publish, schedule, post | Multi-platform publishing automation |

---

## STREAMING Production Agents

| Agent | Trigger Keywords | Description |
|-------|-----------------|-------------|
| **CLIPS_RIVERA** | short-form, tiktok, reels, 3-hook | Clip Alchemist - 50K+ viral edits |
| **MARCUS_CHEN** | content strategy, calendar, planning | Content Strategist with 30-day plans |
| **STREAM_PRODUCTION** | stream, obs, production | Live stream production specialist |
| **COPY_SPECIALIST** | copy, captions, hooks, cta | Persuasive copy and caption writer |
| **THUMBNAIL_DESIGNER** | thumbnail, ctr, click | Click-through rate optimization |

---

## Agent Spawning Rules

Claude Code will automatically spawn agents when:

1. **Task matches agent expertise** - SEO task spawns SEXYO
2. **Keywords detected** - "make a thumbnail" spawns THUMBNAIL_DESIGNER
3. **Multi-step workflows** - Complex tasks spawn pipeline of agents
4. **User request** - Direct request like "use the debater"

### Example Workflows

**Content Production Pipeline:**
1. IDEAGEN - Generate 30 headline ideas
2. SEXYO - Write full SEO article
3. EMAIL_STRATEGIST - Create promotion campaign

**Video Production Pipeline:**
1. SARAH_CLIPPING - Find viral hooks
2. MARCUS_VISUALS - Generate pro images
3. SEO_CORE - Optimize metadata
4. PUBLISH_AGENT - Schedule across platforms

**Creative Project Pipeline:**
1. STORYTELLER - Develop narrative
2. MJMASTER - Visual style prompts
3. SORA2_MASTER - Cinematic video prompts
4. SONG_CURATOR - Build soundtrack

---

## Agent Locations

Full agent definitions are stored in:
- `ViewCreator-Research/ai-council/` - Core 14 council roles
- `ViewCreator-Research/seo/` - SEO specialist roles
- `ViewCreator-Research/streaming/` - Production roles
- `ViewCreator-Research/src/services/` - Gemini integration code

---

## Custom Commands

Available slash commands for direct agent invocation:
- `/seo [topic]` - Spawn SEXYO for SEO content
- `/clip [url]` - Spawn SARAH_CLIPPING for viral hooks
- `/visual [subject]` - Spawn MARCUS_VISUALS for pro images
- `/ideas [topic]` - Spawn IDEAGEN for 30 headlines
- `/sora [concept]` - Spawn SORA2_MASTER for video prompts
- `/story [premise]` - Spawn STORYTELLER for narrative
- `/debate [topic]` - Spawn DEBATER for analysis
- `/council` - List all available agents
