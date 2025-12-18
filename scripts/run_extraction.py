#!/usr/bin/env python3
"""
Video Code Extraction - ViewCreator Videos
Extracts code from screen recordings using FFmpeg and Tesseract OCR.
"""

import os
import subprocess
import json
import hashlib
import re
from pathlib import Path
from datetime import datetime

# Paths
FFMPEG_PATH = r"C:\Users\Administrator\.stacher\ffmpeg.exe"
TESSERACT_PATH = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
VIDEOS_DIR = r"C:\Users\Administrator\Videos"
OUTPUT_DIR = r"C:\Users\Administrator\Documents\ViewCreator-Research\extracted"

# Configuration
FRAME_INTERVAL = 10  # Extract frame every N seconds (faster processing)
MIN_CODE_LENGTH = 100

CODE_INDICATORS = [
    'function', 'const', 'let', 'var', 'import', 'export', 'class',
    'interface', 'type', 'async', 'await', 'return', 'if', 'else',
    'for', 'while', 'try', 'catch', 'def ', 'from ', 'npm', 'git',
    '=>', '{}', '();', '</', '/>', 'useState', 'useEffect', 'React',
    'SELECT', 'FROM', 'WHERE', 'CREATE', 'INSERT', '.tsx', '.ts', '.py'
]


def log(msg):
    print(f"[{datetime.now().strftime('%H:%M:%S')}] {msg}")


def extract_frames(video_path, output_dir):
    """Extract frames from video."""
    video_name = Path(video_path).stem[:50]  # Truncate long names
    safe_name = re.sub(r'[^\w\-]', '_', video_name)
    frames_dir = Path(output_dir) / 'frames' / safe_name
    frames_dir.mkdir(parents=True, exist_ok=True)

    frame_pattern = str(frames_dir / f"frame_%04d.png")

    cmd = [
        FFMPEG_PATH, '-i', video_path,
        '-vf', f'fps=1/{FRAME_INTERVAL}',
        '-q:v', '3',
        frame_pattern,
        '-y', '-loglevel', 'error'
    ]

    try:
        subprocess.run(cmd, capture_output=True, check=True, timeout=300)
        frames = sorted(frames_dir.glob("frame_*.png"))
        return [str(f) for f in frames]
    except Exception as e:
        log(f"  Error extracting frames: {e}")
        return []


def ocr_frame(frame_path):
    """Run OCR on a frame."""
    cmd = [TESSERACT_PATH, frame_path, 'stdout', '--psm', '6']

    try:
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
        return result.stdout
    except:
        return ""


def is_code(text):
    """Check if text contains code."""
    if not text or len(text.strip()) < MIN_CODE_LENGTH:
        return False

    indicators_found = sum(1 for ind in CODE_INDICATORS if ind.lower() in text.lower())
    has_brackets = any(c in text for c in '{}[]();')
    has_operators = '=>' in text or '===' in text or '!=' in text

    return indicators_found >= 2 or (has_brackets and indicators_found >= 1) or has_operators


def clean_text(text):
    """Clean OCR output."""
    lines = text.split('\n')
    cleaned = []
    for line in lines:
        line = line.strip()
        if len(line) < 3:
            continue
        if re.match(r'^[^a-zA-Z0-9]*$', line):
            continue
        if line.count(' ') > len(line) * 0.6:
            continue
        cleaned.append(line)
    return '\n'.join(cleaned)


def process_video(video_path, output_dir):
    """Process a single video."""
    video_name = Path(video_path).name
    log(f"Processing: {video_name}")

    frames = extract_frames(video_path, output_dir)
    if not frames:
        return {'video': video_name, 'code_blocks': [], 'error': 'No frames'}

    log(f"  {len(frames)} frames extracted")

    code_blocks = []
    seen_hashes = set()

    for i, frame in enumerate(frames):
        text = ocr_frame(frame)

        if is_code(text):
            cleaned = clean_text(text)
            text_hash = hashlib.md5(cleaned.encode()).hexdigest()[:12]

            if text_hash not in seen_hashes and len(cleaned) > MIN_CODE_LENGTH:
                seen_hashes.add(text_hash)
                timestamp = i * FRAME_INTERVAL
                code_blocks.append({
                    'timestamp': f"{timestamp // 60}:{timestamp % 60:02d}",
                    'content': cleaned,
                    'hash': text_hash
                })

        # Clean up frame after processing
        try:
            os.remove(frame)
        except:
            pass

    log(f"  Found {len(code_blocks)} code blocks")
    return {'video': video_name, 'code_blocks': code_blocks, 'frames_processed': len(frames)}


def main():
    log("=" * 60)
    log("ViewCreator Video Code Extraction")
    log("=" * 60)

    output_path = Path(OUTPUT_DIR)
    output_path.mkdir(parents=True, exist_ok=True)

    # Find ViewCreator videos first
    videos_path = Path(VIDEOS_DIR)
    all_videos = list(videos_path.glob("*.mp4"))

    viewcreator_keywords = ['viewcreator', 'view creator', 'marketing viewcreator', 'ugc system']
    viewcreator_videos = [v for v in all_videos if any(kw in v.name.lower() for kw in viewcreator_keywords)]

    log(f"Found {len(viewcreator_videos)} ViewCreator videos")
    log(f"Found {len(all_videos)} total videos")

    # Process ViewCreator videos first
    videos_to_process = viewcreator_videos[:10]  # Start with first 10

    all_results = []
    all_code = []

    for video in videos_to_process:
        result = process_video(str(video), str(output_path))
        all_results.append(result)

        if result.get('code_blocks'):
            all_code.append(f"\n\n# {'='*50}")
            all_code.append(f"# VIDEO: {result['video']}")
            all_code.append(f"# {'='*50}\n")

            for block in result['code_blocks']:
                all_code.append(f"\n# --- Timestamp: {block['timestamp']} ---\n")
                all_code.append(block['content'])

    # Save results
    results_file = output_path / 'extraction_results.json'
    with open(results_file, 'w', encoding='utf-8') as f:
        json.dump(all_results, f, indent=2)

    code_file = output_path / 'extracted_code.txt'
    with open(code_file, 'w', encoding='utf-8') as f:
        f.write('\n'.join(all_code))

    log("=" * 60)
    log(f"Extraction complete!")
    log(f"Results: {results_file}")
    log(f"Code: {code_file}")

    total_blocks = sum(len(r.get('code_blocks', [])) for r in all_results)
    log(f"Total code blocks extracted: {total_blocks}")
    log("=" * 60)


if __name__ == '__main__':
    main()
