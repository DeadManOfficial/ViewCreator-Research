# ViewCreator Technical Logic Synthesis

## 1. Agent Architecture (The "Orchestration" Layer)
Based on the "Day 101" video description ("agent orchestration... where one agent orchestrates with another agent"), the system likely uses a **Hierarchical Agent Pattern**:
- **Manager Agent:** Receives the high-level goal (e.g., "Create a viral video about AI").
- **Worker Agents:** Specialized sub-agents for specific tasks:
    - **Researcher:** Browses web/YouTube for trends.
    - **Writer:** Generates scripts/captions.
    - **Visualizer:** Generates images/video clips.
    - **Publisher:** Handles API connections to social platforms.

**Implementation Recommendation:** Use **LangChain** or **Vercel AI SDK** to manage these agent chains, with a shared state object (in Supabase) to pass data between them.

## 2. State Machine Logic
The "Flow Canvas" UI (Start -> Plan -> Video -> Publish) directly maps to a **Finite State Machine (FSM)**.
- **States:** `IDLE` -> `RESEARCHING` -> `PLANNING` -> `GENERATING_ASSETS` -> `RENDERING` -> `PUBLISHING` -> `COMPLETED`.
- **Triggers:** User input starts the flow; completion of one agent triggers the next state.
- **Persistence:** Each state transition must be saved to the database (Supabase) to allow the user to close the tab and return later (asynchronous processing).

## 3. Video Generation Pipeline
The "Day 5" video mentions a "video generation system inside ViewCreator". This is likely a wrapper around external APIs rather than a custom model.
- **Likely APIs:**
    - **Images:** OpenAI DALL-E 3 or Midjourney (via API).
    - **Video:** Runway Gen-2, Luma Dream Machine, or Kling (via API).
    - **Voice:** ElevenLabs (standard for high-quality AI voice).
    - **Assembly:** FFmpeg (server-side) or Remotion (React-based video rendering).

**Implementation Recommendation:** Use **Remotion** for the video assembly layer, as it allows building videos using React components, fitting perfectly with the Next.js stack.
