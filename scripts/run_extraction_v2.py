#!/usr/bin/env python3
"""
Video Code Extraction v2 - Fixed encoding for Windows
"""

import os
import subprocess
import json
import hashlib
import re
import sys
from pathlib import Path
from datetime import datetime

# Force UTF-8 encoding
if sys.platform == 'win32':
    import locale
    locale.setlocale(locale.LC_ALL, 'en_US.UTF-8')

# Paths
FFMPEG_PATH = r"C:\Users\Administrator\.stacher\ffmpeg.exe"
TESSERACT_PATH = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
VIDEOS_DIR = r"C:\Users\Administrator\Videos"
OUTPUT_DIR = r"C:\Users\Administrator\Documents\ViewCreator-Research\extracted"

FRAME_INTERVAL = 10
MIN_CODE_LENGTH = 80

CODE_INDICATORS = [
    'function', 'const', 'let', 'var', 'import', 'export', 'class',
    'interface', 'async', 'await', 'return', 'if', 'else', 'for',
    'while', 'try', 'catch', 'def ', 'from ', 'npm', 'git', '=>',
    '{}', '();', '</', '/>', 'useState', 'useEffect', 'React',
    '.tsx', '.ts', '.py', '.js', 'console.log', 'print('
]


def log(msg):
    timestamp = datetime.now().strftime('%H:%M:%S')
    # Encode to ASCII, replacing non-ASCII chars
    safe_msg = str(msg).encode('ascii', 'replace').decode('ascii')
    print(f"[{timestamp}] {safe_msg}", flush=True)


def safe_name(name):
    """Create safe filename from video name."""
    # Remove Unicode chars and special chars
    safe = re.sub(r'[^\w\-\.]', '_', name)
    return safe[:40]


def extract_frames(video_path, output_dir):
    """Extract frames using ffmpeg."""
    video_name = safe_name(Path(video_path).stem)
    frames_dir = Path(output_dir) / 'frames' / video_name
    frames_dir.mkdir(parents=True, exist_ok=True)

    frame_pattern = str(frames_dir / "frame_%04d.png")

    cmd = [
        FFMPEG_PATH,
        '-i', str(video_path),
        '-vf', f'fps=1/{FRAME_INTERVAL}',
        '-q:v', '3',
        frame_pattern,
        '-y',
        '-loglevel', 'error'
    ]

    try:
        # Use bytes mode to avoid encoding issues
        result = subprocess.run(
            cmd,
            capture_output=True,
            timeout=600,
            encoding=None  # Use bytes
        )
        frames = sorted(frames_dir.glob("frame_*.png"))
        return [str(f) for f in frames]
    except subprocess.TimeoutExpired:
        log(f"  Timeout extracting frames")
        return []
    except Exception as e:
        log(f"  FFmpeg error: {type(e).__name__}")
        return []


def ocr_frame(frame_path):
    """Run Tesseract OCR on frame."""
    cmd = [TESSERACT_PATH, frame_path, 'stdout', '--psm', '6']

    try:
        result = subprocess.run(
            cmd,
            capture_output=True,
            timeout=30,
            encoding='utf-8',
            errors='ignore'
        )
        return result.stdout or ""
    except:
        return ""


def is_code(text):
    """Detect if text contains code."""
    if not text or len(text.strip()) < MIN_CODE_LENGTH:
        return False

    text_lower = text.lower()
    indicators = sum(1 for ind in CODE_INDICATORS if ind.lower() in text_lower)
    has_syntax = any(c in text for c in '{}[]();=>')

    return indicators >= 2 or (has_syntax and indicators >= 1)


def clean_text(text):
    """Clean OCR text."""
    lines = []
    for line in text.split('\n'):
        line = line.strip()
        if len(line) < 2:
            continue
        if re.match(r'^[\s\-\|_=~`]+$', line):
            continue
        if line.count(' ') > len(line) * 0.7:
            continue
        lines.append(line)
    return '\n'.join(lines)


def process_video(video_path, output_dir):
    """Process single video file."""
    video_name = Path(video_path).name
    log(f"Processing: {video_name[:60]}...")

    frames = extract_frames(video_path, output_dir)
    if not frames:
        log(f"  No frames extracted")
        return {'video': video_name, 'code_blocks': [], 'status': 'no_frames'}

    log(f"  {len(frames)} frames")

    code_blocks = []
    seen = set()

    for i, frame in enumerate(frames):
        try:
            text = ocr_frame(frame)

            if is_code(text):
                cleaned = clean_text(text)
                h = hashlib.md5(cleaned.encode('utf-8', errors='ignore')).hexdigest()[:10]

                if h not in seen and len(cleaned) > MIN_CODE_LENGTH:
                    seen.add(h)
                    ts = i * FRAME_INTERVAL
                    code_blocks.append({
                        'time': f"{ts//60}:{ts%60:02d}",
                        'code': cleaned,
                        'hash': h
                    })
        except Exception as e:
            pass
        finally:
            # Cleanup frame
            try:
                os.remove(frame)
            except:
                pass

    log(f"  Found {len(code_blocks)} code blocks")
    return {
        'video': video_name,
        'code_blocks': code_blocks,
        'frames': len(frames),
        'status': 'ok'
    }


def main():
    log("=" * 50)
    log("ViewCreator Video Code Extraction v2")
    log("=" * 50)

    output_path = Path(OUTPUT_DIR)
    output_path.mkdir(parents=True, exist_ok=True)

    # Find videos
    videos_path = Path(VIDEOS_DIR)
    all_videos = []

    for ext in ['*.mp4', '*.mkv', '*.avi', '*.mov']:
        all_videos.extend(videos_path.glob(ext))

    # Filter ViewCreator videos
    keywords = ['viewcreator', 'view_creator', 'marketing']
    vc_videos = [v for v in all_videos if any(k in v.name.lower().replace(' ', '_') for k in keywords)]

    log(f"ViewCreator videos: {len(vc_videos)}")
    log(f"Total videos: {len(all_videos)}")

    # Process ViewCreator videos
    videos_to_process = vc_videos if vc_videos else all_videos[:5]
    log(f"Processing {len(videos_to_process)} videos...")

    results = []
    all_code = []

    for i, video in enumerate(videos_to_process):
        log(f"\n[{i+1}/{len(videos_to_process)}]")
        result = process_video(str(video), str(output_path))
        results.append(result)

        if result.get('code_blocks'):
            all_code.append(f"\n\n{'#'*60}")
            all_code.append(f"# VIDEO: {result['video'][:50]}")
            all_code.append(f"{'#'*60}\n")

            for block in result['code_blocks']:
                all_code.append(f"\n# [{block['time']}]\n")
                all_code.append(block['code'])
                all_code.append("\n")

    # Save results
    with open(output_path / 'results.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)

    with open(output_path / 'all_code.txt', 'w', encoding='utf-8') as f:
        f.write('\n'.join(all_code))

    # Summary
    total_blocks = sum(len(r.get('code_blocks', [])) for r in results)

    log("\n" + "=" * 50)
    log("EXTRACTION COMPLETE")
    log(f"Videos processed: {len(results)}")
    log(f"Code blocks found: {total_blocks}")
    log(f"Output: {output_path}")
    log("=" * 50)


if __name__ == '__main__':
    main()
