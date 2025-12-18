# Banana Prompt Quicker - Complete Prompts Extraction

This collection contains **all 305 prompts** extracted from the Banana Prompt Quicker project using wide research and parallel processing techniques.

## Overview

**Banana Prompt Quicker** is a Chrome extension that enables quick insertion of popular prompts into Google AI Studio and Gemini. This extraction captures the complete prompt library with all metadata, source links, and categorization.

## Sources

The prompts were extracted from the following official sources:

1. **Website Gallery**: https://glidea.github.io/banana-prompt-quicker/#gallery
2. **GitHub Repository**: https://github.com/glidea/banana-prompt-quicker
3. **Data Source (JSON)**: https://raw.githubusercontent.com/glidea/banana-prompt-quicker/main/prompts.json

## Files Included

### Primary Data Files

| File | Description | Size |
|------|-------------|------|
| `all_banana_prompts.md` | Complete collection in Markdown format with full prompts, organized by category | 274 KB |
| `all_banana_prompts.csv` | Structured CSV format for data analysis and spreadsheet import | 241 KB |
| `banana_prompts.json` | Original JSON data from the repository | 287 KB |
| `banana_prompts_summary.md` | Statistical summary and analysis of the prompt collection | 1.4 KB |

### Supporting Files

- `banana_categories.txt` - List of all categories and tags
- `banana_prompts_visible.txt` - Initial visible prompts from website exploration

## Statistics Summary

### Overall Numbers

- **Total Prompts**: 305
- **Prompts with Source Links**: 209
- **Unique Source URLs**: 187
- **Categories**: 5
- **Sub-categories**: 16
- **Authors**: 85

### Category Distribution

| Category | Count | Percentage |
|----------|-------|------------|
| 生活 (Life) | 117 | 38.4% |
| 有趣 (Fun) | 117 | 38.4% |
| 工作 (Work) | 32 | 10.5% |
| NSFW | 25 | 8.2% |
| 学习 (Study) | 14 | 4.6% |

### Mode Distribution

| Mode | Count | Percentage |
|------|-------|------------|
| Edit | 155 | 50.8% |
| Generate | 150 | 49.2% |

### Top Contributors

The top 5 authors by number of prompts:

1. **@songguoxiansen** - 38 prompts
2. **@dotey** - 37 prompts
3. **@NanoBanana_labs** - 36 prompts
4. **Wechat@01Founder** - 19 prompts
5. **@ZHO_ZHO_ZHO** - 18 prompts

### Source Domains

Most prompts reference sources from:

- **X/Twitter** (177 prompts)
- **linux.do** (12 prompts)
- **kokorolab.net** (1 prompt)
- **Other sources** (19 prompts)

## Data Structure

Each prompt entry contains the following fields:

- **ID**: Sequential identifier
- **Title**: Prompt name (in Chinese)
- **Author**: Creator attribution
- **Category**: Main category (工作/生活/学习/有趣/NSFW)
- **Sub_Category**: Specific tag (PPT, 美食, 表情包, etc.)
- **Mode**: Either "generate" or "edit"
- **Source_Link**: Original source URL (if available)
- **Preview_URL**: Preview image URL
- **Prompt_Text**: Complete prompt content

## Popular Sub-Categories

The most common prompt types include:

- **想象 (Imagination)** - 5 prompts
- **总结 (Summary)** - 4 prompts
- **旅游 (Travel)** - 4 prompts
- **表情包 (Emoji/Stickers)** - 3 prompts
- **封面 (Cover)** - 3 prompts
- **滤镜 (Filter)** - 3 prompts

## Usage

### Markdown Format
Open `all_banana_prompts.md` to browse all prompts organized by category with complete formatting and source links.

### CSV Format
Import `all_banana_prompts.csv` into Excel, Google Sheets, or any data analysis tool for filtering, sorting, and custom analysis.

### JSON Format
Use `banana_prompts.json` for programmatic access and integration into applications.

## Extraction Methodology

This collection was created using **parallel processing (Wide Research)** techniques to:

1. Explore the website gallery and identify all available categories
2. Access the GitHub repository to locate the canonical data source
3. Download and parse the complete prompts.json file
4. Extract and structure all metadata fields
5. Generate multiple output formats for different use cases
6. Create statistical summaries and analysis

## License

The original Banana Prompt Quicker project is licensed under the MIT License. Please refer to the [original repository](https://github.com/glidea/banana-prompt-quicker) for licensing details.

## Attribution

All prompts are credited to their respective authors as listed in the original data source. This extraction is for research and educational purposes, maintaining all original attribution and source links.

## Related Links

- **Chrome Extension**: [Chrome Web Store](https://chromewebstore.google.com/detail/banana-prompt-quicker/hgfgfocicepifbolifedlokjkknigoid)
- **Project Website**: https://glidea.github.io/banana-prompt-quicker/
- **GitHub Repository**: https://github.com/glidea/banana-prompt-quicker
- **Author's Social Media**: [小红书 (Xiaohongshu)](https://www.xiaohongshu.com/user/profile/5d2f4a1f0000000011028c5e)

---

**Extraction Date**: December 17, 2025  
**Extraction Method**: Wide Research with Parallel Processing  
**Data Version**: Main branch (latest commit)
