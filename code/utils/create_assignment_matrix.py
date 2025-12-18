'''
import json

def create_matrix():
    # Top 5 non-technical skills (from previous analysis)
    top_skills = [
        {"name": "content-creator", "focus": "SEO-optimized content, brand voice"},
        {"name": "marketing-demand-acquisition", "focus": "Multi-channel campaigns, paid media"},
        {"name": "marketing-strategy-pmm", "focus": "Product marketing, GTM strategy"},
        {"name": "content-research-writer", "focus": "Research-backed content creation"},
        {"name": "meeting-insights-analyzer", "focus": "Community engagement patterns"}
    ]

    # AI Council Roles (from the document)
    council_roles = [
        {"role": "Marcus Chen", "title": "Content Strategist & Growth Architect"},
        {"role": "Sofia \"Viper\" Reyes", "title": "Clip & Short-Form Alchemist"},
        {"role": "James \"Tech\" Murphy", "title": "Stream Production Specialist"},
        {"role": "Riley Nakamura", "title": "Copy & Caption Specialist"},
        {"role": "Astrid Volkov", "title": "Thumbnail & Visual Brand Designer"},
        {"role": "Dante Williams", "title": "Community Manager & Engagement Driver"},
        {"role": "Dr. Priya Malhotra", "title": "Analytics Officer & Data Strategist"},
        {"role": "Victoria \"Vick\" Bradford", "title": "Brand Partnerships & Monetization"},
        {"role": "SEXYO", "title": "SEO Expert"},
        {"role": "Email Campaign Strategist", "title": "Email Marketing Master"},
        {"role": "Local SEO Guru", "title": "Local Business Domination"}
    ]

    # --- Create the Assignment Matrix ---
    matrix = []
    for role in council_roles:
        assigned_skills = []
        role_title_lower = role["title"].lower()

        # Skill assignment logic
        if any(keyword in role_title_lower for keyword in ["content", "strategist", "growth", "copy", "caption", "seo"]):
            if any(skill["name"] == "content-creator" for skill in top_skills):
                assigned_skills.append("content-creator")
            if any(skill["name"] == "content-research-writer" for skill in top_skills):
                assigned_skills.append("content-research-writer")

        if any(keyword in role_title_lower for keyword in ["marketing", "partnerships", "monetization", "seo", "email", "growth"]):
            if any(skill["name"] == "marketing-demand-acquisition" for skill in top_skills):
                assigned_skills.append("marketing-demand-acquisition")
            if any(skill["name"] == "marketing-strategy-pmm" for skill in top_skills):
                assigned_skills.append("marketing-strategy-pmm")

        if any(keyword in role_title_lower for keyword in ["community", "engagement", "analytics"]):
            if any(skill["name"] == "meeting-insights-analyzer" for skill in top_skills):
                assigned_skills.append("meeting-insights-analyzer")

        # Remove duplicates
        assigned_skills = sorted(list(set(assigned_skills)))
        matrix.append({
            "role": role["role"],
            "title": role["title"],
            "assigned_skills": assigned_skills
        })

    # --- Generate Markdown Report ---
    report_content = "# AI Council Skill-to-Role Assignment Matrix\n\n"
    report_content += "## Introduction\n\n"
    report_content += "This document provides a complete skill-to-role assignment matrix, cross-referencing the top 5 non-technical Claude Skills with the 14 specialized AI Council roles. This matrix serves as a blueprint for empowering each Council member with the specific AI capabilities they need to excel in their roles.\n\n"

    report_content += "## Skill-to-Role Assignment Matrix\n\n"
    report_content += "| AI Council Role | Title | Assigned Claude Skills |\n"
    report_content += "|:----------------|:------|:-----------------------|\n"

    for item in matrix:
        skills_str = ", ".join(f"`{s}`" for s in item['assigned_skills']) if item['assigned_skills'] else "_N/A_"
        report_content += f'| **{item["role"]}** | {item["title"]} | {skills_str} |\n'

    report_content += "\n## Detailed Recommendations\n\n"

    report_content += "### 1. **Marcus Chen (Content Strategist)**\n"
    report_content += "- **Assigned Skills**: `content-creator`, `content-research-writer`, `marketing-demand-acquisition`, `marketing-strategy-pmm`\n"
    report_content += "- **Rationale**: Marcus needs to orchestrate all content operations. These skills provide him with SEO-optimized content generation, research-backed insights, and strategic GTM planning capabilities.\n\n"

    report_content += "### 2. **Riley Nakamura (Copy & Caption Specialist)**\n"
    report_content += "- **Assigned Skills**: `content-creator`, `content-research-writer`\n"
    report_content += "- **Rationale**: Riley is responsible for the brand voice. `content-creator` ensures all copy is SEO-optimized and on-brand, while `content-research-writer` provides the data to back up her creative choices.\n\n"

    report_content += "### 3. **Dante Williams (Community Manager)**\n"
    report_content += "- **Assigned Skills**: `meeting-insights-analyzer`\n"
    report_content += "- **Rationale**: Dante needs to monitor community sentiment. `meeting-insights-analyzer` can be adapted to analyze chat logs and Discord conversations to identify trends, sentiment, and key community members.\n\n"

    report_content += "### 4. **Victoria \"Vick\" Bradford (Brand Partnerships)**\n"
    report_content += "- **Assigned Skills**: `marketing-demand-acquisition`, `marketing-strategy-pmm`\n"
    report_content += "- **Rationale**: Vick handles monetization. These skills allow her to identify and qualify potential brand partners, develop co-marketing strategies, and manage campaigns.\n\n"
    
    report_content += "### 5. **SEXYO (SEO Expert)**\n"
    report_content += "- **Assigned Skills**: `content-creator`, `content-research-writer`, `marketing-demand-acquisition`, `marketing-strategy-pmm`\n"
    report_content += "- **Rationale**: As the SEO expert, SEXYO needs a full suite of content and marketing skills to ensure all output is optimized for ranking and conversion.\n\n"

    report_content += "## Implementation Strategy\n\n"
    report_content += "1.  **Create Custom Super-Skills**: For each Council member, create a custom Super-Skill that combines their assigned Claude Skills into a single, powerful tool.\n"
    report_content += "2.  **Develop Role-Specific Prompts**: Create a library of prompts for each Council member that are tailored to their specific workflows and the capabilities of their assigned Super-Skill.\n"
    report_content += "3.  **Integrate with Existing Workflows**: Use the Claude API to integrate these Super-Skills directly into your content production and marketing automation pipelines.\n\n"
    report_content += "By assigning these specific Claude Skills to your AI Council members, you create a highly efficient and specialized team where each member is empowered with the exact AI capabilities they need to dominate their domain. This is the foundation of your AI-powered streaming empire.\n"

    with open("/home/ubuntu/skill_to_role_matrix.md", "w") as f:
        f.write(report_content)

if __name__ == "__main__":
    create_matrix()
'''
