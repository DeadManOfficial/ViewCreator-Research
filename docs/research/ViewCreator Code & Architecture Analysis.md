# ViewCreator Code & Architecture Analysis

## Executive Summary
This report details the technical architecture and code patterns of **ViewCreator**, derived from a forensic analysis of the "Building ViewCreator" video series and community discussions. While the core codebase is proprietary, the "Vibe Coding" methodology and specific tech stack choices have been identified with high confidence.

## 1. Core Tech Stack ("Vibe Coding Stack 2025")
The application is built on a modern, serverless architecture designed for speed and scalability.

| Component | Technology | Reasoning |
| :--- | :--- | :--- |
| **Frontend** | **Next.js 14+** (App Router) | Confirmed by multiple video titles and hashtags. Standard for React-based SaaS. |
| **Backend** | **Supabase** | Used for PostgreSQL database, Authentication, and Realtime subscriptions. |
| **Deployment** | **Vercel** | "Code to Vercel & GitHub = auto deploy" confirms this hosting choice. |
| **Styling** | **Tailwind CSS** | Visible in code snippets and standard for the "shadcn/ui" look used. |
| **AI Logic** | **Vercel AI SDK** | Likely used to stream LLM responses and manage agent state. |

## 2. Agent Orchestration Pattern
The "Day 101" video reveals a **Hierarchical Agent Architecture**. The system does not rely on a single LLM call but a chain of specialized agents.

### The "Orchestrator" Pattern
1.  **Manager Agent:** Receives the user's high-level intent (e.g., "Make a video about AI news").
2.  **Delegation:** The Manager spawns sub-tasks for:
    *   `ResearcherAgent`: Scrapes web/socials for trending topics.
    *   `ScriptWriterAgent`: Drafts the video script based on research.
    *   `VisualAgent`: Generates image prompts for DALL-E/Midjourney.
3.  **Synthesis:** The Manager aggregates these outputs into a final "Plan" object.

**Code Pattern (Conceptual):**
```typescript
// Conceptual Agent Orchestration
async function runAgentWorkflow(goal: string) {
  const plan = await managerAgent.createPlan(goal);
  
  const research = await researcherAgent.execute(plan.researchTopic);
  const script = await writerAgent.write(research);
  const visuals = await visualAgent.generate(script);
  
  return assembleVideo(script, visuals);
}
```

## 3. State Management & Realtime Updates
The "Flow Canvas" UI (Start -> Plan -> Video -> Publish) is a visual representation of a **Finite State Machine (FSM)**.

*   **Database Schema:** The `projects` table likely has a `status` enum column:
    *   `'draft'`, `'researching'`, `'scripting'`, `'generating'`, `'publishing'`, `'completed'`.
*   **Realtime UI:** The frontend subscribes to Supabase Realtime changes on this table. When the backend agent updates the status, the UI "node" lights up instantly without a page refresh.

## 4. Video Generation Pipeline
The "video generation system" is an abstraction layer over third-party APIs.
*   **Images:** OpenAI DALL-E 3 (via API).
*   **Voice:** ElevenLabs (industry standard for AI narration).
*   **Assembly:** **Remotion** is the strongest candidate for the rendering engine, as it allows developers to build videos using React code, which fits the "Vibe Coding" philosophy perfectly.

## References
1.  [Day 102 – Vibe Coding an App Until I Make $1000000](https://www.youtube.com/watch?v=w0lDEUwbhuY)
2.  [The Best Vibe Coding Tech Stack In 2025](https://www.youtube.com/watch?v=qOCBKrD3cvs)
3.  [Day 101 – Agent Orchestration](https://www.youtube.com/watch?v=vDT_otLL5tA)
4.  [Day 5: Marketing ViewCreator Using ViewCreator](https://www.youtube.com/watch?v=H2N7YyYcHfI)
