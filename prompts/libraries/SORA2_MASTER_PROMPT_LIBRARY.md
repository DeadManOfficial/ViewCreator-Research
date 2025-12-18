# SORA 2: MASTER PROMPT LIBRARY & TEMPLATE SYSTEM
## Production-Ready Prompt Architecture for Video Generation

**Version**: 1.0
**Classification**: PRODUCTION REFERENCE
**Purpose**: Comprehensive template system for rapid, professional Sora 2 prompt generation
**Scope**: 30+ reusable templates organized by style, content, and technical requirements

---

# TABLE OF CONTENTS

1. [Quick Start Guide](#quick-start-guide)
2. [Template Organization System](#template-organization-system)
3. [Core Template Library (30 Templates)](#core-template-library)
   - Cinematic Templates
   - Documentary Templates
   - Commercial Templates
   - Artistic/Experimental Templates
   - Product Templates
   - Character Templates
   - Environment Templates
4. [Modular Component System](#modular-component-system)
   - Camera Movement Library
   - Lighting Setup Library
   - Motion Descriptor Library
   - Composition Library
5. [Style Preset System](#style-preset-system)
   - Film Noir
   - Cyberpunk
   - Naturalistic
   - Vintage/Retro
   - Modern Commercial
   - Analog Horror
6. [Quality & Technical Modifiers](#quality-technical-modifiers)
7. [Usage Guidelines & Workflows](#usage-guidelines-workflows)
8. [Combination Examples](#combination-examples)

---

# QUICK START GUIDE

## How to Use This Library

**3-Step Process:**
1. **Select Base Template** → Choose from 30+ templates based on content type
2. **Add Modular Components** → Mix camera moves, lighting setups, motion descriptors
3. **Apply Style Preset** → Layer on aesthetic (film noir, cyberpunk, naturalistic, etc.)

**Example:**
```
BASE: Cinematic-03 (Hero Portrait)
+ CAMERA: Slow Dolly-In (6 inches over 10s)
+ LIGHTING: Rembrandt Setup (4:1 ratio)
+ STYLE: Film Noir Preset
= Final Production Prompt
```

## Template Naming Convention

```
[CATEGORY]-[NUMBER]: [DESCRIPTIVE NAME]
Duration: [X]s | Aspect: [16:9/9:16/1:1] | Complexity: [Low/Medium/High]

Examples:
CIN-01: Establishing Wide
DOC-05: Interview Subject
COM-03: Product Reveal
ART-07: Abstract Motion
```

---

# TEMPLATE ORGANIZATION SYSTEM

## By Video Style/Genre

| Category | Code | Template Count | Use Cases |
|----------|------|----------------|-----------|
| Cinematic | CIN | 5 | Narrative film, dramatic content |
| Documentary | DOC | 5 | Reality-based, interviews, journalism |
| Commercial | COM | 5 | Advertising, product launches, corporate |
| Artistic | ART | 5 | Experimental, abstract, creative |
| Product | PRD | 3 | E-commerce, unboxing, demos |
| Character | CHR | 3 | Portrait, performance, emotion |
| Environment | ENV | 4 | Locations, atmospheres, establishing |

## By Technical Requirements

| Requirement | Compatible Templates | Notes |
|-------------|---------------------|-------|
| Static Camera | All templates | Specify "locked tripod" |
| Camera Movement | CIN-01-05, DOC-01-03, COM-01-05 | Movement library included |
| Shallow DOF | CIN-02-04, PRD-01-03, CHR-01-03 | f/1.4-2.8 apertures |
| Deep Focus | DOC-01-05, ENV-01-04 | f/8.0-16 apertures |
| Low Light | CIN-05, ART-03, ENV-02 | Specific lighting guidance |
| High Speed | CIN-04, COM-05, ART-04 | 120-240fps source |

## By Content Type

| Content | Primary Templates | Secondary Options |
|---------|------------------|-------------------|
| Product Showcase | PRD-01, PRD-02, COM-01 | CIN-03, ART-05 |
| Character Portrait | CHR-01, CHR-02, DOC-02 | CIN-02, CIN-03 |
| Location/Space | ENV-01, ENV-02, CIN-01 | DOC-01, ART-01 |
| Abstract Concept | ART-01-05 | CIN-05, ENV-04 |
| Action Sequence | CIN-04, DOC-04 | COM-05 |
| Intimate Moment | CHR-03, DOC-03 | CIN-02 |

## By Mood/Tone

| Mood | Templates | Style Presets |
|------|-----------|---------------|
| Dramatic | CIN-02, CIN-05, CHR-01 | Film Noir, Cyberpunk |
| Upbeat | COM-01, COM-02, PRD-01 | Modern Commercial |
| Mysterious | ART-03, ENV-02, CIN-05 | Film Noir, Analog Horror |
| Naturalistic | DOC-01-05, ENV-01 | Naturalistic Preset |
| Energetic | CIN-04, COM-05, ART-04 | Modern Commercial |
| Contemplative | CHR-03, ENV-03, ART-01 | Naturalistic, Vintage |

---

# CORE TEMPLATE LIBRARY

## CINEMATIC TEMPLATES (CIN)

### CIN-01: Establishing Wide
**Duration**: 8-12s | **Aspect**: 16:9 | **Complexity**: Medium

```
TEMPLATE STRUCTURE:
Photorealistic wide establishing shot of [LOCATION]. Camera begins at
[STARTING POSITION], executes [MOVEMENT TYPE] over [DURATION]s revealing
[KEY ELEMENTS]. Environment shows [TIME OF DAY], [WEATHER/ATMOSPHERE].
Scale conveys [EMOTIONAL TONE - vastness/isolation/grandeur/etc.].

CAMERA SPECIFICATION:
- Focal length: 14-24mm (ultra-wide for environmental scale)
- Aperture: f/8.0-11 (deep focus, everything sharp)
- Movement: Slow reveal (crane up, dolly forward, or aerial ascent)
- Speed: 0.3-0.8 ft/sec maximum

LIGHTING APPROACH:
- Natural light preferred (golden hour, overcast, direct sun)
- Motivated sources for interiors
- Environmental atmosphere (fog, haze, dust) to add depth

BEAT STRUCTURE (10s example):
H0.00: Static opening on [foreground element]
B3.00: Camera begins [movement type]
B6.00: [Key location element] revealed
B8.00: Movement slows, settles
E10.00: Final composition holds

VARIABLES TO CUSTOMIZE:
[LOCATION] = Specific place description
[STARTING POSITION] = Camera's initial position
[MOVEMENT TYPE] = Dolly/crane/aerial/pan
[KEY ELEMENTS] = What the shot reveals
[TIME OF DAY] = Golden hour/midday/dusk/night
[WEATHER/ATMOSPHERE] = Clear/foggy/rainy/dusty
[EMOTIONAL TONE] = Mood descriptor
```

**Example Implementation:**
```
Photorealistic wide establishing shot of abandoned industrial district at
dusk. Camera begins at ground level looking through chain-link fence,
executes slow crane up over 10 seconds revealing vast complex of rusted
warehouses and smokestacks against orange-purple twilight sky. Environment
shows golden hour light, light fog rolling between buildings. Scale conveys
post-industrial decay and isolation.

Shot on ARRI Alexa 65, 4K DCI, 24fps. 18mm lens at f/11, deep focus. Slow
crane movement ascending 12 feet over 10 seconds at 0.4 ft/sec.

Lighting: Natural golden hour backlight, 4:1 contrast, warm orange key
(3200K) with cool blue shadows (7000K), atmospheric haze visible in light
beams.

Color palette: Rust orange #CC5500, industrial gray #595959, twilight purple
#4A148C, void black #0A0A0A. Grade: Desaturated -20%, warm highlights, cool
shadows, slight orange-teal split.

Duration: 10 seconds exactly.

AVOID: Modern development, clean architecture, bright midday sun, people in
frame, rapid movement.
```

---

### CIN-02: Dramatic Portrait
**Duration**: 6-10s | **Aspect**: 16:9 or 9:16 | **Complexity**: Medium

```
TEMPLATE STRUCTURE:
Photorealistic portrait of [SUBJECT DESCRIPTION] in [ENVIRONMENT]. Subject
[ACTION/EXPRESSION] while camera maintains [SHOT TYPE] at [ANGLE]. Lighting
creates [MOOD] through [LIGHTING SETUP]. Subject's [EMOTIONAL STATE]
conveyed through [SPECIFIC DETAILS - eyes, posture, gesture].

CAMERA SPECIFICATION:
- Focal length: 85-135mm (portrait compression, intimacy)
- Aperture: f/1.4-2.8 (shallow DOF, subject isolation)
- Movement: Minimal (imperceptible drift or locked)
- Shot type: MCU, CU, or XCU

LIGHTING APPROACH:
- Single key source (dramatic contrast)
- Minimal or no fill (let shadows fall)
- Rim/edge light for separation (optional)
- Contrast ratio: 8:1 to 20:1

BEAT STRUCTURE (8s example):
H0.00: Subject still, eyes [direction]
B2.00: [Subtle action - blink, breath, micro-expression]
B4.00: [Key moment - eye contact, emotion shift]
B6.00: [Resolution - look away, settle]
E8.00: Hold final expression

VARIABLES TO CUSTOMIZE:
[SUBJECT DESCRIPTION] = Age, features, wardrobe
[ENVIRONMENT] = Location context
[ACTION/EXPRESSION] = What subject does
[SHOT TYPE] = MCU/CU/XCU
[ANGLE] = Eye level/low/high
[MOOD] = Dramatic/contemplative/intense/vulnerable
[LIGHTING SETUP] = Specific setup name
[EMOTIONAL STATE] = Internal character state
[SPECIFIC DETAILS] = Micro-details that sell emotion
```

**Example Implementation:**
```
Photorealistic close-up portrait of weathered detective (50s, male, gray
stubble, dark coat) in dim police interrogation room. Subject stares directly
at camera with exhausted determination while camera maintains static close-up
at eye level. Lighting creates film noir mood through harsh single overhead
source. Subject's moral weariness conveyed through bloodshot eyes, slight
jaw clench, visible tension in neck muscles.

Shot on Sony VENICE 2, 4K, 24fps. 100mm lens at f/2.0, razor-thin depth of
field isolating face while background falls to bokeh. Locked tripod, zero
movement except subject's breathing.

Lighting: Single 2700K tungsten overhead light at 45° camera-left creating
Rembrandt-style triangle on far cheek, no fill light, 16:1 contrast ratio,
deep black shadows on camera-right side of face, rim light from off-screen
window creating subtle edge separation.

Color: Desaturated -35%, skin tones with slight green undertone, shadows
push toward cool blue, highlights warm amber. Reference: David Fincher's
"Zodiac" color science.

At 2.5s: Slow blink, eyes momentarily close
At 5.0s: Jaw tightens, micro-grimace
At 7.0s: Eyes break contact, look down-left, weight of choices visible

Duration: 8 seconds exactly.

AVOID: Soft beauty lighting, warm flattering tones, smile, clean-shaven,
bright environment, camera movement.
```

---

### CIN-03: Hero Object Reveal
**Duration**: 8-12s | **Aspect**: 16:9 | **Complexity**: Medium-High

```
TEMPLATE STRUCTURE:
Photorealistic reveal of [OBJECT] emerging from [STARTING STATE]. Camera
executes [MOVEMENT TYPE] as object [ACTION] over [DURATION]. Lighting
emphasizes [MATERIAL PROPERTIES] while creating [MOOD]. Object represents
[SYMBOLIC MEANING] through [VISUAL TREATMENT].

CAMERA SPECIFICATION:
- Focal length: 50-100mm (selective focus control)
- Aperture: f/2.0-4.0 (subject sharp, context soft)
- Movement: Coordinated with object action
- Shot type: Medium to close-up

LIGHTING APPROACH:
- Motivated key light (creates reason for reveal)
- Specular highlights on reflective surfaces
- Practical sources where possible
- Volumetric elements (dust, smoke, fog) for drama

BEAT STRUCTURE (10s example):
H0.00: Object concealed or partially visible
B2.00: Reveal begins (movement, light change)
B5.00: Object fully revealed, hero moment
B7.00: Detail emphasis (rotation, closer view)
E10.00: Hold on final composition

VARIABLES TO CUSTOMIZE:
[OBJECT] = Specific item description
[STARTING STATE] = Hidden/shadowed/emerging
[MOVEMENT TYPE] = Camera and object movement
[ACTION] = What the object does
[DURATION] = Timing of reveal
[MATERIAL PROPERTIES] = Metal/wood/glass/etc.
[MOOD] = Tone of revelation
[SYMBOLIC MEANING] = What object represents
[VISUAL TREATMENT] = How it's presented
```

**Example Implementation:**
```
Photorealistic reveal of ornate antique brass key emerging from darkness.
Camera executes slow dolly-in from medium shot to extreme close-up as key
rotates 360 degrees over 10 seconds, suspended in void. Lighting emphasizes
aged brass patina, intricate engravings, and weight through dramatic side
light. Object represents access to forbidden knowledge through gothic,
treasure-like treatment.

Shot on ARRI Alexa Mini LF, 4K, 24fps. 85mm macro lens at f/2.8, key in
perfect focus throughout rotation while background remains pure black void.
Camera dollies forward 8 inches coordinated with key's rotation.

Lighting: Single 3200K tungsten spot from 90° camera-left creates hard edge
light, reveals brass texture and engraving detail, produces dramatic
specular highlights on polished surfaces. 20:1 contrast, no fill, practical
absence creates mystery. Subtle volumetric haze in light beam makes light
itself visible.

Color: Aged brass gold #B8860B at 110% saturation, oxidized green patina
#2C5F2D at accent points, void black #000000 background. Grade: Warm key
light, slightly lifted midtones to reveal engraving detail.

Beat choreography:
0.0s: Key barely visible in darkness, front-facing
2.0s: Light intensifies, key begins 360° rotation
5.0s: Hero moment - key profile at 90°, engraving readable
7.0s: Key completes rotation, returns to front
10.0s: Hold on final frame, specular highlight on bow

Texture: Visible aged brass texture, oxidation spots, worn edges where
fingers have touched, dust in crevices, micro-scratches from use.

Duration: 10 seconds exactly.

AVOID: Clean modern key, bright even lighting, rapid movement, multiple
light sources, context/environment visible.
```

---

### CIN-04: Dynamic Action
**Duration**: 5-10s | **Aspect**: 16:9 | **Complexity**: High

```
TEMPLATE STRUCTURE:
Photorealistic [ACTION DESCRIPTION] shot at [SPEED SPECIFICATION]. Subject
[PERFORMS ACTION] while camera [CAMERA MOVEMENT] to [ENHANCE/FOLLOW/REVEAL].
Physics accurately portray [FORCES INVOLVED]. Environment responds with
[SECONDARY MOTION - debris, water, dust, etc.].

CAMERA SPECIFICATION:
- Focal length: 24-50mm (action coverage)
- Aperture: f/4.0-8.0 (enough DOF for fast motion)
- Movement: Dynamic (handheld, gimbal, tracking)
- Frame rate: 60-240fps source (slow-motion capability)

LIGHTING APPROACH:
- High-key or motivated sources
- Fast shutter speed implications
- Motion blur considerations
- Environmental light interaction

BEAT STRUCTURE (8s example):
H0.00: Anticipation (coiled energy)
B1.00: Action initiates
B3.00: Peak moment (apex of action)
B5.00: Follow-through (physics complete)
E8.00: Settle/aftermath

VARIABLES TO CUSTOMIZE:
[ACTION DESCRIPTION] = Specific action occurring
[SPEED SPECIFICATION] = Real-time/slow-mo/time-lapse
[PERFORMS ACTION] = Subject's specific movement
[CAMERA MOVEMENT] = How camera relates to action
[ENHANCE/FOLLOW/REVEAL] = Camera's role
[FORCES INVOLVED] = Gravity/momentum/impact
[SECONDARY MOTION] = Environmental responses
```

**Example Implementation:**
```
Photorealistic glass bottle shattering on concrete floor shot at 5x
slow-motion (120fps conformed to 24fps). Bottle drops from 6 feet, impacts
ground, explodes into hundreds of fragments while camera executes tight
circular orbit around impact point. Physics accurately portray gravity
acceleration (9.8 m/s²), glass fragmentation patterns, and momentum
distribution. Environment responds with concrete dust cloud, small debris
scatter, liquid splash radiating outward.

Shot on RED V-Raptor 8K, 120fps source, conformed to 24fps playback. 35mm
lens at f/5.6 for sufficient depth to keep fragments sharp. Camera on
automated ring gimbal, 180° arc around impact point over 8 seconds.

Lighting: Harsh overhead 5600K daylight source creating strong shadows, side
light from 90° camera-left rakes across flying glass fragments creating
prismatic highlights and rainbow refractions. High-speed photography
implications: frozen motion details, crisp edges on fragments, individual
droplets suspended.

Color: Clear glass with slight green tint, brown liquid (beer/whiskey),
gray concrete, rainbow refractions through airborne fragments. Grade:
Slightly desaturated base, punch highlights on glass +30%, maintain
refraction color saturation.

Physics specification:
- Drop height: 6 feet
- Impact velocity: ~19.6 ft/sec
- Fragmentation: 200-300 pieces, size distribution random but weighted
  toward smaller
- Liquid: Splashes outward in radial pattern, droplets follow ballistic arcs
- Sound: Initial impact (bass thud), glass breakage (high-frequency
  shattering), fragments settling (tinkle cascade)

Beat choreography (at 24fps playback):
0.0s: Bottle enters top of frame, falling
1.5s: Bottle impacts ground, first contact deformation
2.0s: Fragmentation begins, initial burst
3.0s: Peak chaos - fragments at maximum dispersal
5.0s: Fragments begin landing, secondary impacts
7.0s: Majority settled, final pieces falling
8.0s: Stillness, aftermath, dust settling

Duration: 8 seconds exactly (playback) | Source: 40 seconds at 120fps

AVOID: Unrealistic fragmentation (too few pieces), floating weightless
glass, symmetrical explosion, lack of secondary motion, clean break
patterns.
```

---

### CIN-05: Atmospheric Mood
**Duration**: 10-15s | **Aspect**: 16:9 | **Complexity**: Medium

```
TEMPLATE STRUCTURE:
Photorealistic [ENVIRONMENT TYPE] bathed in [LIGHTING CONDITION]. Atmosphere
thick with [PARTICLE ELEMENT] illuminated by [LIGHT SOURCE]. Camera
[MOVEMENT TYPE] through space emphasizing [MOOD] and [THEMATIC ELEMENT].
Negative space and [COMPOSITIONAL ELEMENT] create [EMOTIONAL RESPONSE].

CAMERA SPECIFICATION:
- Focal length: Variable (typically 24-50mm)
- Aperture: f/2.8-5.6 (balance atmosphere and sharpness)
- Movement: Slow, deliberate, contemplative
- Emphasis on environmental atmosphere over subject

LIGHTING APPROACH:
- Volumetric lighting (visible light beams)
- Atmospheric particles (dust, fog, smoke, rain)
- Single source or motivated lighting
- High contrast or low-key setups

BEAT STRUCTURE (12s example):
H0.00: Establish atmosphere, static
B3.00: Light shifts or camera movement begins
B6.00: Peak atmospheric moment
B9.00: Secondary element revealed (optional)
E12.00: Hold on final composition

VARIABLES TO CUSTOMIZE:
[ENVIRONMENT TYPE] = Location description
[LIGHTING CONDITION] = Quality and color of light
[PARTICLE ELEMENT] = Fog/smoke/dust/rain/snow
[LIGHT SOURCE] = What creates the light
[MOVEMENT TYPE] = Camera motion type
[MOOD] = Emotional atmosphere
[THEMATIC ELEMENT] = Conceptual emphasis
[COMPOSITIONAL ELEMENT] = Visual structure
[EMOTIONAL RESPONSE] = Intended viewer feeling
```

**Example Implementation:**
```
Photorealistic abandoned church interior bathed in blue-hour twilight.
Atmosphere thick with suspended dust particles illuminated by single shaft
of light penetrating broken stained-glass window. Camera slow dolly-forward
through central aisle emphasizing sacred decay and passage of time. Negative
space and vertical gothic architecture create contemplative melancholy.

Shot on Sony VENICE 2, 4K, 24fps. 35mm lens at f/4.0, deep enough focus for
environmental context while maintaining atmospheric softness. Dolly forward
8 feet over 12 seconds at 0.66 ft/sec, Steadicam smooth, central aisle
perspective.

Lighting: Single source - broken stained-glass window at far end of church
creating dramatic shaft of blue twilight (7500K) filled with visible dust
particles (volumetric god ray). Indirect fill from ambient sky through other
damaged windows at -3 stops. 12:1 contrast ratio. Dust particles dance in
light beam, creating living quality to abandoned space.

Color: Cold blue twilight #4A6FA5, stone gray #A9A9A9, aged wood brown
#654321, stained glass color accents (muted), deep shadow black #1A1A1A.
Grade: Desaturated -25%, cold blue dominant, slightly lifted shadows to show
environmental detail, highlights kept cool.

Environment details: Wooden pews with peeling varnish, scattered fallen
plaster, abandoned hymn books water-damaged and scattered, cobwebs visible
in upper corners catching light, Gothic arches leading eye toward light
source, footprints in dust on floor suggesting recent but infrequent
visitors.

Atmosphere: Dust particles 50-100 per cubic foot visible in light shaft,
moving slowly suggesting minimal air current, some particles falling
(gravity), occasional larger piece of plaster dust catching light.

Beat choreography:
0.0s: Wide view from church entrance, light shaft visible at far end
3.0s: Dolly begins forward, dust particles become more prominent
6.0s: Middle of aisle, Gothic arches frame composition, dust dance peaks
9.0s: Light shaft dominates frame, individual dust particles trackable
12.0s: Hold on composition, 2/3rds up aisle, light source still ahead

Mood: Sacred abandonment, beauty in decay, time passing but memory
remaining, contemplative melancholy, quiet reverence.

Duration: 12 seconds exactly.

AVOID: Bright daylight, clean modern church, people present, rapid camera
movement, multiple light sources, warm color temperature.
```

---

## DOCUMENTARY TEMPLATES (DOC)

### DOC-01: Observational Wide
**Duration**: 8-15s | **Aspect**: 16:9 | **Complexity**: Low

```
TEMPLATE STRUCTURE:
Photorealistic observational shot of [LOCATION/ACTIVITY] in natural state.
Camera positioned [POSITION DESCRIPTION] maintains [STATIC/MINIMAL MOVEMENT]
stance allowing [SUBJECT/ACTION] to unfold without intervention. Available
light from [SOURCE] creates authentic [TIME/ATMOSPHERE]. Documentary
realism prioritized over aesthetic control.

CAMERA SPECIFICATION:
- Focal length: 24-50mm (natural perspective)
- Aperture: f/4.0-8.0 (practical depth)
- Movement: Minimal (breathing room only) or reactive handheld
- Shot type: Wide to medium-wide

LIGHTING APPROACH:
- 100% available light (no artificial sources)
- Natural shadows and highlights
- Accept imperfections (flares, hot spots, underexposure)
- Motivated by environment only

BEAT STRUCTURE (Variable - Action Dependent):
Natural timing dictated by subject
No forced beats
Authentic duration
Patience for real moments

VARIABLES TO CUSTOMIZE:
[LOCATION/ACTIVITY] = What's being observed
[POSITION DESCRIPTION] = Camera placement
[STATIC/MINIMAL MOVEMENT] = Movement approach
[SUBJECT/ACTION] = What unfolds
[SOURCE] = Natural light source
[TIME/ATMOSPHERE] = When this occurs
```

**Example Implementation:**
```
Photorealistic observational shot of small family-owned grocery store in
early morning. Camera positioned outside through storefront window maintains
static stance allowing shop owner's opening routine to unfold without
intervention. Available light from rising sun and interior fluorescents
creates authentic pre-dawn working atmosphere. Documentary realism
prioritized over aesthetic control.

Shot on Blackmagic Pocket 4K (documentary-friendly), 1080p, 24fps. 35mm
lens at f/5.6, practical depth for window-through-window focus. Locked
tripod on sidewalk, slight low angle looking into store, no camera movement.

Lighting: Natural dawn light (5500K) entering from frame-right, interior
fluorescent lights (4100K) creating color temperature mix, slight green tint
from fluorescents, window glass reflection shows street lamps and early
morning sky. No modification to available light. Contrast ratio naturally
around 6:1.

Color: Natural, ungraded base, slight color temperature conflict between
dawn and fluorescent creating realistic atmosphere, preserve all natural
color casts, minimal post-processing -10% saturation maximum.

Environmental authenticity: Window has slight glare, street reflection
visible in glass, shop owner moves naturally (unaware of camera), genuine
work rhythm, real stocking movements, occasional glance toward street but
not at camera, fluorescent lights flicker slightly on startup.

Action beats (natural timing):
0.0s: Shop dark, owner approaching door from inside
2.0s: Interior lights switch on, fluorescent delay flicker
4.0s: Owner unlocks door, props it open
6.0s: Returns inside, begins moving products
8.0s: Natural rhythm of work, no performance
12.0s: Continue observing, authenticity over drama

Duration: 12 seconds (or continue until natural conclusion).

AVOID: Dramatic lighting, posed action, camera acknowledgment, artificial
fill light, color grading that beautifies, any direction of subject.
```

---

### DOC-02: Interview Subject
**Duration**: 8-12s | **Aspect**: 16:9 or 9:16 | **Complexity**: Low-Medium

```
TEMPLATE STRUCTURE:
Photorealistic interview setup of [SUBJECT DESCRIPTION] in [ENVIRONMENT].
Subject positioned [COMPOSITION RULE - rule of thirds/centered] at
[SHOT TYPE] responding to off-camera [INTERVIEWER/PROMPT]. Natural
[EXPRESSION/GESTURE] conveys [EMOTIONAL TONE]. Background [IN FOCUS/SOFT]
provides [CONTEXT/ISOLATION].

CAMERA SPECIFICATION:
- Focal length: 50-85mm (flattering portrait range)
- Aperture: f/2.8-4.0 (subject sharp, background context)
- Movement: Locked (interviews are static)
- Shot type: MCU or MS standard

LIGHTING APPROACH:
- Three-point light (key, fill, rim) OR
- Natural window light + reflector OR
- Available light documentary style
- Flattering but not overly beautified
- 3:1 to 6:1 contrast ratio

BEAT STRUCTURE (10s example):
H0.00: Subject settles, prepared to speak
B2.00: Question asked (off-camera), subject processes
B4.00: Subject begins response, eye line maintained
B7.00: Key point delivered, subtle gesture
E10.00: Continue speaking or listening pause

VARIABLES TO CUSTOMIZE:
[SUBJECT DESCRIPTION] = Who's being interviewed
[ENVIRONMENT] = Location context
[COMPOSITION RULE] = Framing approach
[SHOT TYPE] = MCU/MS/CU
[INTERVIEWER/PROMPT] = What they're responding to
[EXPRESSION/GESTURE] = Non-verbal communication
[EMOTIONAL TONE] = Mood of testimony
[IN FOCUS/SOFT] = Background treatment
[CONTEXT/ISOLATION] = What background conveys
```

**Example Implementation:**
```
Photorealistic interview setup of climate scientist (40s, female, casual
professional attire) in university office. Subject positioned rule-of-thirds
camera-left at medium close-up responding to off-camera interviewer about
research findings. Natural earnest expression conveys urgent concern without
alarmism. Background softly out of focus provides academic context - visible
books, charts, research materials.

Shot on Canon EOS R5 (hybrid interview standard), 4K, 24fps. 85mm lens at
f/2.8, subject eyes tack-sharp, background bookshelves readable but soft.
Locked tripod, eye-level perspective, slight look-room camera-right where
interviewer sits.

Lighting: Natural window light from camera-right as key (soft north-facing
window, 5500K), white bounce card fill camera-left at -2 stops reducing
shadows without flattening, practical desk lamp provides subtle rim/edge
separation back-right. 4:1 contrast ratio - professional but naturalistic.

Color: Neutral color correction, accurate skin tones, slight warmth +300K
to counter clinical office feel, background desaturated -15% to emphasize
subject, maintain scientific authenticity.

Subject performance: Maintains eye contact with off-camera interviewer
(camera-right), occasional glance down when thinking, subtle hand gestures
when emphasizing points, slight forward lean showing engagement, glasses
catch light from window creating catchlight in eyes.

Background context: University office bookshelves with scientific texts
visible (soft focus), framed degrees on wall (blurred), global temperature
charts partially visible, personal family photo on desk edge (humanizing),
laptop open showing data (work-in-progress authenticity).

Beat choreography:
0.0s: Subject listening, slight nod
2.0s: Processes question, moment of thought
3.0s: Begins speaking, eye contact with interviewer
5.0s: Hand gesture emphasizes point
7.0s: Leans slightly forward, passionate moment
10.0s: Continues explanation, maintained engagement

Duration: 10 seconds (or extend for full answer).

AVOID: Dramatic low-key lighting, beauty-dish perfection, looking directly
at camera, performed answers, overly staged background, symmetrical
centering unless intentional, distracting background movement.
```

---

### DOC-03: Detail Close-Up (Evidence)
**Duration**: 5-8s | **Aspect**: 16:9 | **Complexity**: Low

```
TEMPLATE STRUCTURE:
Photorealistic macro close-up of [SPECIFIC OBJECT] showing [DETAIL/EVIDENCE].
Camera [STATIC/MINIMAL MOVEMENT] focuses on [TEXTURE/FEATURE] that
illustrates [DOCUMENTARY POINT]. Natural light reveals [MATERIAL QUALITY]
without beautification. Object exists in [CONTEXT] suggesting [NARRATIVE].

CAMERA SPECIFICATION:
- Focal length: 85-100mm macro (detail capability)
- Aperture: f/2.8-5.6 (selective focus on key detail)
- Movement: Static or slow push-in
- Shot type: XCU macro

LIGHTING APPROACH:
- Available light preferred
- Minimal modification
- Shows texture and wear authentically
- Reveals rather than glamorizes

BEAT STRUCTURE (6s example):
H0.00: Object in frame, detail visible
B2.00: Optional: hand enters to indicate detail
B4.00: Hold on key feature
E6.00: Continue hold or exit

VARIABLES TO CUSTOMIZE:
[SPECIFIC OBJECT] = Exact item being documented
[DETAIL/EVIDENCE] = What's being shown
[STATIC/MINIMAL MOVEMENT] = Camera approach
[TEXTURE/FEATURE] = Physical characteristics
[DOCUMENTARY POINT] = What this proves/shows
[MATERIAL QUALITY] = Surface, age, condition
[CONTEXT] = Where/how object exists
[NARRATIVE] = Story being told
```

**Example Implementation:**
```
Photorealistic macro close-up of weathered carpenter's hand showing evidence
of decades of labor. Camera static focuses on knuckle scars, calloused
fingertips, and sawdust embedded in skin creases that illustrate manual
trade's physical toll. Natural afternoon window light reveals skin texture
and age spots without beautification. Hand rests on worn workbench surface
suggesting active workspace narrative.

Shot on Sony A7S III (documentary detail), 4K, 24fps. 90mm macro lens at
f/4.0, knuckles in perfect focus, fingertips soft background blur, workbench
surface visible but secondary. Locked tripod, slight overhead angle looking
down at hand.

Lighting: Single window light from camera-left (soft diffused daylight,
5200K), creates gentle modeling across knuckles showing texture, no fill
(shadow side falls naturally), workshop ambient provides subtle environment
hint. Natural 5:1 contrast.

Color: Accurate skin tone (weathered, slightly ruddy from outdoor work),
sawdust natural tan, workbench wood grain brown, minimal color grading
-5% saturation to avoid beautification, maintain documentary authenticity.

Detail emphasis: Visible knuckle scars (white healed tissue), calloused
ridge on index finger (decades of tool use), sawdust particles embedded in
skin creases around nails, age spots on back of hand, slight tremor showing
age (hand not perfectly still), wedding ring worn thin from work.

Context elements: Workbench surface shows years of cuts and wear, wood
shavings scattered nearby, distant workshop tools soft in background,
natural setting not staged for camera.

Motion: Hand completely still except for natural micro-movements (slight
tremor, breathing), no performance, real person's actual hand.

Duration: 6 seconds exactly.

AVOID: Perfect manicured hands, dramatic lighting, beauty-style softness,
sterile background, posed positioning, removal of "imperfections" that tell
story.
```

---

### DOC-04: Vérité Action
**Duration**: 10-20s | **Aspect**: 16:9 | **Complexity**: Medium-High

```
TEMPLATE STRUCTURE:
Photorealistic documentary capture of [REAL ACTION/EVENT] as it unfolds.
Camera [HANDHELD/REACTIVE] follows [SUBJECT] through [ACTIVITY] with
authentic [MOVEMENT STYLE]. Operator responds to action rather than
predicting, creating [ORGANIC MISTAKES - slight framing errors, focus pulls,
etc.]. Available light and [ENVIRONMENTAL AUDIO] preserved throughout.

CAMERA SPECIFICATION:
- Focal length: 24-50mm (versatile run-and-gun)
- Aperture: f/4.0-5.6 (practical for varying distances)
- Movement: Handheld responsive, organic imperfection
- Shot type: Variable (follows action)

LIGHTING APPROACH:
- 100% available light
- Accept all conditions (flares, shadows, mixed temp)
- No modification possible
- Realism over beauty

BEAT STRUCTURE (Variable - Reactive):
Action dictates timing
Camera responds, doesn't lead
Accept imperfect moments
Authenticity is perfection

VARIABLES TO CUSTOMIZE:
[REAL ACTION/EVENT] = What's happening
[HANDHELD/REACTIVE] = Camera movement style
[SUBJECT] = Who's being followed
[ACTIVITY] = What they're doing
[MOVEMENT STYLE] = Camera operator approach
[ORGANIC MISTAKES] = Acceptable imperfections
[ENVIRONMENTAL AUDIO] = Natural sound captured
```

**Example Implementation:**
```
Photorealistic documentary capture of street food vendor preparing lunch
rush orders as it unfolds. Camera handheld follows vendor through rapid
cooking workflow with authentic shoulder-mounted style. Operator responds
to action rather than predicting, creating organic framing adjustments,
momentary soft focus during rapid pans, slight camera bump when vendor
moves unexpectedly. Available light from overhead sun and cooking flames
preserved throughout with mixed color temperatures.

Shot on Panasonic S1H (documentary workhorse), 4K, 24fps. 35mm lens at
f/5.6, continuous autofocus to handle varying subject distance, handheld
shoulder rig with basic stabilization (NOT gimbal - retain organic movement).

Lighting: Harsh overhead midday sun (5600K) creating hard shadows, cooking
flames add warm orange (2800K) light from below creating mixed temperature,
reflected light from metal surfaces, steam occasionally blooming highlights.
Available light only, no modification. Extreme contrast natural outdoor
midday.

Camera movement: Shoulder-mounted handheld with authentic operator
movement - weight shifts visible, breathing apparent, slight frame
corrections as action moves, occasional soft focus during rapid reframes
(authentic mistake kept), small bump when vendor moves unexpectedly toward
camera, pan slightly behind action creating chase feel.

Color: Mixed color temperature preserved (daylight + flame), natural color
with no beauty grading, accept slight overexposure in steam, preserve all
authentic imperfections, -5% saturation documentary standard.

Action beats (reactive, variable timing):
0.0s: Vendor lights wok, flame bursts up
1.5s: Camera reacts to flame, slight pull back
3.0s: Vendor reaches for ingredients, camera follows hand
5.0s: Rapid wok tossing, camera tries to follow action
7.0s: Slight soft focus during fast pan to new element
9.0s: Vendor plates food quickly
11.0s: Camera adjusts framing as vendor moves
13.0s: Customer hand enters frame receiving food
15.0s: Vendor already moving to next order, camera follows

Environmental audio layer: Wok sizzle, flame whoosh, metal spatula on wok,
vendor calling orders in local language, customer chatter background, street
traffic, humid ambient, all natural levels not sweetened.

Duration: 15 seconds (variable based on action).

AVOID: Smooth gimbal movement, perfect framing, no focus errors, beauty
lighting, color grading perfection, staged action, subject camera
awareness, silence.
```

---

### DOC-05: Landscape/Environment (Documentary)
**Duration**: 8-15s | **Aspect**: 16:9 | **Complexity**: Medium

```
TEMPLATE STRUCTURE:
Photorealistic wide landscape of [SPECIFIC LOCATION] showing [ENVIRONMENTAL
CONDITION/ISSUE]. Natural light at [TIME OF DAY] reveals [DOCUMENTARY
SUBJECT - pollution/damage/beauty/change]. Camera [MOVEMENT TYPE] allowing
viewer to [OBSERVE/UNDERSTAND/WITNESS]. Scale and [COMPOSITIONAL ELEMENT]
communicate [MESSAGE/TRUTH].

CAMERA SPECIFICATION:
- Focal length: 14-35mm (environmental scope)
- Aperture: f/8.0-16 (maximum depth)
- Movement: Slow methodical or static observation
- Shot type: Extreme wide to wide

LIGHTING APPROACH:
- Natural light only
- Time of day selected for clarity
- Weather conditions as found
- No enhancement or modification

BEAT STRUCTURE (12s example):
H0.00: Establish environment, wide view
B4.00: Camera movement begins (if used)
B7.00: Key element revealed/emphasized
B10.00: Movement completes or new element
E12.00: Hold final composition

VARIABLES TO CUSTOMIZE:
[SPECIFIC LOCATION] = Exact place being documented
[ENVIRONMENTAL CONDITION/ISSUE] = What's being shown
[TIME OF DAY] = When shot occurs
[DOCUMENTARY SUBJECT] = The topic being covered
[MOVEMENT TYPE] = Camera approach
[OBSERVE/UNDERSTAND/WITNESS] = Viewer's role
[COMPOSITIONAL ELEMENT] = Visual structure
[MESSAGE/TRUTH] = Documentary point
```

**Example Implementation:**
```
Photorealistic wide landscape of receding glacier in Arctic region showing
dramatic ice loss evidence. Natural light at golden hour reveals exposed
rock where ice existed decades ago (visible striations). Camera slow aerial
drone ascent over 12 seconds allowing viewer to witness scale of retreat.
Composition contrasts remaining white ice against dark exposed mountainside
communicating climate change visual evidence.

Shot on DJI Mavic 3 Cine (documentary drone standard), 4K, 24fps. 24mm
equivalent lens at f/8.0, everything in focus from foreground scree to
distant ice. Slow autonomous ascent 40 feet over 12 seconds, perfectly
smooth drone movement.

Lighting: Golden hour light (30 minutes before sunset) from camera-left
creating long shadows that emphasize exposed rock striations showing former
ice levels, warm 3800K light on rock, cooler light on remaining ice creating
natural separation, clear weather for maximum visibility of documentary
evidence.

Color: Natural accurate colors, slight warmth from golden hour, white-blue
ice, dark gray-brown exposed rock, some vegetation (green-brown) showing in
recently exposed areas (evidence of retreat timeline), minimal grading to
preserve documentary authenticity.

Documentary elements: Visible rock striations showing former ice levels
(smooth polished rock where ice was), rough unweathered rock exposed
recently, small meltwater streams running down exposed rock, terminal
moraine visible showing maximum extent, scientific measurement markers
visible (small orange posts - scale reference).

Scale communication: Include recognizable element for size reference
(research station, vehicle, or person at appropriate distance), vast
landscape emphasizes magnitude of change, vertical ascent reveals scope.

Environmental accuracy: No enhancement, no dramatization, factual
presentation, evidence speaks for itself, accurate representation of
scientific reality.

Beat choreography:
0.0s: Low angle, foreground shows exposed rock and striations
3.0s: Ascent begins, scale starts becoming apparent
6.0s: Mid-ascent, relationship between exposed rock and remaining ice clear
9.0s: Higher view, terminal moraine becomes visible
12.0s: Top of ascent, full scope visible, former ice extent vs current

Duration: 12 seconds exactly.

AVOID: Dramatic color grading, time-lapse unless specifically documenting
change, beautification that obscures evidence, angles that minimize scale,
missing scale reference, cherry-picking angles that don't represent
full reality.
```

---

## COMMERCIAL TEMPLATES (COM)

### COM-01: Premium Product Hero
**Duration**: 6-10s | **Aspect**: 16:9 or 1:1 | **Complexity**: High

```
TEMPLATE STRUCTURE:
Photorealistic product showcase of [PRODUCT NAME/TYPE] emphasizing [KEY
SELLING POINT]. Product [ROTATION/REVEAL/INTERACTION] in [ENVIRONMENT TYPE -
void/minimal/contextual]. Lighting creates [PREMIUM QUALITY INDICATORS -
reflections/highlights/depth]. Camera [MOVEMENT] coordinates with product
action to emphasize [CRAFTSMANSHIP/INNOVATION/LUXURY].

CAMERA SPECIFICATION:
- Focal length: 50-100mm (product isolation)
- Aperture: f/2.8-5.6 (product sharp, background controlled)
- Movement: Smooth coordinated (orbital, dolly, slider)
- Shot type: Medium to close-up product

LIGHTING APPROACH:
- Studio lighting perfection
- Multiple sources for depth and highlight
- Specular control for materials
- Background gradients for premium feel

BEAT STRUCTURE (8s example):
H0.00: Product reveal or partial view
B2.00: Movement begins (rotation/reveal)
B4.00: Hero moment (key feature visible)
B6.00: Secondary feature/detail
E8.00: Final composition, brand moment

VARIABLES TO CUSTOMIZE:
[PRODUCT NAME/TYPE] = Specific item
[KEY SELLING POINT] = Main feature to emphasize
[ROTATION/REVEAL/INTERACTION] = Product action
[ENVIRONMENT TYPE] = Background treatment
[PREMIUM QUALITY INDICATORS] = Luxury cues
[MOVEMENT] = Camera choreography
[CRAFTSMANSHIP/INNOVATION/LUXURY] = Brand value
```

**Example Implementation:**
```
Photorealistic product showcase of premium wireless headphones emphasizing
machined aluminum construction. Product executes smooth 360-degree rotation
over 8 seconds in white void environment. Lighting creates premium quality
indicators through precise specular highlights on metal surfaces, soft
diffused fill preventing harsh shadows, graduated background creating depth.
Camera slow orbital movement coordinates with product rotation to emphasize
precision engineering and luxury materials.

Shot on RED V-Raptor 8K (commercial product standard), 8K resolution for
maximum detail, 24fps. 85mm lens at f/4.0, product perfectly sharp
throughout, background falls to soft graduated white.

Lighting: Three-point studio setup optimized for metal - (1) Key: Large
soft box camera-left 45° creating main illumination and soft specular
stripe on aluminum, (2) Fill: Soft panel camera-right at -2 stops
preventing dark side, (3) Rim: Strip box top-back creating edge separation
and highlight on headband. Additional: Graduated white background lit
separately creating depth through falloff. All 5600K daylight balanced LEDs.

Camera movement: Automated turntable rotates product clockwise 360° over 8s,
camera counter-orbits on motorized arm maintaining 3/4 front view
throughout, creates relative motion making product appear to present itself.

Color: Brushed aluminum #C0C0C0 at accurate saturation, anodized accent
colors (product-specific), pristine white background #FFFFFF, logo colors
at brand-accurate saturation. Grade: Slight contrast lift, specular
highlights preserved (not clipped), commercial polish.

Product presentation: Clean product (no fingerprints), perfect alignment,
suspended on invisible monofilament or frosted acrylic for floating
appearance, brand logo always visible, premium packaging visible at end
frame (optional).

Timing choreography:
0.0s: Product 3/4 front view, key features visible
2.0s: Rotation begins, specular highlights travel across surface
4.0s: Profile view, headband curvature emphasized
6.0s: 3/4 opposite angle, opposite ear cup now featured
8.0s: Return to opening angle, final brand moment

Post-production: Subtle beauty pass (remove any imperfections), potential
motion graphics overlay (text/specs), color matching to brand guidelines.

Duration: 8 seconds exactly (common commercial timing).

AVOID: Fingerprints, dust, uneven lighting, harsh shadows, background
distractions, rapid movement, unstable rotation, color inaccuracy,
clipped highlights on metal.
```

---

### COM-02: Lifestyle Context
**Duration**: 8-12s | **Aspect**: 16:9 or 9:16 | **Complexity**: Medium

```
TEMPLATE STRUCTURE:
Photorealistic lifestyle shot of [PRODUCT] in [AUTHENTIC USE CONTEXT].
[USER TYPE] [INTERACTS WITH PRODUCT] while [ENGAGED IN ACTIVITY].
Environment shows [ASPIRATIONAL SETTING] with [LIGHTING MOOD]. Camera
[MOVEMENT] maintains [PRODUCT VISIBILITY] while conveying [LIFESTYLE MESSAGE].

CAMERA SPECIFICATION:
- Focal length: 35-50mm (natural perspective)
- Aperture: f/2.8-4.0 (subject sharp, context visible)
- Movement: Natural human-scale movement
- Shot type: Medium to wide

LIGHTING APPROACH:
- Natural or natural-appearing light
- Golden hour or soft window light preferred
- Aspirational but believable
- Lifestyle not studio perfection

BEAT STRUCTURE (10s example):
H0.00: Environment establishes lifestyle
B2.00: User enters or product introduced
B5.00: Natural interaction with product
B7.00: Product benefit visible in use
E10.00: Lifestyle moment, product integrated

VARIABLES TO CUSTOMIZE:
[PRODUCT] = Item being marketed
[AUTHENTIC USE CONTEXT] = Real-world setting
[USER TYPE] = Target demographic
[INTERACTS WITH PRODUCT] = Natural usage
[ENGAGED IN ACTIVITY] = Lifestyle activity
[ASPIRATIONAL SETTING] = Desired environment
[LIGHTING MOOD] = Time/atmosphere
[MOVEMENT] = Camera approach
[PRODUCT VISIBILITY] = Ensure product visible
[LIFESTYLE MESSAGE] = Brand positioning
```

**Example Implementation:**
```
Photorealistic lifestyle shot of smartwatch in morning fitness routine.
Athletic woman (30s, activewear) checks heart rate on watch while jogging
through tree-lined park at sunrise. Environment shows aspirational urban
wellness setting with golden hour lighting mood. Camera Steadicam tracks
alongside jogger maintaining watch visibility while conveying active healthy
lifestyle message.

Shot on Sony FX6 (lifestyle commercial standard), 4K, 24fps. 35mm lens at
f/2.8, subject and watch sharp, background trees in moderate bokeh creating
depth. Steadicam operator jogs alongside subject at matched pace, smooth
floating movement.

Lighting: Natural golden hour light 20 minutes after sunrise, warm 3600K
key light from camera-left backlighting subject (sun position), creates rim
light on hair and arm, soft ambient from open sky provides fill, trees
create dappled shade pattern adding visual interest. Natural 6:1 contrast,
lifestyle-beautiful not studio-perfect.

Subject and product: Athletic woman natural runner's form, smartwatch
visible on left wrist in multiple frames, genuine glance at watch showing
real interaction (checks heart rate), subtle sweat sheen showing authentic
exercise, wireless earbuds visible (product ecosystem), hair in ponytail
with natural movement.

Environment: Tree-lined urban park path, early morning soft focus
background showing other early exercisers (lifestyle context), clean modern
city park aesthetic, some morning mist still visible near grass (golden
hour authenticity), bench and lamp post visible providing urban context.

Camera movement: Steadicam tracks camera-right of jogger, maintains
consistent distance, occasionally moves slightly ahead to capture watch
glance, smooth floating movement matching jogging pace (not handheld
bounce), subject maintains screen-right position with look-space left.

Product integration: Watch visible in 60% of frames, natural wrist position
during running, one deliberate glance at screen (hero moment showing UI),
product never forced or posed, integration feels authentic to activity.

Beat choreography:
0.0s: Establish park environment, jogger entering frame distance
2.0s: Camera tracks alongside, jogger comes into medium shot
4.0s: Jogger maintains pace, watch visible on swinging arm
6.0s: Jogger glances at watch briefly (heart rate check), UI visible
8.0s: Returns attention to path, continues running
10.0s: Camera maintains tracking, jogger exits frame-left naturally

Color grade: Warm golden hour preserved, slight teal in shadows (commercial
orange-teal), skin tones healthy and vibrant, watch screen punched +20% for
visibility, lifestyle aspiration without over-processing.

Duration: 10 seconds exactly.

AVOID: Obvious watch posing, unnatural wrist positions, studio lighting in
outdoor scene, perfect hair/makeup (needs athletic authenticity), static
camera, direct product-to-camera presentation, breaking fourth wall.
```

---

### COM-03: Feature Demonstration
**Duration**: 10-15s | **Aspect**: 16:9 or 9:16 | **Complexity**: Medium-High

```
TEMPLATE STRUCTURE:
Photorealistic demonstration of [PRODUCT] highlighting [SPECIFIC FEATURE].
Product shown [BEFORE/DURING/AFTER FEATURE USE] with [VISUAL PROOF] of
benefit. [SPLIT SCREEN/COMPARISON/REVEAL] technique emphasizes [PROBLEM
SOLVED]. Graphics/text integration shows [FEATURE NAME/SPEC] without
overwhelming demonstration.

CAMERA SPECIFICATION:
- Focal length: 50-85mm (detail visibility)
- Aperture: f/4.0-5.6 (product sharp, practical DOF)
- Movement: Coordinated with demonstration
- Shot type: Close-up to medium

LIGHTING APPROACH:
- Clear illumination for feature visibility
- Even lighting for before/after comparison
- Studio or high-quality practical
- Feature details must be crisp

BEAT STRUCTURE (12s example):
H0.00: Problem state or setup
B3.00: Product introduced or feature activates
B6.00: Feature in action (demonstration peak)
B9.00: Result/benefit visible
E12.00: Final state, feature benefit clear

VARIABLES TO CUSTOMIZE:
[PRODUCT] = Item being demonstrated
[SPECIFIC FEATURE] = Exact capability shown
[BEFORE/DURING/AFTER FEATURE USE] = Demo flow
[VISUAL PROOF] = Evidence of benefit
[SPLIT SCREEN/COMPARISON/REVEAL] = Presentation method
[PROBLEM SOLVED] = Customer pain point addressed
[FEATURE NAME/SPEC] = Text overlay content
```

**Example Implementation:**
```
Photorealistic demonstration of stain-resistant fabric spray highlighting
instant water-repellent feature. Product shown in three-phase sequence:
untreated fabric absorbing water, fabric being sprayed, treated fabric
repelling water with visible beading. Side-by-side split screen comparison
emphasizes immediate protection difference. Minimal text graphics show
"WATER REPELLENT - INSTANT" without overwhelming visual proof.

Shot on RED Komodo (commercial detail), 4K, 24fps. 85mm macro lens at f/5.6,
fabric texture visible in detail, water beads perfectly sharp. Top-down
overhead angle, locked tripod for stability and comparison consistency.

Lighting: High-key even lighting for clarity - three LED panels creating
shadowless illumination (commercial cookbook setup), 5600K daylight
balanced, fabric shows true color and texture, water droplets catch
highlights showing surface tension.

Scene setup: White clean background, two fabric swatches side-by-side (same
material, one treated one not), pipette or pour cup for water application,
product spray bottle visible and branded, clean minimalist commercial
aesthetic.

Demonstration choreography:
0.0s: Two fabric swatches in frame, clean slate
2.0s: Water applied to LEFT swatch (untreated), immediately absorbed
4.0s: Product spray bottle enters frame-right
5.0s: RIGHT swatch sprayed (3 second application shown in 1s compression)
7.0s: Water applied to RIGHT swatch (treated)
8.0s: Water beads up perfectly on treated fabric, rolls off
10.0s: Split screen comparison - left absorbed vs right beaded
12.0s: Final frame holds comparison, product bottle visible bottom-right

Visual proof elements: Untreated fabric shows dark water stain spreading,
treated fabric shows spherical water beads sitting on surface, beads catch
light showing perfect surface tension, single bead rolls off edge of treated
fabric (gravity proof), extreme visible difference.

Graphics integration: Minimal text overlay appears at 10s: "WATER REPELLENT
- INSTANT" in clean sans-serif, positioned upper-third, 30% opacity white
background for readability, branded product logo bottom-right corner subtle.

Color: Fabric true-color accurate (example: gray), water perfectly clear
with specular highlights, product bottle brand-accurate colors, white clean
background #F8F8F8, minimal color grading to preserve accurate comparison.

Duration: 12 seconds exactly.

AVOID: Unclear demonstration, dishonest comparison, overly complex graphics,
obscuring the feature benefit, unnatural product integration, sped-up time
that confuses, too many features at once.
```

---

### COM-04: Emotional Brand Storytelling
**Duration**: 15-30s | **Aspect**: 16:9 or 9:16 | **Complexity**: High

```
TEMPLATE STRUCTURE:
Photorealistic brand narrative following [CHARACTER] through [EMOTIONAL
JOURNEY]. Product serves as [ENABLER/COMPANION/SOLUTION] without dominating.
Story conveys [BRAND VALUE - empowerment/connection/innovation/heritage].
Cinematography and [MUSIC INTEGRATION] create [EMOTIONAL RESPONSE]. Product
appears [FREQUENCY/PROMINENCE] maintaining story primacy.

CAMERA SPECIFICATION:
- Focal length: Variable (cinematic storytelling)
- Aperture: Cinematic (f/2.0-4.0 typically)
- Movement: Motivated by emotion and story
- Shot type: Varied (wide/medium/close)

LIGHTING APPROACH:
- Cinematic not commercial lighting
- Mood and emotion prioritized
- Natural or motivated sources
- Consistency with emotional arc

BEAT STRUCTURE (20s example):
H0.00: Character setup, world established
B5.00: Challenge/opportunity introduced
B10.00: Product enables solution (subtle)
B15.00: Emotional payoff, transformation
E20.00: Brand moment, values embodied

VARIABLES TO CUSTOMIZE:
[CHARACTER] = Protagonist type
[EMOTIONAL JOURNEY] = Story arc
[ENABLER/COMPANION/SOLUTION] = Product's role
[BRAND VALUE] = Core message
[MUSIC INTEGRATION] = Audio emotion
[EMOTIONAL RESPONSE] = Intended feeling
[FREQUENCY/PROMINENCE] = Product presence
```

**Example Implementation:**
```
Photorealistic brand narrative following elderly woodworker through quiet
morning workshop routine. Product (premium hand tools) serves as heritage
companion connecting generations without dominating. Story conveys
craftsmanship brand value through patience, skill, and passing knowledge.
Cinematography and contemplative piano score create nostalgic reverence
emotional response. Product appears organically in 40% of frames, story
primacy maintained.

Shot on ARRI Alexa Mini LF (cinematic commercial), 4K, 24fps. Variable
lenses: 35mm T2.1 for wides, 85mm T1.8 for portraits, 100mm macro T2.8 for
detail. Cinematic depth throughout, focus pulls for emotional beats.

Lighting: Motivated natural window light from workshop windows (north-facing
soft), warm practical work lamps (3200K), dust particles visible in light
shafts creating lived-in workshop atmosphere, golden hour light progresses
into workshop as sun rises over 20s narrative. 8:1 contrast, cinematic
not commercial.

Story beats:
0.0s: Empty workshop pre-dawn, tools organized on wall (establishing)
3.0s: Elderly hands (80s) gently select hand plane from rack (detail)
6.0s: Wide shot: woodworker at bench begins planning rough wood
9.0s: Close-up: wood shavings curl from plane, hands show decades of skill
12.0s: Medium shot: worker pauses, touches old photograph on bench edge
      (younger self with grandfather in same workshop)
15.0s: Resume work, smooth strokes, meditation through craft
18.0s: Final close-up: completed smooth wood surface, hand feels texture
20.0s: Wide: worker places completed piece with others, morning light fills
       workshop, legacy continues

Product integration: Premium hand tools visible but never showcased, used
naturally with expert skill, brand logo subtly visible on tool handle in
one frame (3s duration), emphasis on heritage quality through age and
continued function, story of craft not product but product enables craft.

Character authenticity: Real woodworker or authentic performance, genuine
skill visible in technique, age-appropriate hands (not model hands),
weathered skin showing life of work, movements show muscle memory, tools
used correctly (technical accuracy).

Emotional direction: Contemplative pacing, no dialogue, ambient workshop
sounds (plane on wood, quiet morning birds outside), contemplative piano
score in minor key, nostalgic photography tone, theme of generational
knowledge and craft value.

Color grade: Warm nostalgic tone, slight sepia influence, lifted shadows
for soft feel, golden hour light preserved at end, wood tones rich and
natural, desaturated -15% except wood and skin tones, film-like texture.

Brand moment: Final 2 seconds (18-20s) subtle brand logo appears bottom-
corner with tagline "Tools Worth Passing On", doesn't interrupt story,
reinforces heritage message already conveyed.

Duration: 20 seconds exactly (extended commercial format).

AVOID: Product hero shots interrupting story, obvious brand placement,
rushed pacing, dialogue explaining message, stock music emotional
manipulation, model hands doing fake work, tools used incorrectly,
forgetting story for product.
```

---

### COM-05: Dynamic Energy (Sports/Action)
**Duration**: 6-10s | **Aspect**: 16:9 or 9:16 | **Complexity**: High

```
TEMPLATE STRUCTURE:
Photorealistic high-energy capture of [ACTIVITY] showcasing [PRODUCT] in
extreme use. [ATHLETE/USER] performs [SPECIFIC ACTION] at [SPEED/INTENSITY]
while camera [DYNAMIC MOVEMENT] emphasizes motion and performance. Product
[VISIBLE INTEGRATION] demonstrates [DURABILITY/PERFORMANCE/INNOVATION] under
[DEMANDING CONDITIONS]. Energy conveyed through [FAST CUTS/SLOW-MOTION/
RAPID CAMERA WORK].

CAMERA SPECIFICATION:
- Focal length: 24-70mm (versatile action coverage)
- Aperture: f/4.0-8.0 (freeze motion capability)
- Movement: High-energy (gimbal, tracking, drone)
- Frame rate: 60-240fps for slow-motion control

LIGHTING APPROACH:
- High-speed photography considerations
- Natural or powerful artificial
- Motion-freezing capability
- Energy and drama

BEAT STRUCTURE (8s example):
H0.00: Anticipation, coiled energy
B1.00: Action explodes
B3.00: Peak performance moment
B5.00: Product benefit visible in action
E8.00: Resolution, victory, completion

VARIABLES TO CUSTOMIZE:
[ACTIVITY] = Sport or action type
[PRODUCT] = Item being showcased
[ATHLETE/USER] = Performer type
[SPECIFIC ACTION] = Exact performance
[SPEED/INTENSITY] = Performance level
[DYNAMIC MOVEMENT] = Camera approach
[VISIBLE INTEGRATION] = Product presence
[DURABILITY/PERFORMANCE/INNOVATION] = Benefit shown
[DEMANDING CONDITIONS] = Challenge presented
[FAST CUTS/SLOW-MOTION/RAPID CAMERA WORK] = Pacing style
```

**Example Implementation:**
```
Photorealistic high-energy capture of trail running showcasing performance
running shoe in extreme terrain. Athlete (25s, female, ultra-runner build)
performs technical descent on rocky mountain trail at maximum control speed
while camera gimbal tracks from multiple angles emphasizing motion and
precise footwork. Product highly visible through deliberate shoe close-ups
demonstrates traction performance under demanding loose-rock conditions.
Energy conveyed through mixed slow-motion (foot strikes) and real-time
(movement flow) editing.

Shot on Sony FX6 (sports commercial standard), 4K, 120fps for slow-motion
flexibility. 24-70mm zoom at f/5.6, fast shutter 1/500s freezing foot
impacts. Gimbal-mounted with second camera on drone for variety.

Lighting: Natural mountain daylight, harsh overhead sun (5600K) creating
strong shadows that emphasize terrain danger, dramatic backlight when camera
position allows creating rim light on athlete and dust kicks, high contrast
8:1 showing technical challenge.

Shot sequence (8s total, multiple angles edited together):
0.0s: Wide drone shot: athlete approaches rocky descent, trail drops away
      dramatically ahead
1.0s: Cut to ground-level gimbal: feet entering frame, first rock impact
      (SLOW-MOTION 50% speed)
2.5s: Close-up: shoe tread gripping rock, small pebbles dispersing
      (SLOW-MOTION)
4.0s: Medium tracking: athlete descends through rocky section, precise
      foot placement (REAL-TIME)
6.0s: POV from helmet cam: terrain rushing past, hands visible for balance
      (REAL-TIME)
7.0s: Final close-up: shoe plants firmly on large rock, grip secure
      (SLOW-MOTION)
8.0s: Wide: athlete exits rocky section onto smooth trail, speed increases

Product integration: Shoe in 70% of frames, brand colors (product-specific)
stand out against natural rock colors, deliberate tread shots show
performance feature, dirt accumulation shows authentic use, micro-adjustments
visible showing athlete trust in grip.

Athlete performance: Genuine technical skill shown, speed controlled but
fast enough to show challenge, concentration visible in body language,
authentic fatigue and sweat, hand touches on rocks for balance (reality of
terrain), professional runner coordination.

Environment authenticity: Real mountain trail (not studio), genuine loose
rock hazard, dust kicks from impacts, unstable surfaces visible, background
shows elevation (stakes are high), other trail markers visible (this is
real place).

Color grade: Vibrant but natural, shoe colors saturated +20% for brand
visibility, skin tones authentic showing exertion, rock colors true earth
tones, sky punched to dramatic blue, slight orange-teal commercial grade.

Audio design: Foot impacts emphasized, rock scatter, breathing (controlled
exertion), ambient mountain wind, cut with high-energy music track (120 BPM
electronic motivational).

Duration: 8 seconds exactly.

AVOID: Fake difficulty, studio terrain, clean new shoes, slow easy terrain
presented as hard, unrealistic athlete cleanliness, shoe poses that aren't
real running form, gimbal smoothness that looks fake, lack of genuine sweat/
dirt.
```

---

## PRODUCT TEMPLATES (PRD)

### PRD-01: Clean Product Rotation
**Duration**: 8-10s | **Aspect**: 1:1 or 16:9 | **Complexity**: Medium

```
TEMPLATE STRUCTURE:
Photorealistic 360-degree product rotation of [PRODUCT] on [SURFACE/
SUSPENDED]. Clean [BACKGROUND COLOR] environment emphasizes product form.
Lighting reveals [MATERIAL PROPERTIES] through [HIGHLIGHT TECHNIQUE]. Camera
[STATIC/COORDINATED MOVEMENT] maintains perfect [ANGLE] throughout rotation.
[PRODUCT DETAILS] remain visible and emphasized.

CAMERA SPECIFICATION:
- Focal length: 50-85mm (product faithful representation)
- Aperture: f/4.0-8.0 (product sharp, background controlled)
- Movement: Static or coordinated orbit
- Shot type: Full product frame with margin

LIGHTING APPROACH:
- Clean studio lighting (3-5 light setup)
- Specular control for material type
- Background gradient or seamless
- No harsh shadows unless intentional

BEAT STRUCTURE (8s example):
H0.00: Product front view, 0°
B2.00: Rotation 0° to 90° (quarter turn)
B4.00: Profile view, 90°
B6.00: Rotation continues, 180° to 270°
E8.00: Returns to front, 360° complete

VARIABLES TO CUSTOMIZE:
[PRODUCT] = Specific item
[SURFACE/SUSPENDED] = Support method
[BACKGROUND COLOR] = White/black/gradient/color
[MATERIAL PROPERTIES] = Metal/plastic/fabric/glass
[HIGHLIGHT TECHNIQUE] = How light reveals form
[STATIC/COORDINATED MOVEMENT] = Camera approach
[ANGLE] = Camera height and perspective
[PRODUCT DETAILS] = Key features to show
```

**Example Implementation:**
```
Photorealistic 360-degree product rotation of luxury fountain pen suspended
in white void. Clean pure white background environment emphasizes elegant
pen form. Lighting reveals polished black lacquer barrel and gold trim
through carefully controlled specular highlights traveling across surface.
Camera static maintains 15° elevated angle throughout rotation showing pen
at slight hero angle. Nib detail, clip mechanism, and barrel engravings
remain visible and emphasized during rotation phases.

Shot on RED V-Raptor 8K (product perfection), 8K resolution, 24fps. 85mm
lens at f/8.0, pen sharp throughout depth, background pure white void.
Camera locked on tripod, product rotates on motorized turntable.

Lighting: Five-light studio setup optimized for lacquer and metal - (1) Key:
Large soft box camera-left 45° creating main illumination, (2) Fill: Soft
panel opposite at -2 stops, (3) Top rim: Strip light creating highlight
line on barrel top, (4) Nib accent: Small focused spot highlighting gold
nib detail, (5) Background: Two lights creating pure white seamless.

Rotation setup: Fountain pen suspended on invisible monofilament wire,
rotates clockwise on motorized turntable at constant 45°/second speed,
suspension point at pen's balance point creating stable rotation, no visible
support in any frame.

Product details emphasis:
- 0°-90°: Front view shows nib, clip, overall form
- 90°-180°: Profile reveals pen thickness, clip spring detail
- 180°-270°: Back view shows barrel engraving, cap fit
- 270°-360°: Return reveals opposite profile, brand name visible

Material rendering: Black lacquer shows specular highlights as thin white
lines traveling across barrel surface during rotation, gold trim catches
light creating warm metallic reflections, nib shows both gold surface and
iridium tip detail, no fingerprints or dust.

Color accuracy: Black lacquer #0A0A0A with specular highlights, 14k gold
trim accurate yellow-gold, pure white background #FFFFFF, brand-accurate
colors for any detail.

Camera: 15° elevated angle (product hero angle, slight look-down), centered
composition with 20% margin all sides, pen fills 60% of frame vertically,
horizontal centering perfect throughout.

Post-production: Remove any suspension wire artifacts, ensure white
background absolute purity (255,255,255), verify no color contamination,
highlight enhancement on gold details, micro dust removal if needed.

Duration: 8 seconds exactly (360° at 45°/second).

AVOID: Visible support, uneven rotation speed, harsh shadows on background,
fingerprints, dust particles, background not pure white, camera drift,
focus errors, clipped highlights on lacquer.
```

---

### PRD-02: Exploded Assembly View
**Duration**: 10-15s | **Aspect**: 16:9 | **Complexity**: High

```
TEMPLATE STRUCTURE:
Photorealistic [PRODUCT] disassembling into component parts showing [INTERNAL
CONSTRUCTION/QUALITY/INNOVATION]. Components [SEPARATE MOTION - float/
explode/slide] along [AXIS/RADIAL/ORGANIC] pattern revealing [ENGINEERING/
CRAFTSMANSHIP]. Camera [ORBITS/STATIC] while parts [HOVER/CONTINUE MOVING].
Demonstrates [COMPLEXITY/SIMPLICITY/PRECISION] of design.

CAMERA SPECIFICATION:
- Focal length: 50-85mm (technical clarity)
- Aperture: f/5.6-8.0 (depth for multiple components)
- Movement: Slow orbit or static observation
- Shot type: Full assembly frame

LIGHTING APPROACH:
- Clean even lighting for technical clarity
- Each component clearly illuminated
- Shadows minimal unless showing depth
- Neutral or white background

BEAT STRUCTURE (12s example):
H0.00: Product assembled, complete
B2.00: Explosion/separation begins
B6.00: Fully exploded, all parts visible
B9.00: Parts hover, possible rotation
E12.00: Optional reassembly or hold

VARIABLES TO CUSTOMIZE:
[PRODUCT] = Item being shown
[INTERNAL CONSTRUCTION/QUALITY/INNOVATION] = What's revealed
[SEPARATE MOTION] = How parts move apart
[AXIS/RADIAL/ORGANIC] = Movement pattern
[ENGINEERING/CRAFTSMANSHIP] = What this demonstrates
[ORBITS/STATIC] = Camera behavior
[HOVER/CONTINUE MOVING] = Part behavior at peak
[COMPLEXITY/SIMPLICITY/PRECISION] = Design message
```

**Example Implementation:**
```
Photorealistic mechanical watch disassembling into 140+ component parts
showing Swiss engineering precision. Components float apart in radial
explosion pattern from central axis revealing intricate gear train, balance
wheel, escapement mechanism, jewel bearings. Camera slow orbital movement
around expanding assembly while parts hover in suspension. Demonstrates
incredible complexity and micro-precision of mechanical watchmaking.

Shot on RED Komodo 6K (technical detail), 6K resolution, 24fps. 85mm macro
lens at f/8.0, sufficient depth to keep near and far components in
acceptable focus. Camera orbits on automated rig, 90° arc over 12 seconds.

Lighting: High-key technical lighting, six-light setup creating shadowless
illumination for clarity, 5600K LED panels, each component receives adequate
light regardless of position, white gradient background provides depth cues.

Explosion choreography (12s total):
0.0-1.0s: Assembled watch, complete and ticking
1.0-2.0s: Watch face lifts away first
2.0-4.0s: Movement plate separates revealing gear train
4.0-6.0s: Individual components begin floating apart radially
6.0s: Full explosion achieved, all 140+ parts suspended in space
6.0-10.0s: Parts hover and slowly rotate individually showing detail
10.0-12.0s: Hold expanded state, camera completes orbit

Component organization: Parts separate along functional groups - face
components separate upward, movement components expand outward radially,
case components move downward, each part maintains orientation relative to
original assembly, spacing increases with distance from center creating
visual hierarchy.

Technical details visible: Gear train (20+ gears visible), ruby jewel
bearings (red accents), balance wheel with hairspring (delicate spiral),
escapement lever and pallet fork (micro-precision), rotor weight, movement
plate with Geneva stripes decoration, case back engravings, crown mechanism
components.

Materials rendering: Brass gears (golden), steel components (silver), ruby
jewels (deep red translucent), gold-plated details (yellow-gold), blued
screws (heat-treated blue), movement plate (rhodium-plated), sapphire
crystal (transparent with anti-reflective coating).

Camera movement: Orbital path around expanding assembly, maintains center-
framing on original watch position, 90° arc from front-facing to profile
view, reveals depth of explosion and component count, smooth motorized
movement at constant 7.5°/second.

Annotation option: Minimal text labels for key components (balance wheel,
escapement, jewel bearings) appearing at 6-8s mark, subtle lines pointing
to components, white text with semi-transparent background, technical font.

Color: Accurate material colors, no beautification, slight saturation +10%
on ruby jewels for visibility, white gradient background #FFFFFF to #F0F0F0.

Duration: 12 seconds exactly.

AVOID: Chaotic disassembly, unorganized component scatter, lost small parts
in composition, insufficient lighting on components, motion blur during
explosion, components obscuring each other, unclear what's being shown.
```

---

### PRD-03: Texture/Material Close-Up
**Duration**: 6-8s | **Aspect**: 1:1 or 16:9 | **Complexity**: Medium

```
TEMPLATE STRUCTURE:
Photorealistic extreme macro of [PRODUCT] emphasizing [SPECIFIC MATERIAL/
TEXTURE]. Camera [SLOW PUSH/SLIDE] reveals [CRAFTSMANSHIP DETAIL] at
[MAGNIFICATION LEVEL]. Lighting rakes across surface showing [TEXTURE
QUALITY - grain/weave/finish/pattern]. Demonstrates [MATERIAL PREMIUM
QUALITY/AUTHENTICITY/CRAFTSMANSHIP].

CAMERA SPECIFICATION:
- Focal length: 100mm+ macro (detail capability)
- Aperture: f/5.6-11 (balance detail and DOF)
- Movement: Slow precise macro movement
- Shot type: Extreme close-up

LIGHTING APPROACH:
- Raking light to reveal texture
- Avoid flat lighting that hides detail
- Specular control for material type
- Depth through shadow

BEAT STRUCTURE (6s example):
H0.00: Material texture visible
B2.00: Camera movement begins revealing more
B4.00: Peak detail, texture fully visible
E6.00: Hold on final detail composition

VARIABLES TO CUSTOMIZE:
[PRODUCT] = Item being showcased
[SPECIFIC MATERIAL/TEXTURE] = Surface being emphasized
[SLOW PUSH/SLIDE] = Camera motion type
[CRAFTSMANSHIP DETAIL] = What's being revealed
[MAGNIFICATION LEVEL] = How close
[TEXTURE QUALITY] = Surface characteristics
[MATERIAL PREMIUM QUALITY/AUTHENTICITY/CRAFTSMANSHIP] = Message
```

**Example Implementation:**
```
Photorealistic extreme macro of Italian leather wallet emphasizing full-
grain hide texture. Camera slow horizontal slide reveals hand-stitching
detail at 4:1 magnification. Lighting rakes at 15° angle across surface
showing natural grain pattern, pore structure, slight color variation in
authentic hide. Demonstrates premium material quality and traditional
craftsmanship versus synthetic alternatives.

Shot on Sony A7R V (high-resolution macro), 61MP resolution for extreme
detail crop, 24fps. Sony 90mm f/2.8 Macro G OSS at f/11, maximum detail
sharpness, sufficient DOF for leather texture depth, lens perpendicular to
leather surface.

Lighting: Single raking light from 15° angle camera-right, 3200K tungsten
LED creating warm tone appropriate for leather, hard source shows texture
through shadow, no fill light allowing texture to create depth through
self-shadowing, leather grain creates micro-shadows revealing authenticity.

Camera movement: Motorized macro rail, horizontal slide 2 inches over 6
seconds (0.33 inches/sec), reveals leather grain transition from darker to
lighter area showing natural hide variation, passes over hand-stitching
detail at 4s mark, ends on edge detail showing leather thickness.

Material details visible: Full-grain leather pore structure (individual
pores visible), natural grain pattern (not embossed), slight color variation
across hide (proof of authentic animal leather not synthetic), hand-stitching
with visible thread texture and slight irregularity proving hand-work, edge
burnishing showing multiple leather layers, natural fat/oil variations in
hide.

Texture emphasis: Raking light creates mini shadows in grain valleys, pores
appear as tiny dimples, grain pattern organic and irregular (natural),
slight sheen variations across surface (natural oils), thread shows
individual fiber twist, edge cut shows fiber structure in cross-section.

Color accuracy: Rich brown leather tone authentic to tanned hide, slightly
warm from tungsten light choice (appropriate for leather aesthetic), thread
contrasts slightly (tan thread on brown leather), no artificial color
enhancement, natural leather patina.

Magnification: 4:1 reproduction ratio, frame captures approximately 1.5
inches of leather surface, individual pores clearly visible, texture fills
frame, detail level shows macro photography expertise.

Material authentication: Visible imperfections prove authenticity (slight
scar mark natural, tiny brand mark from tannery, color variation natural),
synthetic leather would show uniform pattern, embossed texture would show
repetitive press pattern.

Duration: 6 seconds exactly.

AVOID: Flat lighting hiding texture, focus errors at high magnification,
camera shake/vibration, too shallow DOF losing texture context, over-lit
washing out shadows that show texture, artificial grain enhancement.
```

---

## CHARACTER TEMPLATES (CHR)

### CHR-01: Emotional Portrait
**Duration**: 8-10s | **Aspect**: 16:9 or 9:16 | **Complexity**: Medium

```
TEMPLATE STRUCTURE:
Photorealistic intimate portrait of [CHARACTER DESCRIPTION] experiencing
[EMOTIONAL STATE]. Subject [MINIMAL ACTION - breathing, micro-expressions,
subtle movements] while camera maintains [CLOSE-UP FRAMING]. Lighting creates
[MOOD] through [TECHNIQUE]. [SPECIFIC DETAIL - eyes, hands, mouth] conveys
unspoken [INTERNAL FEELING].

CAMERA SPECIFICATION:
- Focal length: 85-135mm (intimate portrait compression)
- Aperture: f/1.4-2.8 (shallow DOF, face isolation)
- Movement: Minimal or imperceptible
- Shot type: CU or XCU

LIGHTING APPROACH:
- Character-driven lighting (supports emotion)
- Single source or minimal setup
- Shadows used for psychology
- Face/expression emphasis

BEAT STRUCTURE (8s example):
H0.00: Subject in emotional state
B2.00: Subtle shift (blink, breath, micro-expression)
B4.00: Peak emotional moment (tear, smile, realization)
B6.00: Processing, aftermath
E8.00: Hold final emotional state

VARIABLES TO CUSTOMIZE:
[CHARACTER DESCRIPTION] = Who they are
[EMOTIONAL STATE] = What they're feeling
[MINIMAL ACTION] = Subtle movements
[CLOSE-UP FRAMING] = CU/XCU type
[MOOD] = Visual atmosphere
[TECHNIQUE] = Lighting approach
[SPECIFIC DETAIL] = What reveals emotion
[INTERNAL FEELING] = Unspoken content
```

**Example Implementation:**
```
Photorealistic intimate portrait of war photographer (60s, male, weathered
face, silver beard) experiencing quiet PTSD moment. Subject minimal action:
slow breathing, thousand-yard stare, slight eye moisture, jaw tension while
camera maintains extreme close-up on face, filling 90% of frame. Lighting
creates heavy mood through harsh single window creating split-face
chiaroscuro. Eyes and micro-expressions around mouth convey unspoken weight
of witnessed trauma.

Shot on ARRI Alexa Mini LF (cinematic character work), 4K, 24fps. 135mm T2.1
Signature Prime, shot wide open f/2.1, razor-thin depth of field with
closest eye sharp, far eye falling slightly soft, background completely
out of focus. Locked tripod, no camera movement except subtle breathing-
induced frame shift.

Lighting: Single large window camera-left creating split-face lighting
(one half illuminated, one half deep shadow), 16:1 contrast ratio, no fill
light, letting shadows fall black, window light is diffused overcast daylight
(5500K), creates Rembrandt-style but more extreme. Small catchlight visible
in closer eye, far eye falls to shadow.

Subject direction: Male performer, 60s, face shows decades of sun exposure
and stress, silver beard trimmed but not styled, deep creases around eyes
(laugh lines and worry lines), slight moisture in eyes (not full tears but
beginning), jaw occasionally clenches (tension), breathing slow and
controlled, thousand-yard stare focused past camera to infinity (PTSD
dissociation), minimal blinking (hypervigilance state).

Emotional details: Micro-expressions around eyes show pain, slight furrow
between eyebrows (concentration or remembering), jaw muscle occasionally
visible clenching under beard, single tear forms at 5s mark but doesn't
fall, breathing visible in subtle chest movement and nostril flare, no
performance, internal experience only.

Environmental context: Background completely soft bokeh suggesting window
and room but zero detail visible, isolation emphasized through lack of
context, sound would be silence except breathing and distant ambient (room
tone), no music, raw emotion only.

Color grade: Desaturated -40%, skin tones pushed toward gray-green
suggesting PTSD color palette, cold mood despite daylight, lifted shadows
slightly to show detail in dark half of face but maintain drama, film noir
influence, silver beard white-gray, eyes retain slight color in irises.

Beat choreography:
0.0s: Thousand-yard stare, breathing slow
2.0s: Slow blink, slightly longer duration (fatigue)
4.0s: Jaw clenches, micro-grimace
5.0s: Tear forms in closer eye
6.0s: Eyes refocus slightly, coming back to present
8.0s: Return to stare, emotional weight remains visible

Performance direction: Internal experience only, no theatrical emotion,
PTSD authenticity (dissociation, hypervigilance, intrusive memory), military/
combat photographer background suggested through weathered appearance and
specific trauma presentation, dignity maintained despite pain.

Duration: 8 seconds exactly.

AVOID: Theatrical crying, over-lit beauty portrait, both eyes in perfect
focus, smile or relief, quick cutting, camera movement, background details
visible, clean perfect skin, artificial tear application visible.
```

---

### CHR-02: Character In Motion
**Duration**: 8-12s | **Aspect**: 16:9 or 9:16 | **Complexity**: Medium-High

```
TEMPLATE STRUCTURE:
Photorealistic character shot following [CHARACTER] through [MOVEMENT/
ACTIVITY]. Camera [TRACKING METHOD] maintains [RELATIONSHIP - lead/follow/
alongside] while character [PERFORMS ACTION]. Movement reveals [CHARACTER
TRAIT/EMOTION/PURPOSE]. Environment [BLURS/VISIBLE] emphasizing [CHARACTER
FOCUS/CONTEXT BALANCE].

CAMERA SPECIFICATION:
- Focal length: 35-85mm (character and context)
- Aperture: f/2.8-5.6 (character sharp, background controlled)
- Movement: Tracking (Steadicam, gimbal, dolly)
- Shot type: MS to FS

LIGHTING APPROACH:
- Motivated by environment
- Character remains visible in motion
- Natural or available light typical
- Consistency during movement

BEAT STRUCTURE (10s example):
H0.00: Character enters or begins movement
B3.00: Movement establishes rhythm/pace
B6.00: Key character moment during motion
B8.00: Movement concludes or continues
E10.00: Final composition

VARIABLES TO CUSTOMIZE:
[CHARACTER] = Who is moving
[MOVEMENT/ACTIVITY] = What they're doing
[TRACKING METHOD] = Camera movement type
[RELATIONSHIP] = Camera's spatial relation
[PERFORMS ACTION] = Specific action
[CHARACTER TRAIT/EMOTION/PURPOSE] = What's revealed
[BLURS/VISIBLE] = Background treatment
[CHARACTER FOCUS/CONTEXT BALANCE] = Compositional priority
```

**Example Implementation:**
```
Photorealistic character shot following ballet dancer through preparation
ritual before performance. Camera Steadicam tracking maintains slight lead
position (camera backward, dancer approaching) while character walks through
backstage hallway performing mental preparation - eyes closed, breathing
exercises, hand movements through muscle memory choreography. Movement
reveals intense focus and pre-performance anxiety transformed to
determination. Environment visible but softly defocused emphasizing
character's internal state over literal backstage context.

Shot on Sony VENICE 2 (character cinematography), 4K, 24fps. 50mm lens at
f/2.8, dancer sharp from waist up, background hallway in moderate bokeh but
environment readable. Steadicam operator walks backward maintaining 6-foot
distance from approaching dancer, smooth floating movement, slight vertical
drift as dancer walks (natural breathing in stabilization).

Lighting: Backstage hallway practical lights - fluorescent overheads
(4800K) creating slightly institutional feel, warm glow from stage visible
at end of hallway creating visual destination, motivated light sources only,
slight underexposure to match backstage aesthetic, high contrast 10:1 with
pools of light and shadow as dancer passes through hallway.

Character performance: Female ballet dancer, early 20s, wearing preparation
robe over costume, hair in tight bun, walking toward camera with purposeful
pace, eyes closed for first 6 seconds (internal focus), hands moving through
small gesture sequences (muscle memory of choreography), breathing pattern
visible (controlled but showing nerves), slight head tilt as listening to
internal music, opens eyes at 7s mark with shift to determination, final
steps more confident.

Movement choreography:
0.0s: Dancer enters far end of hallway, begins walk toward camera
2.0s: Camera begins backward tracking, maintaining distance
3.0s: Dancer's hands begin small choreography gestures
5.0s: Eyes closed, deep breath, complete internal focus
7.0s: Eyes open, expression shifts from anxiety to determination
9.0s: Increased pace, confident final steps
10.0s: Dancer reaches camera position, pushes past to stage

Environment details: Backstage hallway with exposed pipes overhead, costume
racks visible in background blur, other dancers' silhouettes passing in
cross-hallways, warning signs and stage directions on walls, industrial
floor showing years of foot traffic, warm glow of stage getting brighter as
destination approaches.

Camera relationship: Leads dancer (moves backward), maintains face-on view,
dancer approaches camera creating sense of building momentum and proximity,
slight off-center composition (rule of thirds) with stage-side hallway
visible providing destination context.

Color grade: Slightly desaturated backstage palette, green-gray fluorescent
tint overhead, warm orange glow increasing from stage, skin tones preserved
but institutional environment muted, contrast between cold backstage and
warm performance space.

Character revelation: Internal-to-external transition visible, pre-
performance ritual shown authentically (athlete/performer mental preparation),
vulnerability (eyes closed) to strength (eyes open, determined), breathing
control, muscle memory, transformation from person to performer.

Duration: 10 seconds exactly.

AVOID: Smooth gimbal (too perfect, use Steadicam organic float), bright
even lighting, clean new backstage (needs wear and authenticity), dancer
aware of camera, performed emotion (needs internal reality), symmetrical
composition, stage lights visible at start.
```

---

### CHR-03: Gesture/Hand Performance
**Duration**: 6-8s | **Aspect**: 16:9 or 1:1 | **Complexity**: Medium

```
TEMPLATE STRUCTURE:
Photorealistic close-up of hands performing [SPECIFIC ACTION/CRAFT/GESTURE].
[HAND DESCRIPTION - age, condition, details] executes [PRECISE MOVEMENT]
revealing [SKILL/EMOTION/STORY]. Camera [ANGLE/MOVEMENT] emphasizes
[TECHNIQUE/TEXTURE/PURPOSE]. Action demonstrates [CHARACTER TRAIT -
expertise/care/nervousness/precision].

CAMERA SPECIFICATION:
- Focal length: 50-100mm (hand detail without distortion)
- Aperture: f/2.8-5.6 (hands sharp, background soft)
- Movement: Static or slow coordinated tracking
- Shot type: CU on hands and immediate action

LIGHTING APPROACH:
- Reveals hand texture and action clearly
- Motivated by activity (task light, window, etc.)
- Shadows show depth and dimension
- Material interactions visible

BEAT STRUCTURE (6s example):
H0.00: Hands positioned, action beginning
B2.00: Key action initiates
B4.00: Action completes or peak moment
E6.00: Hold result or hands rest

VARIABLES TO CUSTOMIZE:
[SPECIFIC ACTION/CRAFT/GESTURE] = What hands do
[HAND DESCRIPTION] = Characteristics
[PRECISE MOVEMENT] = Exact action
[SKILL/EMOTION/STORY] = What's communicated
[ANGLE/MOVEMENT] = Camera approach
[TECHNIQUE/TEXTURE/PURPOSE] = Visual emphasis
[CHARACTER TRAIT] = What hands reveal about person
```

**Example Implementation:**
```
Photorealistic close-up of elderly hands (80s, arthritic joints, age-spotted
skin) tying fishing fly with precision despite tremor. Weathered hands
execute thread wrapping technique on tiny hook revealing lifetime skill
overcoming physical decline. Camera overhead 90° angle static emphasizes
delicate technique against hand tremor contrast. Action demonstrates
persistence of expertise, muscle memory transcending age, careful
determination.

Shot on ARRI Alexa Mini LF (character detail), 4K, 24fps. 85mm macro lens
at f/4.0, hands and fly-tying vise in sharp focus, background workshop
surface in soft bokeh. Overhead 90° angle looking directly down at work
surface, locked tripod absolutely static.

Lighting: Single adjustable task lamp (3200K tungsten) positioned at 45°
creating strong modeling light on hands and materials, creates shadows that
show depth of wrinkled skin and hand tremor movement, warm tone appropriate
for workshop craft setting, natural 8:1 contrast. Small white reflector
opposite provides gentle fill preventing dead blacks.

Hand characteristics: Male hands, late 70s to early 80s, prominent
arthritis visible in knuckle joints (swollen, slightly bent), age spots
(liver spots) scattered across back of hands and fingers, skin texture
showing decades of sun exposure, visible tremor (essential tremor or early
Parkinson's), skin loose with pronounced veins, wedding ring worn thin from
years of wear.

Action specifics: Hands hold tiny fishing hook (size 18) clamped in fly-
tying vise, wrapping fine thread around hook shaft, despite visible hand
tremor movements are controlled and precise, thread wraps even and tight
(expertise visible), fingers show dexterity despite arthritis, thread color
red against silver hook, subtle tools visible (bobbin, scissors, small
feathers), work shows painstaking precision.

Skill revelation: Tremor is constant but hands compensate with decades of
practice, thread wrapping technique perfect despite physical challenges,
occasional pause to manage tremor, ultimate precision achieved through
patience and experience, muscle memory allows quality despite decline, no
frustration visible only focused determination.

Materials and tools: Fly-tying vise (small metal jaws holding hook), thread
bobbin (ceramic guide), fine red thread (6/0 weight), tiny hook barely
visible, small feather barbs nearby for next step, worn wooden workshop
surface showing years of similar work, other completed flies visible in soft
background suggesting ongoing practice.

Character storytelling: Hands tell life story - outdoor work visible in
weathering, marriage visible in worn ring, age visible in spots and wrinkles,
tremor shows physical decline, precision work shows refusal to surrender to
age, determination visible in continuous practice despite difficulty, craft
as connection to lifetime identity.

Movement choreography:
0.0s: Hands hold thread and bobbin, positioned at hook
1.0s: Begin thread wrapping, small tremor visible
2.5s: Three precise wraps despite tremor, expertise clear
4.0s: Hand pauses, tremor more visible in stillness
5.0s: Continues, two more wraps, thread even
6.0s: Hold final position, partial fly completed

Color: Accurate skin tone (aged, weathered), red thread saturated for
visibility, silver hook catching light, warm workshop environment tones,
wooden surface natural brown, tools showing patina of use and age.

Duration: 6 seconds exactly.

AVOID: Young hands performing elderly action, fake tremor, sped-up footage
to hide lack of skill, perfect hands without age details, artificial
lighting too clean, over-lit washing out skin texture, lack of actual skill
visible.
```

---

## ENVIRONMENT TEMPLATES (ENV)

### ENV-01: Natural Landscape (Wide)
**Duration**: 10-15s | **Aspect**: 16:9 | **Complexity**: Medium

```
TEMPLATE STRUCTURE:
Photorealistic wide landscape of [SPECIFIC LOCATION TYPE] at [TIME OF DAY].
Natural [WEATHER/ATMOSPHERIC CONDITION] creates [VISUAL MOOD]. Camera
[STATIC/MOVEMENT TYPE] reveals [SCALE/DEPTH/FEATURE] of environment.
[FOREGROUND/MIDDLE/BACKGROUND] elements create [COMPOSITIONAL DEPTH]. Light
[QUALITY/DIRECTION] emphasizes [LANDSCAPE CHARACTER].

CAMERA SPECIFICATION:
- Focal length: 14-35mm (environmental scope)
- Aperture: f/8.0-16 (maximum depth of field)
- Movement: Slow and majestic or contemplative static
- Shot type: XWS to WS

LIGHTING APPROACH:
- Natural light only (sun, moon, twilight)
- Time of day selected for desired mood
- Weather integrated as creative element
- Long shadows and atmospheric depth

BEAT STRUCTURE (12s example):
H0.00: Landscape establishes
B3.00: Light shift or weather change begins (optional)
B6.00: Movement reveals new element (if camera moves)
B9.00: Peak composition or light moment
E12.00: Hold final vista

VARIABLES TO CUSTOMIZE:
[SPECIFIC LOCATION TYPE] = Mountain/desert/coast/forest/prairie
[TIME OF DAY] = Dawn/day/dusk/night/golden hour/blue hour
[WEATHER/ATMOSPHERIC CONDITION] = Clear/foggy/stormy/snowy
[VISUAL MOOD] = Emotional tone
[STATIC/MOVEMENT TYPE] = Camera approach
[SCALE/DEPTH/FEATURE] = What's emphasized
[FOREGROUND/MIDDLE/BACKGROUND] = Compositional layers
[QUALITY/DIRECTION] = Light characteristics
[LANDSCAPE CHARACTER] = Essential nature
```

**Example Implementation:**
```
Photorealistic wide landscape of Norwegian fjord at dawn blue hour. Natural
morning mist creates ethereal mysterious mood rolling across dark water
surface. Camera slow drone ascent reveals dramatic scale of vertical cliff
walls emerging from fog. Foreground water surface (mist layer), middle
distance cliff walls (partially obscured), background mountain peaks
(catching first light) create strong compositional depth. Pre-sunrise blue
hour light (7200K) emphasizes cold Nordic majesty and untouched wilderness
character.

Shot on DJI Inspire 3 (cinematic landscape drone), 8K, 24fps. 24mm
equivalent lens at f/11, deep depth of field maintaining sharpness from
water surface 40 feet below to distant peaks 3 miles away. Slow autonomous
ascent 60 feet over 12 seconds (5 ft/sec), perfectly smooth, slight forward
movement creating parallax.

Lighting: Blue hour natural light 20 minutes before sunrise, cool 7200K
color temperature creating Nordic cold atmosphere, no direct sun yet,
highest mountain peaks catching first warm pre-dawn glow (alpenglow effect)
creating color temperature gradient, long shadows in valleys still in deep
blue darkness. Natural gradient from dark foreground to lit distant peaks.

Atmospheric conditions: Low mist/fog layer rolling across fjord water
surface (temperature inversion creating fog), visibility approximately 200
feet horizontally through fog, vertical cliff walls emerge from fog creating
dramatic scale, fog movement visible but subtle (natural air current), water
surface still and mirror-like where visible through fog gaps.

Compositional layers:
- Foreground (0-100ft): Dark water surface, mist layer thick
- Middle distance (100-1000ft): Cliff walls emerging from fog, vertical
  granite faces, some waterfalls visible
- Background (1000ft-3mi): Mountain peaks catching alpenglow, snow-covered
  summits, clear sky above peaks

Environmental scale: Cliff walls 2000-3000 feet vertical, fjord width 1
mile across, water depth 800+ feet, peaks rise to 5000+ feet, scale
emphasized through fog layer showing massive vertical relief.

Camera movement: Begins 40 feet above water surface showing mist layer
obscuring view, ascends steadily revealing more cliff wall detail as height
increases, top of movement shows full scope of fjord with distant peaks
visible, slight forward travel creates parallax between cliff walls and
distant mountains.

Color palette: Deep blue water #1A3A52, fog gray-blue #8B9DAF, granite gray
#6E7F80, alpenglow warm pink-gold #FFB6C1 on distant peaks only, cold blue
dominant throughout foreground/middle, natural color temperature gradient
from cool to warm with altitude.

Weather authenticity: Mist behavior natural (not artificial), temperature
inversion typical of dawn in fjord, no wind disturbance (early morning
calm), water surface mirror-still (no boat wakes), pristine wilderness (no
human structures visible in frame), authentic Norwegian fjord characteristics.

Sound design: (If audio) Subtle water lapping, distant waterfall ambient,
morning bird calls echoing off cliffs, absolute stillness otherwise, no
music necessary, nature speaks.

Beat choreography:
0.0s: Low altitude, fog obscures view, dark and mysterious
3.0s: Ascent reveals first cliff wall detail emerging from mist
6.0s: Higher altitude, scale becoming apparent, multiple cliff walls visible
9.0s: Distant peaks catching alpenglow become visible, color gradient clear
12.0s: Final altitude, full majesty of fjord revealed, hold final
       composition

Duration: 12 seconds exactly.

AVOID: Artificial fog, unrealistic mist behavior, visible drone shadow,
time-lapse speed (needs real-time majesty), warm color temperature (needs
Nordic cold), visible human structures, symmetrical composition, lack of
atmospheric depth, flat lighting.
```

---

### ENV-02: Urban Environment (Night)
**Duration**: 8-12s | **Aspect**: 16:9 or 9:16 | **Complexity**: Medium-High

```
TEMPLATE STRUCTURE:
Photorealistic urban night scene of [CITY/LOCATION TYPE] showing [SPECIFIC
URBAN ELEMENT]. Artificial lighting from [LIGHT SOURCES] creates [MOOD -
neon noir/cyberpunk/gritty realism/etc.]. Camera [MOVEMENT] through
[ENVIRONMENT SECTION] revealing [URBAN CHARACTER/STORY]. [WEATHER CONDITION]
interacts with light creating [VISUAL EFFECT].

CAMERA SPECIFICATION:
- Focal length: 24-50mm (urban context)
- Aperture: f/2.0-4.0 (low-light capability, bokeh)
- Movement: Tracking, slider, gimbal, or static
- Shot type: WS to MS of environment

LIGHTING APPROACH:
- Practical urban sources only (street lights, neon, windows)
- Mixed color temperatures (realistic urban palette)
- High contrast night exposure
- Neon reflections and light scatter

BEAT STRUCTURE (10s example):
H0.00: Urban night environment establishes
B3.00: Camera movement begins or light changes
B6.00: Key urban element revealed
B8.00: Movement completes or atmosphere peaks
E10.00: Final urban composition

VARIABLES TO CUSTOMIZE:
[CITY/LOCATION TYPE] = Specific urban setting
[SPECIFIC URBAN ELEMENT] = Notable feature
[LIGHT SOURCES] = Types of illumination
[MOOD] = Atmosphere created
[MOVEMENT] = Camera motion type
[ENVIRONMENT SECTION] = Area covered
[URBAN CHARACTER/STORY] = What environment communicates
[WEATHER CONDITION] = Rain/fog/snow/clear
[VISUAL EFFECT] = Light interaction result
```

**Example Implementation:**
```
Photorealistic urban night scene of Tokyo Shibuya district showing neon-
saturated commercial intersection. Artificial lighting from hundreds of LED
billboards, neon shop signs, car headlights, and vertical screens creates
cyberpunk saturation mood. Camera slow slider movement right-to-left through
crosswalk level revealing overwhelming commercial density character. Light
rain interacts with light creating reflective wet asphalt, neon reflections,
and atmospheric glow.

Shot on Sony A7S III (low-light urban specialist), 4K, 24fps. 35mm lens at
f/2.0, shallow depth allowing foreground pedestrians sharp with background
neon in bokeh, handles mixed lighting and high ISO. 3-foot slider movement
over 10 seconds, eye-level perspective immersed in environment.

Lighting: 100% practical sources creating complex mixed color temperature -
Cool white LED billboards (6500K), warm neon signs (2800-4500K varying by
color), car headlights (5000K xenon), fluorescent shop interiors (4100K),
vertical LED screens cycling colors. No added film lighting, authentic urban
light pollution. High contrast 12:1 with deep shadows between buildings,
over-bright neon hot spots.

Environmental details: Shibuya scramble crossing at street level, wet
asphalt reflecting all neon creating mirror world below, pedestrians with
umbrellas (rain shield), some carrying shopping bags (commercial district),
crosswalk paint visible in street lights, building facades covered floor-to-
ceiling in animated LED ads, vertical Japanese text neon signs, kanji
characters glowing, vending machines providing green-blue accent light.

Weather interaction: Light rain (drizzle not downpour), raindrops visible
in neon backlight, wet asphalt creates perfect reflections of overhead neon
(doubles visual complexity), umbrella surfaces catching and diffusing
colored light, slight mist/fog from rain creating atmospheric glow around
brightest sources, water beading on camera lens (1-2 drops) adding
authenticity.

Camera movement: Slider tracking laterally right-to-left at crosswalk level,
pedestrians crossing in both directions (authentic traffic flow), movement
speed matches walking pace creating parallax between close pedestrians and
distant buildings, foreground figures enter and exit frame naturally,
composition maintains rule of thirds with architectural verticals.

Color saturation: Neon colors at maximum intensity - magenta #FF00FF, cyan
#00FFFF, acid green #39FF14, electric blue #7DF9FF, hot pink #FF69B4,
warning orange #FF6600. Cyberpunk color palette, high saturation +40% on
neon sources, skin tones slightly desaturated -10% to emphasize neon over
people, wet asphalt reflection preserves neon colors.

Urban character: Commercial saturation, overwhelming visual noise,
cyberpunk realized in reality, 24-hour consumer culture, future-shock
aesthetic, human figures dwarfed by advertising, authentic Tokyo night
energy, pedestrians unfazed by intensity (locals not tourists), organized
chaos of crossing patterns.

Cyberpunk elements: Vertical neon signage (Japanese text), animated LED
screens showing ads, reflective wet surfaces doubling light, mist/rain
creating atmospheric glow, cool-warm color contrast (cyan vs magenta),
commercial density, technology overwhelming human scale, night-as-day from
light pollution.

Pedestrian details: Umbrellas (transparent and colored catching light),
business attire and casual mixed (after-work district), faces lit from below
by phone screens, natural crossing behavior (authentic not performed), some
rush some stroll (real pace variation), shopping bags from recognizable
stores, winter coats (seasonal accuracy).

Beat choreography:
0.0s: Establish intersection, pedestrians beginning to cross
2.0s: Slider movement begins, revealing more vertical neon
5.0s: Peak neon density visible, central composition
7.0s: Pedestrian foreground crosses frame providing scale
10.0s: Movement ends, hold on final composition showing district depth

Duration: 10 seconds exactly.

AVOID: Dry streets (rain is essential for neon reflection), artificial film
lighting added (breaks authenticity), sped-up time-lapse, symmetrical
composition, empty streets (needs human activity), single color temperature,
clean modern LED-only (needs variety of neon/LED/fluorescent), daytime shot
color-graded to fake night.
```

---

## ARTISTIC/EXPERIMENTAL TEMPLATES (ART)

### ART-01: Abstract Motion
**Duration**: 8-15s | **Aspect**: 16:9 or 1:1 | **Complexity**: Medium-High

```
TEMPLATE STRUCTURE:
Photorealistic abstract visualization of [SUBJECT/ELEMENT] emphasizing
[PATTERN/TEXTURE/MOVEMENT] over literal representation. [CAMERA/SUBJECT
MOVEMENT] creates [VISUAL EFFECT - blur/trails/shapes]. Focus on [COLOR/
FORM/RHYTHM] divorcing from [RECOGNIZABLE CONTEXT]. Evokes [EMOTIONAL/
CONCEPTUAL RESPONSE].

CAMERA SPECIFICATION:
- Focal length: Variable (effect-dependent)
- Aperture: Variable (typically f/2.0-11 based on effect)
- Movement: Often unconventional or extreme
- Shot type: Abstract framing

LIGHTING APPROACH:
- Lighting creates effect not realism
- Color and contrast for visual impact
- Shadows and highlights as compositional elements
- May use unconventional sources

BEAT STRUCTURE (Variable - Rhythm Dependent):
Often abandons narrative beats for visual rhythm
Flow based on movement, color, or form changes
Emphasis on aesthetic experience over story

VARIABLES TO CUSTOMIZE:
[SUBJECT/ELEMENT] = What's being abstracted
[PATTERN/TEXTURE/MOVEMENT] = Visual emphasis
[CAMERA/SUBJECT MOVEMENT] = How abstraction created
[VISUAL EFFECT] = Resulting aesthetic
[COLOR/FORM/RHYTHM] = Primary visual language
[RECOGNIZABLE CONTEXT] = What's removed
[EMOTIONAL/CONCEPTUAL RESPONSE] = Intended feeling/idea
```

**Example Implementation:**
```
Photorealistic abstract visualization of paint droplets in water emphasizing
fluid dynamics color mixing over literal representation. High-speed
photography (240fps) captures droplet impact creating bloom patterns, color
diffusion tendrils, and turbulent flow. Focus on vivid color interaction
and organic form evolution divorcing from recognizable "paint in water"
context toward pure visual experience. Evokes meditation on chaos theory and
emergent beauty.

Shot on Phantom Flex 4K (high-speed specialist), 4K, 240fps source conformed
to 24fps (10x slow-motion). 100mm macro lens at f/8.0, sufficient depth for
droplet depth while maintaining sharpness, focus locked on water surface
impact point. Static camera, locked tripod, subject movement only.

Lighting: Three-point high-speed setup optimized for stop-motion clarity -
(1) Key: Large diffused LED panel camera-right creating main illumination
through transparent water tank, (2) Backlight: Strong LED panel behind tank
creating edge-light and color glow, (3) Top: Overhead panel for surface
definition. All 5600K daylight balanced LEDs. High intensity needed for
240fps frame rate (minimal light gathering time).

Subject setup: Clear glass tank 12"x12"x12" filled with purified water
(clarity), white background 12 inches behind tank (color field), paint
droplets (water-soluble ink) in cyan #00FFFF, magenta #FF00FF, and yellow
#FFFF00 (subtractive primaries), dropped from 18 inches above water surface
using precision pipette, single drop or multiple synchronized drops.

High-speed choreography (10s playback = 100s real-time at 240fps):
0.0s: Cyan droplet approaches water surface (spherical form, falling)
1.0s: Initial impact, surface tension breaks, crown splash forms
2.0s: Crown splash peaks, droplet penetrates creating cavity
3.0s: Cavity collapses, color begins diffusing in tendrils
4.0s: Turbulent diffusion creates bloom pattern
5.0s: Second magenta droplet impacts, colors begin interacting
6.0s: Cyan and magenta tendrils intertwine, purple forms where they mix
7.0s: Yellow droplet enters, three-color interaction begins
8.0s: Complex color mixing creates unexpected secondary colors
10.0s: Colors continue diffusing, organic flow patterns visible

Fluid dynamics: Surface tension visible as droplet deforms on impact, crown
splash formation shows energy transfer, cavity formation and collapse
creates pressure waves, color diffusion follows turbulent flow patterns
(chaotic not symmetrical), density variations create layering, colors mix
subtractively (cyan + magenta = blue, cyan + yellow = green), Rayleigh-
Taylor instability visible in tendril formation.

Abstract emphasis: Frame crops to show only color and form (tank edges not
visible), white background becomes neutral field, droplet source never
shown, scale ambiguous (could be microscopic or cosmic), focus on color
relationships and organic form evolution, deliberate divorce from "paint in
water" literal reading.

Color science: Pure primaries at input (cyan, magenta, yellow), secondary
colors emerge from mixing (blue, green, red-orange), saturation maintained
at +30% for visual impact, white background preserved as pure #FFFFFF
contrast field, no color grading that adds colors not physically present.

Visual rhythm: Movement is continuous flow not cut beats, slow-motion creates
contemplative pace, color interactions provide visual punctuation, organic
randomness prevents pattern prediction, viewer attention held by emergent
beauty.

Conceptual layer: Chaos theory visualization (small input creates complex
unpredictable output), emergent complexity from simple rules (physics),
beauty in randomness, meditation on natural processes, abstract beauty
divorced from utility.

Duration: 10 seconds playback (100 seconds real-time action at 10x slow-mo).

AVOID: Slow frame rate losing fluid detail, insufficient lighting for high-
speed, dirty water reducing clarity, symmetrical or controlled mixing
(loses organic chaos), recognizable container edges in frame, color
combinations that muddy to brown, editing cuts that break flow.
```

---

(CONTINUED IN NEXT MESSAGE DUE TO LENGTH...)

Would you like me to continue with the remaining templates (ART-02 through ART-05, ENV-03, ENV-04) and the Modular Component Systems, Style Presets, and Usage Guidelines?

This library is designed to be immediately production-ready with detailed templates you can customize by simply filling in the bracketed variables. Each template includes complete technical specifications, beat structures, and real-world implementation examples.