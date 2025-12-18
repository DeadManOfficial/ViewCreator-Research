# Persistent Project Memory: The CLAUDE.md and PROMPT_LIBRARY.md Mechanism

The **Persistent Project Memory** feature, which addresses the critical Gemini user request for long-term context, is implemented through a two-file system that leverages the external file management capabilities of the Claude Code framework. This approach ensures that project knowledge is **externalized, structured, and reproducible**, surviving the end of any single chat session.

## 1. CLAUDE.md: The Strategic Memory File

The `CLAUDE.md` file is the project's **strategic constitution**, managed primarily by the **@claude-brand-architect** subagent.

### Purpose and Structure

The file is structured to capture the **non-negotiable, high-level decisions** that define the project's identity. It is divided into three core sections:

1.  **Creator Code**: This section, derived from the *Holistic Personal Brand Architect* profile, locks in the project's core values, boundaries, and constraints (e.g., "No political commentary," "Only partner with brands used for 6+ months"). This prevents the AI from making strategic errors by instantly recalling the project's ethical and commercial guardrails.
2.  **Positioning Statement**: A codified summary of the project's target audience, unique value proposition, and key differentiators.
3.  **Strategic Assets**: A repository for key, approved textual assets, such as the SEO-optimized bio.

### Mechanism of Persistence

At the start of any new session, the **@claude-brand-architect** is instructed to **read** the `CLAUDE.md` file. This instantly loads the entire strategic context into the agent's working memory, making it fully aware of all past foundational decisions without the user needing to manually re-paste instructions. When a new strategic decision is made, the agent **edits** the file, ensuring the memory is updated for all future sessions.

## 2. PROMPT_LIBRARY.md: The Technical Memory File

The `PROMPT_LIBRARY.md` file is the project's **technical institutional knowledge**, managed by the **@claude-prompt-master** subagent.

### Purpose and Structure

This file is a database of every significant generative AI attempt, structured to support the "Iterative Scientist" philosophy of the *Sora 2 Master Architect* role. Each entry includes:

1.  **Prompt ID and Status**: A unique identifier and a clear flag for **SUCCESS** or **FAILURE**. This is crucial for rapid iteration.
2.  **Prompt Block**: The complete, copy-paste-ready text of the prompt, including all 12 layers of the GODMODE framework.
3.  **Technical Specifications**: All associated metadata, such as model parameters (`--ar`, `--s`, `--c`), camera specs, and the **Negative Prompt Kill-List**.

### Mechanism of Persistence

The **@claude-prompt-master** is instructed to **write** a new entry to the `PROMPT_LIBRARY.md` after every generation.

*   **Before Generation**: The agent **reads** the file to check for past failures related to the current task, preventing the repetition of known errors (e.g., "avoid this camera angle, it causes morphing").
*   **After Generation**: The agent archives the full prompt and its outcome. This creates a living, searchable history of technical experiments.

By separating the **Strategic Memory** (`CLAUDE.md`) from the **Technical Memory** (`PROMPT_LIBRARY.md`), the Claude Subagent Suite achieves a modular, robust, and truly persistent project memory that is easily auditable and transferable across different AI models and platforms.

***

*The detailed structures for both files are provided in the previously generated `memory_file_structures.md` document.*
