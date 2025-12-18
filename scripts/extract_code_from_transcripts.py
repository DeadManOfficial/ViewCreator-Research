#!/usr/bin/env python3
import re
import json
from pathlib import Path
from collections import defaultdict

def extract_code_patterns_from_vtt(vtt_content: str) -> list:
    """Extract code-related segments from VTT transcript"""
    
    # Remove VTT header and timing info, keep just text
    lines = vtt_content.split('\n')
    text_lines = []
    
    for line in lines:
        # Skip VTT headers, timestamps, and empty lines
        if (not line.startswith('WEBVTT') and 
            not line.startswith('Kind:') and
            not line.startswith('Language:') and
            not '-->' in line and
            line.strip() and
            not line.strip().isdigit()):
            text_lines.append(line.strip())
    
    full_text = ' '.join(text_lines)
    
    # Patterns to identify code discussions
    code_indicators = [
        r'(import|export|const|let|var|function|class|interface|type)\s+\w+',
        r'(async|await|return|if|else|for|while|switch)',
        r'(useState|useEffect|useCallback|useMemo)',
        r'(\.map|\.filter|\.reduce|\.forEach)',
        r'(API|endpoint|route|controller|service)',
        r'(database|query|schema|model)',
        r'(component|props|state)',
        r'(npm|yarn|pnpm)\s+(install|add|run)',
        r'(git|commit|push|pull|merge)',
        r'(docker|kubernetes|aws|deploy)',
        r'file\s+(?:called|named)\s+[\w\-\.]+',
        r'create\s+(?:a|an|the)\s+(?:file|component|function|class)',
        r'(?:tsx|jsx|ts|js|py|sql|json|yaml|yml)\s+file',
    ]
    
    findings = []
    
    for pattern in code_indicators:
        matches = re.finditer(pattern, full_text, re.IGNORECASE)
        for match in matches:
            # Get context around the match (100 chars before and after)
            start = max(0, match.start() - 100)
            end = min(len(full_text), match.end() + 100)
            context = full_text[start:end]
            
            findings.append({
                'pattern': pattern,
                'match': match.group(),
                'context': context
            })
    
    return findings

def extract_file_mentions(text: str) -> list:
    """Extract file names and paths mentioned in text"""
    
    file_patterns = [
        r'[\w\-]+\.(?:tsx|jsx|ts|js|py|sql|json|yaml|yml|css|scss|md)',
        r'src/[\w/\-]+\.(?:tsx|jsx|ts|js)',
        r'pages/[\w/\-]+\.(?:tsx|jsx)',
        r'components/[\w/\-]+\.(?:tsx|jsx)',
        r'api/[\w/\-]+\.(?:ts|js)',
        r'lib/[\w/\-]+\.(?:ts|js)',
        r'utils/[\w/\-]+\.(?:ts|js)',
    ]
    
    files = set()
    for pattern in file_patterns:
        matches = re.findall(pattern, text, re.IGNORECASE)
        files.update(matches)
    
    return sorted(list(files))

def extract_technical_terms(text: str) -> dict:
    """Extract technical terms and technologies mentioned"""
    
    categories = {
        'frameworks': ['next.js', 'nestjs', 'react', 'express', 'fastapi'],
        'databases': ['postgresql', 'postgres', 'redis', 'mongodb', 'supabase'],
        'ai_models': ['claude', 'gpt', 'gemini', 'whisper', 'dall-e', 'flux'],
        'tools': ['cursor', 'warp', 'docker', 'kubernetes', 'github'],
        'aws_services': ['s3', 'ec2', 'rds', 'lambda', 'cloudfront', 'ecs'],
        'libraries': ['tailwind', 'typescript', 'ffmpeg', 'mediapipe'],
    }
    
    found = defaultdict(list)
    text_lower = text.lower()
    
    for category, terms in categories.items():
        for term in terms:
            if term in text_lower:
                # Count occurrences
                count = text_lower.count(term)
                found[category].append({
                    'term': term,
                    'count': count
                })
    
    return dict(found)

def analyze_all_transcripts():
    """Analyze all VTT transcripts for code patterns"""
    
    video_data_dir = Path('video_data')
    vtt_files = sorted(video_data_dir.glob('*.vtt'))
    
    all_results = {}
    
    for vtt_file in vtt_files:
        video_id = vtt_file.stem.replace('.en', '')
        
        print(f"Analyzing {video_id}...")
        
        with open(vtt_file, 'r', encoding='utf-8') as f:
            vtt_content = f.read()
        
        # Extract code patterns
        code_patterns = extract_code_patterns_from_vtt(vtt_content)
        
        # Extract file mentions
        files = extract_file_mentions(vtt_content)
        
        # Extract technical terms
        tech_terms = extract_technical_terms(vtt_content)
        
        all_results[video_id] = {
            'code_patterns_count': len(code_patterns),
            'code_patterns': code_patterns[:50],  # Limit to first 50
            'files_mentioned': files,
            'technical_terms': tech_terms
        }
        
        print(f"  Found {len(code_patterns)} code patterns")
        print(f"  Found {len(files)} file mentions")
        print(f"  Found {sum(len(v) for v in tech_terms.values())} technical terms")
    
    # Save results
    with open('code_extraction_results.json', 'w') as f:
        json.dump(all_results, f, indent=2)
    
    # Create summary report
    create_code_summary(all_results)
    
    return all_results

def create_code_summary(results: dict):
    """Create a human-readable summary of code findings"""
    
    report = []
    report.append("=" * 80)
    report.append("CODE EXTRACTION SUMMARY")
    report.append("=" * 80)
    report.append("")
    
    # Aggregate all files mentioned
    all_files = set()
    for video_id, data in results.items():
        all_files.update(data['files_mentioned'])
    
    report.append(f"📁 Total Unique Files Mentioned: {len(all_files)}")
    report.append("")
    report.append("File List:")
    for file in sorted(all_files):
        report.append(f"  • {file}")
    report.append("")
    
    # Aggregate technical terms
    all_tech = defaultdict(lambda: defaultdict(int))
    for video_id, data in results.items():
        for category, terms in data['technical_terms'].items():
            for term_data in terms:
                all_tech[category][term_data['term']] += term_data['count']
    
    report.append("🔧 Technical Stack Frequency:")
    for category, terms in sorted(all_tech.items()):
        report.append(f"\n  {category.upper().replace('_', ' ')}:")
        for term, count in sorted(terms.items(), key=lambda x: x[1], reverse=True):
            report.append(f"    • {term}: {count} mentions")
    
    report.append("")
    report.append("=" * 80)
    report.append("TOP CODE PATTERNS BY VIDEO")
    report.append("=" * 80)
    report.append("")
    
    for video_id, data in results.items():
        if data['code_patterns_count'] > 0:
            report.append(f"\n{video_id}:")
            report.append(f"  Code patterns found: {data['code_patterns_count']}")
            report.append(f"  Files mentioned: {len(data['files_mentioned'])}")
            
            # Show top 5 unique patterns
            unique_patterns = {}
            for pattern in data['code_patterns'][:20]:
                key = pattern['match']
                if key not in unique_patterns:
                    unique_patterns[key] = pattern['context'][:100]
            
            if unique_patterns:
                report.append("  Sample code mentions:")
                for match, context in list(unique_patterns.items())[:5]:
                    report.append(f"    • {match}")
                    report.append(f"      Context: ...{context}...")
            report.append("")
    
    report_text = '\n'.join(report)
    
    with open('code_extraction_summary.txt', 'w') as f:
        f.write(report_text)
    
    print("\n" + report_text)

if __name__ == '__main__':
    print("Starting code extraction from video transcripts...")
    results = analyze_all_transcripts()
    print(f"\n✅ Code extraction complete!")
    print("  - code_extraction_results.json")
    print("  - code_extraction_summary.txt")
