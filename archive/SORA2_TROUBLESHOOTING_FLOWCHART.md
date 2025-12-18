# SORA 2 TROUBLESHOOTING FLOWCHART & DIAGNOSTIC GUIDE

**Version:** 2.0  
**Purpose:** Quick problem identification and fixes  
**Avg Resolution Time:** 5-15 minutes

---

## HOW TO USE THIS GUIDE

1. Identify your problem category
2. Follow the diagnostic path
3. Apply fixes in order (easiest to most complex)
4. Test after each fix
5. Document what worked for future reference

---

## PROBLEM CATEGORY INDEX

1. [Visual Quality Issues](#1-visual-quality-issues)
2. [Motion & Physics Problems](#2-motion--physics-problems)
3. [Character Consistency Failures](#3-character-consistency-failures)
4. [Audio Sync Issues](#4-audio-sync-issues)
5. [Camera Movement Problems](#5-camera-movement-problems)
6. [Lighting Inconsistencies](#6-lighting-inconsistencies)
7. [Style/Aesthetic Drift](#7-styleaesthetic-drift)
8. [Text/Logo Artifacts](#8-textlogo-artifacts)
9. [Generation Speed/Quality Trade-offs](#9-generation-speedquality-trade-offs)
10. [Multi-Shot Continuity Breaks](#10-multi-shot-continuity-breaks)

---

## 1. VISUAL QUALITY ISSUES

### SYMPTOM: Blurry, pixelated, or soft focus output

**DIAGNOSTIC PATH:**

```
Q: Is the blur uniform across the frame or selective?
├─ Uniform blur → Resolution/quality issue
│   FIX 1: Switch to higher resolution (Pro tier)
│   FIX 2: Reduce duration (10s → 8s → 4s)
│   FIX 3: Add "sharp focus, 8K detail" to prompt
│   FIX 4: Remove any references to "cinematic bokeh" if not intended
│
└─ Selective blur → Depth of field issue
    FIX 1: Specify aperture: "f/5.6, balanced focus"
    FIX 2: State what should be sharp: "sharp focus on subject's face"
    FIX 3: Add "deep focus" if everything should be sharp
```

**PROMPT ADDITIONS TO TRY:**
```
"Crisp detail, sharp focus throughout frame, 8K resolution"
"High clarity, no motion blur, precise textures"
```

**AVOID IN PROMPT:**
```
"Dreamy," "soft," "ethereal," "hazy" (unless intentional)
```

---

### SYMPTOM: Digital artifacts, banding, compression

**DIAGNOSTIC PATH:**

```
Q: When do artifacts appear?
├─ Throughout video → Generation issue
│   FIX 1: Add to negatives: "no compression artifacts, no banding, no digital noise"
│   FIX 2: Specify "film grain" instead of letting digital noise appear
│   FIX 3: Reduce scene complexity (fewer elements)
│   FIX 4: Try during off-peak hours
│
└─ In specific areas (gradients, dark regions) → Technical limitation
    FIX 1: Avoid smooth gradients (sunsets, fog) in favor of textured alternatives
    FIX 2: Add texture overlays in post
    FIX 3: Work with current output, enhance in post-production
```

**PREVENTION:**
```
- Include "no banding, clean gradients" in negatives
- Specify "organic film grain" for texture
- Avoid prompting for "smooth gradients" or "perfect skies"
```

---

### SYMPTOM: Oversaturated or undersaturated colors

**DIAGNOSTIC PATH:**

```
Q: Is saturation consistent or shifting?
├─ Consistently off → Style token issue
│   FIX 1: Specify saturation level: "natural color saturation"
│   FIX 2: Add color grade reference: "Kodak Vision3 balanced color"
│   FIX 3: For less saturation: "muted palette, desaturated"
│   FIX 4: For more saturation: "vibrant color, rich saturation"
│
└─ Shifting during video → Lighting/exposure drift
    FIX 1: Lock exposure: "consistent exposure throughout"
    FIX 2: Specify lighting consistency: "even lighting, no exposure shifts"
    FIX 3: Shorten duration for better consistency
```

**SATURATION KEYWORDS:**
```
INCREASE: vibrant, saturated, rich color, Technicolor, vivid
DECREASE: muted, desaturated, washed out, faded, matte
NEUTRAL: natural color, balanced saturation, realistic tones
```

---

## 2. MOTION & PHYSICS PROBLEMS

### SYMPTOM: Objects floating, defying gravity, weightless

**DIAGNOSTIC PATH:**

```
Q: What type of object is floating?
├─ Heavy objects (furniture, people, vehicles) → Physics description missing
│   FIX 1: Add weight specification: "heavy wooden table, realistic gravity"
│   FIX 2: Describe settling: "falls with realistic acceleration, settles naturally"
│   FIX 3: Include ground contact: "feet firmly planted on floor"
│   FIX 4: Add to negatives: "no floating, no weightless motion"
│
├─ Light objects (papers, fabric) → Force description needed
│   FIX 1: Describe forces: "paper flutters naturally in 5 mph breeze"
│   FIX 2: Specify material: "lightweight cotton fabric, realistic drape"
│
└─ Liquids/fluids → Physics parameters missing
    FIX 1: Describe viscosity: "water pours with natural viscosity"
    FIX 2: Add splash dynamics: "creates realistic splash on impact"
    FIX 3: Specify settling: "ripples spread naturally and fade"
```

**PHYSICS KEYWORDS TO ADD:**
```
"Realistic gravity and momentum"
"Natural weight distribution"
"Objects obey physics laws"
"Authentic material properties"
```

**AVOID:**
```
Removing these or contradictory terms like "floats gently" for non-buoyant objects
```

---

### SYMPTOM: Morphing, melting, shape-shifting objects

**DIAGNOSTIC PATH:**

```
Q: What's morphing?
├─ Subject's body/face → Character description insufficient
│   FIX 1: Lock anatomy: "maintains consistent human anatomy throughout"
│   FIX 2: Add structural details: "rigid bone structure, no facial distortion"
│   FIX 3: Reduce duration (8s → 4s)
│   FIX 4: Simplify action (less extreme movement)
│
├─ Objects → Material rigidity not specified
│   FIX 1: Specify material: "rigid carbon fiber, maintains shape"
│   FIX 2: Lock form: "solid structure, no warping or melting"
│   FIX 3: Add to negatives: "no morphing, no shape changes, no melting"
│
└─ Background elements → Scene complexity too high
    FIX 1: Simplify background: fewer elements
    FIX 2: Lock environment: "static background, consistent architecture"
    FIX 3: Reduce video duration
```

**PROMPT ADDITIONS:**
```
"Maintains consistent form throughout"
"Solid structure, no warping"
"Anatomically correct, no distortion"
```

---

### SYMPTOM: Teleporting objects, discontinuous motion

**DIAGNOSTIC PATH:**

```
Q: When does teleportation occur?
├─ During camera movement → Motion instructions conflicting
│   FIX 1: Separate camera from subject motion clearly
│   FIX 2: Use ONE camera movement only
│   FIX 3: Describe continuous path: "object moves smoothly from left to right"
│
├─ Between actions → Beat timing too compressed
│   FIX 1: Space beats further apart (every 2-3 seconds minimum)
│   FIX 2: Add transition descriptions: "gradually shifts position"
│   FIX 3: Describe continuous motion: "walks smoothly across frame"
│
└─ Complex scene → Too many elements competing
    FIX 1: Reduce number of moving elements
    FIX 2: Focus on primary subject only
    FIX 3: Lock secondary elements as static
```

---

## 3. CHARACTER CONSISTENCY FAILURES

### SYMPTOM: Character appearance changes between shots or during video

**DIAGNOSTIC PATH:**

```
Q: What's changing?
├─ Face/features → Insufficient facial anchors
│   FIX 1: Add unique identifiers: "beauty mark above lip, crooked nose"
│   FIX 2: Lock age: "appears exactly 32 years old"
│   FIX 3: Describe in EVERY shot: repeat ALL features
│
├─ Wardrobe → Clothing not locked
│   FIX 1: Specific colors: "forest green wool sweater, not lime or dark green"
│   FIX 2: Details: "brass buttons, cable knit pattern, rolled sleeves"
│   FIX 3: Condition: "slightly worn, small stain on left cuff"
│
├─ Hair → Style/color drifting
│   FIX 1: Lock style: "hair in high ponytail, not loose or braided"
│   FIX 2: Lock color specifically: "ash blonde, not golden or platinum"
│   FIX 3: Add unique detail: "single purple streak left side"
│
└─ Body type → Proportions shifting
    FIX 1: Lock height: "5'6\" tall, exactly"
    FIX 2: Lock build: "athletic build, defined shoulders"
    FIX 3: Reference points: "as tall as the door frame, wears size 8 shoes"
```

**CHARACTER LOCK TEMPLATE:**
```
[Name], [exact age], [height], [build]:
- Hair: [specific color] [specific style] [unique detail]
- Face: [distinguishing feature] [distinguishing feature]
- Eyes: [exact color] [shape] [detail like glasses]
- Skin: [tone] [texture note like freckles]
- Wardrobe: [color] [material] [style] [specific garment] [condition]
- Accessories: [jewelry] [watches] [other]

REPEAT THIS ENTIRE BLOCK IN EVERY SHOT
```

---

## 4. AUDIO SYNC ISSUES

### SYMPTOM: Lips don't match dialogue (lip-sync drift)

**DIAGNOSTIC PATH:**

```
Q: How severe is the drift?
├─ Mild (<1 frame) → Acceptable, might tighten in post
│   FIX 1: Accept as-is, add ADR in post if critical
│   FIX 2: Regenerate for better sync
│
├─ Moderate (2-4 frames) → Dialogue too complex
│   FIX 1: Shorten dialogue lines (max 10 words per line)
│   FIX 2: Add pauses: "[beat]" between lines
│   FIX 3: Specify slower delivery: "speaks slowly and deliberately"
│   FIX 4: Reduce camera movement during dialogue
│
└─ Severe (off by syllables) → Multiple issues
    FIX 1: Simplify to single speaker, one short line
    FIX 2: Reduce video duration
    FIX 3: Remove dialogue, add as voiceover in post
    FIX 4: Use "[Name] speaks but audio muffled" then ADR later
```

**DIALOGUE BEST PRACTICES:**
```
✓ One speaker at a time
✓ Lines under 10 words
✓ Pauses between exchanges: "[beat]" or "[pause]"
✓ Static or slow camera during speech
✓ Specify delivery tempo: "speaks slowly"

✗ Multi-speaker rapid exchanges
✗ Long monologues (15+ words)
✗ Fast camera movement during dialogue
✗ Multiple conversations simultaneously
```

---

### SYMPTOM: Sound effects don't match visual action

**DIAGNOSTIC PATH:**

```
Q: What's mismatched?
├─ Timing off → SFX cues unclear
│   FIX 1: Specify exact timing: "At 3.2s, glass shatters with sharp crack"
│   FIX 2: Link to visual: "footstep sound matches each foot contact"
│   FIX 3: Describe sync: "impact sound perfectly synced to collision"
│
├─ Wrong sound → Description ambiguous
│   FIX 1: Specify material: "wooden door creak, not metal squeak"
│   FIX 2: Describe acoustic properties: "deep bass thud, resonant"
│   FIX 3: Reference real-world: "like a basketball hitting hardwood"
│
└─ Sound missing → Not prompted
    FIX 1: Explicitly request SFX: "with distinct impact sound"
    FIX 2: Describe audio: "AUDIO: [action] produces [sound type]"
    FIX 3: Add foley details: "footsteps, fabric rustle, object impact"
```

---

## 5. CAMERA MOVEMENT PROBLEMS

### SYMPTOM: Camera movement is shaky, erratic, or nauseating

**DIAGNOSTIC PATH:**

```
Q: Is shake intentional (handheld aesthetic)?
├─ YES (should be shaky but too much) → Intensity too high
│   FIX 1: Specify level: "subtle handheld shake, not extreme"
│   FIX 2: Add stabilization note: "Steadicam style, smooth but organic"
│   FIX 3: Reduce shake: "gentle micro-movements"
│
└─ NO (should be smooth) → Stability not specified
    FIX 1: Add: "locked tripod, no camera movement"
    FIX 2: Add: "smooth gimbal movement, stabilized"
    FIX 3: Add: "glides on dolly track, perfectly steady"
    FIX 4: In negatives: "no camera shake, no handheld instability"
```

**STABILITY KEYWORDS:**
```
STABLE: locked tripod, steady, stabilized, smooth, gimbal, dolly track
ORGANIC: gentle handheld, subtle drift, natural sway
SHAKY: handheld, documentary style, energetic movement
```

---

### SYMPTOM: Camera movement feels too slow or too fast

**DIAGNOSTIC PATH:**

```
Q: What movement type?
├─ Dolly/Track → Speed not specified
│   FIX 1: Add speed: "slow dolly at 0.5 ft/sec"
│   FIX 2: Compare to real-world: "dolly in at walking pace"
│   FIX 3: Describe duration: "pushes in gradually over 5 seconds"
│
├─ Pan/Tilt → Rotation speed unclear
│   FIX 1: Specify: "slow 30-degree pan over 4 seconds"
│   FIX 2: Add: "pans smoothly at 8 degrees per second"
│
└─ Complex movement → Multiple movements conflicting
    FIX 1: Pick ONE movement only
    FIX 2: Remove competing movements
    FIX 3: Simplify: "static locked-off shot"
```

**SPEED REFERENCE:**
```
0 ft/sec: Static
0.1-0.3 ft/sec: Imperceptible drift
0.5-1.0 ft/sec: Slow, deliberate
2-3 ft/sec: Walking pace
4-6 ft/sec: Fast tracking
8+ ft/sec: Whip pan
```

---

## 6. LIGHTING INCONSISTENCIES

### SYMPTOM: Light direction changes mid-shot

**DIAGNOSTIC PATH:**

```
Q: Is it a time-lapse effect (intentional)?
├─ NO → Lighting not locked
│   FIX 1: Specify consistency: "key light from camera left throughout"
│   FIX 2: Lock all sources: "single overhead light, constant intensity"
│   FIX 3: Add to negatives: "no lighting shifts, no direction changes"
│   FIX 4: Describe shadows: "shadows remain consistent"
│
└─ YES but poorly executed → Time progression unclear
    FIX 1: Specify timestamps: "At 0s golden hour, at 5s blue hour"
    FIX 2: Describe transition: "sun sets gradually over duration"
```

**LIGHTING LOCK TEMPLATE:**
```
"[Light source type] from [camera left/right/overhead/below],
[color temperature]K, [intensity description],
maintains consistent direction and intensity throughout,
no lighting shifts or jumps"
```

---

### SYMPTOM: Exposure flickers or shifts

**DIAGNOSTIC PATH:**

```
FIX 1: Add "consistent exposure throughout, no flicker"
FIX 2: Lock camera settings: "180° shutter, locked aperture"
FIX 3: Describe even lighting: "evenly lit, balanced exposure"
FIX 4: Avoid: automatic exposure adjustments in prompt
FIX 5: If intentional flicker: specify "CRT flicker at 60Hz" or similar
```

---

## 7. STYLE/AESTHETIC DRIFT

### SYMPTOM: Visual style changes mid-shot or between shots

**DIAGNOSTIC PATH:**

```
Q: What's drifting?
├─ Color grade → Palette not locked
│   FIX 1: Lock colors: "Teal and orange grade throughout, no shifts"
│   FIX 2: Specify consistency: "maintains color palette consistently"
│   FIX 3: Reference film stock: "Kodak Vision3 500T look throughout"
│
├─ Film grain/texture → Texture inconsistency
│   FIX 1: Lock grain: "20% film grain consistent throughout"
│   FIX 2: Specify texture: "maintains analog texture throughout"
│
├─ Realism level → Style anchor missing
│   FIX 1: Lock at start: "Photorealistic throughout, no style shifts"
│   FIX 2: Reinforce: "consistent visual style, no aesthetic changes"
│
└─ Era aesthetic → Time period drifting
    FIX 1: Lock era: "1980s aesthetic throughout, no modern elements"
    FIX 2: Specify tech: "only 1980s-appropriate technology"
    FIX 3: Add to negatives: "no anachronistic elements"
```

**STYLE SPINE TO ADD:**
```
"[Style] maintained consistently throughout, no aesthetic shifts,
consistent [era/grade/texture] from start to finish"
```

---

## 8. TEXT/LOGO ARTIFACTS

### SYMPTOM: Random text, logos, or signage appearing

**DIAGNOSTIC PATH:**

```
Q: Is text intentional?
├─ NO → Text not excluded
│   FIX 1: Add to negatives: "no text, no logos, no signage, no lettering"
│   FIX 2: Avoid describing text: don't say "billboard reading..." just "billboard"
│   FIX 3: Add "blank surfaces" for areas that might show text
│   FIX 4: Plan to add text in post-production
│
└─ YES → Current limitation, workaround needed
    FIX 1: Accept generation without text
    FIX 2: Add text in post-production (After Effects, Premiere)
    FIX 3: Use text as overlay, not baked in
    FIX 4: For signage: describe generic "signage" then replace in post
```

**TEXT AVOIDANCE:**
```
INSTEAD OF: "Billboard reading 'Welcome to New York'"
USE: "Billboard with graphics, no readable text"

INSTEAD OF: "Newspaper headline says..."
USE: "Newspaper with generic text layout, unreadable"
```

---

## 9. GENERATION SPEED/QUALITY TRADE-OFFS

### SYMPTOM: Generation takes too long or times out

**DIAGNOSTIC PATH:**

```
Q: How complex is the scene?
├─ Very complex (many elements, long duration) → Simplify
│   FIX 1: Reduce duration (10s → 8s → 4s)
│   FIX 2: Reduce number of elements in scene
│   FIX 3: Simplify camera movement (complex → simple → static)
│   FIX 4: Limit character count (multiple → single)
│   FIX 5: Try during off-peak hours
│
└─ Simple scene but still slow → System/account issue
    FIX 1: Clear browser cache/app cache
    FIX 2: Try different browser
    FIX 3: Check account status/tier
    FIX 4: Wait and retry later
    FIX 5: Contact support if persistent
```

**COMPLEXITY REDUCTION CHECKLIST:**
```
[ ] Reduce duration to 4-8 seconds
[ ] Single camera movement (or static)
[ ] One primary character/subject
[ ] Simplified background (fewer elements)
[ ] Clear, simple action (no complex choreography)
[ ] Standard resolution (not maximum)
[ ] Single lighting setup (not multiple sources)
```

---

## 10. MULTI-SHOT CONTINUITY BREAKS

### SYMPTOM: Shots don't feel like they're from the same sequence

**DIAGNOSTIC PATH:**

```
Q: What's inconsistent across shots?
├─ Character appearance → Anchors not repeated
│   FIX 1: Copy/paste EXACT character description to every shot
│   FIX 2: Add sentence: "Same [Name] from previous shot"
│   FIX 3: Reference wardrobe explicitly each time
│
├─ Lighting → Light sources changing
│   FIX 1: Copy lighting setup to all shots: "Key light camera left throughout sequence"
│   FIX 2: Lock time of day: "Consistent golden hour across all shots"
│   FIX 3: Match contrast ratio: "8:1 ratio in all shots"
│
├─ Color grade → Palette drifting
│   FIX 1: Specify: "Teal and orange grade consistent across sequence"
│   FIX 2: Reference film stock: "Kodak Vision3 500T throughout"
│
└─ Environment → Setting details changing
    FIX 1: Lock location details in every shot
    FIX 2: Repeat background elements
    FIX 3: Maintain props across shots
```

**CONTINUITY TEMPLATE (REPEAT IN EVERY SHOT):**
```
CONTINUITY SPINE:
- Character: [EXACT same description]
- Wardrobe: [EXACT same description]
- Lighting: [Key light camera left, 8:1 ratio, 3200K]
- Color: [Teal and orange grade]
- Time: [Golden hour, 6:15 PM]
- Location: [Same specific details]

[Then add shot-specific camera/action]
```

---

## EMERGENCY TROUBLESHOOTING: NOTHING WORKS

### When all fixes fail:

```
STEP 1: Start from scratch with MINIMAL prompt
"[Subject] [doing simple action] in [location]. 
Shot on [camera]. [Simple lighting]. Duration 4s."

STEP 2: If that works, add ONE element at a time
- Add camera movement
- Test
- Add audio description  
- Test
- Add color details
- Test
- Continue until you identify the problematic element

STEP 3: Isolate the problem
- Remove the element that breaks it
- Complete the video without it
- Add that element in post-production if possible

STEP 4: Document for future
- Note what broke and at what complexity level
- Keep simplified version for backup
- File feedback with OpenAI
```

---

## DIAGNOSTIC DECISION TREE

```
START HERE → What's wrong with your generation?

Visual Quality
├─ Blurry/soft → Section 1
├─ Artifacts/banding → Section 1
└─ Color issues → Section 1

Motion Issues
├─ Floating/physics → Section 2
├─ Morphing → Section 2
└─ Teleporting → Section 2

Character Problems
└─ Appearance changes → Section 3

Audio Problems
├─ Lip-sync → Section 4
└─ SFX mismatch → Section 4

Camera Issues
├─ Unwanted shake → Section 5
└─ Wrong speed → Section 5

Lighting Issues
├─ Direction changes → Section 6
└─ Exposure flicker → Section 6

Style/Aesthetic
└─ Style drift → Section 7

Text Artifacts
└─ Unwanted text → Section 8

Performance Issues
└─ Slow generation → Section 9

Multi-Shot Issues
└─ Continuity breaks → Section 10
```

---

## SUCCESS METRICS

Track your iterations to improve:

```
Generation #: ____
Problem: _____________________
Fix applied: __________________
Result: ______________________
Time to solve: ___ minutes
What I learned: _______________
_________________________________
```

---

*Version 2.0 | December 2025*  
*Use with SORA 2 EXPERT PROFILE and PROMPT BUILDER*
