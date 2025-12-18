# DEADMAN BROADCAST - PRODUCTION WORKFLOW GUIDE
## Complete Step-by-Step Production Pipeline

---

## PHASE 1: PRE-PRODUCTION

### 1.1 Script Review
- [ ] Review segment script from Master Production Document
- [ ] Verify all research data is current and accurate
- [ ] Check timecode alignment (should total 90 seconds for main segments)
- [ ] Confirm DEADMAN voice direction and emphasis points
- [ ] Note any required sound effects or music cues

### 1.2 Visual Planning
- [ ] Identify which Sora 2 loops are required from Prompt Library
- [ ] Determine transition points between different visual loops
- [ ] Calculate total Sora 2 generations needed (typically 9-12 per segment)
- [ ] Plan B-roll variations if needed for visual variety

### 1.3 Audio Preparation
- [ ] Set up recording environment (quiet space, minimal reverb)
- [ ] Test microphone (recommend: dynamic mic like SM7B or Electro-Voice RE20)
- [ ] Configure DAW with compression/distortion chain ready
- [ ] Print out voice script with emphasis marks and timing notes

---

## PHASE 2: VIDEO GENERATION (SORA 2)

### 2.1 Generate Base Loops
**For Each Required Visual Loop:**

1. **Open Sora 2 Interface**
   - Navigate to video generation tool
   - Select 10-second duration
   - Choose 16:9 aspect ratio (or 9:16 for vertical shorts)

2. **Copy Prompt from Library**
   - Go to DEADMAN_SORA2_PROMPT_LIBRARY.md
   - Copy the exact prompt for your needed loop (e.g., Loop A: Signal Hijack)
   - Paste into Sora 2 prompt field

3. **Upload Reference Image (if applicable)**
   - For product-focused segments, upload product image first
   - Let Sora 2 analyze before generating
   - Adjust prompt to reference uploaded image if needed

4. **Generate and Review**
   - Generate video
   - Review for quality and accuracy to prompt
   - If unsatisfactory, regenerate with slight prompt adjustments
   - Download highest quality available

5. **File Organization**
   - Save as: `DEADMAN_S01E0X_LOOP[A-L]_v1.mp4`
   - Store in project folder: `/video_assets/raw_generations/`

**Typical Generation Requirements Per Segment:**
- Opening: 1x Loop A (Signal Hijack) - 10 seconds
- Main Content: 6-8x topic-specific loops - 60-80 seconds  
- Transitions: 2-3x Loop A variations - 20-30 seconds
- **Total**: 9-12 generations per 90-second segment

### 2.2 Quality Control
- [ ] Verify all loops are 10 seconds exactly
- [ ] Check for any visual artifacts or glitches
- [ ] Ensure action beats align with script timing
- [ ] Confirm lighting and color match intended aesthetic
- [ ] Test loop points for seamless repetition if needed

---

## PHASE 3: AUDIO RECORDING

### 3.1 Voice Recording Setup

**DAW Configuration:**
```
Input: Microphone (set gain to -18dB to -12dB peak)
↓
Track 1: Clean vocal recording (no effects, for backup)
↓  
Track 2: Processed vocal chain →
   │
   ├─ Noise Gate (threshold: -45dB, fast attack)
   ├─ EQ: High-pass filter @ 80Hz, boost 2-4kHz (+3dB)
   ├─ Compressor (ratio 8:1, attack 5ms, release 80ms)
   ├─ Tube Saturation (20-30% mix for distortion)
   ├─ De-esser (4-8kHz range if needed)
   ├─ Short Plate Reverb (0.8s decay, 15% mix)
   └─ Limiter (ceiling -1dB, aggressive makeup gain)
```

### 3.2 Recording Process

1. **Test Run**
   - Record 10-second test passage
   - Listen back through processing chain
   - Adjust compression/distortion to achieve "compressed whisper" sound
   - Verify intelligibility despite heavy processing

2. **Full Recording**
   - Record entire segment in one take if possible
   - Aim for consistent energy and pacing
   - Use script timing marks to maintain 90-second total
   - Record 2-3 full takes for options

3. **Emphasis and Variations**
   - Record additional takes of key phrases for emphasis
   - Record "DEADMAN DECRYPT" cue with extra authority
   - Record final "Stay paranoid" with threatening whisper

### 3.3 Audio Editing

**Timeline Construction:**
- [ ] Import best full take to timeline
- [ ] Align to script timecode markers
- [ ] Insert emphasis variations where needed
- [ ] Trim any mouth noises or breath sounds that are too prominent
- [ ] Add 0.5-second fade-in at start, fade-out at end

**Sound Design Layer:**
- [ ] Add ambient static bed (low volume, constant)
- [ ] Place electrical hum/interference at key moments
- [ ] Insert hard static bursts for transitions
- [ ] Add specific SFX per script (water drip, keyboard, etc.)

**Mixing:**
- Voice: -12dB to -6dB average (peaks at -3dB)
- Static bed: -35dB to -30dB
- SFX: -20dB to -12dB depending on prominence
- Final master: Limiter at -1dB ceiling

---

## PHASE 4: VIDEO EDITING

### 4.1 Assembly

**Software Recommendations:**
- DaVinci Resolve (free, professional color grading)
- Adobe Premiere Pro (industry standard)
- Final Cut Pro (Mac optimized)

**Timeline Setup:**
```
Video Track 3: Text overlays/graphics (if any)
Video Track 2: Transition effects/VFX
Video Track 1: Main Sora 2 video loops
───────────────────────────────────────
Audio Track 4: Sound effects
Audio Track 3: Ambient/music bed
Audio Track 2: Processed DEADMAN voice
Audio Track 1: Clean voice backup (muted)
```

**Import and Organize:**
1. Create bins: `Video_Raw`, `Video_Processed`, `Audio`, `Graphics`, `Exports`
2. Import all Sora 2 generations
3. Import audio files from DAW
4. Set timeline to 24fps or 30fps (maintain consistency)

### 4.2 Video Assembly Process

**Segment Build (following script timecode):**

1. **Place Base Loops**
   - Drag first loop (usually Signal Hijack) to timeline at 0:00
   - Align subsequent loops according to script visual cues
   - Trim loops to exact durations needed
   - Add crossfade transitions (0.5 seconds) between different loops

2. **Loop Extensions**
   - For loops that need to run longer than 10 seconds:
     * Copy loop clip
     * Paste immediately after original
     * Add 0.5s crossfade between copies to hide seam
     * Repeat as needed to fill duration

3. **Align Audio**
   - Import processed voice track
   - Align to video timeline
   - Verify all timecode markers match script
   - Fine-tune sync for emphasis moments

4. **Add SFX**
   - Place sound effects per script notes
   - Adjust volume for each SFX instance
   - Add subtle fade in/out (0.1s) to prevent clicks

### 4.3 Color Grading

**Apply to Each Clip:**

1. **Primary Color Correction**
   - Lift blacks slightly (not pure black, aim for RGB 10,10,10)
   - Adjust midtones for intended color palette per loop
   - Reduce saturation by 15-20% for desaturated look
   - Increase contrast by 20-30%

2. **Secondary Color Correction**
   - Isolate and boost key colors (e.g., red tally light, blue monitors)
   - Preserve these accent colors while desaturating rest
   - Add slight vignette (15-20% strength, soft edge)

3. **Film Grain/Texture**
   - Apply film grain overlay (15-25% opacity based on loop type)
   - Use actual film grain footage or generator plugin
   - Match grain intensity to aesthetic (more grain = more analog feel)

4. **Final Look**
   - Apply overall look/LUT if desired
   - Ensure consistency across all clips in segment
   - Check scopes (aim for slight crushing in blacks, contained highlights)

### 4.4 Visual Effects

**Per Script Requirements:**
- [ ] Add static bursts at transition points (0.1s duration, full frame)
- [ ] Insert glitch effects where specified (RGB split, scan lines)
- [ ] Add text overlays if needed ("DEADMAN DECRYPT", timestamps)
- [ ] Apply any specific VFX (document stamps, holographic elements)

**Transition Effects:**
- Hard cuts for maximum segments (no fade)
- 0.5s crossfade only between different visual loops
- Static/glitch transitions for emphasis moments
- Final segment ends with hard cut to black

---

## PHASE 5: POST-PRODUCTION

### 5.1 Final Mix

**Audio Balance Check:**
1. Play through entire segment
2. Verify voice is always intelligible above SFX/ambient
3. Check for any audio pops, clicks, or glitches
4. Ensure "Stay paranoid" ending has proper impact
5. Render audio mixdown for reference

### 5.2 Final Video Render

**Export Settings:**

**For YouTube/Main Upload (16:9):**
```
Format: MP4 (H.264)
Resolution: 1920x1080 (or 3840x2160 if 4K source)
Frame Rate: Match timeline (24fps or 30fps)
Bitrate: VBR, 2 pass, target 15-25 Mbps
Audio: AAC, 256 kbps, 48kHz, Stereo
Color Space: Rec. 709
```

**For TikTok/Reels (9:16 Vertical):**
```
Format: MP4 (H.264)
Resolution: 1080x1920
Frame Rate: 30fps
Bitrate: VBR, target 12 Mbps
Audio: AAC, 192 kbps, 48kHz, Stereo
Duration: Cut to 60 seconds max
```

**For Twitter/X (Shorter Clip):**
```
Format: MP4
Resolution: 1920x1080 or 1280x720
Duration: 10-30 seconds (viral clip extract)
Bitrate: 10 Mbps
Audio: AAC, 192 kbps
```

### 5.3 Quality Control Final Check

- [ ] Watch entire segment start to finish
- [ ] Check for any visual stuttering or dropped frames
- [ ] Verify audio/video sync throughout
- [ ] Confirm file plays correctly in VLC and QuickTime
- [ ] Test on mobile device for platform compatibility
- [ ] Archive master project file and exports

---

## PHASE 6: DISTRIBUTION

### 6.1 File Naming Convention
```
DEADMAN_S01E03_EchoChamber_YOUTUBE_v1.mp4
DEADMAN_S01E03_EchoChamber_TIKTOK_v1.mp4
DEADMAN_S01E03_EchoChamber_TWITTER_10s_v1.mp4
```

### 6.2 Upload Platforms

**YouTube:**
- Title: "DEADMAN BROADCAST S01E03 - The Echo Chamber | Gaming Podcasts Exposed"
- Description: Include full transcript + links to sources
- Tags: gaming podcast, gaming industry, media criticism, investigative
- Thumbnail: High-contrast red/black with "ECHO CHAMBER" text
- Playlist: Add to "DEADMAN BROADCAST - Season 1"

**TikTok/Instagram Reels:**
- Title: "Gaming Podcasts Are Lying To You" (hook-focused)
- Hashtags: #gaming #podcast #gamingpodcast #conspiracy #truth
- Post time: 6-9 PM EST for maximum engagement
- Pin comment: "Full episode link in bio"

**Twitter/X:**
- Thread format: 10-second clip + text breakdown of key points
- Quote key statistic ("20 podcasts, all funded by the same publishers")
- Link to full video on YouTube
- Post during high-activity hours (12 PM, 5 PM EST)

**Substack/Medium (Text + Embed):**
- Full transcript of segment
- Embedded YouTube video
- Links to all research sources
- Discussion section for comments

### 6.3 Backup & Archiving

**Local Backup:**
- [ ] Save project files: `DEADMAN_S01E0X_[TOPIC]_PROJECT.zip`
- [ ] Save all source files (Sora generations, audio, etc.)
- [ ] Save export masters in lossless format if possible
- [ ] Store on external drive + NAS

**Cloud Backup (Encrypted):**
- [ ] Upload to Google Drive / Dropbox / iCloud (encrypted folder)
- [ ] Keep all Sora 2 prompts in searchable text format
- [ ] Maintain version history for iterative improvements

---

## PRODUCTION SCHEDULE TEMPLATE

### Weekly Episode Production (5-Day Cycle)

**Monday: Pre-Production**
- 2 hours: Script review and refinement
- 1 hour: Visual planning and prompt selection
- 1 hour: Audio setup and test recording

**Tuesday: Video Generation**
- 3 hours: Generate all required Sora 2 loops (9-12 generations)
- 1 hour: Quality control and re-generation if needed
- 1 hour: File organization and backup

**Wednesday: Audio Production**
- 2 hours: Voice recording (multiple takes)
- 2 hours: Audio editing and sound design
- 1 hour: Mixing and mastering

**Thursday: Video Editing**
- 3 hours: Assembly, color grading, VFX
- 2 hours: Final mix and render
- 1 hour: Quality control check

**Friday: Distribution**
- 1 hour: Create platform-specific versions
- 1 hour: Upload to all platforms with optimized metadata
- 1 hour: Engagement (respond to comments, monitor analytics)

**Total Weekly Time Investment**: ~20 hours per episode

---

## TROUBLESHOOTING GUIDE

### Common Issues & Solutions

**Problem: Sora 2 generation doesn't match prompt**
- Solution: Regenerate with more specific visual anchors
- Add camera angles, lighting details, or color palette to prompt
- Try breaking complex prompts into simpler descriptions

**Problem: Voice sounds too clean/not distorted enough**
- Solution: Increase tube saturation plugin to 40-50% mix
- Add additional distortion/bit crusher plugin
- Compress harder (try ratio 12:1 or higher)

**Problem: Video loops have visible seam when repeated**
- Solution: Use 1-second crossfade instead of 0.5 seconds
- Offset loop by 1-2 frames to hide identical start/end
- Add glitch effect over seam point as intentional aesthetic

**Problem: Audio and video out of sync**
- Solution: Check timeline frame rate matches audio sample rate settings
- Ensure no variable frame rate clips (re-encode if necessary)
- Use audio waveform as visual guide during editing

**Problem: File size too large for platform**
- Solution: Reduce bitrate by 20-30%
- Try 2-pass encoding for better compression efficiency
- For TikTok/Reels, reduce resolution to 720p if needed

**Problem: Static/SFX drowning out voice**
- Solution: Use sidechain compression (voice triggers ducking on SFX)
- Reduce SFX volume by 6dB and reassess
- Add narrow EQ cut to SFX in voice frequency range (2-4kHz)

---

## QUALITY STANDARDS CHECKLIST

Before considering a segment "complete," verify:

### Video Quality
- [ ] All video is 1080p minimum resolution
- [ ] Frame rate is consistent (no variable frame rate)
- [ ] Color grading applied and consistent
- [ ] Film grain/texture added per aesthetic guidelines
- [ ] No visible compression artifacts or banding
- [ ] Transitions are intentional and effective

### Audio Quality
- [ ] Voice is fully intelligible despite processing
- [ ] No clipping or distortion (unintentional)
- [ ] SFX complement but don't overpower voice
- [ ] Mix is balanced across all playback systems
- [ ] Final limiter prevents any digital clipping
- [ ] "Stay paranoid" has proper dramatic impact

### Content Quality
- [ ] All facts/statistics verified from research data
- [ ] Script timing matches video segments
- [ ] DEADMAN voice maintains consistent character
- [ ] Key points are emphasized effectively
- [ ] Segment achieves intended rhetorical impact

### Technical Quality
- [ ] File plays on all target platforms
- [ ] Metadata is correctly formatted
- [ ] File sizes within platform limits
- [ ] Backup files saved and organized
- [ ] Project archival complete

---

## OPTIMIZATION TIPS

### For Maximum Efficiency:

1. **Batch Generate Sora Videos**
   - Queue all loops for a segment at once
   - Generate overnight if possible
   - Maintain consistent generation settings

2. **Template Everything**
   - Save DAW processing chain as preset
   - Create editing template with bins pre-organized
   - Save color grading as LUT for quick application

3. **Automate Repetitive Tasks**
   - Use keyboard shortcuts extensively
   - Script file renaming if working at scale
   - Set up export presets for each platform

4. **Parallel Production**
   - While Tuesday's videos generate, record Wednesday's audio
   - While Thursday's render exports, start Friday's script review
   - Overlap phases when possible without compromising quality

---

**END OF PRODUCTION WORKFLOW GUIDE**

**Remember**: Quality over speed. DEADMAN BROADCAST's credibility depends on production excellence and factual accuracy. Take the time to get it right.

**Stay paranoid.**

---

**VERSION**: 1.0  
**LAST UPDATED**: December 6, 2025  
**NEXT REVIEW**: After first 3 episodes complete
