# ViewCreator Recreation: Technical Architecture

## Core Value Proposition to Recreate
"Virality on Autopilot" - An AI agent that researches, creates, and schedules content.

## Proposed Architecture

### 1. Frontend (The "Vibe" Interface)
- **Framework:** React 19 + Vite (already initialized in `modern-landing-page`).
- **UI Library:** Tailwind CSS v4 + shadcn/ui (for the "glassmorphism" aesthetic).
- **State Management:** React Context or Zustand (for managing agent state).
- **Key Components:**
    - **Agent Dashboard:** Visual status of active agents (Researching, Writing, Publishing).
    - **Content Calendar:** Drag-and-drop calendar for scheduled posts.
    - **Editor:** AI-assisted text/script editor.

### 2. The "AI Agent" Simulation (Client-Side)
Since we are building a static prototype, we will simulate the backend AI logic using **state machines** and **mock data**.
- **Workflow Engine:** A state machine (using `xstate` or simple React state) to transition tasks:
    - `IDLE` -> `RESEARCHING` (simulated delay) -> `GENERATING` (streaming text effect) -> `REVIEW` -> `PUBLISHING` -> `PUBLISHED`.
- **Mock LLM:** A utility to stream pre-written "AI generated" content (scripts, captions) to mimic the real-time generation experience.

### 3. Data Structure (Mock Database)
- **Agents:**
    ```typescript
    type Agent = {
      id: string;
      name: string; // e.g., "YouTube Shorts Agent"
      status: 'idle' | 'working' | 'paused';
      platform: 'youtube' | 'tiktok' | 'instagram';
    };
    ```
- **Content Items:**
    ```typescript
    type ContentItem = {
      id: string;
      title: string;
      script: string;
      status: 'draft' | 'scheduled' | 'published';
      platform: 'youtube' | 'tiktok' | 'instagram';
      scheduledDate: Date;
    };
    ```

## Implementation Steps
1.  **Scaffold Dashboard:** Create a new `/dashboard` route in the existing project.
2.  **Build Agent Cards:** UI components to show agent status and activity.
3.  **Implement "Generation" Flow:** A button to "Start Agent" that triggers the simulated workflow.
4.  **Visualize Results:** Show the generated content appearing in a feed or calendar.
