#!/usr/bin/env python3
import json
import subprocess
import re
import os
from pathlib import Path

def get_video_info(video_url):
    """Get detailed video information including description and chapters"""
    try:
        cmd = [
            "yt-dlp",
            "--dump-json",
            "--no-download",
            "--write-auto-sub",
            "--skip-download",
            video_url
        ]
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
        if result.returncode == 0:
            return json.loads(result.stdout)
        return None
    except Exception as e:
        print(f"Error getting info for {video_url}: {e}")
        return None

def extract_code_references(description, title):
    """Extract code-related references from description"""
    code_refs = {
        'github_links': [],
        'tech_stack': [],
        'tools_mentioned': [],
        'timestamps': []
    }
    
    if not description:
        return code_refs
    
    # Extract GitHub links
    github_pattern = r'https?://github\.com/[^\s\)]+'
    code_refs['github_links'] = re.findall(github_pattern, description)
    
    # Extract common tech stack mentions
    tech_keywords = [
        'React', 'Next.js', 'TypeScript', 'JavaScript', 'Python', 'Node.js',
        'Cursor', 'Claude', 'GPT', 'AI', 'API', 'Database', 'Supabase',
        'Tailwind', 'CSS', 'HTML', 'AWS', 'Vercel', 'Docker',
        'ViewCreator', 'GoalPost', 'BridgeMind'
    ]
    
    for keyword in tech_keywords:
        if keyword.lower() in description.lower() or keyword.lower() in title.lower():
            code_refs['tech_stack'].append(keyword)
    
    # Extract timestamps (format: 00:00, 0:00, etc.)
    timestamp_pattern = r'(\d{1,2}:\d{2}(?::\d{2})?)\s*[-–—]\s*([^\n]+)'
    timestamps = re.findall(timestamp_pattern, description)
    code_refs['timestamps'] = [{'time': t[0], 'description': t[1].strip()} for t in timestamps]
    
    return code_refs

def analyze_video(video_data):
    """Analyze a single video"""
    print(f"\nAnalyzing: {video_data['title']}")
    
    video_info = get_video_info(video_data['url'])
    
    if not video_info:
        return None
    
    analysis = {
        'video_id': video_data['id'],
        'url': video_data['url'],
        'title': video_data['title'],
        'description': video_info.get('description', ''),
        'duration': video_info.get('duration', 0),
        'upload_date': video_info.get('upload_date', ''),
        'view_count': video_info.get('view_count', 0),
        'chapters': video_info.get('chapters', []),
        'tags': video_info.get('tags', []),
        'code_references': extract_code_references(
            video_info.get('description', ''),
            video_data['title']
        )
    }
    
    return analysis

def main():
    # Load all videos
    with open('all_playlist_videos.json', 'r') as f:
        playlist_videos = json.load(f)
    
    # Also load standalone videos
    with open('all_videos_detailed.json', 'r') as f:
        standalone_videos = json.load(f)
    
    # Combine and deduplicate
    all_videos = playlist_videos.copy()
    existing_ids = {v['id'] for v in playlist_videos}
    
    for video in standalone_videos:
        if video['id'] not in existing_ids:
            all_videos.append(video)
    
    print(f"Total unique videos to analyze: {len(all_videos)}")
    
    # Create output directory
    output_dir = Path('video_analyses')
    output_dir.mkdir(exist_ok=True)
    
    # Analyze each video
    analyses = []
    for i, video in enumerate(all_videos[:20]):  # Start with first 20 for testing
        print(f"\nProgress: {i+1}/{min(20, len(all_videos))}")
        analysis = analyze_video(video)
        if analysis:
            analyses.append(analysis)
            
            # Save individual analysis
            output_file = output_dir / f"{video['id']}.json"
            with open(output_file, 'w') as f:
                json.dump(analysis, f, indent=2)
    
    # Save combined analysis
    with open('combined_analysis.json', 'w') as f:
        json.dump(analyses, f, indent=2)
    
    print(f"\n\nCompleted analysis of {len(analyses)} videos")
    print(f"Individual analyses saved to: {output_dir}")
    print(f"Combined analysis saved to: combined_analysis.json")

if __name__ == '__main__':
    main()
