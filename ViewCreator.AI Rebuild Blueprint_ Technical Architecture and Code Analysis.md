# ViewCreator.AI Rebuild Blueprint: Technical Architecture and Code Analysis

**Author**: Manus AI
**Date**: December 19, 2025

## 1. Executive Summary: The ViewCreator Rebuild Goal

This document serves as a comprehensive blueprint for rebuilding the **ViewCreator.AI** platform, synthesizing all available code, architectural documentation, and design philosophy from the provided archive. The core of ViewCreator is an **agent-centric architecture** designed to automate social media content creation, scheduling, and publishing across multiple platforms [1].

The rebuild must focus on replicating three key, proprietary AI agents: the **Clipping Agent**, the **Visual Engine**, and the **Channel SEO Agent**. The entire system is built around a modern, full-stack approach, leveraging the power of large language models (LLMs) for complex, multi-step reasoning.

| Component | Core Function | Key Technology | Proprietary Secret |
| :--- | :--- | :--- | :--- |
| **Clipping Agent** | Extracts viral, high-intensity moments from long-form video. | Gemini 3 Flash, TypeScript | **Nested JSON** for Orchestration |
| **Visual Engine** | Generates high-quality, non-AI-looking thumbnails and visuals. | Gemini 2.5 Flash Image | **PRO Prompt Injection** (Technical Metadata) |
| **Channel SEO Agent** | Generates optimized descriptions, tags, and viral X (Twitter) threads. | Gemini 3 Flash, TypeScript | Reverse-engineering algorithm with LLM |
| **Frontend** | User Interface and Agent Control Panel. | React, TypeScript, Tailwind CSS | "Agent-Centric" Workflow |
| **Backend** | API, Agent Orchestration, and Database. | NestJS, PostgreSQL, AWS | Agent Memory and State Persistence |

## 2. Architectural Blueprint

The ViewCreator platform follows a robust, three-tier architecture, as confirmed by the technical documentation [1].

### 2.1. Technology Stack

The platform is built on a modern, high-performance stack:

*   **Frontend:** **React** with **TypeScript** and **Tailwind CSS** for a fast, component-based, and highly styled user interface.
*   **Backend (Implied):** **NestJS** (Node.js framework) for the API layer, handling business logic, agent orchestration, and database interaction.
*   **Database:** **PostgreSQL** for data persistence, including agent memory and content drafts.
*   **Infrastructure:** **AWS** (Amazon Web Services) for hosting and scaling.
*   **AI/LLM:** **Google GenAI (Gemini)** is the primary LLM provider for all core agent functions.

### 2.2. Agentic Architecture (The "Brain")

The core innovation is the **Agent Factory** (`AgentsManager.tsx`), which manages specialized, named AI agents. The architecture is designed for **Agent Orchestration**, where agents collaborate and hand off tasks.

The system relies on a central `ViewType` enum (`types.ts`) to define the core application modules, which correspond to the main agents:

```typescript
// types.ts
export enum ViewType {
  DASHBOARD = 'DASHBOARD',
  CLIPPING = 'CLIPPING', // Clipping Agent
  VISUALS = 'VISUALS',   // Visual Engine
  SEO = 'SEO',           // Channel SEO Agent
  AGENTS = 'AGENTS',     // Agent Factory
  ANALYTICS = 'ANALYTICS'
}
```

## 3. Core Agent Code Analysis

The proprietary logic for the ViewCreator agents is primarily contained within the frontend components and the shared `geminiService.ts` file.

### 3.1. Clipping Agent: Viral Hook Extraction

The Clipping Agent (`ClippingTool.tsx`) is responsible for identifying the most viral moments in a long-form video transcript. The core logic is delegated to the `analyzeContentForHooks` function, which implements the **"Nested JSON"** strategy for reliable, structured output from the LLM.

**Proprietary Service Logic (`services/geminiService.ts`):**

```typescript
// services/geminiService.ts (Excerpt)
export const analyzeContentForHooks = async (transcript: string): Promise<ViralHook[]> => {
  const model = genAI.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analyze this video transcript and identify the top 3 high-intensity viral moments (30-60s). 
    Focus on controversial hooks, surprising stats, or actionable secrets.
    Transcript: ${transcript}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            startTime: { type: Type.STRING },
            endTime: { type: Type.STRING },
            hookText: { type: Type.STRING },
            viralityScore: { type: Type.NUMBER },
            reason: { type: Type.STRING }
          },
          required: ["startTime", "endTime", "hookText", "viralityScore", "reason"]
        }
      }
    }
  });

  const response = await model;
  return JSON.parse(response.text || "[]");
};
```

The key to the rebuild is the use of `responseSchema` to force the LLM to return a structured array of `ViralHook` objects, ensuring the output is immediately usable by the frontend.

### 3.2. Visual Engine: The "PRO Prompt" Secret

The Visual Engine (`VisualsAgent.tsx`) is designed to overcome the "AI look" in generated images. It achieves this by using a two-step process:

1.  **Prompt Expansion:** The user's simple subject is expanded into a highly technical, photography-focused prompt using `generateProImagePrompt`.
2.  **Image Generation:** The expanded prompt is fed to the image model (`generateProImage`).

**Proprietary Service Logic (`services/geminiService.ts`):**

```typescript
// services/geminiService.ts (Excerpt)
export const generateProImagePrompt = async (subject: string, vibe: string): Promise<string> => {
  const model = genAI.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Act as the world's best photography prompt engineer. 
    Expand this subject into a technical photography-based prompt block for maximum realism.
    
    Subject: ${subject}
    Vibe: ${vibe}
    
    RULES:
    1. Start with technical settings (e.g., 85mm lens, f/1.8).
    2. Use real-world color grading terms.
    3. Include camera metadata (ISO, shutter speed).
    4. Focus on volumetric lighting and high-end cinematic textures.
    5. No "AI-looking" descriptive adjectives like "ultra-realistic". Use "RAW photography" tokens.`,
  });

  const response = await model;
  return response.text || "";
};
```

The success of the Visual Engine is entirely dependent on the **five explicit rules** in the prompt, which inject technical metadata to guide the image generation model away from generic, stylized outputs.

### 3.3. Channel SEO Agent: Metadata Generation

The SEO Agent (`SEOTools.tsx`) automates the creation of platform-specific metadata. It takes a video title and transcript and returns an optimized description, tags, and a viral X thread.

**Proprietary Service Logic (`services/geminiService.ts`):**

```typescript
// services/geminiService.ts (Excerpt)
export const generateSEOMetadata = async (title: string, transcript: string): Promise<any> => {
  const model = genAI.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Generate SEO metadata for a YouTube video.
    Title: ${title}
    Transcript: ${transcript}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          description: { type: Type.STRING },
          tags: { type: Type.ARRAY, items: { type: Type.STRING } },
          chapters: { type: Type.ARRAY, items: { type: Type.STRING } },
          twitterThread: { type: Type.ARRAY, items: { type: Type.STRING } }
        }
      }
    }
  });

  const response = await model;
  return JSON.parse(response.text || "{}");
};
```

This agent also relies on structured JSON output to deliver a complete package of metadata, including a multi-part `twitterThread` for cross-platform promotion.

## 4. Rebuild Checklist and Next Steps

To successfully rebuild ViewCreator, the following steps are recommended:

1.  **Project Setup:** Initialize the Next.js/NestJS project structure.
2.  **Frontend Replication:** Recreate the core components (`App.tsx`, `Sidebar.tsx`, `types.ts`) and the three main agent components (`ClippingTool.tsx`, `VisualsAgent.tsx`, `SEOTools.tsx`) using the provided code as a template.
3.  **Service Layer Implementation:** Implement the `geminiService.ts` file with the exact prompt engineering and structured output schemas to ensure the AI agents function correctly.
4.  **Backend Development:** Develop the NestJS backend to handle the actual video processing (FFmpeg, Whisper for transcription) and to manage the PostgreSQL database for state persistence and agent memory.
5.  **Brand DNA Ingestion:** Implement the logic in the `AgentsManager.tsx` component to ingest historical user data and create the `BrandDNA` object, which should then be passed to the LLM services to ensure brand consistency in all generated content.

### Files to Replicate

The following files contain the essential code and configuration for the rebuild:

| File Path | Description | Role in Rebuild |
| :--- | :--- | :--- |
| `App.tsx` | Main application shell and view router. | Core Frontend Structure |
| `types.ts` | Defines `ViewType`, `ViralHook`, `ContentDraft`, and `BrandDNA`. | Data Models and Navigation |
| `components/Sidebar.tsx` | Navigation and "ViewCreator" branding. | UI/UX and Navigation |
| `components/ClippingTool.tsx` | Frontend for the Viral Hook extraction agent. | Agent Feature Implementation |
| `components/VisualsAgent.tsx` | Frontend for the PRO Prompt and image generation. | Agent Feature Implementation |
| `components/SEOTools.tsx` | Frontend for the SEO metadata generation agent. | Agent Feature Implementation |
| `services/geminiService.ts` | **The core AI logic and proprietary prompt engineering.** | Critical AI Service Layer |
| `VIEWCREATOR_TECHNICAL_ARCHITECTURE.md` | Confirms the Next.js/NestJS/PostgreSQL stack. | Architectural Guidance |

---

## 5. References

[1] ViewCreator.AI - Complete Technical Architecture & Implementation Guide. (Internal document).
[2] ViewCreator.AI: A Comprehensive Technical and UI/UX Analysis. (Internal document).
[3] ViewCreator AI Platform. (Internal metadata file).
[4] ClippingTool.tsx. (Internal source code).
[5] geminiService.ts. (Internal source code).
[6] VisualsAgent.tsx. (Internal source code).
[7] SEOTools.tsx. (Internal source code).
[8] types.ts. (Internal source code).
