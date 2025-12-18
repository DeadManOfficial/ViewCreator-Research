# SORA 2 PRODUCTION WORKFLOW & MASTER CHECKLIST

**Version:** 2.0  
**Purpose:** End-to-end production process from concept to delivery  
**Estimated Time:** 2-8 hours depending on complexity

---

## WORKFLOW OVERVIEW

```
PRE-PRODUCTION (30-60 min)
└─ Concept → Storyboard → Prompts

PRODUCTION (1-4 hours)
└─ Generate → Review → Iterate

POST-PRODUCTION (30-120 min)
└─ Assemble → Grade → Mix → Export

DELIVERY (15-30 min)
└─ Platform-specific exports → Upload → Archive
```

---

## PHASE 1: PRE-PRODUCTION

### Step 1.1: Concept Development (10-15 min)

```
[ ] Define project logline (one sentence)
    _________________________________________________

[ ] Identify target platform and format
    [ ] YouTube (16:9, 1080p-4K)
    [ ] TikTok/Reels (9:16, 1080p)
    [ ] Instagram Feed (1:1 or 16:9)
    [ ] Other: _________________

[ ] Set visual style spine
    Era: _________________
    Aesthetic: _________________
    Reference: _________________

[ ] Determine total duration
    [ ] Short (10-15s)
    [ ] Medium (30-45s)
    [ ] Long (60s+)

[ ] List key requirements
    - Audio: [ ] Dialogue [ ] Music [ ] SFX [ ] Ambient
    - Characters: [ ] 0 [ ] 1 [ ] 2-3 [ ] 4+
    - Locations: [ ] 1 [ ] 2-3 [ ] 4+
    - Complexity: [ ] Simple [ ] Medium [ ] Complex
```

**Deliverable:** Approved concept brief

---

### Step 1.2: Storyboard Creation (15-25 min)

```
[ ] Break story into shots (4-10 seconds each)

SHOT 1 (0-__s):
Purpose: _________________
Type: [ ] Wide [ ] Medium [ ] Close-up [ ] Other: _____
Action: _________________________________________________
Camera: _________________________________________________
Duration: ____s

SHOT 2 (__-__s):
Purpose: _________________
Type: [ ] Wide [ ] Medium [ ] Close-up [ ] Other: _____
Action: _________________________________________________
Camera: _________________________________________________
Duration: ____s

SHOT 3 (__-__s):
Purpose: _________________
Type: [ ] Wide [ ] Medium [ ] Close-up [ ] Other: _____
Action: _________________________________________________
Camera: _________________________________________________
Duration: ____s

[Add more as needed]

[ ] Verify total duration: _____s
[ ] Check pacing (variety of shot types)
[ ] Confirm continuity elements
```

**Deliverable:** Visual storyboard or shot list

---

### Step 1.3: Prompt Writing (15-30 min)

```
[ ] Use SORA2_PROMPT_BUILDER.md for each shot
[ ] Reference SORA2_STYLE_LIBRARY.md for aesthetic
[ ] Define continuity anchors (if multi-shot)

CONTINUITY SPINE (copy to all shots):
Character: _______________________________________________
Wardrobe: _______________________________________________
Lighting: _______________________________________________
Color: _______________________________________________
Time of day: _______________________________________________

[ ] Write complete prompt for each shot
[ ] Include timing beats (H0.00, B2.00, etc.)
[ ] Specify audio for each shot
[ ] Add negative constraints
[ ] Verify technical specs (duration, aspect ratio)

[ ] Save all prompts in organized document
```

**Deliverable:** Complete prompt document for all shots

---

### Step 1.4: Acceptance Criteria (10 min)

```
Define "good enough" to prevent endless iteration:

SHOT 1:
Must have: _______________________________________________
Nice to have: _______________________________________________
Deal breakers: _______________________________________________

SHOT 2:
Must have: _______________________________________________
Nice to have: _______________________________________________
Deal breakers: _______________________________________________

[Define for each shot]

[ ] Share criteria with stakeholders/clients
[ ] Get sign-off before production begins
```

**Deliverable:** Approved acceptance criteria

---

## PHASE 2: PRODUCTION

### Step 2.1: Test Generation (Low-Res Exploration) (30-60 min)

```
[ ] Generate 3-5 variants of each shot at standard quality

SHOT 1 - Variant Testing:
[ ] Variant A: [describe what you're testing]
[ ] Variant B: [describe variation]
[ ] Variant C: [describe variation]
[ ] Variant D: [optional]
[ ] Variant E: [optional]

[ ] Review against acceptance criteria
[ ] Identify best candidate for each shot
[ ] Note what needs refinement

REVIEW CHECKLIST PER SHOT:
[ ] Subject/action matches brief
[ ] Camera movement is correct
[ ] Lighting is appropriate
[ ] Color palette matches style
[ ] Audio sync is acceptable (if dialogue)
[ ] Duration is correct
[ ] No major artifacts or glitches
[ ] Meets "must have" criteria
```

**Deliverable:** Selected best variants with notes

---

### Step 2.2: Refinement Iteration (1-2 hours)

```
For each shot that needs refinement:

[ ] Identify specific issue (use SORA2_TROUBLESHOOTING_FLOWCHART.md)
[ ] Apply appropriate fix
[ ] Change ONE variable at a time
[ ] Test new generation
[ ] Compare to previous version

ITERATION LOG:
Shot #: ___
Original issue: ___________________________________________
Fix applied: ___________________________________________
Result: [ ] Better [ ] Same [ ] Worse
Next step: ___________________________________________

[ ] Repeat until acceptance criteria met or time limit reached
[ ] Document what worked for future reference
```

**Tips:**
- Don't iterate more than 5 times per shot
- If stuck, simplify and rebuild
- Use remix feature for targeted adjustments
- Keep prompt log of all versions

**Deliverable:** Refined shots meeting acceptance criteria

---

### Step 2.3: Final Generation (Pro Quality) (30-60 min)

```
[ ] Upgrade selected shots to Pro quality (if available)
[ ] Generate final versions
[ ] Download all files with clear naming

NAMING CONVENTION:
[PROJECT]_Shot[NUMBER]_[DESCRIPTION]_v[VERSION].[EXT]
Example: DEADMAN_Shot01_SignalHijack_v3.mp4

[ ] Verify all files downloaded correctly
[ ] Check for corruption or errors
[ ] Backup raw files immediately

FILE ORGANIZATION:
/Project_Name
  /RAW_GENERATIONS
    - All raw Sora outputs
  /SELECTED_FINALS
    - Final chosen versions
  /PROMPTS
    - All prompt documents
  /REFERENCE
    - Storyboards, mood boards
```

**Deliverable:** Final generation files, organized and backed up

---

## PHASE 3: POST-PRODUCTION

### Step 3.1: Assembly (15-30 min)

```
[ ] Import clips to NLE (Premiere, DaVinci, Final Cut, etc.)
[ ] Arrange on timeline in sequence
[ ] Trim clips to exact duration needed
[ ] Check for continuity issues

CONTINUITY CHECK:
[ ] Character appearance consistent
[ ] Lighting direction matches across shots
[ ] Color palette consistent
[ ] Time of day consistent
[ ] Audio levels balanced

[ ] Add transitions (if needed)
    Preference: [ ] Hard cuts [ ] Dissolves [ ] Custom
[ ] Verify pacing feels right
[ ] Get feedback from fresh eyes
```

**Deliverable:** Rough cut assembled timeline

---

### Step 3.2: Color Grading (30-60 min)

```
[ ] Apply primary color correction
    [ ] Balance exposure across shots
    [ ] Match white balance
    [ ] Adjust contrast

[ ] Apply secondary color grading
    [ ] Enhance or adjust specific colors
    [ ] Skin tone correction
    [ ] Vignettes or graduated filters

[ ] Apply final look/LUT
    Style: _________________
    LUT used: _________________

[ ] Match grade across all shots
[ ] Verify on multiple displays if possible
[ ] Export color reference stills
```

**Color Grading Checklist:**
```
[ ] Blacks not crushed (unless intentional)
[ ] Highlights not blown out
[ ] Skin tones look natural
[ ] Style consistent across cuts
[ ] No unwanted color casts
[ ] Saturation appropriate for platform
```

**Deliverable:** Color-graded timeline

---

### Step 3.3: Audio Mix (30-60 min)

```
[ ] Normalize audio levels
    Target: -14 to -16 LUFS for social media
    Target: -23 LUFS for broadcast

[ ] Balance audio elements
    Dialogue: ___ dB
    Music: ___ dB (typically -6 to -10 dB below dialogue)
    SFX: ___ dB (varies, typically -3 to -8 dB below dialogue)
    Ambient: ___ dB (typically -12 to -18 dB below dialogue)

[ ] Add additional audio (if needed)
    [ ] Re-record dialogue (ADR)
    [ ] Add music from library
    [ ] Layer additional SFX
    [ ] Enhance ambient bed

[ ] Audio cleanup
    [ ] Remove pops, clicks
    [ ] Reduce background noise (if needed)
    [ ] EQ for clarity
    [ ] Compression/limiting

[ ] Final audio polish
    [ ] Check stereo imaging
    [ ] Verify no clipping
    [ ] Test on multiple playback systems
    [ ] Add fadeouts/fadeins
```

**Deliverable:** Mixed and mastered audio timeline

---

### Step 3.4: Final Review (15-30 min)

```
[ ] Watch complete video start to finish, twice
[ ] Check against original acceptance criteria

FINAL QA CHECKLIST:
[ ] Correct duration for platform
[ ] Proper aspect ratio
[ ] No technical glitches or artifacts
[ ] Audio sync is acceptable
[ ] Color grade is consistent
[ ] Pacing feels right
[ ] Meets original creative brief
[ ] Client/stakeholder approved

[ ] Get final sign-off
[ ] Document any compromises made
```

**Deliverable:** Approved final cut

---

## PHASE 4: DELIVERY

### Step 4.1: Export (15-30 min)

```
[ ] Export for target platform(s)

YOUTUBE (16:9):
Format: H.264 or H.265
Resolution: 1080p or 4K
Bitrate: 8-15 Mbps (1080p), 35-45 Mbps (4K)
Frame rate: 24/30/60 fps (match source)
Audio: AAC, 320 kbps stereo

TIKTOK/REELS (9:16):
Format: H.264
Resolution: 1080x1920
Bitrate: 5-8 Mbps
Frame rate: 30 fps
Audio: AAC, 128-192 kbps stereo

INSTAGRAM FEED (1:1 or 16:9):
Format: H.264
Resolution: 1080x1080 (1:1) or 1080x1920 (9:16)
Bitrate: 5-8 Mbps
Frame rate: 30 fps
Audio: AAC, 128 kbps stereo

TWITTER/X:
Format: H.264
Resolution: 1080p max
Bitrate: 5 Mbps
Frame rate: 30/60 fps
Audio: AAC, 128 kbps stereo

[ ] Verify export completed without errors
[ ] Play exported file to verify quality
[ ] Check file size appropriate for platform
```

**Deliverable:** Platform-optimized video files

---

### Step 4.2: Upload & Metadata (15-30 min)

```
For each platform:

[ ] Upload video
[ ] Add title/caption
[ ] Add description (if applicable)
[ ] Add tags/hashtags
[ ] Add thumbnail (if required)
[ ] Schedule post (optional)
[ ] Add captions/subtitles (if needed)

PLATFORM-SPECIFIC NOTES:
YouTube:
[ ] Title (60 chars optimal)
[ ] Description (first 150 chars visible)
[ ] Custom thumbnail
[ ] Tags (research relevant keywords)
[ ] End screen/cards
[ ] Playlist assignment

TikTok/Instagram:
[ ] Caption (hook in first line)
[ ] Hashtags (research trending + relevant)
[ ] Music credit (if used)
[ ] Location tag (if relevant)
[ ] Collab/duet settings
```

**Deliverable:** Published content on platforms

---

### Step 4.3: Archive & Documentation (15-20 min)

```
[ ] Organize all project files

ARCHIVE STRUCTURE:
/Project_Name_FINAL
  /01_RAW_GENERATIONS
  /02_PROMPTS_AND_SCRIPTS
  /03_PROJECT_FILES (NLE projects)
  /04_FINAL_EXPORTS
  /05_ASSETS (music, SFX, graphics)
  /06_DOCUMENTATION
    - Creative brief
    - Storyboard
    - Acceptance criteria
    - Iteration notes
    - Client feedback

[ ] Backup to at least 2 locations
    Location 1: _________________
    Location 2: _________________

[ ] Document learnings
    What worked: ___________________________________________
    What didn't: ___________________________________________
    Prompts that were effective: ____________________________
    Techniques to reuse: ____________________________________

[ ] Update personal prompt library with successes
```

**Deliverable:** Archived project, documented learnings

---

## EMERGENCY TROUBLESHOOTING

### If Generation Completely Fails:

```
STEP 1: Simplify to absolute minimum
"[Subject] [doing basic action] in [location]. 
Duration 4 seconds."

STEP 2: If minimum works, add back elements one at a time
1. Add camera specification → test
2. Add lighting → test
3. Add audio → test
4. Add color details → test
5. Continue until you find what breaks it

STEP 3: Work around the problem
- Complete without problematic element
- Add in post-production
- Redesign shot to avoid issue
```

### If Timeline/Deadline Critical:

```
STEP 1: Triage shots by importance
- Must have (can't deliver without)
- Should have (important but workaround exists)
- Nice to have (cut if needed)

STEP 2: Focus iteration time on must-haves only

STEP 3: Accept "good enough" for should-haves

STEP 4: Cut nice-to-haves if time runs out

STEP 5: Communicate early about cuts/compromises
```

---

## TIME BUDGETING GUIDELINES

### Simple Project (10-15s, single shot):
```
Pre-production: 30-45 min
Production: 1-2 hours
Post-production: 45-60 min
Total: 2.5-4 hours
```

### Medium Project (30-45s, 3-5 shots):
```
Pre-production: 60-90 min
Production: 2-4 hours
Post-production: 1.5-2.5 hours
Total: 5-8 hours
```

### Complex Project (60s+, 6-10 shots):
```
Pre-production: 2-3 hours
Production: 4-8 hours
Post-production: 3-4 hours
Total: 9-15 hours
```

---

## PROJECT TRACKING TEMPLATE

```
PROJECT: _____________________
START DATE: _____________________
TARGET DELIVERY: _____________________

PHASE 1: PRE-PRODUCTION
[ ] Concept (___/___) ___% complete
[ ] Storyboard (___/___) ___% complete
[ ] Prompts (___/___) ___% complete
[ ] Acceptance criteria (___/___) ___% complete

PHASE 2: PRODUCTION
[ ] Test generations (___/___) ___% complete
[ ] Refinement (___/___) ___% complete
[ ] Final generation (___/___) ___% complete

PHASE 3: POST-PRODUCTION
[ ] Assembly (___/___) ___% complete
[ ] Color grade (___/___) ___% complete
[ ] Audio mix (___/___) ___% complete
[ ] Final review (___/___) ___% complete

PHASE 4: DELIVERY
[ ] Export (___/___) ___% complete
[ ] Upload (___/___) ___% complete
[ ] Archive (___/___) ___% complete

OVERALL PROGRESS: ____%

BLOCKERS/ISSUES:
_________________________________________________
_________________________________________________

NEXT ACTIONS:
1. _________________________________________________
2. _________________________________________________
3. _________________________________________________
```

---

## POST-MORTEM TEMPLATE

```
PROJECT: _____________________
COMPLETION DATE: _____________________

WHAT WENT WELL:
_________________________________________________
_________________________________________________

WHAT COULD IMPROVE:
_________________________________________________
_________________________________________________

TECHNICAL WINS (prompts/techniques that worked):
_________________________________________________
_________________________________________________

TECHNICAL CHALLENGES (problems encountered):
_________________________________________________
_________________________________________________

TIME ESTIMATES VS. ACTUAL:
Estimated: _____ hours
Actual: _____ hours
Variance: _____ hours (___%)

BUDGET (if applicable):
Estimated: $_____
Actual: $_____
Variance: $_____ (___%)

LEARNINGS FOR NEXT PROJECT:
1. _________________________________________________
2. _________________________________________________
3. _________________________________________________

PROMPTS TO SAVE FOR REUSE:
_________________________________________________
_________________________________________________
```

---

## QUICK START: FIRST-TIME USER WORKFLOW

```
1. Pick a simple concept (10s, one shot, no dialogue)
2. Use a prompt template from SORA2_READY_TO_USE_TEMPLATES
3. Generate 3 versions
4. Pick the best one
5. Export and share
6. Document what worked

Don't overthink your first project. The goal is to learn the system.
```

---

*Version 2.0 | December 2025*  
*Use with SORA 2 EXPERT PROFILE, PROMPT BUILDER, and TROUBLESHOOTING FLOWCHART*
