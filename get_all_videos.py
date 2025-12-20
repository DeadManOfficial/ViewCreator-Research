#!/usr/bin/env python3
import subprocess
import json

# Get all videos from the channel
channel_url = "https://www.youtube.com/@bridgemindai/videos"

print("Fetching all videos from BridgeMind channel...")
print("This may take a few minutes for 623 videos...")

# Use yt-dlp to get all video information
cmd = [
    "yt-dlp",
    "--flat-playlist",
    "--dump-json",
    "--playlist-end", "700",  # Get more than 623 to ensure we get all
    channel_url
]

result = subprocess.run(cmd, capture_output=True, text=True)

videos = []
for line in result.stdout.strip().split('\n'):
    if line:
        try:
            video_data = json.loads(line)
            videos.append({
                'url': f"https://www.youtube.com/watch?v={video_data['id']}",
                'title': video_data.get('title', 'Unknown'),
                'duration': video_data.get('duration', 0),
                'id': video_data['id']
            })
        except:
            pass

print(f"\nTotal videos found: {len(videos)}")

# Save to file
with open('all_videos_detailed.json', 'w') as f:
    json.dump(videos, f, indent=2)

with open('all_videos_urls.txt', 'w') as f:
    for video in videos:
        f.write(f"{video['url']}\n")

print(f"Saved {len(videos)} video URLs to all_videos_urls.txt")
print(f"Saved detailed info to all_videos_detailed.json")
