import json

def create_empire_maker_guide():
    """
    Reads the JSON research data and generates a comprehensive Markdown guide
    on how to build a custom "Empire Maker" AI using Claude Skills.
    """
    with open("/home/ubuntu/claude_skills_repository_research.json", "r") as f:
        research_data = json.load(f)

    guide_content = "# Building Your Custom AI Empire Maker with Claude Skills\n\n"
    guide_content += "## Introduction\n\n"
    guide_content += "This guide provides a comprehensive overview of how to leverage Claude's **Agent Skills** to build a personalized \"Empire Maker\" AI system, tailored specifically to your DeadMan streaming empire. The research covers official Anthropic resources, community-driven repositories, and specialized tools from around the world, giving you a complete picture of the current Claude Skills ecosystem.\n\n"
    guide_content += "The key to building your Empire Maker is to combine pre-built Skills with custom-developed Skills that encapsulate your unique workflows, brand voice, and strategic goals. This guide will walk you through the available Skills, how to use them, and how to create your own.\n\n"

    guide_content += "## Understanding Claude Agent Skills\n\n"
    guide_content += "Agent Skills are modular, reusable capabilities that extend Claude's functionality. They are filesystem-based resources containing instructions, metadata, and optional code that Claude can load on-demand. This architecture allows for a powerful and efficient way to specialize Claude for your specific needs.\n\n"
    guide_content += "### Key Concepts\n\n"
    guide_content += "- **Progressive Disclosure**: Skills are loaded in three levels (Metadata, Instructions, Resources) to minimize token usage.\n"
    guide_content += "- **Filesystem-based**: Skills exist as directories, allowing for complex structures with code, documentation, and other resources.\n"
    guide_content += "- **Composable**: Skills can be combined to create complex, multi-step workflows.\n\n"

    guide_content += "## Comprehensive Global Research on Claude Skills\n\n"
    guide_content += "The following is a detailed analysis of the major Claude Skills repositories and sources from around the world.\n\n"

    references = []

    for i, result in enumerate(research_data["results"]):
        output = result["output"]
        source_name = output.get("source_name", "N/A")
        source_url = output.get("source_url", "N/A")
        skills_count = output.get("skills_count", "N/A")
        skills_list = output.get("skills_list", "N/A")
        skill_categories = output.get("skill_categories", "N/A")
        notable_skills = output.get("notable_skills", "N/A")
        usage_instructions = output.get("usage_instructions", "N/A")

        guide_content += f"### {i+1}. {source_name}\n\n"
        guide_content += f"**Source URL**: [{source_url}]({source_url})\n\n"
        guide_content += f"**Total Skills**: {skills_count}\n\n"

        guide_content += "#### Notable Skills\n\n"
        guide_content += f"{notable_skills}\n\n"

        guide_content += "#### Skill Categories\n\n"
        guide_content += f"{skill_categories}\n\n"

        guide_content += "#### Available Skills\n\n"
        guide_content += f"{skills_list}\n\n"

        guide_content += "#### Usage Instructions\n\n"
        guide_content += f"{usage_instructions}\n\n"

        references.append(f'[{i+1}] [{source_name}]({source_url})')

    guide_content += "## How to Build Your Empire Maker AI\n\n"
    guide_content += "Building your custom Empire Maker involves a three-step process:\n\n"
    guide_content += "1.  **Leverage Pre-built Skills**: Start by integrating Anthropic's official document skills (Word, Excel, PowerPoint, PDF) into your workflow. These are production-ready and can handle many common tasks.\n\n"
    guide_content += "2.  **Explore and Adapt Community Skills**: The repositories listed above contain thousands of community-built Skills. Explore these to find tools that can be adapted to your needs. Pay special attention to the `awesome-claude-skills` repositories, which are curated lists of high-quality Skills.\n\n"
    guide_content += "3.  **Develop Custom Skills**: This is where you'll create the core of your Empire Maker. Develop custom Skills for your unique workflows, such as:\n"
    guide_content += "    -   **Content Generation**: A Skill that generates video scripts, social media posts, and other content in your unique 'DeadMan' brand voice.\n"
    guide_content += "    -   **Audience Engagement**: A Skill that analyzes comments and messages to identify trends and suggest engagement strategies.\n"
    guide_content += "    -   **Monetization**: A Skill that identifies sponsorship opportunities, tracks affiliate links, and analyzes revenue streams.\n\n"

    guide_content += "## Conclusion\n\n"
    guide_content += "By combining pre-built, community, and custom Skills, you can create a powerful, personalized AI assistant that is an expert in your streaming empire. This \"Empire Maker\" will be able to automate tasks, provide strategic insights, and help you grow your brand, all while operating exclusively for your benefit.\n\n"

    guide_content += "## References\n\n"
    guide_content += "\n".join(references)

    with open("/home/ubuntu/claude_empire_maker_guide.md", "w") as f:
        f.write(guide_content)

if __name__ == "__main__":
    create_empire_maker_guide()
