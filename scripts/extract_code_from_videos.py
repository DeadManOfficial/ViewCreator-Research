#!/usr/bin/env python3
"""
Video Code Extraction Pipeline
Extracts code snippets from screen recording videos using FFmpeg and Tesseract OCR.
Designed for extracting code from vibe coding tutorial videos.
"""

import os
import subprocess
import json
import hashlib
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
import re

# Configuration
FRAME_INTERVAL = 5  # Extract frame every N seconds
MIN_CODE_LINES = 3  # Minimum lines to consider as code
CODE_INDICATORS = [
    'function', 'const', 'let', 'var', 'import', 'export', 'class',
    'interface', 'type', 'async', 'await', 'return', 'if', 'else',
    'for', 'while', 'switch', 'case', 'try', 'catch', 'throw',
    'def ', 'from ', 'import ', 'class ', 'return ', 'async def',
    '=>', '{}', '()', '[];', '<>', '/>', '</', '= {', ': {',
    'npm', 'yarn', 'pnpm', 'git ', 'docker', 'kubectl',
    'SELECT', 'FROM', 'WHERE', 'INSERT', 'UPDATE', 'CREATE TABLE'
]


def extract_frames(video_path: str, output_dir: str, interval: int = FRAME_INTERVAL) -> list:
    """Extract frames from video at specified interval."""
    Path(output_dir).mkdir(parents=True, exist_ok=True)

    video_name = Path(video_path).stem
    frame_pattern = os.path.join(output_dir, f"{video_name}_frame_%04d.png")

    cmd = [
        'ffmpeg', '-i', video_path,
        '-vf', f'fps=1/{interval}',
        '-q:v', '2',
        frame_pattern,
        '-y'
    ]

    try:
        subprocess.run(cmd, capture_output=True, check=True)
        frames = sorted(Path(output_dir).glob(f"{video_name}_frame_*.png"))
        return [str(f) for f in frames]
    except subprocess.CalledProcessError as e:
        print(f"Error extracting frames from {video_path}: {e}")
        return []


def ocr_frame(frame_path: str, tesseract_path: str = None) -> str:
    """Run OCR on a single frame."""
    cmd = ['tesseract', frame_path, 'stdout', '--psm', '6']
    if tesseract_path:
        cmd[0] = tesseract_path

    try:
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)
        return result.stdout
    except subprocess.CalledProcessError:
        return ""


def is_code_content(text: str) -> bool:
    """Determine if text likely contains code."""
    if not text or len(text.strip()) < 50:
        return False

    # Check for code indicators
    indicator_count = sum(1 for ind in CODE_INDICATORS if ind.lower() in text.lower())

    # Check for common code patterns
    code_patterns = [
        r'\{[\s\S]*\}',  # Braces
        r'\[[\s\S]*\]',  # Brackets
        r'\([\s\S]*\)',  # Parentheses
        r'=>',           # Arrow functions
        r'===?',         # Equality
        r'!==?',         # Inequality
        r'\w+\.\w+',     # Method calls
        r'<\w+',         # JSX/HTML tags
    ]

    pattern_matches = sum(1 for p in code_patterns if re.search(p, text))

    # Lines that look like code
    lines = text.split('\n')
    code_like_lines = sum(1 for line in lines if
                          any(ind in line for ind in CODE_INDICATORS) or
                          re.search(r'[{}\[\]();=<>]', line))

    return (indicator_count >= 2 or
            pattern_matches >= 3 or
            code_like_lines >= MIN_CODE_LINES)


def clean_code_text(text: str) -> str:
    """Clean and normalize extracted code text."""
    # Remove common OCR artifacts
    text = re.sub(r'[|]{2,}', '', text)
    text = re.sub(r'[_]{3,}', '', text)

    # Fix common OCR mistakes
    replacements = {
        '0': 'O',  # In variable names
        '1': 'l',  # In variable names
        '}{': '} {',
        ')(': ') (',
    }

    # Remove lines that are clearly noise
    lines = text.split('\n')
    cleaned_lines = []
    for line in lines:
        line = line.strip()
        if len(line) < 2:
            continue
        if line.count(' ') > len(line) * 0.7:  # Too many spaces
            continue
        if re.match(r'^[^a-zA-Z0-9]*$', line):  # Only special chars
            continue
        cleaned_lines.append(line)

    return '\n'.join(cleaned_lines)


def compute_hash(text: str) -> str:
    """Compute hash for deduplication."""
    # Normalize whitespace for comparison
    normalized = ' '.join(text.split())
    return hashlib.md5(normalized.encode()).hexdigest()[:16]


def extract_code_from_video(video_path: str, output_dir: str, frames_dir: str) -> dict:
    """Extract all code snippets from a single video."""
    video_name = Path(video_path).stem
    print(f"Processing: {video_name}")

    # Extract frames
    frames = extract_frames(video_path, frames_dir)
    if not frames:
        return {'video': video_name, 'code_blocks': [], 'error': 'No frames extracted'}

    print(f"  Extracted {len(frames)} frames")

    # OCR each frame
    code_blocks = []
    seen_hashes = set()

    for i, frame in enumerate(frames):
        text = ocr_frame(frame)

        if is_code_content(text):
            cleaned = clean_code_text(text)
            text_hash = compute_hash(cleaned)

            # Deduplicate similar frames
            if text_hash not in seen_hashes and len(cleaned) > 100:
                seen_hashes.add(text_hash)

                timestamp = i * FRAME_INTERVAL
                code_blocks.append({
                    'timestamp': f"{timestamp // 60}:{timestamp % 60:02d}",
                    'frame': i,
                    'content': cleaned,
                    'hash': text_hash
                })

    print(f"  Found {len(code_blocks)} unique code blocks")

    # Clean up frames (optional)
    # for frame in frames:
    #     os.remove(frame)

    return {
        'video': video_name,
        'total_frames': len(frames),
        'code_blocks': code_blocks
    }


def process_video_folder(videos_dir: str, output_dir: str, max_workers: int = 2):
    """Process all videos in a folder."""
    videos_path = Path(videos_dir)
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)

    frames_dir = output_path / 'frames'

    # Find all video files
    video_extensions = {'.mp4', '.mkv', '.avi', '.mov', '.webm'}
    videos = [f for f in videos_path.iterdir()
              if f.suffix.lower() in video_extensions]

    print(f"Found {len(videos)} videos to process")

    # Filter for ViewCreator-related videos
    viewcreator_keywords = ['viewcreator', 'view creator', 'vibe cod', 'marketing']
    viewcreator_videos = [v for v in videos
                          if any(kw in v.name.lower() for kw in viewcreator_keywords)]

    if viewcreator_videos:
        print(f"Processing {len(viewcreator_videos)} ViewCreator-related videos first")
        videos_to_process = viewcreator_videos + [v for v in videos if v not in viewcreator_videos]
    else:
        videos_to_process = videos

    # Process videos
    all_results = []

    for video in videos_to_process[:20]:  # Limit to first 20 for testing
        result = extract_code_from_video(str(video), str(output_path), str(frames_dir))
        all_results.append(result)

        # Save intermediate results
        with open(output_path / 'extraction_results.json', 'w') as f:
            json.dump(all_results, f, indent=2)

    # Generate combined code file
    all_code = []
    for result in all_results:
        if result.get('code_blocks'):
            all_code.append(f"\n# === {result['video']} ===\n")
            for block in result['code_blocks']:
                all_code.append(f"\n# Timestamp: {block['timestamp']}\n")
                all_code.append(block['content'])
                all_code.append("\n" + "="*50 + "\n")

    with open(output_path / 'extracted_code.txt', 'w', encoding='utf-8') as f:
        f.write('\n'.join(all_code))

    print(f"\nExtraction complete!")
    print(f"Results saved to: {output_path / 'extraction_results.json'}")
    print(f"Combined code saved to: {output_path / 'extracted_code.txt'}")

    return all_results


if __name__ == '__main__':
    import argparse

    parser = argparse.ArgumentParser(description='Extract code from videos')
    parser.add_argument('--videos', '-v', default=r'C:\Users\Administrator\Videos',
                        help='Directory containing videos')
    parser.add_argument('--output', '-o', default=r'C:\Users\Administrator\Documents\ViewCreator-Research\extracted',
                        help='Output directory for extracted code')
    parser.add_argument('--interval', '-i', type=int, default=5,
                        help='Frame extraction interval in seconds')

    args = parser.parse_args()
    FRAME_INTERVAL = args.interval

    process_video_folder(args.videos, args.output)
