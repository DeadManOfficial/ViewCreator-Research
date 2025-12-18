#!/usr/bin/env python3
"""
Deep analysis script for large text file
Splits file into chunks and analyzes each section
"""

import os
import json

def analyze_large_file(filepath, chunk_size=5000):
    """
    Analyze a large file by processing it in chunks
    """
    
    results = {
        "metadata": {},
        "sections": [],
        "content_types": {},
        "key_topics": [],
        "statistics": {}
    }
    
    # Read and analyze the file
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        lines = f.readlines()
    
    total_lines = len(lines)
    results["metadata"]["total_lines"] = total_lines
    results["metadata"]["file_size_mb"] = os.path.getsize(filepath) / (1024 * 1024)
    
    # Analyze content structure
    sections = []
    current_section = {"start": 0, "title": "Unknown", "lines": []}
    
    # Track content types
    content_indicators = {
        "social_media": ["@", "twitter", "tiktok", "instagram", "posts", "followers", "tweet"],
        "documentation": ["##", "###", "README", "ROLE_", "FRAMEWORK"],
        "code": ["def ", "class ", "import ", "function", "const ", "var "],
        "data": ["csv", "json", "{", "[", "data:", "sources"],
        "conversation": ["Question:", "Answer:", "Gemini", "Conversation with"],
        "analysis": ["analysis", "insights", "metrics", "strategy", "framework"],
        "streaming": ["stream", "twitch", "youtube", "gaming", "content"],
        "ai_prompts": ["prompt", "sora", "AI", "generation", "model"],
    }
    
    content_type_counts = {key: 0 for key in content_indicators.keys()}
    
    # Key topics tracking
    topic_keywords = {
        "streaming": 0,
        "gaming": 0,
        "AI": 0,
        "sora": 0,
        "social media": 0,
        "content creation": 0,
        "team roles": 0,
        "SEO": 0,
        "analytics": 0,
        "viral": 0,
        "algorithm": 0,
        "deadman": 0,
        "podcast": 0,
        "prompt": 0,
    }
    
    # Process lines
    for i, line in enumerate(lines):
        line_lower = line.lower()
        
        # Count content types
        for content_type, indicators in content_indicators.items():
            if any(indicator.lower() in line_lower for indicator in indicators):
                content_type_counts[content_type] += 1
        
        # Count topics
        for topic in topic_keywords.keys():
            if topic.lower() in line_lower:
                topic_keywords[topic] += 1
        
        # Detect section breaks
        if line.startswith("##") or line.startswith("ROLE_") or line.startswith("==="):
            if current_section["lines"]:
                sections.append({
                    "start_line": current_section["start"],
                    "end_line": i,
                    "title": current_section["title"],
                    "line_count": len(current_section["lines"])
                })
            current_section = {
                "start": i,
                "title": line.strip()[:100],
                "lines": []
            }
        
        current_section["lines"].append(line)
    
    # Add final section
    if current_section["lines"]:
        sections.append({
            "start_line": current_section["start"],
            "end_line": total_lines,
            "title": current_section["title"],
            "line_count": len(current_section["lines"])
        })
    
    results["sections"] = sections
    results["content_types"] = content_type_counts
    results["key_topics"] = topic_keywords
    
    # Statistics
    results["statistics"] = {
        "total_characters": sum(len(line) for line in lines),
        "average_line_length": sum(len(line) for line in lines) / total_lines if total_lines > 0 else 0,
        "non_empty_lines": sum(1 for line in lines if line.strip()),
        "section_count": len(sections)
    }
    
    return results, lines

def extract_key_content(lines):
    """
    Extract key content sections from the file
    """
    key_sections = {
        "roles": [],
        "frameworks": [],
        "strategies": [],
        "data": [],
        "conversations": []
    }
    
    in_role = False
    in_framework = False
    current_content = []
    current_type = None
    
    for i, line in enumerate(lines):
        # Detect ROLE sections
        if "ROLE_" in line or "Role " in line:
            if current_content and current_type:
                key_sections[current_type].append("\n".join(current_content))
            current_content = [line]
            current_type = "roles"
            in_role = True
            continue
        
        # Detect FRAMEWORK sections
        if "FRAMEWORK" in line.upper() or "## " in line:
            if current_content and current_type:
                key_sections[current_type].append("\n".join(current_content))
            current_content = [line]
            current_type = "frameworks"
            in_framework = True
            continue
        
        # Detect strategy sections
        if any(keyword in line.lower() for keyword in ["strategy", "metrics", "algorithm", "viral"]):
            if not current_type:
                current_type = "strategies"
                current_content = [line]
        
        # Continue collecting content
        if current_type and line.strip():
            current_content.append(line)
            
            # Break after reasonable section size
            if len(current_content) > 100:
                key_sections[current_type].append("\n".join(current_content))
                current_content = []
                current_type = None
    
    # Add final section
    if current_content and current_type:
        key_sections[current_type].append("\n".join(current_content))
    
    return key_sections

def main():
    filepath = "/home/ubuntu/upload/sssswss.txt"
    
    print("Starting deep analysis of file...")
    print("=" * 80)
    
    # Analyze file
    results, lines = analyze_large_file(filepath)
    
    # Print metadata
    print(f"\n📊 FILE METADATA")
    print(f"Total Lines: {results['metadata']['total_lines']:,}")
    print(f"File Size: {results['metadata']['file_size_mb']:.2f} MB")
    print(f"Total Characters: {results['statistics']['total_characters']:,}")
    print(f"Non-empty Lines: {results['statistics']['non_empty_lines']:,}")
    print(f"Sections Detected: {results['statistics']['section_count']}")
    
    # Print content types
    print(f"\n📁 CONTENT TYPE DISTRIBUTION")
    sorted_types = sorted(results['content_types'].items(), key=lambda x: x[1], reverse=True)
    for content_type, count in sorted_types:
        if count > 0:
            print(f"  {content_type.replace('_', ' ').title()}: {count:,} occurrences")
    
    # Print key topics
    print(f"\n🔑 KEY TOPICS FREQUENCY")
    sorted_topics = sorted(results['key_topics'].items(), key=lambda x: x[1], reverse=True)
    for topic, count in sorted_topics[:15]:
        if count > 0:
            print(f"  {topic.title()}: {count:,} mentions")
    
    # Print major sections
    print(f"\n📚 MAJOR SECTIONS DETECTED")
    for i, section in enumerate(results['sections'][:20], 1):
        print(f"  {i}. Lines {section['start_line']}-{section['end_line']}: {section['title'][:80]}")
    
    if len(results['sections']) > 20:
        print(f"  ... and {len(results['sections']) - 20} more sections")
    
    # Extract key content
    print(f"\n🎯 EXTRACTING KEY CONTENT...")
    key_content = extract_key_content(lines)
    
    for content_type, items in key_content.items():
        if items:
            print(f"  {content_type.title()}: {len(items)} sections found")
    
    # Save results
    output_file = "/home/ubuntu/file_analysis_results.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2)
    
    print(f"\n✅ Analysis complete! Results saved to: {output_file}")
    
    # Create summary chunks for detailed reading
    chunk_size = 10000
    chunks_dir = "/home/ubuntu/file_chunks"
    os.makedirs(chunks_dir, exist_ok=True)
    
    print(f"\n📦 Creating readable chunks...")
    chunk_count = 0
    for i in range(0, len(lines), chunk_size):
        chunk = lines[i:i+chunk_size]
        chunk_file = f"{chunks_dir}/chunk_{chunk_count:03d}_lines_{i}-{i+len(chunk)}.txt"
        with open(chunk_file, 'w', encoding='utf-8') as f:
            f.writelines(chunk)
        chunk_count += 1
    
    print(f"  Created {chunk_count} chunks in {chunks_dir}/")
    
    return results

if __name__ == "__main__":
    main()
