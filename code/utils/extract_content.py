#!/usr/bin/env python3
"""
Extract and categorize all major content from the file
"""

import re
from collections import defaultdict

def extract_all_content(filepath):
    """
    Extract all major content sections and categorize them
    """
    
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    # Initialize storage
    extracted = {
        "social_media_posts": [],
        "team_roles": [],
        "frameworks": [],
        "sora_prompts": [],
        "deadman_content": [],
        "gaming_research": [],
        "strategies": [],
        "tools_tech": [],
        "metrics_analytics": [],
        "conversations": [],
        "miscellaneous": []
    }
    
    # Split into major sections
    lines = content.split('\n')
    
    # Extract ROLE definitions
    role_pattern = r'ROLE[_\s]+\d+[:\s]+(.*?)(?=ROLE[_\s]+\d+|$)'
    roles = re.findall(role_pattern, content, re.DOTALL)
    extracted["team_roles"] = [r.strip()[:2000] for r in roles if len(r.strip()) > 100]
    
    # Extract DEADMAN content
    deadman_sections = []
    in_deadman = False
    current_section = []
    
    for line in lines:
        if 'DEADMAN' in line.upper() or 'DeadMan' in line:
            in_deadman = True
            current_section = [line]
        elif in_deadman:
            current_section.append(line)
            if len(current_section) > 50 or (line.strip() == '' and len(current_section) > 10):
                deadman_sections.append('\n'.join(current_section))
                in_deadman = False
                current_section = []
    
    extracted["deadman_content"] = deadman_sections[:20]  # Top 20 sections
    
    # Extract Sora prompts and AI generation content
    sora_sections = []
    for i, line in enumerate(lines):
        if 'sora' in line.lower() or 'prompt' in line.lower():
            # Get context around the line
            start = max(0, i - 5)
            end = min(len(lines), i + 20)
            section = '\n'.join(lines[start:end])
            if len(section) > 100:
                sora_sections.append(section)
    
    extracted["sora_prompts"] = sora_sections[:30]  # Top 30 sections
    
    # Extract frameworks
    framework_keywords = ['FRAMEWORK', 'STRATEGY', 'SYSTEM', 'STRUCTURE', 'METHODOLOGY']
    framework_sections = []
    
    for i, line in enumerate(lines):
        if any(kw in line.upper() for kw in framework_keywords):
            start = max(0, i - 2)
            end = min(len(lines), i + 30)
            section = '\n'.join(lines[start:end])
            if len(section) > 150:
                framework_sections.append(section)
    
    extracted["frameworks"] = framework_sections[:40]
    
    # Extract metrics and analytics
    metrics_keywords = ['metric', 'analytics', 'kpi', 'performance', 'data', 'measurement']
    metrics_sections = []
    
    for i, line in enumerate(lines):
        if any(kw in line.lower() for kw in metrics_keywords):
            start = max(0, i - 3)
            end = min(len(lines), i + 15)
            section = '\n'.join(lines[start:end])
            if len(section) > 100:
                metrics_sections.append(section)
    
    extracted["metrics_analytics"] = metrics_sections[:25]
    
    # Extract gaming research
    gaming_keywords = ['gaming', 'game', 'twitch', 'streamer', 'esports']
    gaming_sections = []
    
    for i, line in enumerate(lines):
        if any(kw in line.lower() for kw in gaming_keywords):
            start = max(0, i - 2)
            end = min(len(lines), i + 10)
            section = '\n'.join(lines[start:end])
            if len(section) > 80:
                gaming_sections.append(section)
    
    extracted["gaming_research"] = gaming_sections[:30]
    
    # Extract social media content
    social_patterns = [r'@\w+', r'twitter\.com', r'tiktok\.com', r'\d+ followers', r'\d+ posts']
    social_sections = []
    
    for i, line in enumerate(lines):
        if any(re.search(pattern, line, re.IGNORECASE) for pattern in social_patterns):
            start = max(0, i - 1)
            end = min(len(lines), i + 8)
            section = '\n'.join(lines[start:end])
            if len(section) > 50:
                social_sections.append(section)
    
    extracted["social_media_posts"] = social_sections[:25]
    
    # Extract tools and tech
    tool_keywords = ['tool', 'software', 'platform', 'obs', 'adobe', 'api', 'plugin']
    tool_sections = []
    
    for i, line in enumerate(lines):
        if any(kw in line.lower() for kw in tool_keywords):
            start = max(0, i - 2)
            end = min(len(lines), i + 12)
            section = '\n'.join(lines[start:end])
            if len(section) > 80:
                tool_sections.append(section)
    
    extracted["tools_tech"] = tool_sections[:20]
    
    return extracted

def create_summary_document(extracted):
    """
    Create a comprehensive summary document
    """
    
    summary = []
    summary.append("=" * 80)
    summary.append("COMPREHENSIVE FILE ANALYSIS SUMMARY")
    summary.append("=" * 80)
    summary.append("")
    
    # Count totals
    total_sections = sum(len(v) for v in extracted.values())
    summary.append(f"Total Extracted Sections: {total_sections}")
    summary.append("")
    
    for category, sections in extracted.items():
        if sections:
            summary.append(f"\n{'=' * 80}")
            summary.append(f"{category.upper().replace('_', ' ')}")
            summary.append(f"{'=' * 80}")
            summary.append(f"Total Sections: {len(sections)}")
            summary.append("")
            
            # Show first few sections
            for i, section in enumerate(sections[:5], 1):
                summary.append(f"\n--- Section {i} ---")
                summary.append(section[:500])  # First 500 chars
                if len(section) > 500:
                    summary.append("... (truncated)")
                summary.append("")
    
    return '\n'.join(summary)

def main():
    filepath = "/home/ubuntu/upload/sssswss.txt"
    
    print("Extracting all content from file...")
    extracted = extract_all_content(filepath)
    
    # Create summary
    summary = create_summary_document(extracted)
    
    # Save summary
    summary_file = "/home/ubuntu/content_summary.txt"
    with open(summary_file, 'w', encoding='utf-8') as f:
        f.write(summary)
    
    print(f"✅ Summary created: {summary_file}")
    
    # Save detailed extractions
    for category, sections in extracted.items():
        if sections:
            category_file = f"/home/ubuntu/extracted_{category}.txt"
            with open(category_file, 'w', encoding='utf-8') as f:
                f.write(f"{category.upper().replace('_', ' ')}\n")
                f.write("=" * 80 + "\n\n")
                for i, section in enumerate(sections, 1):
                    f.write(f"\n{'=' * 80}\n")
                    f.write(f"SECTION {i}\n")
                    f.write(f"{'=' * 80}\n\n")
                    f.write(section)
                    f.write("\n\n")
            print(f"  ✅ Saved: {category_file} ({len(sections)} sections)")
    
    print(f"\n✅ All content extracted and categorized!")

if __name__ == "__main__":
    main()
