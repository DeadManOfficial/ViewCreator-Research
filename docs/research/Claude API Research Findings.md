# Claude API Research Findings

## Core Capabilities

### 1. Agent Skills (Beta)
- **NEW FEATURE**: Extend Claude's capabilities with Skills
- Pre-built Skills: PowerPoint, Excel, Word, PDF
- Create custom Skills with instructions and scripts
- Progressive disclosure to efficiently manage context
- Available: Claude API (Beta), Microsoft Foundry (Beta)

### 2. 1M Token Context Window (Beta)
- Extended context for larger documents
- Maintain longer conversations
- Work with extensive codebases
- Available across all major platforms

### 3. Extended Thinking
- Enhanced reasoning for complex tasks
- Step-by-step thought process transparency
- Available on all major platforms

### 4. Tool Use & Programmatic Tool Calling
- Execute bash commands
- Run Python code in sandboxed environment
- Call tools programmatically from within code execution
- Reduces latency and token consumption

### 5. Memory (Beta)
- Store and retrieve information across conversations
- Build knowledge bases over time
- Maintain project context
- Learn from past interactions

### 6. Computer Use (Beta)
- Control computer interfaces
- Take screenshots
- Issue mouse and keyboard commands

### 7. Batch Processing
- Process large volumes asynchronously
- 50% cost savings vs standard API calls

### 8. Prompt Caching
- 5-minute cache (standard)
- 1-hour cache (extended)
- Reduce costs and latency

### 9. Citations
- Ground responses in source documents
- Provide exact sentence/passage references
- More verifiable, trustworthy outputs

### 10. Structured Outputs (Beta)
- Guarantee schema conformance
- JSON outputs for structured data
- Strict tool use for validated inputs

## Tools Available

1. **Bash** - Execute bash commands
2. **Code execution** - Run Python in sandbox
3. **Computer use** - Control computer interfaces
4. **Text editor** - Create and edit files
5. **Web fetch** - Retrieve full web page content
6. **Web search** - Access real-world data
7. **Memory** - Cross-conversation storage
8. **Tool search** - Scale to thousands of tools
9. **MCP connector** - Connect to remote MCP servers

## Key URLs
- API Overview: https://platform.claude.com/docs/en/api/overview
- Features: https://platform.claude.com/docs/en/build-with-claude/overview
- Agent Skills: https://platform.claude.com/docs/en/build-with-claude/agent-skills


## How Claude Skills Work - Deep Dive

### Progressive Disclosure Architecture

Claude Skills use a **3-level loading system** to minimize token usage:

**Level 1: Metadata (Always Loaded)**
- ~100 tokens per Skill
- YAML frontmatter with name and description
- Loaded at startup in system prompt
- Allows installing many Skills with minimal context penalty

**Level 2: Instructions (Loaded When Triggered)**
- Under 5k tokens
- Main SKILL.md body with workflows and best practices
- Only loaded when Skill matches user request
- Claude reads via bash: `bash: read pdf-skill/SKILL.md`

**Level 3: Resources & Code (Loaded As Needed)**
- Effectively unlimited content
- Additional markdown files, scripts, templates
- Files executed via bash WITHOUT loading into context
- Only script OUTPUT enters context, not the code itself

### Skill Structure Example

```
pdf-skill/
├── SKILL.md (main instructions)
├── FORMS.md (form-filling guide)
├── REFERENCE.md (detailed API reference)
└── scripts/
    └── fill_form.py (utility script)
```

### Key Advantages

1. **On-demand file access**: Claude only loads what's needed for each task
2. **Efficient script execution**: Code runs via bash, only output enters context
3. **No practical limit on bundled content**: Unused files consume zero tokens
4. **Composable**: Multiple Skills can work together

### Where Skills Work

- **Claude API** (via API calls)
- **Claude Code** (development environment)
- **Claude Agent SDK** (TypeScript/Python)
- **Claude.ai** (web interface)

### Example: PDF Processing Skill Loading

1. **Startup**: System prompt includes metadata: "PDF Processing - Extract text and tables from PDF files"
2. **User request**: "Extract text from this PDF and summarize it"
3. **Claude invokes**: `bash: read pdf-skill/SKILL.md` → Instructions loaded into context
4. **Claude determines**: Form filling not needed, so FORMS.md is NOT read
5. **Claude executes**: Uses instructions from SKILL.md to complete task

Source: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview


## Pre-built Agent Skills (Official Anthropic)

The following pre-built Agent Skills are available for immediate use:

1. **PowerPoint (pptx)**: Create presentations, edit slides, analyze presentation content
2. **Excel (xlsx)**: Create spreadsheets, analyze data, generate reports with charts
3. **Word (docx)**: Create documents, edit content, format text
4. **PDF (pdf)**: Generate formatted PDF documents and reports

**Availability**: Claude API and claude.ai
**Source**: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview#available-skills

## Custom Skills Examples

For complete examples of custom Skills, see the **Skills Cookbook**:
https://github.com/anthropics/anthropic-cookbook/tree/main/skills

## Limitations and Constraints

### Cross-surface availability
- Custom Skills do NOT sync across surfaces
- Skills uploaded to Claude.ai must be separately uploaded to the API
- Skills uploaded via API are not available on Claude.ai
- Custom Skills are workspace-based and separate from both Claude.ai and API

### Sharing scope
- **Claude.ai**: Individual user only; each team member must upload separately
- **Claude API**: Workspace-wide; all workspace members can access uploaded Skills
- **Claude Code**: Personal (`~/.claude/skills/`) or project-based (`.claude/skills/`); can be shared via Claude Code Plugins

### Runtime environment constraints
The exact runtime environment available to your skill depends on the product surface where you use it.

**Claude.ai**:
- Full VM environment with filesystem, bash, Python, Node.js
- Can execute code and scripts

Source: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview
