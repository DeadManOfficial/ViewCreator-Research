
import json

def generate_report():
    with open("/home/ubuntu/streaming_dev_skills_ranked.json", "r") as f:
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

    # Define keywords for streaming platform relevance
    relevance_keywords = [
        "backend", "frontend", "fullstack", "api", "server", "database", "scalable", "react", "ui",
        "devops", "ci/cd", "deployment", "docker", "test", "security", "auth", "video", "media",
        "real-time", "chat", "websocket", "performance", "data", "analytics", "web-artifacts-builder",
        "webapp-testing", "mcp-builder", "senior-architect", "playwright-skill"
    ]

    # Score and rank individual skills
    top_skills = []
    seen_skills = set()

    for skill in all_individual_skills:
        if skill["name"].lower() in seen_skills:
            continue
        
        score = 0
        for keyword in relevance_keywords:
            if keyword in skill["name"].lower():
                score += 5 # High score for keyword in name
        score += skill["relevance_score"] # Add source score
        
        skill['final_score'] = score
        top_skills.append(skill)
        seen_skills.add(skill["name"].lower())

    top_skills.sort(key=lambda x: x['final_score'], reverse=True)

    # --- Generate Markdown Report ---
    report_content = "# Top 10 Most Relevant Development Skills for a Streaming Platform\n\n"
    report_content += "## Introduction\n\n"
    report_content += "This report analyzes the development-focused Claude Skills from the comprehensive global research to identify the top 10 most relevant skills for building a streaming platform's core technical infrastructure. The analysis is based on a scoring system that prioritizes skills related to backend, frontend, full-stack development, real-time features, video processing, DevOps, and performance.\n\n"

    report_content += "## Top 10 Development Skills\n\n"
    report_content += "| Rank | Skill Name | Source Repository | Matched Categories |\n"
    report_content += "|:----:|:-----------|:------------------|:-------------------|\n"

    for i, skill in enumerate(top_skills[:10], 1):
        categories = ", ".join(skill['matched_categories'])
        report_content += f"| {i} | **{skill['name']}** | [{skill['source']}]({skill['url']}) | {categories} |\n"

    report_content += "\n## Detailed Analysis of Top Skills\n\n"

    for i, skill in enumerate(top_skills[:10], 1):
        report_content += f"### {i}. {skill['name']}\n\n"
        report_content += f"- **Source**: [{skill['source']}]({skill['url']})\n"
        categories_str = ", ".join(skill['matched_categories'])
        report_content += f"- **Relevance**: This skill is highly relevant as it directly addresses **{len(skill['matched_categories'])} core requirements** of a streaming platform, including: {categories_str}.\n"
        report_content += "- **Use Case**: This skill can be used to build, test, and deploy key components of the streaming service. For example, a `senior-backend` skill would be critical for designing the scalable API and database architecture, while a `senior-frontend` skill would handle the responsive user interface. Skills like `webapp-testing` and `senior-devops` are essential for ensuring quality and automating the deployment pipeline.\n\n"

    report_content += "## Recommendations\n\n"
    report_content += "To build your streaming platform, it is recommended to start by creating a custom **Super-Skill** that combines the functionalities of the top 3-5 skills identified. This approach will create a powerful, specialized agent capable of handling the entire development lifecycle.\n\n"
    report_content += "1.  **Combine `senior-fullstack`, `senior-backend`, and `senior-frontend`** to create a core development skill.\n"
    report_content += "2.  **Integrate `senior-devops` and `webapp-testing`** to build a robust CI/CD and quality assurance workflow.\n"
    report_content += "3.  **Leverage `web-artifacts-builder`** for rapidly prototyping and building the user interface components.\n\n"
    report_content += "By adopting these skills, you can significantly accelerate the development of your streaming platform and ensure it is built on a solid technical foundation.\n"

    with open("/home/ubuntu/top_10_streaming_skills_report.md", "w") as f:
        f.write(report_content)

if __name__ == "__main__":
    generate_report()
