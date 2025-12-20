#!/usr/bin/env python3
import json
import os
import re
from pathlib import Path

def analyze_video_data():
    """Analyze video descriptions and transcripts for ViewCreator code references"""
    
    video_data_dir = Path('video_data')
    results = []
    
    # Get all info.json files
    info_files = sorted(video_data_dir.glob('*.info.json'))
    
    for info_file in info_files:
        video_id = info_file.stem.replace('.info', '')
        
        try:
            # Load video info
            with open(info_file, 'r') as f:
                info = json.load(f)
            
            # Load description
            desc_file = video_data_dir / f"{video_id}.description"
            description = ""
            if desc_file.exists():
                with open(desc_file, 'r') as f:
                    description = f.read()
            
            # Load transcript if available
            transcript_file = video_data_dir / f"{video_id}.en.vtt"
            transcript = ""
            if transcript_file.exists():
                with open(transcript_file, 'r') as f:
                    transcript = f.read()
            
            # Extract key information
            analysis = {
                'video_id': video_id,
                'title': info.get('title', ''),
                'url': f"https://www.youtube.com/watch?v={video_id}",
                'duration': info.get('duration', 0),
                'duration_str': info.get('duration_string', ''),
                'upload_date': info.get('upload_date', ''),
                'description': description,
                'has_transcript': transcript_file.exists(),
                'tech_stack': extract_tech_stack(description, info.get('title', '')),
                'viewcreator_mentions': count_viewcreator_mentions(description, transcript),
                'code_keywords': find_code_keywords(description, transcript),
                'chapters': info.get('chapters', [])
            }
            
            results.append(analysis)
            
            print(f"✓ {video_id}: {analysis['title'][:60]}...")
            if analysis['viewcreator_mentions'] > 0:
                print(f"  → ViewCreator mentions: {analysis['viewcreator_mentions']}")
            if analysis['tech_stack']:
                print(f"  → Tech: {', '.join(analysis['tech_stack'][:5])}")
            
        except Exception as e:
            print(f"✗ Error processing {video_id}: {e}")
    
    # Save results
    with open('video_analysis_results.json', 'w') as f:
        json.dump(results, f, indent=2)
    
    # Create summary report
    create_summary_report(results)
    
    return results

def extract_tech_stack(description, title):
    """Extract technology stack mentions"""
    tech_keywords = [
        'Next.js', 'NestJS', 'PostgreSQL', 'AWS', 'React', 'TypeScript',
        'Cursor', 'Claude', 'GPT', 'Gemini', 'Warp', 'Vercel',
        'Supabase', 'Tailwind', 'Node.js', 'Python', 'Docker',
        'ViewCreator', 'GoalPost', 'BridgeMind', 'AI Agent',
        'Clipping Agent', 'Thumbnail', 'API', 'Database'
    ]
    
    found = []
    text = (description + ' ' + title).lower()
    
    for keyword in tech_keywords:
        if keyword.lower() in text:
            found.append(keyword)
    
    return list(set(found))

def count_viewcreator_mentions(description, transcript):
    """Count ViewCreator mentions"""
    text = (description + ' ' + transcript).lower()
    return text.count('viewcreator')

def find_code_keywords(description, transcript):
    """Find code-related keywords"""
    keywords = [
        'component', 'function', 'class', 'import', 'export',
        'const', 'let', 'var', 'async', 'await', 'useState',
        'useEffect', 'API', 'endpoint', 'route', 'schema',
        'database', 'query', 'mutation', 'deployment', 'build'
    ]
    
    found = []
    text = (description + ' ' + transcript).lower()
    
    for keyword in keywords:
        if keyword in text:
            found.append(keyword)
    
    return list(set(found))[:10]  # Limit to 10

def create_summary_report(results):
    """Create a summary report"""
    report = []
    report.append("=" * 80)
    report.append("VIDEO ANALYSIS SUMMARY REPORT")
    report.append("=" * 80)
    report.append(f"\nTotal Videos Analyzed: {len(results)}\n")
    
    # Videos with ViewCreator mentions
    vc_videos = [v for v in results if v['viewcreator_mentions'] > 0]
    report.append(f"\n📌 Videos mentioning ViewCreator: {len(vc_videos)}")
    for v in vc_videos:
        report.append(f"  • {v['title']}")
        report.append(f"    URL: {v['url']}")
        report.append(f"    Mentions: {v['viewcreator_mentions']}")
        report.append(f"    Duration: {v['duration_str']}")
        if v['chapters']:
            report.append(f"    Chapters: {len(v['chapters'])}")
        report.append("")
    
    # Tech stack summary
    all_tech = {}
    for v in results:
        for tech in v['tech_stack']:
            all_tech[tech] = all_tech.get(tech, 0) + 1
    
    report.append("\n📊 Technology Stack Frequency:")
    for tech, count in sorted(all_tech.items(), key=lambda x: x[1], reverse=True):
        report.append(f"  {tech}: {count} videos")
    
    # Videos with transcripts
    with_transcripts = [v for v in results if v['has_transcript']]
    report.append(f"\n📝 Videos with transcripts: {len(with_transcripts)}/{len(results)}")
    
    report_text = '\n'.join(report)
    
    with open('analysis_summary.txt', 'w') as f:
        f.write(report_text)
    
    print("\n" + report_text)

if __name__ == '__main__':
    results = analyze_video_data()
    print(f"\n✅ Analysis complete! Results saved to:")
    print("  - video_analysis_results.json")
    print("  - analysis_summary.txt")
