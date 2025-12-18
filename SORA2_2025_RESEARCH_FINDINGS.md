# SORA 2: 2025 RESEARCH FINDINGS & EXAMPLE PROMPTS

**Classification**: RESEARCH REPORT
**Version**: 1.0 | December 2025
**Purpose**: Latest best practices, cutting-edge techniques, and comprehensive example prompts

---

## EXECUTIVE SUMMARY

This document synthesizes the latest Sora 2 prompting research from 2025, identifies gaps in current documentation, and provides 15 new high-quality example prompts across diverse use cases. Key findings include:

1. **Native Audio Generation** - Sora 2 now generates synchronized dialogue with lip-sync
2. **Character Injection (Cameo)** - "Upload Yourself" feature for consistent character appearance
3. **Advanced Physics Simulation** - Realistic motion with accurate rebound, momentum, and material properties
4. **Shorter = Better** - Two 4-second clips often outperform single 8-second clips
5. **Dialogue Formatting** - Must be separated into distinct blocks for proper lip-sync
6. **Shot-List Structure** - Most reliable results from layered, reusable prompt structures

---

## PART 1: GAPS IDENTIFIED IN CURRENT DOCUMENTATION

### What's Missing from Existing Docs

**1. Native Audio & Dialogue Techniques**
- Current docs mention audio directives but don't detail Sora 2's native dialogue generation
- Missing: Phoneme mapping, lip-sync optimization, tone descriptors
- Missing: Multi-speaker dialogue formatting strategies

**2. Character Injection/Cameo Feature**
- No documentation on the "Upload Yourself" capability
- Missing: How to prompt with pre-captured character likenesses
- Missing: Voice matching and appearance consistency techniques

**3. 2025 API Parameters**
- Existing docs don't specify the new model variants: `sora-2` vs `sora-2-pro`
- Missing: Resolution options (1280x720, 720x1280, 1024x1792, 1792x1024)
- Missing: Optimal duration strategy (4s vs 8s vs 12s trade-offs)

**4. Iterative Refinement (Remix Feature)**
- Current workflow mentions iteration but not the "Remix" feature
- Missing: How to lock successful elements while tweaking one variable
- Missing: When to simplify vs when to add complexity

**5. Physics Simulation Specifics**
- Existing docs mention realistic physics but lack concrete examples
- Missing: Material properties (elasticity, friction, weight)
- Missing: Force specifications (gravity, momentum, collision)
- Missing: Basketball rebound example and other physics demonstrations

**6. Image Input for Control**
- No documentation on using visual references via `input_reference` parameter
- Missing: How to lock composition and style for first frame
- Missing: Character consistency across multi-shot sequences

---

## PART 2: 2025 CUTTING-EDGE TECHNIQUES

### Technique 1: Shot-List Layered Prompting

**What It Is**: Structure prompts in discrete layers you can tune independently

**Why It's Effective**:
- Allows targeted iteration without rewriting entire prompt
- Creates reusable "spines" for continuity across shots
- Separates technical specs from creative description

**Implementation**:
```
[STYLE SPINE - REUSABLE]
Shot on ARRI Alexa 65, 4K DCI, 24fps, Kodak Vision3 500T emulation

[TECHNICAL LAYER - CAMERA]
85mm lens, f/1.4, shallow DOF, medium close-up

[ACTION LAYER - BEAT-MAPPED]
Beat 1 (0.0s): Subject enters frame left
Beat 2 (2.0s): Pauses, glances camera-right
Beat 3 (3.5s): Subtle smile appears

[LIGHTING LAYER]
Key: Soft window light camera-left, 5600K
Fill: Warm practical lamp, -2 stops
Ratio: 4:1

[COLOR LAYER]
Palette: Cream #F5E6D3, walnut brown #5C4033, soft amber #FFB84D
Grade: Lifted blacks, warm shadows, Portra 400 emulation

AVOID: Morphing, extra limbs, inconsistent lighting
```

**Common Pitfalls**: Mixing too many styles in one layer, contradictory specifications

---

### Technique 2: Dialogue Block Formatting

**What It Is**: Separate visual description from spoken dialogue using labeled blocks

**Why It's Effective**:
- Enables phoneme mapping for accurate lip-sync
- Prevents model from confusing visual cues with speech
- Allows tone/delivery descriptors

**Implementation**:
```
[VISUAL DESCRIPTION]
Medium shot, 90s documentary interview style. An elderly Swedish man
sits in a leather armchair in a wood-paneled study. Bookshelves
behind him. Soft window light from left. He looks directly at camera.

[DIALOGUE]
Man (calm, nostalgic): "I still remember when I was young."
```

**Advanced - Multi-Speaker**:
```
[VISUAL]
Two-shot at cafe table. Woman in blue sweater left, man in
gray jacket right. Afternoon light through window.

[DIALOGUE]
Woman (excited, leaning forward): "Did you hear about the discovery?"
Man (skeptical, raising eyebrow): "Which one this time?"
Woman (smiling): "The Mars samples. They found something."
```

**Common Pitfalls**:
- Lines too long (keep under 10 words for 4-second clips)
- Not specifying delivery tone
- Multiple overlapping speakers (model struggles with this)

---

### Technique 3: Shorter Clips Strategy

**What It Is**: Generate multiple 4-second clips instead of single longer clips

**Why It's Effective**:
- 4-second clips follow instructions more reliably
- Higher quality results per clip
- Easier to iterate on specific moments
- Can be edited together seamlessly in post

**Implementation**:
```
SHOT 1 (4 seconds):
Close-up of hand reaching for door handle.
Fingers wrap around brass knob, begin to turn.
Duration: 4s

SHOT 2 (4 seconds):
Door swings open, revealing hallway.
Camera dollies forward through doorway.
Duration: 4s

SHOT 3 (4 seconds):
Interior hallway, shadow moves across wall.
Camera holds as figure steps into light.
Duration: 4s
```

**Result**: Three reliable 4s clips = 12s total sequence with better control than single 12s generation

**Common Pitfalls**: Not planning for continuity (lighting, color, timing must match)

---

### Technique 4: Character Injection (Cameo)

**What It Is**: Pre-capture your likeness/voice, then insert into any generated scene

**Why It's Effective**:
- Perfect character consistency across multiple shots
- Accurate voice matching with lip-sync
- Eliminates AI face artifacts

**Implementation**:
```
[PROMPT WITH CAMEO]
My Cameo [NAME] is sitting at a modern desk in a bright office.
Wearing a navy blazer and white shirt. Looking directly at camera
with confident expression.

[DIALOGUE]
[NAME] (professional, warm): "Welcome to our new product launch.
Today we're revealing something revolutionary."

Camera: Static medium shot, 50mm, f/2.8
Lighting: Three-point setup, soft key from left
Duration: 4s
```

**Setup Requirements**:
1. Record 30-60 second video of yourself (multiple angles, expressions)
2. Upload to Sora 2 Cameo feature
3. Reference by name in prompts

**Common Pitfalls**: Requesting actions/clothing dramatically different from capture video

---

### Technique 5: Physics-Explicit Prompting

**What It Is**: Specify material properties and forces explicitly for realistic motion

**Why It's Effective**:
- Sora 2's physics engine responds to explicit material cues
- Prevents unrealistic floating/morphing
- Creates believable interactions

**Implementation**:
```
A regulation basketball (standard weight, medium elasticity)
is shot toward a regulation backboard from 15 feet. The ball
misses the rim, strikes the backboard with realistic impact
force, and rebounds at accurate angle downward, bouncing twice
on hardwood court floor (high friction surface). Each bounce
loses approximately 40% height. Ball comes to rest after third
bounce.

Physics: Realistic gravity (9.8 m/s²), accurate momentum
conservation, proper elasticity coefficient for basketball
(e=0.75), friction on hardwood.

Camera: Wide shot, locked tripod, captures entire arc
Duration: 8s
```

**Material Property Keywords**:
- Weight: "lightweight", "heavy", "standard weight", "massive"
- Elasticity: "bouncy", "elastic", "rigid", "deformable"
- Friction: "low-friction ice surface", "high-friction rubber", "slippery"
- Forces: "realistic gravity", "wind speed 20 km/h", "impact force"

**Common Pitfalls**: Vague descriptions like "natural physics" instead of explicit specifications

---

### Technique 6: Image Reference Input

**What It Is**: Provide a reference image to lock composition/style for first frame

**Why It's Effective**:
- Ensures consistent starting point across shots
- Maintains character appearance without Cameo
- Locks specific composition/framing

**Implementation** (API):
```python
response = client.video.generate(
    model="sora-2-pro",
    prompt="Character turns head slowly, smiles. Duration 4 seconds.",
    input_reference=open("reference_frame.jpg", "rb"),
    size="1280x720",
    seconds=4
)
```

**Use Cases**:
- Multi-shot sequences maintaining character consistency
- Starting from specific art direction/storyboard frame
- Matching production design from concept art

**Common Pitfalls**: Reference image resolution doesn't match target size parameter

---

### Technique 7: Remix for Surgical Iteration

**What It Is**: Generate variation by changing ONE variable while locking others

**Why It's Effective**:
- Identifies exactly what's causing issues
- Prevents regression when refining
- Faster convergence to desired result

**Implementation**:
```
GENERATION 1 (Baseline):
Medium shot, woman in red dress walks through market.
50mm lens, natural daylight. 8 seconds.

RESULT: Good action, but lighting too harsh

GENERATION 2 (Remix - Lighting Change Only):
Same shot, same action, same red dress, same market.
Change: Add "overcast soft lighting" and "diffused shadows"
Lock: All other elements unchanged

RESULT: Perfect. Lock this version.

GENERATION 3 (Remix - Camera Change Only):
Same shot as Generation 2 (locked lighting).
Change: Switch from 50mm to 85mm lens
Lock: All lighting, action, wardrobe

RESULT: Better compression. Final version.
```

**Remix Strategy**:
1. Generate baseline
2. Identify single issue
3. Change ONLY that element
4. Compare results
5. Lock successful changes
6. Iterate on next issue

**Common Pitfalls**: Changing multiple variables simultaneously, losing successful elements

---

## PART 3: 15 HIGH-QUALITY EXAMPLE PROMPTS

---

### EXAMPLE 1: CINEMATIC STORYTELLING - Emotional Portrait

**Use Case**: Character-driven narrative opening

**Prompt**:
```
Ultra-close-up portrait, 85mm lens at f/1.4, 2.39:1 anamorphic aspect.
A woman in her late 30s, short dark hair, weathered face with subtle
scars. Soft window light from camera-left creates Rembrandt lighting
pattern with distinct triangle under right eye.

Beat 1 (0.0s): Her eyes are closed, face neutral, breath visible in
cold air
Beat 2 (1.5s): Eyes open slowly, revealing exhaustion and determination
Beat 3 (3.0s): Subtle micro-expression - jaw tightens, resolve forms
Beat 4 (4.0s): Single tear forms in left eye, doesn't fall

Camera: Locked tripod, absolute stillness emphasizes subject emotion
Lighting: Single soft key 5600K from left, no fill, ratio 16:1
Color: Desaturated, cool blue shadows #4A6FA5, pale skin #E8D4C8,
deep blacks #0A0A0A
Texture: 20% film grain, Kodak Vision3 500T emulation
Audio: Quiet breath, distant wind, isolated emotional moment

Duration: 4 seconds

AVOID: Morphing, smooth skin (show realistic texture), over-dramatic
expressions, camera movement, music
```

**What Makes It Effective**:
- Extremely specific facial description creates distinct character
- Beat-mapped micro-expressions within realistic human range
- Lighting ratio and direction explicitly stated
- Locked camera emphasizes subject performance
- Audio reinforces isolation and intimacy

**Sora 2 Features Leveraged**:
- Advanced facial micro-expression rendering
- Realistic skin texture with subsurface scattering
- Subtle physics (breath vapor in cold air)
- Emotional realism without over-acting

**Expected Output**:
- 4-second close-up with photorealistic skin detail
- Visible pores, natural eye moisture
- Breath condensation subtle but present
- Lighting creates dimension, half face in shadow
- Color grade matches specified palette
- Single tear forms but doesn't run (realistic timing)

**Common Pitfalls to Avoid**:
- Don't request "perfect skin" (reduces realism)
- Don't add camera movement (distracts from performance)
- Don't specify multiple emotions simultaneously
- Don't make tear "dramatically fall" (too slow for 4s)

---

### EXAMPLE 2: CINEMATIC STORYTELLING - Suspense Build

**Use Case**: Thriller/mystery atmosphere creation

**Prompt**:
```
Shot on ARRI Alexa 65, 4K DCI, 24fps. A gloved hand (black leather,
worn texture visible) slowly enters frame from camera-right at the
2-second mark. Hand reaches toward a weathered manila folder lying
on a scratched metal desk. Fluorescent overhead light (4100K,
flickering at 2Hz) casts institutional green tint and harsh shadows.

Beat 1 (0.0s): Static shot, folder closed, "CONFIDENTIAL" stamp
visible in red
Beat 2 (2.0s): Gloved hand enters frame, fingers extended
Beat 3 (3.5s): Hand hovers over folder for beat (hesitation)
Beat 4 (5.0s): Fingers make contact, begin to open folder slowly
Beat 5 (7.0s): Folder opens 45 degrees, revealing partial document edge
Beat 6 (8.0s): Hold on moment of revelation

Camera: Locked overhead shot, slight Dutch angle 5 degrees clockwise
for unease
Lens: Zeiss Otus 50mm at f/2.8, sharp focus on folder with hand
slightly soft
Lighting: Single overhead fluorescent (motivated source), creating
downward shadows. No fill. Ratio 20:1.
Color: Institutional green #3D5A45, manila tan #D4AF87, leather black
#1A1A1A, red stamp #C41E3A at 150% saturation (isolated accent)
Grade: Bleach bypass, desaturated -40% except red stamp, lifted blacks
to 8%, cold shadows
Texture: Visible dust on desk surface, fingerprints on folder,
scratches on metal. 18% film grain.
Audio: 60Hz fluorescent hum (continuous), subtle leather creak at 3.5s,
paper whisper at 5.0s, held breath (tension)

Duration: 8 seconds
Aspect: 2.39:1 (cinematic letterbox)

AVOID: Face reveal, additional hands, camera movement, warm tones,
music, fast motion
```

**What Makes It Effective**:
- Slow, deliberate timing builds suspense naturally
- Overhead Dutch angle creates psychological unease
- Single-color accent (red stamp) draws eye to key element
- Fluorescent flicker adds subliminal tension
- Hesitation beat (3.5s) shows character psychology
- Audio cues reinforce practical realism

**Sora 2 Features Leveraged**:
- Precise timing control via beat mapping
- Realistic material textures (leather, metal, paper)
- Accurate shadow casting from motivated source
- Subtle physics (paper movement, fabric creak)
- Audio-visual synchronization

**Expected Output**:
- Tense, methodical reveal pacing
- Harsh institutional lighting with visible flicker
- Desaturated palette except vibrant red stamp
- Realistic hand movement with proper momentum
- Folder opens with paper resistance physics
- Audio perfectly synced to visual beats

**Common Pitfalls to Avoid**:
- Don't rush the timing (suspense requires patience)
- Don't add multiple light sources (kills noir mood)
- Don't request "dramatic music" (undermines realism)
- Don't make hand movement perfectly smooth (add human imperfection)

---

### EXAMPLE 3: PRODUCT DEMONSTRATION - Tech Reveal

**Use Case**: High-end product launch video

**Prompt**:
```
Shot on RED V-Raptor 8K, 60fps slowed to 24fps for 2.5x slow-motion.
A premium wireless earbud emerges from white matte charging case on
minimalist concrete pedestal. Camera executes slow 180-degree orbital
movement clockwise around product over 12 seconds.

Beat 1 (0-2s): Static shot, charging case closed, LED indicator glows
soft blue
Beat 2 (2-4s): Case lid magnetically opens upward (smooth automated
motion)
Beat 3 (4-8s): Right earbud levitates 2cm out of case (product
feature demo)
Beat 4 (8-10s): Camera completes orbit, earbud rotates to show
profile view
Beat 5 (10-12s): Soft focus on brand logo engraved on earbud surface

Camera: Motorized orbit from front to side to back to side to front,
maintaining constant 30cm distance from product, slight descending
arc from 45-degree high angle to 15-degree low angle ending
Lens: Canon CN-E 100mm Macro T2.9, shot wide open for razor-thin DOF,
background pedestal blurs into abstract gradient
Lighting: Three-point studio setup - Key: Large softbox camera-left
(5600K neutral), Fill: White bounce -3 stops camera-right, Rim:
Narrow accent light from behind (6500K cool) creates edge separation
Color: Pure white #FFFFFF case, matte concrete #B8B8B8 pedestal, soft
blue LED #4A90E2, subtle gradient background white to pale gray
#F5F5F5 to #E0E0E0
Grade: High-key commercial look, lifted shadows, clean whites without
clipping, +20% clarity for premium sharpness
Texture: Matte product finish with micro-texture visible at macro
distance, clean concrete grain, zero dust (pristine commercial quality)
Audio: Soft whoosh as case opens (premium tactile sound), subtle
magnetic click, ambient room tone (high-end studio silence), no music

Duration: 12 seconds
Aspect: 16:9 (YouTube/broadcast standard)
Model: sora-2-pro (highest quality needed)

AVOID: Fingerprints, dust, imperfections, dramatic lighting, lens
flares, text overlays, corporate music, fast movements
```

**What Makes It Effective**:
- Slow-motion from high frame rate captures product detail
- Orbital camera movement showcases 360-degree design
- High-key lighting emphasizes premium quality and cleanliness
- Minimalist composition focuses attention on product
- Magnetic levitation demonstrates product feature organically
- Professional audio creates premium tactile experience

**Sora 2 Features Leveraged**:
- Macro detail rendering at high resolution
- Smooth complex camera motion (motorized orbit)
- Physics simulation (magnetic levitation, automated lid)
- Material rendering (matte plastic, metal, LED glow)
- Clean commercial aesthetic without artifacts

**Expected Output**:
- Pristine white product on neutral background
- Sharp macro focus on earbud, background softly blurred
- Smooth 180-degree orbit without wobble
- Realistic magnetic lid opening physics
- LED glow subtle and realistic (not over-blown)
- Clean high-key lighting without harsh shadows

**Common Pitfalls to Avoid**:
- Don't add dramatic shadows (product demo needs clean visibility)
- Don't rush camera movement (smooth slow reveals feel premium)
- Don't include hands until end (pristine product focus)
- Don't use colored lighting (neutral white is professional standard)
- Don't add text/graphics in prompt (add in post)

---

### EXAMPLE 4: ABSTRACT/ARTISTIC - Liquid Dynamics

**Use Case**: Experimental visual, music video, art installation

**Prompt**:
```
Abstract macro cinematography, shot on Phantom Flex4K at 1000fps,
conformed to 24fps for extreme 41x slow-motion. Vibrant colored inks
(cyan #00B4D8, magenta #E91E63, golden yellow #FFD60A) drop into
crystal-clear water in glass container. Inks disperse, collide,
create organic fluid patterns.

Beat 1 (0-1s): Single cyan droplet enters frame top, suspended in air
Beat 2 (1-3s): Cyan droplet impacts water surface, creates crown splash
Beat 3 (3-5s): Cyan ink disperses downward in tendrils, billowing
organic shapes
Beat 4 (5-7s): Magenta droplet enters, collides with cyan, colors
begin mixing
Beat 5 (7-9s): Yellow droplet joins, creates three-color fluid dance
Beat 6 (9-12s): Colors swirl, mix at boundaries, create gradient zones
of secondary colors (purple, orange, green)

Camera: Locked macro shot, 100mm macro lens at f/8 for extended DOF
capturing full depth of fluid motion
Lighting: White LED backlight behind glass container creates luminous
glow through colored inks, side softbox for dimension on tendrils,
black background for maximum color contrast
Color: Pure saturated primary colors (cyan, magenta, yellow), black
background #000000, glass container invisible (pure clarity), let
fluid mixing create secondary colors naturally
Grade: +40% saturation for vivid artistic look, high contrast,
deep blacks
Texture: Fluid dynamics - realistic ink dispersion physics, turbulent
flow patterns, billowing smoke-like tendrils, viscosity of water,
surface tension on droplets
Audio: No literal sound - suggest abstract synthesizer tones mapping
to color (cyan = low frequency drone, magenta = mid shimmer, yellow =
high sparkle), underwater acoustics

Duration: 12 seconds
Aspect: 1:1 (Instagram feed format)
Model: sora-2-pro (physics simulation critical)

AVOID: Text, symmetry (organic chaos), CGI plastic look, overly blurred,
frozen motion (must show fluid dynamics), clean separation (encourage
mixing), fast motion (defeats slow-mo purpose)
```

**What Makes It Effective**:
- Extreme slow-motion reveals hidden fluid dynamics beauty
- Primary color collision creates visual interest through mixing
- Black background isolates colors for maximum impact
- Macro perspective creates abstract art from simple materials
- Physics simulation is the star (no narrative needed)
- Abstract audio mapping enhances artistic experience

**Sora 2 Features Leveraged**:
- Advanced fluid dynamics simulation
- Realistic ink dispersion physics
- Slow-motion timing precision
- Turbulent flow rendering
- Color mixing accuracy
- Transparent material (glass/water) handling

**Expected Output**:
- Dreamlike slow-motion fluid ballet
- Vibrant saturated colors on pure black
- Organic billowing tendrils with realistic turbulence
- Crown splash with accurate surface tension
- Natural color mixing at boundaries (purple, orange, green)
- Visible flow patterns and turbulent eddies

**Common Pitfalls to Avoid**:
- Don't request "perfect symmetry" (kills organic beauty)
- Don't use vague "colorful liquid" (specify exact colors with hex)
- Don't skip physics terms (model needs "viscosity", "surface tension")
- Don't add CGI elements (defeats practical macro aesthetic)
- Don't request "sharp throughout" (some motion blur is natural)

---

### EXAMPLE 5: DOCUMENTARY-STYLE - Street Photography

**Use Case**: Observational documentary, slice-of-life content

**Prompt**:
```
Handheld documentary style, shot on Canon EOS C70, natural available
light, 1080p with organic digital noise. Medium-wide shot, woman in
her 40s walks down narrow Tokyo alley filled with paper lanterns and
small izakaya entrances. Golden hour light (30 minutes before sunset)
filters between buildings creating warm shafts. She walks toward
camera at casual pace.

Subject: Asian woman, shoulder-length black hair, beige trench coat
over dark sweater, carrying canvas tote bag, natural expression
(slight smile, lost in thought)

Beat 1 (0-2s): Woman visible in background of alley, small in frame,
walking toward camera
Beat 2 (2-5s): Steady approach, camera operator walks backward ahead
of her, subtle handheld shake (breathing, footsteps), maintaining
distance
Beat 3 (5-7s): Passes through golden light shaft, face illuminates
briefly, glances at izakaya sign
Beat 4 (7-8s): Continues forward, now medium-close-up, makes brief
eye contact with camera then looks away (documentary awareness)

Camera: Handheld, organic micro-shake (1-3cm drift), walking backward
dolly effect, human operator breathing rhythm, slight vertical bob
from footsteps, 50mm equivalent focal length
Lighting: Completely natural, golden hour 3200K warm sunlight in
shafts between buildings, shadow areas cooler 4500K from blue sky
fill, high dynamic range between sun shafts and shadows, no artificial
lights (motivated by time of day)
Color: Warm golden light #FFB347, beige coat #E8D5C4, red paper
lanterns #D32F2F, weathered wood #8B7355, cool blue shadows #5C7A9E,
natural skin tones
Grade: Documentary neutral, minimal intervention, retained shadow
detail, highlight preservation, +10% warmth in sunlit areas, film
print emulation
Texture: Natural digital noise pattern 15-20% in shadows (C70 sensor
characteristic), motion blur from handheld movement, paper lantern
translucency when backlit, fabric texture on coat visible
Audio: Ambient Tokyo alley - distant traffic hum, bicycle bell at 4s,
izakaya cooking sounds (sizzling), footsteps on pavement (her boots +
camera operator), natural reverb from narrow alley walls

Duration: 8 seconds
Aspect: 16:9
Model: sora-2 (documentary aesthetic suits standard tier)

AVOID: Locked tripod smoothness, cinematic grading, perfect framing
(embrace human imperfection), dramatic music, staged performance
(natural behavior), clean shadows (retain documentary texture)
```

**What Makes It Effective**:
- Handheld shake adds authenticity and observational feel
- Natural light only creates documentary realism
- Subject awareness of camera (brief eye contact) acknowledges
documentary format
- Ambient audio creates immersive environmental presence
- Walking backward creates dynamic following movement
- Golden hour light provides natural beauty without artificiality

**Sora 2 Features Leveraged**:
- Realistic handheld camera shake simulation
- Natural light rendering with high dynamic range
- Human subject natural behavior and micro-expressions
- Environmental audio generation (traffic, cooking, footsteps)
- Material textures (fabric, wood, paper lanterns)

**Expected Output**:
- Organic handheld documentary feel
- Natural behavior (slight smile, glance at sign)
- Golden hour light shafts with visible dust particles
- Background izakaya lanterns glowing warm
- Subject approaches camera naturally, not staged
- Brief moment of documentary eye contact then away

**Common Pitfalls to Avoid**:
- Don't request perfectly smooth camera (kills documentary feel)
- Don't add cinematic color grading (stay neutral)
- Don't make subject "perform" for camera (natural behavior only)
- Don't use artificial lighting (golden hour is the light source)
- Don't remove sensor noise (texture adds authenticity)

---

### EXAMPLE 6: ACTION SEQUENCE - Parkour Movement

**Use Case**: Dynamic action, sports footage, kinetic energy

**Prompt**:
```
Shot on GoPro Hero 12, ultra-wide 16mm equivalent, HyperSmooth
stabilization, 2.7K 120fps slowed to 24fps (5x slow-motion). POV chest
mount perspective. Male parkour athlete (early 20s, athletic build,
black hoodie, gray joggers, white sneakers) executes precision vault
over concrete barrier in urban environment.

Beat 1 (0-1s): Running approach, camera POV shows hands pumping,
concrete barrier ahead fills frame
Beat 2 (1-3s): Hands plant on barrier edge, body launches upward and
forward, legs tuck
Beat 3 (3-5s): Apex of vault, camera rotates forward showing brief
skyward view, then downward to landing zone
Beat 4 (5-7s): Legs extend for landing, feet touchdown on concrete
with realistic impact absorption (knees bend, weight transfers)
Beat 5 (7-8s): Continuous run after landing, camera steadies forward

Camera: POV chest mount, ultra-wide 16mm captures hands and feet in
frame, extreme digital stabilization with slight residual shake from
body impact, forward motion throughout
Lighting: Overcast daylight 6000K, even soft shadows, no harsh
highlights, urban concrete reflectivity, natural exposure for action
Color: Urban palette - concrete gray #95A3A6, black hoodie #2C3E50,
white sneakers #F8F9FA, overcast sky #B8C5D0, green urban vegetation
#3E5F3B
Grade: Neutral action sports grading, high contrast +15%, punchy
saturation +10%, clarity boost for sharpness
Texture: Concrete texture detail visible, fabric movement on hoodie
during motion, motion blur on background at speed, sharp focus on
hands when planted
Audio: Heavy breathing (exertion), sneaker impact on concrete at
approach, hand slap on barrier, wind rush during vault, landing impact
(thud + grunt), continued footsteps, urban ambient (distant traffic)
Physics: Realistic vault physics - momentum conservation, realistic
body rotation, accurate landing impact with weight transfer, shoe
compression, barrier hand plant with realistic friction

Duration: 8 seconds
Aspect: 16:9 or 9:16 (vertical for social)
Model: sora-2-pro (physics precision critical)

AVOID: Unrealistic floating, teleporting, morphing body, locked camera
smoothness (needs action shake), slow landing (must show impact force),
perfect form (organic athlete imperfection), cinematic grading (keep
action sports natural)
```

**What Makes It Effective**:
- POV perspective creates immersive action experience
- Slow-motion reveals athletic technique and physics
- Ultra-wide lens captures hands, body, and environment
- Realistic impact physics prevents floating/superhuman effect
- Heavy breathing and exertion audio adds visceral realism
- Continuous motion (run-vault-land-run) shows fluidity

**Sora 2 Features Leveraged**:
- Complex physics simulation (momentum, rotation, impact)
- POV camera with realistic shake/stabilization balance
- Athletic body motion with proper biomechanics
- Material interaction (hands on concrete, shoes landing)
- Audio-visual sync (impacts, breathing, footsteps)

**Expected Output**:
- Immersive chest-mount POV action
- Visible hands planting on barrier
- Realistic body rotation during vault
- Landing impact with knee bend and weight transfer
- Slight residual camera shake from body impacts
- Urban environment rushing past in background blur

**Common Pitfalls to Avoid**:
- Don't make movement perfectly smooth (loses action intensity)
- Don't create superhuman unrealistic vaults (physics must be accurate)
- Don't lock camera perfectly (POV needs organic body movement)
- Don't skip impact force (landing must show weight and compression)
- Don't add dramatic music (athlete breathing is the soundtrack)

---

### EXAMPLE 7: EMOTIONAL CHARACTER - Grief Moment

**Use Case**: Dramatic narrative, character study, emotional storytelling

**Prompt**:
```
Shot on Sony VENICE 2, 6K full-frame, 24fps, Cooke S4/i 50mm T2 lens.
Medium shot, woman in her 50s sits alone at small kitchen table in
dimly lit room. Single window camera-right provides only light source
(soft overcast daylight 5600K). She holds a faded photograph in both
hands, staring at it.

Subject: Woman, salt-and-pepper hair in loose bun, wearing faded blue
cardigan over white shirt, reading glasses hanging from chain, visible
signs of age (wrinkles, age spots on hands), exhausted posture

Beat 1 (0-2s): Static hold, she stares at photograph, face neutral but
tense, shallow breathing
Beat 2 (2-4s): Her jaw trembles slightly (suppressing emotion), eyes
begin to water
Beat 3 (4-6s): Single tear escapes right eye, slowly tracks down cheek,
she doesn't wipe it away
Beat 4 (6-9s): Her shoulders drop (releasing held tension), eyes close
slowly, head tilts down slightly
Beat 5 (9-10s): Quiet held moment, tear reaches jaw line, photograph
still gripped in both hands

Camera: Locked tripod, absolutely still, observational distance
respecting private grief, eye-level neutral angle
Lens: 50mm at T2 (f/2), shallow DOF keeps her in focus while
background kitchen softly blurs, natural perspective
Lighting: Single source - overcast window light camera-right creates
soft wrap-around fill, ratio 3:1 (gentle contrast), no artificial
lights, shadow side of face visible but detailed, realistic interior
darkness
Color: Desaturated palette, blue cardigan #4A6FA5 (muted), white shirt
#E8E8E8 (aged), wood table #6B5744, photograph sepia tone #C4A574,
skin tones natural with slight cool cast from window light
Grade: Lifted blacks to 12% (interior darkness without crushing),
gentle desaturation -20%, cool shadows, warm highlights, film print
emulation Kodak 5219
Texture: Realistic skin aging details (wrinkles, texture), fabric
texture on worn cardigan (pilling visible), wood grain on table,
faded photograph surface, 15% film grain for organic feel
Audio: Kitchen clock ticking (steady rhythm), distant muted traffic,
her shallow breathing (quiet, controlled), slight sigh at 6s, cloth
rustle from cardigan, profound silence emphasizing isolation

Duration: 10 seconds
Aspect: 2.39:1 (cinematic)
Model: sora-2-pro (subtle performance critical)

AVOID: Dramatic lighting, camera movement (stillness respects moment),
over-acting (subtle realism), music (silence is powerful), rapid tears
(realistic timing), makeup perfection (show real aging), brightening
scene (embrace darkness)
```

**What Makes It Effective**:
- Static camera creates observational intimacy, doesn't intrude
- Single window light source creates natural interior realism
- Micro-expressions (jaw tremble, shoulders drop) show suppressed grief
- Realistic tear timing (one tear over 4 seconds, not dramatic cascade)
- Silence and ambient sound emphasize isolation and introspection
- Visible aging details create authentic character

**Sora 2 Features Leveraged**:
- Subtle facial micro-expression rendering
- Realistic tear formation and tracking physics
- Natural skin aging texture (wrinkles, spots)
- Soft natural light simulation
- Quiet intimate audio atmosphere
- Emotional restraint (no over-acting)

**Expected Output**:
- Quiet, restrained emotional moment
- Visible aging details on skin and hands
- Single realistic tear forming and tracking slowly
- Soft window light creating dimension on face
- Photograph visible in hands (sepia-toned, faded)
- Background kitchen softly out of focus
- No dramatic music - clock tick and breathing only

**Common Pitfalls to Avoid**:
- Don't add camera movement (static observational is powerful)
- Don't make tears flow dramatically (one slow tear is more realistic)
- Don't over-light the scene (embrace dim interior)
- Don't request "perfect skin" (aging texture is character)
- Don't add music (silence and ambient sound are emotional)
- Don't rush timing (grief moments need slow patient pacing)

---

### EXAMPLE 8: PRODUCT DEMO - Food/Culinary

**Use Case**: Restaurant promo, recipe video, food content

**Prompt**:
```
Shot on Canon EOS R5, 4K 60fps, Canon RF 100mm f/2.8 Macro. Extreme
close-up overhead shot. Chef's hands (male, visible tattoos on
forearms, white chef coat sleeves) carefully plate final elements of
dessert on white ceramic plate.

Beat 1 (0-2s): Hands use tweezers to place edible gold leaf on
chocolate sphere
Beat 2 (2-4s): Right hand picks up small silver pitcher, tilts to
pour hot caramel sauce
Beat 3 (4-7s): Caramel sauce pours in slow stream onto chocolate
sphere, sphere slowly melts open revealing raspberry mousse interior
Beat 4 (7-8s): Left hand garnishes with mint sprig, hands exit frame
leaving finished dessert

Camera: Locked overhead tripod, 90-degree top-down view, macro focus
captures fine detail of textures and steam
Lens: 100mm macro at f/4 (balance between detail and depth), sharp
focus on pour zone, plate edges slightly soft
Lighting: Professional culinary three-point - Key: Large diffused
softbox overhead-left (5600K) eliminates harsh shadows, Fill: White
bounce card right side, Rim: Small LED accent from back creates edge
separation on sauce pour and steam
Color: Pure white plate #FFFFFF, dark chocolate #3E2723, gold leaf
#FFD700, hot caramel #D4A574 with amber tones, red raspberry #C2185B,
green mint #43A047, marble counter #F5F5F5
Grade: High-key commercial food styling, lifted shadows, clean whites,
+30% saturation on food elements only, contrast boost for dimension
Texture: Glossy chocolate surface (specular highlights), metallic gold
leaf (reflective), viscous caramel sauce (liquid physics), steam rising
from hot sauce, ceramic plate matte finish, mint leaf visible veins
Audio: Quiet professional kitchen ambient, caramel pour (liquid stream),
gentle sizzle as hot sauce meets chocolate, subtle clink of tweezers on
plate, satisfied breath from chef (pride in work)
Physics: Accurate liquid pour (caramel stream viscosity, gravity flow),
chocolate melting from heat contact (realistic timing), steam rising
from temperature differential

Duration: 8 seconds
Aspect: 1:1 (Instagram) or 9:16 (Reels/TikTok)
Model: sora-2-pro (texture detail critical)

AVOID: Shaky handheld (needs locked culinary precision), dim moody
lighting (food must be bright and appetizing), rapid movements (chef
precision is deliberate), unnatural colors (food color accuracy is
paramount), frozen liquid (show physics of pour)
```

**What Makes It Effective**:
- Overhead macro perspective shows culinary detail
- Slow deliberate movements communicate chef precision
- Practical melting chocolate effect demonstrates technique
- Visible tattoos humanize chef (not corporate perfection)
- Clean high-key lighting makes food look appetizing
- Liquid physics (pour, melt) add dynamic interest

**Sora 2 Features Leveraged**:
- Macro detail rendering (gold leaf, mint leaf veins)
- Liquid physics simulation (caramel pour viscosity)
- Heat-based physics (chocolate melting from contact)
- Steam generation from temperature differential
- Material rendering (glossy chocolate, metallic gold, matte ceramic)

**Expected Output**:
- Pristine overhead culinary shot
- Sharp macro focus on plating area
- Realistic caramel pour with proper viscosity
- Chocolate sphere melting gradually from heat
- Steam rising from hot caramel
- Chef hands with visible tattoos showing human element
- White plate on marble counter (clean commercial aesthetic)

**Common Pitfalls to Avoid**:
- Don't add dramatic lighting (food needs bright even illumination)
- Don't rush movements (chef precision is slow and deliberate)
- Don't fake melting effect (must show realistic heat physics)
- Don't over-saturate globally (only food elements, keep whites clean)
- Don't hide chef hands (tattoos add authenticity and personality)

---

### EXAMPLE 9: ABSTRACT ART - Particle Simulation

**Use Case**: Music video, art installation, experimental film

**Prompt**:
```
Abstract digital art visualization, Unreal Engine 5 aesthetic, 8K
resolution. Millions of luminous particles (each particle 1-2 pixels,
emitting soft glow) form and reform in black void. Particles organized
into fluid geometric patterns that morph between states.

Beat 1 (0-2s): Particles scattered randomly in space, soft cyan
#00D9FF glow
Beat 2 (2-4s): Particles begin organizing into rotating double helix
structure, color shifts to magenta #FF00FF at helix core
Beat 3 (4-6s): Helix expands and transforms into spherical shell,
particles accelerate orbital motion, color gradient cyan exterior to
magenta interior
Beat 4 (6-8s): Sphere contracts rapidly into dense center point,
brightness increases (white core), particles pause momentarily
Beat 5 (8-10s): Explosive expansion - particles burst outward in all
directions creating supernova effect, color spectrum shift (cyan ->
magenta -> yellow #FFFF00 -> white), trails of light
Beat 6 (10-12s): Particles decelerate, fade gradually to darkness,
final sparkles extinguish

Camera: Virtual camera slowly orbits around particle formations
clockwise, 30-degree descent from high angle to eye level over
duration, smooth digital motion control
Lighting: Self-illuminated particles only (each emits own light), no
external light sources, glow intensity varies with velocity (faster =
brighter), black void background #000000 for maximum contrast
Color: Color transitions map to energy states - low energy cyan
#00D9FF, mid energy magenta #FF00FF, high energy yellow #FFFF00,
peak energy white #FFFFFF
Rendering: Volumetric glow on each particle (2-pixel halo), motion
blur trails during fast movement, depth-based particle scale (distant
particles smaller), particle occlusion (foreground particles block
background), bloom effect on bright clusters
Texture: No physical texture (pure light particles), digital perfection
(not organic), smooth gradients, prismatic light quality
Audio: Synthesizer soundscape - each particle emits sub-audible tone,
millions of tones create dense harmonic cloud, pitch maps to color
(cyan = 200Hz, magenta = 400Hz, yellow = 800Hz), volume maps to
particle density, silence during pause beat, dramatic bass pulse at
expansion, gradual fade matching visual

Duration: 12 seconds
Aspect: 16:9 (projection/display)
Model: sora-2-pro (particle count and physics critical)

AVOID: Organic textures (keep digital/synthetic), slow motion (particles
need speed), symmetry (embrace chaos within organization), static
camera (needs subtle movement), literal representation (pure abstraction)
```

**What Makes It Effective**:
- Particle count creates visual complexity and depth
- Color transitions map to energy states (visual storytelling)
- Formation patterns (helix, sphere, explosion) provide structure
- Audio-visual synergy (pitch and color mapping)
- Pause beat before explosion creates anticipation
- Digital aesthetic embraces synthetic nature (not imitating organic)

**Sora 2 Features Leveraged**:
- Particle system simulation (millions of particles)
- Physics-based motion (orbital, expansion, deceleration)
- Color gradient transitions
- Volumetric glow rendering
- Motion blur on fast-moving elements
- Audio generation with pitch/color mapping

**Expected Output**:
- Dense particle cloud formations
- Smooth morphing between geometric states
- Vibrant color transitions (cyan -> magenta -> yellow -> white)
- Motion blur trails during fast movement
- Explosive expansion with trails
- Gradual fade to darkness
- Synthesizer harmonic cloud audio perfectly synced

**Common Pitfalls to Avoid**:
- Don't request "realistic" physics (this is abstract digital)
- Don't add symmetry constraints (chaos creates interest)
- Don't skip the pause beat (anticipation is crucial)
- Don't make color transitions gradual (should be state-based/sudden)
- Don't add literal objects (keep pure particle abstraction)

---

### EXAMPLE 10: DOCUMENTARY - Wildlife Behavior

**Use Case**: Nature documentary, wildlife content, educational

**Prompt**:
```
Shot on RED Komodo 6K, 120fps slowed to 24fps (5x slow-motion),
Sigma 150-600mm telephoto at 400mm f/5.6. Medium-long shot, adult male
kingfisher (Alcedo atthis) perched on weathered wooden branch
overhanging calm pond. Natural behavior sequence: alert scanning, dive,
catch, return.

Subject: Common kingfisher, brilliant blue plumage #0066CC with orange
chest #FF6B35, compact body, prominent black beak, black legs gripping
branch, natural wild posture (not posed)

Beat 1 (0-2s): Kingfisher perched, head turning left-right scanning
water surface below, body still, alert posture
Beat 2 (2-3s): Body tenses, head locks position (spotted prey), slight
crouch preparing to dive
Beat 3 (3-5s): Explosive launch from branch, wings snap open,
headfirst dive toward water, trajectory arc toward surface
Beat 4 (5-7s): Beak breaks water surface (small splash), submerged
briefly (0.3 seconds), emerges with small fish in beak
Beat 5 (7-9s): Wings beat rapidly (water droplets flying from
feathers), ascending back toward perch
Beat 6 (9-10s): Lands on branch (slight bounce, weight settling), fish
still in beak, satisfied posture

Camera: Locked telephoto on tripod (wildlife videography standard),
300mm+ compression creates depth, slight telephoto breathing when bird
moves toward/away, manual focus tracks bird throughout action
Lighting: Natural overcast daylight 6000K (even soft shadows ideal for
wildlife), water surface reflects skylight, no artificial lights,
preserving natural environment
Color: Natural wildlife palette - kingfisher blue #0066CC (iridescent
quality), orange chest #FF6B35, weathered branch brown #6B5744, pond
water olive green #5C6B3B with sky reflection, background bokeh green
#7A9D54 (foliage out of focus)
Grade: Natural documentary color, minimal intervention, slight
saturation boost +10% on bird plumage only (showcase natural beauty),
neutral shadows and highlights
Texture: Detailed feather texture (barbules visible in closeup), water
droplets on feathers after emergence (surface tension), weathered wood
grain on branch, ripples on pond surface from dive, motion blur on
wings during rapid beat
Audio: Quiet pond ambient (subtle water laps, distant wind in reeds),
kingfisher chirp before dive (high-pitched alert call), splash on
water entry (small crisp impact), wing beats (rapid flutter), droplets
falling from feathers back to water
Physics: Accurate bird flight dynamics (wing loading, takeoff physics),
realistic water splash (size appropriate for small bird), water
droplets obeying gravity as they fall from feathers, branch slight
bounce from landing weight

Duration: 10 seconds
Aspect: 16:9 (documentary standard)
Model: sora-2-pro (wildlife detail and physics critical)

AVOID: Staged behavior (must be natural), artificial lighting (preserve
documentary authenticity), exaggerated slow-motion (5x is realistic),
overly dramatic music (natural sound is powerful), clean water (natural
pond has organic matter), perfect focus throughout (telephoto has
natural DOF)
```

**What Makes It Effective**:
- Telephoto compression creates cinematic wildlife aesthetic
- Slow-motion reveals rapid behavior impossible to see in real-time
- Natural behavior sequence tells complete hunting story
- Authentic wildlife audio (bird call, splash, wing beats)
- Locked camera respects documentary observation conventions
- Natural lighting preserves authenticity

**Sora 2 Features Leveraged**:
- Detailed animal rendering (feather barbules visible)
- Complex physics (flight dynamics, water splash, droplet motion)
- Natural behavior animation (not anthropomorphized)
- Environmental interaction (bird-water-branch)
- Wildlife audio generation (species-accurate call)

**Expected Output**:
- Sharp focus on kingfisher with telephoto compression
- Natural wild bird posture and behavior
- Realistic dive trajectory and water entry splash
- Visible water droplets on feathers after emergence
- Rapid wing beats (motion blur appropriate for speed)
- Background foliage softly blurred (telephoto bokeh)
- Natural pond environment (organic matter visible)

**Common Pitfalls to Avoid**:
- Don't make bird look at camera (wild animals avoid eye contact)
- Don't create Disney-style anthropomorphic expressions
- Don't use pristine blue water (natural pond is organic/murky)
- Don't add dramatic music (natural sound is documentary standard)
- Don't make splash too large (kingfisher is small bird)
- Don't request perfect flight (natural birds have slight imperfections)

---

### EXAMPLE 11: HORROR - Psychological Tension

**Use Case**: Horror short, thriller, suspense content

**Prompt**:
```
Shot on Blackmagic URSA Mini 4.6K, 24fps, Zeiss CP.2 35mm T2.1. Wide
shot, empty suburban hallway at night, single practical light source
(table lamp visible in frame end of hall) casts long shadows. Camera
static, locked low angle (2 feet off ground looking down hallway).

Environment: Residential hallway, dated 1980s wallpaper (floral
pattern, faded), dark hardwood floor, family photos on walls barely
visible in darkness, door frames flanking hallway (all doors closed),
dust visible in light beam

Beat 1 (0-3s): Completely still, empty hallway, only lamp glow, silence
Beat 2 (3-4s): Lamp flickers once (0.2 seconds to darkness then back
on), shadow pattern shifts
Beat 3 (4-7s): Hold on stillness, nothing happens (building tension
through absence)
Beat 4 (7-8s): Subtle shadow movement at far end of hall (barely
perceptible, not clearly defined)
Beat 5 (8-9s): Lamp dims slightly (10% reduction), shadows deepen
Beat 6 (9-10s): Hold on ambiguous moment - is something there?

Camera: Locked low-angle tripod, absolute zero movement, creates
child's eye level perspective (vulnerability), wide lens includes floor
(potential for something entering frame)
Lighting: Single practical source (table lamp, warm 2700K tungsten),
harsh contrast ratio 30:1, deep black shadows, no fill light, darkness
dominates frame (70% of image in shadow), motivated light only
Color: Desaturated horror palette -40%, warm lamp glow #FFA500
(isolated warmth), cool blue-black shadows #0D1B2A, faded wallpaper
muted tones, darkness is protagonist
Grade: Crushed blacks at 0% (pure black shadows), low saturation, cool
color temperature in shadows, slight green cast #2C3E2A in mid-tones
(sickly), film grain 25% for texture and unease
Texture: Visible film grain creates visual noise (uncertainty), dust
particles floating in light beam (something is present, just not
visible), wallpaper texture shows age, wood floor reflects lamp dimly
Audio: House settling creaks (old wood), distant traffic muted,
refrigerator hum from elsewhere (60Hz), complete silence at 4-7s beat
(the absence is terrifying), lamp bulb slight buzz, no music (silence
is the horror)

Duration: 10 seconds
Aspect: 2.39:1 (widescreen increases isolation)
Model: sora-2-pro (subtle shadow movement critical)

AVOID: Jump scares (build slow tension), revealed entity (ambiguity is
terrifying), camera movement (stillness is oppressive), score/music
(silence is horror), fast pacing (dread requires patience), brightness
(darkness is where horror lives), clean modern home (dated setting adds
unease)
```

**What Makes It Effective**:
- Static low-angle camera creates vulnerability and anticipation
- Single light source creates deep shadows (unknown spaces)
- Long silent hold (4-7s) builds tension through absence
- Ambiguous shadow movement (never clearly defined entity)
- Lamp flicker and dimming suggests presence without revealing
- Dated environment (1980s) adds uncanny familiarity

**Sora 2 Features Leveraged**:
- High contrast lighting simulation (ratio 30:1)
- Subtle shadow animation (barely perceptible movement)
- Practical light behavior (flicker, dimming)
- Atmospheric particle rendering (dust in beam)
- Silence and ambient sound design (house creaks, hum)

**Expected Output**:
- Mostly dark frame with single pool of warm light
- Long shadows stretching down hallway
- Single lamp flicker event (brief darkness)
- Ambiguous shadow movement (questionable - did you see it?)
- No revealed entity (maintain ambiguity)
- Oppressive silence with house settling sounds
- Dated wallpaper visible in dim light

**Common Pitfalls to Avoid**:
- Don't reveal the threat (ambiguity is scarier)
- Don't add jump scares or loud stingers (cheap horror)
- Don't move camera (static observation is more tense)
- Don't brighten shadows (darkness is where horror exists)
- Don't add music (silence and ambient are more unsettling)
- Don't make shadow movement obvious (subtle = creepier)

---

### EXAMPLE 12: COMMERCIAL - Fashion Editorial

**Use Case**: Fashion film, brand campaign, editorial content

**Prompt**:
```
Shot on ARRI Alexa Mini LF, 4K open-gate 4:3 aspect, 48fps slowed to
24fps (2x slow-motion), Leica Summilux 75mm f/1.4 shot wide open.
Medium shot, fashion model (female, late 20s, 5'10", angular features,
slicked-back hair) walks toward camera down minimal concrete corridor.
High fashion editorial aesthetic.

Subject: Model wearing oversized charcoal gray wool coat, structured
shoulders, black turtleneck underneath, wide-leg black trousers,
minimal silver jewelry (thin hoop earrings), natural makeup, confident
powerful stride

Beat 1 (0-2s): Model distant in frame, small against minimalist
architecture, begins approach
Beat 2 (2-4s): Steady stride toward camera, coat flows with movement
physics (wool weight), shoulders create strong silhouette
Beat 3 (4-6s): Camera operator walks backward maintaining distance
(floating Steadicam move), model's expression shifts from neutral to
slight knowing smirk
Beat 4 (6-8s): Now medium shot, coat movement visible (fabric
billowing slightly with stride), direct eye contact with lens (modeling
confidence)

Camera: Steadicam backward dolly, smooth floating motion, maintains
constant distance from subject as she approaches, slight vertical
breathing room (human operator subtlety), 75mm portrait compression
Lens: Leica Summilux 75mm at f/1.4 (maximum aperture), razor-thin DOF
isolates subject, background concrete corridor blurs into abstract
vertical lines, creamy bokeh quality, slight focus breathing adds
organic quality
Lighting: Architectural daylight from ceiling skylights creates top
light with soft graduated shadows down body, cool 6500K color
temperature, no artificial fill (embrace shadow contrast), ratio 8:1,
minimalist beauty
Color: Monochromatic fashion palette - charcoal gray #36454F coat,
black #1A1A1A clothing, concrete #B0B0B0 environment, cool silver
#C0C0C0 jewelry, skin tones natural with cool cast, minimal color
distraction from form and silhouette
Grade: High-fashion editorial grading - lifted blacks to 15%,
desaturated -30%, cool temperature shift, increased midtone contrast
+20%, film print emulation with slight green cast in shadows, matte
finish (non-glossy aesthetic)
Texture: Wool coat texture visible (fabric weave), concrete raw finish
(imperfections, form marks), 10% fine grain for editorial aesthetic
(not clean digital), hair texture (product shine visible), skin natural
(no smoothing - editorial celebrates real texture)
Audio: Echoing footsteps in concrete space (reverb, authority), subtle
fabric rustle from coat movement, minimal ambient (warehouse quiet),
no music (let visuals and stride rhythm create pacing), breathing
barely audible

Duration: 8 seconds
Aspect: 4:3 (editorial portrait format)
Model: sora-2-pro (fabric physics and bokeh critical)

AVOID: Overly colorful (minimal palette is fashion editorial), smiling
(editorial is serious/powerful), busy background (minimalism is key),
flat lighting (shadows create dimension), smooth digital look (grain
adds editorial texture), hair movement in wind (controlled styling),
music (fashion confidence is silent)
```

**What Makes It Effective**:
- Steadicam backward dolly creates elegant fashion film movement
- Shallow DOF (f/1.4) isolates subject with creamy bokeh
- Monochromatic palette focuses attention on form and silhouette
- Coat fabric physics add natural movement
- Architectural minimal setting doesn't compete with fashion
- Direct eye contact creates confident powerful presence

**Sora 2 Features Leveraged**:
- Fabric physics simulation (wool coat weight and drape)
- Shallow depth of field with premium bokeh rendering
- Smooth camera motion (Steadicam float)
- Architectural lighting (top-down gradation)
- Material textures (wool weave, concrete, skin)

**Expected Output**:
- Elegant floating camera backward move
- Subject sharp with background completely blurred
- Charcoal wool coat flowing naturally with stride
- Minimal concrete corridor (vertical lines in bokeh)
- Cool architectural lighting from above
- Model expression transitions (neutral -> knowing smirk)
- Echoing footsteps in minimal space

**Common Pitfalls to Avoid**:
- Don't add bright colors (editorial is minimal monochrome)
- Don't make model smile broadly (editorial is serious/powerful)
- Don't use busy background (clean minimal architecture)
- Don't flatten lighting (shadows create editorial dimension)
- Don't smooth skin digitally (editorial celebrates real texture)
- Don't add music (confident stride rhythm is the soundtrack)

---

### EXAMPLE 13: TUTORIAL - Process Demonstration

**Use Case**: Educational content, how-to video, skill demonstration

**Prompt**:
```
Shot on Sony A7S III, 4K 24fps, Sony 90mm f/2.8 Macro. Overhead shot,
clean white desk surface. Hands (female, wearing simple white long-
sleeve shirt, no jewelry, short natural nails) demonstrate basic
origami crane folding process step-by-step.

Beat 1 (0-2s): Hands place square origami paper (15cm, bright red
#E53935) flat on desk, smooth it out
Beat 2 (2-4s): Fold paper diagonally corner-to-corner, crease firmly
with thumbnail, creating triangle
Beat 3 (4-6s): Unfold, rotate 90 degrees, fold opposite diagonal,
crease
Beat 4 (6-8s): Unfold showing X crease pattern, fold in half
horizontally, crease
Beat 5 (8-10s): Unfold, fold vertically, crease - showing grid pattern
Beat 6 (10-12s): Hands pause showing completed foundation creases,
ready for next steps

Camera: Locked overhead tripod, 90-degree top-down view, centered
composition keeps hands and paper in frame throughout
Lens: 90mm macro at f/5.6 (sufficient DOF for hands and paper both
sharp), captures fine detail of paper texture and crease lines
Lighting: Soft diffused overhead LED panel (5600K) creates even
shadowless illumination, white bounce cards left and right eliminate
harsh shadows, tutorial-friendly bright clean lighting
Color: Pure white desk #FFFFFF, bright red origami paper #E53935, skin
tones natural, white shirt sleeves #F5F5F5, high-key minimal palette
Grade: Bright tutorial aesthetic, lifted shadows, clean whites without
clipping, natural color, +10% clarity for instructional sharpness, no
stylistic grading (educational clarity priority)
Texture: Paper fiber texture visible, crease lines sharp and defined,
skin texture natural (no smoothing), fabric texture on shirt sleeves,
desk surface matte clean
Audio: Paper folding sounds (crisp fold, thumbnail crease scrape),
quiet workspace ambient, no music (sounds of process are instructional),
gentle breathing (focused work), satisfying ASMR-friendly crisp paper
sounds
Physics: Accurate paper folding physics (crease formation, paper
tension, finger pressure creates defined fold lines), paper doesn't
float or morph, hands move at natural instructional pace (not rushed,
pedagogical timing)

Duration: 12 seconds
Aspect: 1:1 (Instagram tutorial) or 9:16 (TikTok vertical)
Model: sora-2 (tutorial clarity more important than pro rendering)

AVOID: Dramatic lighting (needs flat even illumination), fast
movements (tutorial must be followable), shaky handheld (overhead must
be stable), cluttered desk (minimize distractions), unnatural hand
movements (realistic instructor pacing), background music (paper sounds
are ASMR content)
```

**What Makes It Effective**:
- Overhead perspective provides clear view of process
- Deliberate pedagogical pacing allows viewer to follow
- Clean minimal aesthetic eliminates distractions
- Even flat lighting ensures all details visible
- ASMR-friendly paper folding sounds enhance experience
- Hands-only framing keeps focus on technique

**Sora 2 Features Leveraged**:
- Accurate paper folding physics (crease formation)
- Hand animation with natural instructional pacing
- Material rendering (paper fiber texture, crease lines)
- Crisp instructional audio (paper sounds)
- Stable overhead composition

**Expected Output**:
- Clean overhead view of white desk
- Bright red origami paper clearly visible
- Hands enter, fold, crease with natural movements
- Visible crease lines forming on paper
- Even shadowless lighting (tutorial clarity)
- Crisp satisfying paper folding sounds
- Deliberate instructional pacing (not rushed)

**Common Pitfalls to Avoid**:
- Don't add dramatic shadows (tutorial needs flat even light)
- Don't rush movements (must be followable step-by-step)
- Don't add music (paper sounds are the content)
- Don't use artistic framing (straight overhead is functional)
- Don't make hands move unnaturally fast (realistic instructor pace)
- Don't clutter desk with props (minimal clean workspace)

---

### EXAMPLE 14: EXPERIMENTAL - Time Manipulation

**Use Case**: Artistic short, experimental film, music video

**Prompt**:
```
Shot on RED Komodo 6K, 24fps with mixed-speed footage composited. Split
composition: left half normal time, right half frozen moment. Urban
street scene, cyclist passes through frame.

Left half (normal 24fps):
- Busy city street, people walking, cars moving, cyclist approaching
- Natural motion continues throughout duration
- Real-time environmental activity

Right half (frozen time):
- Exact same scene but time completely frozen at 3-second mark
- Cyclist mid-motion (frozen lean, suspended balance)
- Pedestrian mid-stride (foot off ground)
- Car wheels not rotating
- Water droplet suspended in air from puddle splash
- Everything perfectly still while left continues

Beat 1 (0-3s): Both halves moving normally, identical scenes
Beat 2 (3.0s): Right half freezes instantly, left continues
Beat 3 (3-8s): Left half - cyclist exits frame, new people enter,
life continues. Right half - frozen tableau holds static
Beat 4 (8-9s): Camera slowly pushes in on both halves (dolly forward)
Beat 5 (9-10s): Right half unfreezes, motion resumes, both halves sync
again

Camera: Locked tripod for consistency, subtle dolly-in on beat 4
(8-inch push over 2 seconds), split-screen must maintain perfect
alignment
Lighting: Overcast urban daylight 6000K, natural street lighting,
ensure both halves match exactly in exposure and color
Color: Urban palette - gray asphalt #6B6B6B, brick buildings #A0522D,
cyclist blue jacket #1976D2, car red #D32F2F, natural skin tones,
desaturated urban aesthetic -15%
Grade: Match both halves precisely, slight cool cast, urban
contemporary look, ensure frozen half doesn't look like photograph
(maintains video characteristics just motionless)
Texture: Urban environmental detail - wet street reflections, brick
texture, fabric on cyclist, water droplet suspended (surface tension
visible), motion blur in left half on moving elements, sharp frozen
clarity in right half
Audio: Left half - continuous city ambient (traffic, footsteps,
voices), Right half - audio fades to silence at freeze then distant
muffled version (underwater effect), split audio mirrors visual split,
subtle electronic transition sound at freeze moment

Duration: 10 seconds
Aspect: 16:9 or 2.39:1 (cinematic)
Model: sora-2-pro (complex time manipulation critical)

AVOID: Blurred frozen half (must be sharp), mismatched halves
(lighting/color must be identical), smooth transition (freeze should be
instant), CGI artificial look (maintain photorealistic urban aesthetic),
busy composition (needs clear split visibility)
```

**What Makes It Effective**:
- Split-screen time manipulation creates philosophical visual
- Contrast between motion and stillness is striking
- Precise freeze moment captures mid-motion suspension (cyclist lean)
- Audio split mirrors visual split (full ambient vs muffled silence)
- Dolly-in draws attention to frozen details
- Re-sync at end provides satisfying resolution

**Sora 2 Features Leveraged**:
- Complex time manipulation (frozen vs real-time)
- Physics suspension (cyclist balance, water droplet, foot off ground)
- Precise split-screen composition alignment
- Audio-visual synchronization with split characteristics
- Dolly motion maintains split alignment

**Expected Output**:
- Clean vertical split down center frame
- Left half: continuous urban motion and activity
- Right half: perfectly frozen tableau at 3s mark
- Cyclist frozen mid-lean (balanced impossibly)
- Pedestrian frozen mid-stride (foot suspended)
- Water droplet frozen in air
- Dolly-in reveals frozen details
- Audio fades to muffled on right half
- Re-sync at 9s brings both halves back to motion

**Common Pitfalls to Avoid**:
- Don't blur frozen half (defeats the frozen moment clarity)
- Don't mismatch lighting between halves (must be identical scenes)
- Don't make freeze gradual (instant freeze is impactful)
- Don't lose split alignment during dolly-in (technical precision)
- Don't use artificial CGI aesthetic (maintain photorealistic urban)

---

### EXAMPLE 15: SOCIAL MEDIA - Vertical Format Hook

**Use Case**: TikTok, Instagram Reels, short-form vertical content

**Prompt**:
```
Shot on iPhone 15 Pro, vertical 9:16 format, 4K 60fps. Rapid energetic
cutting, young creator (female, early 20s, casual style) does direct-
to-camera talking head with dynamic hand gestures and expression
changes. High-energy social media aesthetic.

Subject: Creator, denim jacket over graphic tee, natural makeup, hair
in messy bun, standing in bedroom with LED strip lights visible on
wall behind (purple and blue #9B59B6 #3498DB)

Beat 1 (0-1s): Straight to camera, eyebrows raised, big opener
expression
Beat 2 (1-2s): Hand gesture emphasizing point (counts on fingers)
Beat 3 (2-3s): Head tilt with knowing smile (relatable moment)
Beat 4 (3-4s): Excited expression, both hands up (emphatic gesture)

Dialogue:
Creator (energetic, authentic): "Okay so here's the thing nobody tells
you about [topic]. First—" [counts on finger] "you're gonna mess it up.
Second—" [another finger] "that's totally fine. And third—" [both hands
up, big smile] "that's literally how you learn!"

Camera: Handheld phone POV, slight organic shake (holding phone at
arm's length), vertical composition with creator centered, slight
subtle zoom-in over duration (common TikTok technique, 10% scale push)
Lighting: Bedroom natural window light from side (soft daylight) mixed
with RGB LED strip lights behind creating purple/blue glow halo effect,
front-facing phone screen provides subtle fill light on face (common
selfie lighting)
Color: Vibrant social media aesthetic, purple LED #9B59B6, blue LED
#3498DB, denim blue #5DADE2, natural skin tones, colorful graphic tee,
saturated punchy colors +20%
Grade: Bright high-energy social media look, lifted blacks, punchy
contrast, slight warm filter (+300K), clarity boost for sharpness,
"Valencia" Instagram filter aesthetic
Texture: Slight motion blur from handheld phone, LED light bloom,
fabric texture on denim, hair texture (natural not perfect), minimal
grain (clean digital phone sensor)
Audio: Direct voice (phone mic quality, slight proximity effect), room
reverb from bedroom, authentic casual vocal delivery (not overly
produced), natural speech patterns with filler words (um, like), subtle
background ambient (bedroom quiet)

Duration: 4 seconds (TikTok/Reels optimal length)
Aspect: 9:16 (vertical)
Model: sora-2 (speed and lip-sync more important than pro quality)

AVOID: Perfect studio lighting (needs authentic bedroom creator
aesthetic), overly polished delivery (authenticity is key), locked
tripod (handheld phone shake is format convention), slow pacing
(social media is rapid), muted colors (needs vibrant energy), perfect
environment (lived-in bedroom is relatable)
```

**What Makes It Effective**:
- Direct eye contact with camera creates connection
- Rapid pacing matches short-form attention span
- Hand gestures and expressions add visual dynamism
- Authentic bedroom setting is relatable creator aesthetic
- RGB LED lights signal Gen Z creator production value
- Natural speech patterns (not scripted corporate)

**Sora 2 Features Leveraged**:
- Lip-sync for direct-to-camera dialogue
- Natural facial micro-expressions and gestures
- Handheld phone camera shake simulation
- RGB LED glow effects (purple/blue halo)
- Authentic vocal delivery with phone mic characteristics

**Expected Output**:
- Vertical 9:16 composition with creator centered
- Dynamic facial expressions changing rapidly
- Hand gestures synchronized with speech
- RGB LED lights glowing behind (purple/blue)
- Slight handheld phone shake
- Bright energetic social media aesthetic
- Perfect lip-sync for dialogue
- Authentic bedroom background (not studio)

**Common Pitfalls to Avoid**:
- Don't use perfect studio lighting (bedroom authenticity is key)
- Don't make delivery overly polished/scripted (casual authentic)
- Don't lock camera perfectly (handheld phone shake is expected)
- Don't slow down pacing (short-form must be energetic)
- Don't mute colors (vibrant social media aesthetic)
- Don't clean up environment too much (lived-in is relatable)

---

## PART 4: COMMON THEMES IN EFFECTIVE PROMPTS

### 1. Specificity Over Vagueness
- Weak: "cinematic look"
- Strong: "ARRI Alexa 65, 85mm f/1.4, 4:1 lighting ratio, Kodak 5219 emulation"

### 2. Beat-Mapped Timing
- Always break actions into 2-second intervals
- Use format: "Beat 1 (0-2s): [action]"
- Prevents vague "something happens" descriptions

### 3. Motivated Lighting
- Always specify light source (window, lamp, sun)
- Include color temperature in Kelvin (3200K, 5600K, etc.)
- State contrast ratio (2:1, 8:1, 20:1)

### 4. Negative Constraints
- Always include "AVOID" section
- Prevents common AI artifacts (morphing, extra limbs)
- Guards against unwanted style elements

### 5. Audio-Visual Sync
- Sora 2 generates audio - describe it explicitly
- Match audio to action beats (splash at 3s, click at 5s)
- Silence is a choice - state it explicitly

### 6. Physics Specifications
- Include material properties (weight, elasticity, friction)
- State forces explicitly (gravity, wind speed, momentum)
- Prevents floating/unrealistic motion

### 7. Color Precision
- Use hex codes for exact colors
- Specify saturation adjustments (+/- %)
- Reference color grades (bleach bypass, teal-orange, etc.)

### 8. Shorter Clips Strategy
- 4-second clips more reliable than 8-second
- Edit multiple 4s clips together in post
- Higher quality per individual clip

### 9. Dialogue Formatting
- Separate dialogue into labeled block
- Include delivery descriptors (whispered, urgent, calm)
- Keep lines brief (under 10 words for 4s clips)

### 10. Iteration Documentation
- Note what worked/didn't work after each generation
- Change ONE variable at a time (Remix strategy)
- Build personal prompt library from successes

---

## PART 5: TECHNICAL SPECIFICATIONS SUMMARY

### API Parameters (Must Set Explicitly)
```python
model: "sora-2" or "sora-2-pro"
size: "1280x720", "720x1280", "1024x1792", "1792x1024" (pro only)
seconds: 4, 8, or 12 (4 is most reliable)
input_reference: [optional image file for composition locking]
```

### Model Selection Guide
- **sora-2**: Speed, exploration, social media, prototypes
- **sora-2-pro**: High resolution, cinematic, marketing, precision

### Optimal Duration Strategy
- 4s clips: Highest reliability, best for iteration
- 8s clips: Moderate complexity, may drift from prompt
- 12s clips: Maximum duration, use sparingly, higher error rate
- Strategy: Generate multiple 4s clips, edit together

### Resolution Recommendations
- 1280x720: Standard landscape, fast generation
- 720x1280: Vertical social media (TikTok, Reels)
- 1024x1792 (pro): High-res vertical, premium quality
- 1792x1024 (pro): Cinematic landscape, maximum detail

---

## PART 6: FEATURE COMPARISON - OLD VS NEW DOCS

| Feature | Old Documentation | New 2025 Reality |
|---------|-------------------|------------------|
| Audio | "Audio directive notes" | Native audio generation with lip-sync |
| Character Consistency | Manual description repetition | Cameo feature (upload yourself) |
| Physics | "Realistic motion" | Explicit material properties, basketball rebounds accurately |
| Iteration | "Generate multiple versions" | Remix feature (lock successful elements) |
| Dialogue | Not specifically addressed | Must use separate dialogue blocks with tone descriptors |
| Duration | Not specified | 4s > 8s > 12s (shorter is more reliable) |
| Model Variants | Single "Sora" reference | Two variants: sora-2 (fast) vs sora-2-pro (quality) |
| Input | Text prompt only | Text + optional image reference for composition locking |

---

## SOURCES & REFERENCES

This research synthesizes information from the following 2025 sources:

- [Sora 2 Prompting Guide | OpenAI Cookbook](https://cookbook.openai.com/examples/sora/sora2_prompting_guide)
- [Sora 2 Prompt Authoring Best Practices (2025): Proven Workflow Guide | Skywork AI](https://skywork.ai/blog/sora-2-prompt-authoring-best-practices-2025/)
- [12 Essential Sora 2 Prompting Tips for Video Creators (2025) | Skywork AI](https://skywork.ai/blog/sora-2-prompting-tips-2025/)
- [Sora 2 is here | OpenAI](https://openai.com/index/sora-2/)
- [Ultimate Guide to OpenAI Sora 2: Everything You Need to Know in 2025 | God of Prompt](https://www.godofprompt.ai/blog/ultimate-guide-to-openai-sora-2)
- [Sora 2 Audio Guide for Cameo and Import | Skywork AI](https://skywork.ai/blog/sora-2-audio-guide-for-cameo-and-import/)
- [How to Use Sora 2's Audio Tools for Top-Tier AI Videos | Skywork AI](https://skywork.ai/blog/how-to-use-sora-2s-audio-tools-for-top-tier-ai-videos/)
- [Sora 2: The 2025 AI Video Playbook | Medium](https://medium.com/@itxcrusher/sora-2-deep-dive-capabilities-use-cases-risks-strategy-b718b95ee516)
- [How to Craft Top-Tier Cinematic Prompts for Sora 2 | Skywork AI](https://skywork.ai/blog/how-to-craft-top-tier-cinematic-prompts-for-sora-2/)
- [Best Sora 2 Prompts to Create Stunning AI Videos (Ultimate Guide 2025) | GLB GPT](https://www.glbgpt.com/hub/best-sora-2-prompts/)

---

*Research compiled: December 2025*
*Document Version: 1.0*
*Next Update: Quarterly (March 2026)*
