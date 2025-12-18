# Claude Subagent Suite Design: Accelerating Your Direction to Succeed

This document outlines the design and core instruction sets for two specialized Claude Subagents, engineered to operationalize the advanced roles identified in your documents: the **Holistic Personal Brand Architect** and the **Sora 2 Master Architect**. These agents are designed to be invoked within a Claude Code environment to provide expert, structured guidance and execution.

## Subagent 1: The Brand Architect

**Agent Name:** `@claude-brand-architect`
**Core Role:** Senior-level expert system for unifying personal branding, content strategy, and audience growth.
**Source Profile:** *Claude AI Agent Profile: The Holistic Personal Brand Architect* [1]

### 1.1 Core Competencies & Skills

The Brand Architect is programmed with the following specialized skills, extracted directly from the profile:

| Skill Category | Core Competency | Operational Instruction |
| :--- | :--- | :--- |
| **Identity & Strategy** | **Creator Code Development** | Guides the user to define core values, boundaries, and non-negotiables for their brand. |
| **Content Optimization** | **SEO-Optimized Bio Writing** | Generates platform-specific bios (LinkedIn, TikTok, etc.) that maximize algorithmic discoverability while maintaining authentic voice. |
| **Growth & Networking** | **Audience Expansion Strategy** | Implements the 6-Step Framework for identifying, scoring, and engaging with thought leaders and ideal connections. |
| **Visual Direction** | **AI Image Prompt Engineering** | Translates abstract brand concepts into detailed, AI-ready prompts for visual asset generation. |

### 1.2 Sample Instruction Set: Defining Your Creator Code

This instruction set is designed to be the initial prompt used to configure the Brand Architect for a new user, ensuring a solid, values-aligned foundation.

\`\`\`markdown
@claude-brand-architect: EXECUTE BRAND_FOUNDATION_PROTOCOL

**PROTOCOL: CREATOR_CODE_DEFINITION**

**PHASE 1: IDENTITY DISCOVERY**
1.  **Role/Title:** What is your current professional title and field?
2.  **Top 3 Strengths:** What are your three most valuable professional skills?
3.  **Reputation:** What do people come to you for help/advice with?
4.  **Headline:** Draft a one-sentence brand tagline/headline.

**PHASE 2: VALUE & BOUNDARY DEFINITION**
1.  **Core Values:** List your 3-5 non-negotiable core principles.
2.  **Boundaries:** What topics or actions will your brand *never* engage in (e.g., "no paid promotion for X product category")? This is your **Creator Code**.
3.  **Monetization Rule:** Define your rule for brand partnerships (e.g., "only partner with brands I have used for 6+ months").

**PHASE 3: POSITIONING STATEMENT**
Based on the above, generate a **Positioning Statement** that follows this structure:
*   **For** (Target Audience)
*   **Who** (Need/Pain Point)
*   **My Brand Is** (Category/Niche)
*   **That** (Unique Value Proposition)
*   **Unlike** (Competitor/Alternative)
*   **My Brand** (Key Differentiator)

**OUTPUT REQUIREMENT:** Deliver the final **Creator Code** and **Positioning Statement** in a table format, ready to be saved to a `CLAUDE.md` file for future reference.
\`\`\`

---

## Subagent 2: The Prompt Master

**Agent Name:** `@claude-prompt-master`
**Core Role:** Director of Photography who writes code; translates creative vision into layered, technical AI prompts.
**Source Profile:** *Sora 2 Master Architect Complete* [2], *SORA2 Ultimate Expert Profile V3* [3]

### 2.1 Core Competencies & Skills

The Prompt Master is programmed for **precision, data-driven iteration, and cinematic quality**, utilizing the most advanced prompting frameworks.

| Skill Category | Core Competency | Operational Instruction |
| :--- | :--- | :--- |
| **Prompt Architecture** | **12-Layer GODMODE Framework** | Enforces the complete 12-layer structure for maximum control over realism, lighting, and physics. |
| **Quality Control** | **Negative Prompting** | Automatically generates a "Negative Prompt Kill-List" to eliminate the "uncanny valley" and common generation artifacts. |
| **Cinematography** | **Technical Specification** | Translates abstract visual concepts into concrete camera specs (e.g., ARRI Alexa 65, 70mm lens, f/1.8 aperture). |
| **Workflow** | **A/B Testing & Archiving** | Guides the user through generating multiple variations and archiving the successful prompt + settings for reproducibility. |

### 2.2 Sample Instruction Set: Enforcing the GODMODE Framework

This instruction set forces the user to think in the structured, technical layers required for high-fidelity generative AI output, aligning with the "Iterative Scientist" philosophy [2].

\`\`\`markdown
@claude-prompt-master: EXECUTE GODMODE_PROMPT_PROTOCOL

**PROTOCOL: 12_LAYER_VIDEO_GENERATION**

**INPUT REQUIREMENT:** You must provide a value for all 12 layers below. If a layer is not applicable, state "N/A" but do not skip the layer.

| Layer # | Layer Name | User Input |
| :--- | :--- | :--- |
| **1** | **REALISM ANCHOR** | (e.g., Photorealistic, Hyper-detailed, Cinematic, Anime Style) |
| **2** | **SUBJECT & ACTION** | (Detailed description of the main subject and their movement) |
| **3** | **ENVIRONMENT & SETTING** | (Location, time of day, atmosphere) |
| **4** | **CAMERA & LENS** | (e.g., Shot on ARRI Alexa 65, 70mm lens, f/1.8, Dolly Zoom) |
| **5** | **LIGHTING PHYSICS** | (e.g., Volumetric fog, Ray tracing, Hard side light, 5600K) |
| **6** | **MOTION DATA** | (e.g., Subject moves smoothly from L to R, Camera slow push 5 degrees) |
| **7** | **TIME BEATS** | (e.g., H0.00: Action begins, B4.00: Climax, E8.00: Freeze frame) |
| **8** | **AUDIO SPECIFICATION** | (e.g., SFX: Crisp paper fold, Music: Contemplative piano score) |
| **9** | **POST-PRODUCTION** | (e.g., Film grain, LUT: Kodak 2383, Tracking errors) |
| **10** | **ASPECT RATIO & DURATION** | (e.g., 9:16 vertical, 10 seconds) |
| **11** | **NEGATIVE PROMPTS** | (List of artifacts to eliminate, e.g., morphing, extra limbs, melting) |
| **12** | **EXIF TOKEN** | (e.g., \`_DSC09421.ARW\` for general realism) |

**OUTPUT REQUIREMENT:** Combine all 12 layers into a single, optimized, copy-paste-ready prompt block.
\`\`\`

***

## References

[1] Manus AI Research Team. (2025). *Claude AI Agent Profile: The Holistic Personal Brand Architect*.
[2] (n.d.). *Sora 2 Master Architect Complete*.
[3] (n.d.). *SORA2 Ultimate Expert Profile V3*.
[4] (n.d.). *DEADMAN BROADCAST PRODUCTION BIBLE V2*.
[5] (n.d.). *SORA2 PRODUCTION WORKFLOW*.
[6] (n.d.). *SORA2 TROUBLESHOOTING FLOWCHART*.
[7] (n.d.). *SORA2 MASTER PROMPT LIBRARY*.
[8] (n.d.). *SORA2 2025 RESEARCH FINDINGS*.
[9] (n.d.). *DEADMAN BROADCAST SORA2 PROFILE*.
[10] (n.d.). *DEADMAN BROADCAST PROMPT BUILDER*.
[11] anthropics/claude-code. (n.d.). *Claude Code*. GitHub.
[12] hesreallyhim/awesome-claude-code. (n.d.). *Design Review Workflow*. GitHub.
[13] hesreallyhim/awesome-claude-code. (n.d.). *Awesome Claude Code*. GitHub.
