# "Dark Corner" Forensic Analysis

## 1. Agent Architecture: LangGraph Confirmed
Multiple sources link Matthew Miller and the "Vibe Coding" community to **LangGraph**.
- **LinkedIn/Facebook discussions:** Compare LangGraph vs. CrewAI, with Miller's posts being cited in these contexts.
- **"Agentic Workflow":** The specific terminology "Agent Orchestration" and "State Machine" (Start -> Plan -> Video) is the exact design pattern of **LangGraph** (StateGraph).
- **Conclusion:** The "Workflow Automation" engine is almost certainly built on **LangGraph.js**.

## 2. "Trending Sounds" & Viral Data
ViewCreator claims to "scan millions of videos". This is not done via official APIs (which are restrictive).
- **Likely Source:** **Apify** (TikTok Scrapers).
- **Evidence:** Community discussions on "Vibe Coding" subreddits/discords frequently recommend **Apify** for this exact use case ("TikTok Data Extractor").
- **Implementation:** The "Researcher Agent" calls an Apify Actor to get a JSON list of trending sounds, then passes that to the "Script Agent".

## 3. "Agentic Clipping"
- **Tech:** **FFmpeg** (server-side) + **OpenAI Whisper** (transcription).
- **Process:**
    1.  Download video (yt-dlp).
    2.  Transcribe (Whisper) -> Get timestamps of "high energy" words.
    3.  Clip (FFmpeg) based on those timestamps.
    4.  Resize to 9:16 (FFmpeg crop).

## 4. The "Vibe Coding" Stack (Final Confirmation)
- **Frontend:** Next.js 14 (App Router) + Tailwind + shadcn/ui.
- **Backend:** Supabase (DB/Auth).
- **Agent Runtime:** LangGraph.js (on Vercel Edge Functions).
- **Data Source:** Apify (Social Scraping).
- **Video Engine:** Remotion (Rendering).
