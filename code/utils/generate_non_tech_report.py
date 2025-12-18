
import json

def generate_report():
    with open("/home/ubuntu/streaming_non_tech_skills_ranked.json", "r") as f:
        ranked_skills_data = json.load(f)

    # Flatten the list of individual skills from all sources
    all_individual_skills = []
    for source in ranked_skills_data:
        for skill_name in source.get("individual_skills", []):
            # Clean up skill name
            cleaned_name = skill_name.replace("`", "").replace("*", "").strip()
            if ":" in cleaned_name:
                cleaned_name = cleaned_name.split(":")[0].strip()
            
            all_individual_skills.append({
                "name": cleaned_name,
                "source": source["source"],
                "url": source["url"],
                "relevance_score": source["score"],
                "matched_categories": source["matched_categories"]
            })

    # Define keywords for non-technical relevance
    relevance_keywords = {
        "content-creator": 10,
        "marketing-demand-acquisition": 10,
        "marketing-strategy-pmm": 10,
        "content-research-writer": 9,
        "meeting-insights-analyzer": 8,
        "competitive-ads-extractor": 8,
        "lead-research-assistant": 7,
        "brand-guidelines": 7,
        "internal-comms": 6,
        "brainstorming": 5,
        "writing-plans": 5,
        "community": 10,
        "moderation": 10,
        "marketing": 9,
        "social": 8,
        "seo": 8,
        "copywriting": 7,
        "campaign": 7,
        "analytics": 6
    }

    # Score and rank individual skills
    top_skills = []
    seen_skills = set()

    for skill in all_individual_skills:
        lower_name = skill["name"].lower()
        if lower_name in seen_skills:
            continue
        
        score = 0
        for keyword, value in relevance_keywords.items():
            if keyword in lower_name:
                score += value
        score += skill["relevance_score"] # Add source score
        
        skill["final_score"] = score
        top_skills.append(skill)
        seen_skills.add(lower_name)

    top_skills.sort(key=lambda x: x["final_score"], reverse=True)

    # --- Generate Markdown Report ---
    report_content = "# Top 5 Most Relevant Non-Technical Skills for a Streaming Platform\n\n"
    report_content += "## Introduction\n\n"
    report_content += "This report analyzes the non-technical Claude Skills from the comprehensive global research to identify the top 5 most relevant skills for managing a streaming platform. The analysis focuses on skills related to **content moderation, community management, and marketing automation**.\n\n"

    report_content += "## Top 5 Non-Technical Skills\n\n"
    report_content += "| Rank | Skill Name | Source Repository | Key Focus Areas |\n"
    report_content += "|:----:|:-----------|:------------------|:----------------|\n"

    for i, skill in enumerate(top_skills[:5], 1):
        name = skill['name']
        source = skill['source']
        url = skill['url']
        categories = ", ".join(skill['matched_categories'])
        report_content += f"| {i} | **{name}** | [{source}]({url}) | {categories} |\n"

    report_content += "\n## Detailed Analysis of Top 5 Skills\n\n"

    for i, skill in enumerate(top_skills[:5], 1):
        name = skill['name']
        source = skill['source']
        url = skill['url']
        categories_str = ", ".join(skill['matched_categories'])
        report_content += f"### {i}. {name}\n\n"
        report_content += f"- **Source**: [{source}]({url})\n"
        report_content += f"- **Relevance**: This skill is highly relevant for **{categories_str}**.\n"
        report_content += "- **Use Case**: This skill can be used to automate and enhance the non-technical operations of your streaming platform. For example, a `content-creator` skill can generate SEO-optimized marketing copy, while a `marketing-demand-acquisition` skill can manage multi-channel campaigns. A `meeting-insights-analyzer` can provide valuable feedback on community engagement and team communication.\n\n"

    report_content += "## Recommendations for Your DeadMan Empire\n\n"
    report_content += "To build a powerful non-technical AI assistant for your streaming empire, it is recommended to create a custom **Super-Skill** that combines the functionalities of these top skills. This will create a specialized agent for managing your brand, community, and marketing.\n\n"
    report_content += "1.  **Create a `Community & Content Moderator` Skill**: Combine `content-creator` with community management features to automate content scheduling, analyze engagement, and moderate discussions.\n"
    report_content += "2.  **Build a `Marketing & Growth Engine` Skill**: Integrate `marketing-demand-acquisition` and `competitive-ads-extractor` to automate marketing campaigns, track performance, and analyze competitor strategies.\n"
    report_content += "3.  **Develop a `Brand & Strategy Guardian` Skill**: Use `brand-guidelines` and `marketing-strategy-pmm` to ensure all content aligns with your DeadMan brand voice and strategic goals.\n\n"
    report_content += "By leveraging these non-technical skills, you can automate key aspects of your streaming business, allowing you to focus on creating great content while your AI assistant manages the community, marketing, and brand consistency.\n"

    with open("/home/ubuntu/top_5_non_tech_skills_report.md", "w") as f:
        f.write(report_content)

if __name__ == "__main__":
    generate_report()
