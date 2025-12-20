#!/usr/bin/env python3
import json

videos = []
with open('playlist_videos.json', 'r') as f:
    for line in f:
        try:
            data = json.loads(line.strip())
            videos.append({
                'id': data['id'],
                'url': data['url'],
                'title': data['title'],
                'duration': data.get('duration', 0),
                'duration_string': data.get('duration_string', ''),
                'view_count': data.get('view_count', 0)
            })
        except:
            pass

print(f"Total videos in playlist: {len(videos)}")

# Save to files
with open('all_playlist_videos.json', 'w') as f:
    json.dump(videos, f, indent=2)

with open('all_playlist_urls.txt', 'w') as f:
    for video in videos:
        f.write(f"{video['url']}\n")

print(f"Saved {len(videos)} videos")
print(f"First 5 videos:")
for i, v in enumerate(videos[:5]):
    print(f"  {i+1}. {v['title']}")
