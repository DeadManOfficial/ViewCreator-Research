# DEADMAN BROADCAST - PRODUCTION QUICK REFERENCE
## Essential Info for Active Production Sessions

**Print this or keep on second monitor during production**

---

## 🎙️ DEADMAN CHARACTER - VOCAL PROFILE

**Core Traits**: Compressed whisper, authoritative, clinical, cynical, controlled  
**Pace**: 140-160 words per minute  
**Never**: Shout, sing-song, over-act, rush, cheerful  
**Always**: Precise, pausing strategically, threatening calm

**Key Deliveries:**
- "Here's the decrypt:" → Lower pitch, more authority, pause before/after
- "Stay paranoid." → Quieter, slower, threatening whisper (signature close)
- Statistics/Names → Clinical, like reading evidence
- Accusations → Cold, not emotional

---

## 🎬 SORA 2 GENERATION QUICK SETTINGS

**Standard Settings:**
- Duration: 10 seconds
- Aspect Ratio: 16:9 (or 9:16 for vertical)
- Motion: Medium to High
- Quality: Maximum available

**Prompts Location:** `DEADMAN_SORA2_PROMPT_LIBRARY.md`  
**Rule:** Use exact prompts, don't modify

**Loop Strategy:**
- Opening/Closing: Loop A (Signal Hijack)
- Main content: Topic-specific loops (B-L)
- Transitions: 0.5s crossfade between different loops
- Extensions: Copy loop, paste, crossfade seam

---

## 🎚️ AUDIO PROCESSING CHAIN (DAW)

```
Microphone Input (gain: -18dB to -12dB peak)
    ↓
1. Noise Gate (threshold -45dB, fast attack)
    ↓
2. EQ (HPF @ 80Hz, boost 2-4kHz +3dB)
    ↓
3. Compressor (8:1 ratio, 5ms attack, 80ms release)
    ↓
4. Tube Saturation (20-30% mix)
    ↓
5. De-esser (4-8kHz, if needed)
    ↓
6. Plate Reverb (0.8s decay, 15% mix)
    ↓
7. Limiter (ceiling -1dB, aggressive makeup)
    ↓
Output
```

**Mix Levels:**
- Voice: -12dB to -6dB average (peaks -3dB)
- Static bed: -35dB to -30dB
- SFX: -20dB to -12dB
- Final master: -1dB ceiling

---

## 🎨 COLOR GRADING CHECKLIST

**Primary Correction:**
- Lift blacks to RGB 10,10,10 (not pure black)
- Reduce saturation 15-20%
- Increase contrast 20-30%
- Vignette 15-20% strength, soft edge

**Secondary Correction:**
- Isolate and boost accent colors (red, blue, green)
- Preserve accents while desaturating rest

**Texture:**
- Film grain 15-25% opacity (varies by loop)
- Match grain intensity to analog feel desired

**Final:**
- Check scopes (slight crushed blacks, contained highlights)
- Consistency across all clips in segment

---

## 📐 EXPORT PRESETS

### YouTube (Main Upload)
```
Format: MP4 (H.264)
Resolution: 1920x1080 (or 3840x2160)
Frame Rate: 24fps or 30fps
Bitrate: VBR 2-pass, 15-25 Mbps
Audio: AAC 256kbps, 48kHz stereo
Color: Rec. 709
```

### TikTok/Reels (Vertical)
```
Format: MP4 (H.264)
Resolution: 1080x1920
Frame Rate: 30fps
Bitrate: VBR 12 Mbps
Audio: AAC 192kbps, 48kHz stereo
Duration: Max 60 seconds
```

### Twitter/X (Clips)
```
Format: MP4
Resolution: 1280x720 or 1920x1080
Duration: 10-30 seconds
Bitrate: 10 Mbps
Audio: AAC 192kbps
```

---

## 📅 5-DAY PRODUCTION SCHEDULE

| Day | Phase | Time | Tasks |
|-----|-------|------|-------|
| **Mon** | Pre-Production | 4h | Script review, visual planning, audio setup test |
| **Tue** | Video Generation | 5h | Generate 9-12 Sora loops, QC, file organization |
| **Wed** | Audio Production | 5h | Record voice (2-3 takes), edit, sound design, mix |
| **Thu** | Video Editing | 6h | Assembly, color grade, VFX, final mix, render |
| **Fri** | Distribution | 3h | Platform versions, upload, metadata, engagement |

**Total: ~20 hours per 90-second segment**

---

## 📂 FILE NAMING CONVENTION

**Video Assets:**
- `DEADMAN_S01E0X_LOOP[A-L]_v1.mp4` (raw Sora generations)
- `DEADMAN_S01E0X_[TOPIC]_[PLATFORM]_v1.mp4` (exports)

**Audio Assets:**
- `DEADMAN_S01E0X_Voice_Take01.wav` (recordings)
- `DEADMAN_S01E0X_SFX_[name].wav` (sound effects)

**Projects:**
- `DEADMAN_S01E0X_[TOPIC]_PROJECT.zip` (full archive)

---

## 🔧 TROUBLESHOOTING QUICK FIXES

**Sora doesn't match prompt:**
- Regenerate with more specific visual anchors
- Add camera angle, lighting details, color palette

**Voice too clean:**
- Increase tube saturation to 40-50% mix
- Compress harder (12:1 ratio)

**Loop seam visible:**
- Use 1-second crossfade instead of 0.5s
- Add glitch effect over seam point
- Offset loop by 1-2 frames

**Audio/video out of sync:**
- Check timeline frame rate matches export
- Re-encode any variable frame rate clips
- Use audio waveform as visual guide

**File too large:**
- Reduce bitrate 20-30%
- 2-pass encoding for better compression
- For TikTok/Reels, reduce to 720p if needed

**Static/SFX drowning voice:**
- Sidechain compress (voice triggers SFX ducking)
- Reduce SFX volume 6dB
- Cut SFX at 2-4kHz (voice presence range)

---

## 📊 SEGMENT REFERENCE TABLE

| Code | Title | Duration | Main Loops | Research Source |
|------|-------|----------|------------|-----------------|
| S01E01 | Signal Hijack | 30s | A | N/A (Intro) |
| S01E02 | Cold Case | 90s | A, B | Eidos-Montreal |
| S01E03 | Echo Chamber | 90s | A, C, G | Podcasts (20) |
| S01E04 | Info Cartel | 90s | A, D, H | News (8) |
| S01E05 | Leak Network | 90s | A, E, I | Leaks (10) |
| S01E06 | Hive Mind | 90s | A, D, J | Reddit (997) |
| S01E07 | Narrative Machine | 90s | A, B, K | Gen News (31) |
| S01E08 | Memory Hole | 90s | A, F, L | History (9) |

---

## 🎯 QUALITY STANDARDS CHECKLIST

**Before marking segment complete:**

### Video
- [ ] 1080p minimum resolution
- [ ] Consistent frame rate (no VFR)
- [ ] Color grading applied
- [ ] Film grain/texture added (15-25%)
- [ ] No compression artifacts
- [ ] Transitions are intentional

### Audio  
- [ ] Voice fully intelligible
- [ ] No clipping/distortion (unintentional)
- [ ] SFX complement, don't overpower
- [ ] Balanced mix across playback systems
- [ ] Final limiter prevents digital clipping
- [ ] "Stay paranoid" has proper impact

### Content
- [ ] Facts verified from research data
- [ ] Script timing matches video
- [ ] DEADMAN voice consistent
- [ ] Key points emphasized effectively
- [ ] Achieves rhetorical impact

### Technical
- [ ] Plays on all target platforms
- [ ] Metadata correctly formatted
- [ ] Within platform file size limits
- [ ] Backup files saved
- [ ] Project archived

---

## 🎬 VISUAL LOOP QUICK ID

**Loop A** - Signal Hijack (red tally light, CRT monitors)  
**Loop B** - Corporate Archive (filing cabinets, documents)  
**Loop C** - Underground Studio (microphone, Edison bulb)  
**Loop D** - Data Stream (keyboard, monitors, holographic data)  
**Loop E** - Surveillance (CCTV hallway, server room door)  
**Loop F** - Gaming Graveyard (failed game boxes, dust)  
**Loop G** - Podcast Grid (VU meters, 3x3 layout)  
**Loop H** - News Ticker (scrolling text corruption)  
**Loop I** - Dark Web Terminal (TOR browser, leaked docs)  
**Loop J** - Reddit Votes (fluctuating vote counts)  
**Loop K** - News Homogenization (6 sites merging)  
**Loop L** - VHS Decay (documentary tape degradation)

**Use A for**: Opens, closes, transitions, emphasis  
**Use B-F for**: General broadcast environments  
**Use G-L for**: Segment-specific topics

---

## 🗣️ PRONUNCIATION GUIDE

**Gaming:**
- Deus Ex: "DAY-us EX"
- Eidos-Montreal: "AY-dose Mon-tree-ALL"
- Noclip: "NO-clip"
- Retronauts: "RET-row-naughts"

**People:**
- Jason Schreier: "SHRY-er"
- Tom Henderson: (standard)
- Jeff Grubb: (standard)

**Reddit:**
- /r/gaming: "R-slash-gaming"
- /r/ShouldIbuythisgame: "R-slash-should-I-buy-this-game"

---

## ⏱️ TIMING REFERENCE

**Average Segment Word Counts:**
- 30-second segment: 70-80 words
- 90-second segment: 210-240 words

**Speaking Pace:** 140-160 words per minute  
(Slightly slower than normal 150-180 wpm for processing clarity)

**Key Phrase Timing:**
- "Here's the decrypt:" → 2 seconds total (pause before/after)
- "Stay paranoid." → 1.5 seconds (slow, quiet)
- Statistics → Rapid fire, clinical
- Accusations → Pause after for impact

---

## 📋 RECORDING SESSION CHECKLIST

**Before Recording:**
- [ ] Script reviewed for pacing
- [ ] Emphasis points marked
- [ ] Test processing chain
- [ ] Quiet environment confirmed
- [ ] Mic position consistent

**During Recording:**
- [ ] Record clean take first (full segment)
- [ ] Record 2-3 full takes
- [ ] Record emphasis variations
- [ ] Record 3-5 "Stay paranoid" variations
- [ ] Note any awkward phrasing

**After Recording:**
- [ ] Listen to full playback
- [ ] Check consistency
- [ ] Note improvements for next session
- [ ] Save all takes (don't delete)

---

## 🎨 COLOR PALETTE REFERENCE

**Primary Colors:**
- Deep Black: RGB (10, 10, 10) - not pure black
- Red Accent: RGB (220, 40, 40) - tally lights, alerts
- Cyan Blue: RGB (60, 180, 200) - monitors, data
- Matrix Green: RGB (40, 255, 100) - code, terminals

**Secondary Colors:**
- Institutional Green: RGB (100, 120, 100) - fluorescent
- Manila Tan: RGB (200, 180, 140) - documents
- Oxidized Gray: RGB (80, 80, 85) - metal surfaces
- Warm Amber: RGB (255, 200, 100) - Edison bulbs

**Desaturation Target:** Reduce overall saturation 15-20%, preserve accents

---

## 🚨 CRITICAL REMINDERS

1. **Never modify Sora prompts** - They're tested and optimized
2. **DEADMAN doesn't shout** - Controlled intensity, not volume
3. **Film grain is essential** - 15-25% opacity, always apply
4. **Hard cuts, not smooth fades** - Maintains broadcast aesthetic
5. **"Stay paranoid" always ends** - Signature whisper finale
6. **Verify all facts** - Use gaming_research.json data only
7. **Archive everything** - You'll need source files later
8. **Quality over speed** - One great segment beats eight rushed
9. **Follow the character** - Clinical, cynical, authoritative
10. **Check the workflow guide** - When in doubt, consult full docs

---

## 📞 DOCUMENT QUICK LINKS

**Need full scripts?** → `DEADMAN_BROADCAST_MASTER_PRODUCTION.md`  
**Need Sora prompts?** → `DEADMAN_SORA2_PROMPT_LIBRARY.md`  
**Need process steps?** → `DEADMAN_PRODUCTION_WORKFLOW.md`  
**Need voice scripts?** → `DEADMAN_VOICE_SCRIPTS.md`  
**Need orientation?** → `README_START_HERE.md`

---

## ⚡ EMERGENCY QUICK START

**"I need to make one segment RIGHT NOW"**

1. Pick S01E03 (Echo Chamber - easiest standalone)
2. Open `DEADMAN_SORA2_PROMPT_LIBRARY.md`
3. Copy Loops A, C, G → Generate in Sora 2 (10 seconds each)
4. Open `DEADMAN_VOICE_SCRIPTS.md` → S01E03
5. Record voice following delivery notes
6. Import to editor, assemble per timecode table
7. Add color grade + film grain
8. Export for YouTube
9. Done

**Minimum time:** 8-10 hours if you rush (not recommended)  
**Recommended time:** 20 hours over 5 days (quality result)

---

**END OF QUICK REFERENCE**

**Keep this handy during production. Good luck.**

**STAY PARANOID.**

---

**Version**: 1.0  
**Last Updated**: December 6, 2025  
**Print in landscape for best readability**
