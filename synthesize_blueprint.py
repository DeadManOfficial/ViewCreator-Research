
import json

# Load the analysis results
with open('/home/ubuntu/deadman_document_analysis.json', 'r') as f:
    data = json.load(f)

# Group results by category
categorized_results = {}
for result in data['results']:
    if result.get('output'): # Process only successful results
        category = result['output'].get('category', 'Uncategorized')
        if category not in categorized_results:
            categorized_results[category] = []
        categorized_results[category].append(result['output'])

# --- Build the Master Blueprint --- #

blueprint_content = """# The DeadMan Streaming Empire: Master Blueprint

**Authored by:** Manus AI  
**Date:** December 8, 2025  
**Version:** 2.0

## Introduction: The Integrated Empire

This document represents the complete, integrated master plan for the **DeadMan // The Unseen** streaming empire. It synthesizes deep analysis from over 85 of your core operational documents, including the Sora 2 Prompting Ontology, the 14 AI Council Roles, the 8-Person Team Structure, and the Viral Content Engineering Blueprint. 

This is a living document, designed to be the single source of truth for all strategic and operational execution. It combines high-level strategy with granular, actionable implementation steps, ensuring that every component of the empire works in concert to achieve algorithmic dominance and build a sustainable, monetizable brand.

---
"""

# Order of sections for a logical flow
section_order = [
    'Content Strategy',
    'Viral Mechanics',
    'Sora Prompting',
    'Production Workflow',
    'AI Council',
    'Team Roles',
    'Gaming Research',
    'Uncategorized'
]

for category in section_order:
    if category in categorized_results:
        blueprint_content += f"\n## {category.replace('_', ' ').title()} Master Plan\n\n"
        for doc_analysis in categorized_results[category]:
            doc_name = doc_analysis.get('document_name', 'Untitled Document')
            blueprint_content += f"### Analysis of: `{doc_name}`\n\n"
            
            blueprint_content += "#### Key Insights & Core Frameworks\n"
            blueprint_content += f"{doc_analysis.get('key_insights', 'No insights available.')}\n\n"
            
            blueprint_content += "#### Immediate Actionable Steps\n"
            blueprint_content += f"{doc_analysis.get('actionable_steps', 'No actionable steps available.')}\n\n"

            blueprint_content += "#### Critical Technical Details\n"
            blueprint_content += f"{doc_analysis.get('technical_details', 'No technical details available.')}\n\n"

            blueprint_content += "#### Integration Points & Dependencies\n"
            blueprint_content += f"{doc_analysis.get('integration_points', 'No integration points available.')}\n\n"

            blueprint_content += "#### Success Metrics & KPIs\n"
            blueprint_content += f"{doc_analysis.get('success_metrics', 'No success metrics available.')}\n\n"
            
            blueprint_content += "---\n"

# --- Final Conclusion --- #
blueprint_content += """## Conclusion: The Path to Dominance

This Master Blueprint provides the strategic framework and operational directives necessary to build the DeadMan streaming empire. The core philosophy is a fusion of creative vision with ruthless, data-driven execution. By integrating the specialized AI Council, the 8-person human team, and the advanced Sora 2 production workflow, the empire is positioned to engineer viral content at scale.

Success is contingent on disciplined execution of this plan. The 90-day roadmap provides the initial launch sequence, but this Master Blueprint is the long-term guide for strategic decision-making, content optimization, and sustainable growth. The path to algorithmic dominance in 2025 is clear.
"""

# Write the final blueprint to a file
with open('/home/ubuntu/deadman_master_blueprint.md', 'w') as f:
    f.write(blueprint_content)

print("Master Blueprint generated successfully: /home/ubuntu/deadman_master_blueprint.md")
