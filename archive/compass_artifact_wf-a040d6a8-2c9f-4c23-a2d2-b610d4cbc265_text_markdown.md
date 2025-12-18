# The complete guide to AI video and image prompting frameworks

Mastering AI-generated video and images requires understanding that each model interprets prompts differently—but a universal framework exists. The most effective prompts combine **specific subject descriptions**, **precise motion/camera language**, **lighting and mood specifications**, and **technical parameters** in a structured format. Sora 2 and Veo 3 now rival professional cinematography when prompted correctly, while image models like Midjourney v6+ and Flux have matured to near-photorealistic quality with proper syntax.

This guide provides copy-paste ready templates, model-specific parameters, and style-specific prompt libraries tested by the community across r/StableDiffusion, r/midjourney, and professional production pipelines.

---

## Universal prompt architecture works across all models

The most reliable prompting structure follows this hierarchy regardless of platform:

```
[Camera/Shot Type] + [Subject + Action] + [Environment/Setting] + [Lighting/Time] + [Style/Mood] + [Technical Parameters]
```

**Sora 2 example using this structure:**
```
Medium close-up, slow dolly-in: A weathered fisherman in his 60s adjusts his captain's hat while standing on a misty harbor dock at dawn. Soft golden hour backlight with cool fog diffusion. Shot on 35mm film, shallow depth of field. Cinematic, nostalgic mood.
```

**Key differences for video vs. image prompts include** using present tense exclusively ("A woman walks" not "walked"), specifying camera movement early in the prompt, describing environmental motion (wind, water currents), and adding consistency anchors for multi-shot sequences. The optimal prompt length varies: **3-6 sentences for Sora 2**, **10-25 words core for Veo 3**, and **under 60 words for Midjourney**.

---

## Sora 2 prompting demands cinematic precision

OpenAI's Sora 2 responds best to prompts structured like cinematographer briefings. The official OpenAI Cookbook recommends separating visual prose from technical specifications:

**Sora 2 template structure:**
```
[Prose scene description - characters, costumes, scenery, weather, details]

Cinematography:
Camera shot: [framing and angle]
Mood: [overall tone]

Actions:
- [Action 1: specific beat or gesture]
- [Action 2: distinct beat]

Dialogue (if applicable):
- Character: "Short natural line"
```

The critical insight from community testing is that **one camera move plus one subject action per shot** produces the most reliable results. Attempting multiple simultaneous movements causes artifacts and inconsistencies.

**Camera terminology that Sora 2 understands reliably:**
- **Dolly in/out** (physical forward/backward movement)
- **Track left/right** (lateral movement)
- **Pan/Tilt** (horizontal/vertical rotation)
- **Crane/Jib** (vertical lift)
- **Steadicam** (stabilized handheld)
- **Static tripod** (no movement)

**Character consistency** is achieved through Sora 2's Cameo feature—recording a verification video creates a persistent "character DNA profile" that maintains identity across scenes. For manual consistency, repeat physical traits in every shot and use exclusions like "no costume changes, retain backpack logo."

Sora 2 does not support formal negative prompts but responds to exclusion phrasing: "avoid Dutch angles; no on-screen text; no lens flare; stable horizon; no warp; no stretch."

---

## Veo 3 excels at native audio integration

Google's Veo 3.1 produces 720p-1080p video up to **8 seconds** with native dialogue, sound effects, and ambient audio generation—its standout capability. The optimal prompt formula follows:

```
[Cinematography] + [Subject] + [Action] + [Context] + [Style & Ambiance]
```

**Audio integration syntax:**
```
A woman says, "We have to leave now."
SFX: thunder cracks in the distance
Ambient noise: the quiet hum of a starship bridge
```

**Veo 3 tested example with integrated audio:**
```
Medium shot frames an old sailor, knitted blue sailor hat casting shadow over his eyes, thick grey beard obscuring his chin. He holds his pipe, gesturing toward the churning grey sea. "This ocean, it's a force, a wild, untamed might. And she commands your awe, with every breaking light."
```

Veo 3's **timestamp prompting** enables precise shot timing:
```
[00:00-00:02] Medium shot from behind explorer pushing aside jungle vine...
[00:02-00:04] Reverse shot of explorer's face, expression filled with awe...
[00:04-00:06] Tracking shot following explorer touching stone carvings...
```

The **Ingredients-to-video** workflow maintains character consistency by providing reference images for characters, objects, and settings before generation.

---

## Runway Gen-4 requires image input with motion focus

Runway's Gen-4/4.5 is strictly an **image-to-video model**—it cannot generate from text alone. The critical principle: **don't redescribe the input image**, only describe desired motion.

**Runway prompt structure:**
```
[Subject Motion]: [Action Description]. [Camera Movement]. [Style/Atmosphere].
```

**Correct approach:**
- Image: Portrait of woman looking at camera
- Prompt: "She slowly turns her head to the left, a gentle smile forming on her lips."

**Incorrect approach:**
- "A woman in a red dress walks, then transforms into a bird while seasons change" (too complex, multiple transformations)

**Runway does NOT support negative prompts**—phrasing like "no movement" or "camera doesn't move" may cause opposite results. Use positive guidance: "static camera" rather than "no camera motion."

**Camera control sliders (Gen-3 Alpha Turbo)** allow values from -10 to +10:
- Horizontal, Vertical, Pan, Tilt, Zoom, Roll
- **Intensity guide:** 0.1-1 subtle, 2-4 moderate, 5-7 dramatic, 8-10 intense

The **References feature** in Gen-4 Image enables character consistency by uploading up to 3 reference images per generation. Tip: describe shoes/pants explicitly to achieve full-body shots.

---

## Kling AI offers JSON controls and negative prompts

Kling stands apart by supporting both **text-to-video AND image-to-video** with native negative prompt capabilities. The professional template:

```
[Shot type] of [subject] [action/movement], [environment/setting], [camera movement], [lighting/mood], [style/aesthetic]
```

**Kling 2.x API JSON syntax:**
```json
{
  "model": "kling-v1",
  "prompt": "A futuristic cityscape at dusk with flying cars, cinematic lighting, slow pan shot",
  "negative_prompt": "blur, distortion, watermark, flickering, morphing faces, extra limbs",
  "duration": 5,
  "aspect_ratio": "16:9",
  "quality": "professional"
}
```

**Motion Brush** (available in Kling 1.0/1.5, not 1.6) allows painting specific areas for animation with drawn motion pathways. Supports up to 6 simultaneous motion trajectories. Camera Movement is disabled when Motion Brush is active.

**Version differences matter:**
- **Kling 1.6**: 195% improvement in image-to-video, Motion Brush temporarily removed
- **Kling 2.0**: Improved prompt control, lifelike motion, cinematic 1080p
- **Kling 2.6**: Native audio generation with synchronized output

The **creativity and relevance sliders** control interpretation: lower creativity = more literal, higher relevance = stricter prompt adherence.

---

## Midjourney v6+ parameter mastery drives quality

Midjourney's power lies in its parameter system. The complete reference:

| Parameter | Syntax | Values | Function |
|-----------|--------|--------|----------|
| Aspect Ratio | `--ar` | Any ratio | Image dimensions |
| Stylize | `--s` | 0-1000 | Artistic interpretation (100 default) |
| Chaos | `--c` | 0-100 | Variation between results |
| Quality | `--q` | 0.5, 1, 2 | Detail level |
| Weird | `--weird` | 0-3000 | Experimental qualities |
| No | `--no` | keywords | Negative prompting |
| Style Raw | `--style raw` | flag | Less opinionated, more literal |
| Style Reference | `--sref` | URL | Transfers aesthetic, color, texture |
| Character Reference | `--cref` | URL | Maintains character identity |

**Multi-prompt syntax with weights:**
```
space::2 ship::1
```
Numbers indicate relative importance—space receives 2x weight. Negative weights (`fruit::-0.5`) exclude elements while keeping total positive.

**V6 best practices from official documentation:**
- Avoid junk words: "award winning, photorealistic, 4k, 8k, ultra"
- Use `--style raw` for photographic results
- Lower `--stylize` (50-100) for better prompt adherence
- Natural language works well—complete sentences preferred
- Specify lighting, camera, and mood explicitly

**Cinematic Midjourney template:**
```
cinematic still, [genre/style], [character description], [action], 
[environment with specific details], [lighting description], 
[camera shot type], --ar 2.35:1 --stylize 500 --v 6.1
```

---

## Flux uses natural language without prompt weights

Flux models (Pro, Dev, Schnell) differ fundamentally from Midjourney by using **natural language** descriptions without weight syntax. The `++` or `::` notation does not work.

**Natural language alternatives to weights:**
- Instead of `(rose)++`, write: "with emphasis on the rose"
- Instead of weighting, use: "prominently featuring," "with a strong focus on"

**Flux excels at text generation in images**—describe font, style, size, color, and placement explicitly:
```
A vintage travel poster for Paris. At the top, 'PARIS' is written in large, elegant Art Deco font, golden color with a slight 3D effect. At the bottom, 'City of Lights' appears in smaller, cursive text with soft neon glow.
```

**Layered image prompting structure:**
```
"In the foreground, [element A with details]. 
Behind it, [element B with details]. 
In the background, [element C with details]."
```

**Flux LoRA integration** requires ComfyUI setup with model files in appropriate directories. Guidance scale of **3.5** is optimal for most use cases. The T5 encoder works best at ~256 tokens—longer prompts don't improve results.

---

## Open-source video models require technical parameter control

### Stable Video Diffusion (SVD)
SVD is **image-to-video only**—no direct text prompts. Control comes from micro-conditioning parameters:

| Parameter | Range | Recommended |
|-----------|-------|-------------|
| `motion_bucket_id` | 0-255 | 127 default, 180 for dynamic |
| `noise_aug_strength` | 0.0-1.0 | 0.02-0.1 |
| `fps` | 3-30 | 6-7 standard |
| `decode_chunk_size` | 1-25 | 8 default, 2 for low VRAM |

**Motion LoRAs** enable camera control: horizontal pans, vertical tilts, zoom in/out.

### AnimateDiff
AnimateDiff injects motion modules into Stable Diffusion 1.5 models, enabling text-to-video from any SD1.5 checkpoint.

**Motion LoRAs available:**
- `v2_lora_ZoomIn.ckpt`, `v2_lora_ZoomOut.ckpt`
- `v2_lora_PanLeft.ckpt`, `v2_lora_PanRight.ckpt`
- `v2_lora_TiltUp.ckpt`, `v2_lora_TiltDown.ckpt`

**Usage:** `<lora:v2_lora_ZoomIn:0.8>, portrait of a woman`

### CogVideoX
Trained on **long, detailed prompts**—use LLM (ChatGPT/GLM-4) to expand simple prompts. The 5B model produces 720×480 resolution at 6 seconds.

**Camera control LoRA triggers:**
```
"Camera moves to the left..."
"Zoom_in camera movement..."
```

### HunyuanVideo
The largest open-source model at **13 billion parameters**. Responds well to natural language and cinematic terminology. Use Master Mode for composition, lighting, and camera movement enhancement.

---

## Style-specific prompt frameworks produce targeted aesthetics

### Film Noir
```
Film Noir style, B/W photo, 1940s atmosphere, dimly lit bar, shadows dancing on walls, 
detective with cigarette, face partly hidden by fedora, high contrast, chiaroscuro lighting, 
hard shadows, wet asphalt reflections --ar 2.35:1 --style raw
```
**Key terms:** high contrast lighting, low-key, chiaroscuro, backlit silhouette, practical lighting, hard shadows, Dutch angle, desaturated cool tones

### Cyberpunk/Sci-Fi
```
Neon-lit cyberpunk alley at night, rain-slick pavement, holographic advertisements, 
teal and orange color grade, shot on 85mm lens, shallow depth of field, 
solitary figure in trench coat, drone cam gliding overhead, synthwave palette
```
**Key terms:** neon glow, holographic, bio-luminescent, RGB lighting, wet pavement reflections, urban dystopia, HUD overlays

### VHS/Analog Aesthetic
```
Shot on VHS, grainy texture, analog tracking lines, color degradation, 
lo-fi aesthetic, scan lines, color bleeding, date stamp in corner, 
80s retro vibe, slightly blurry, warm sepia undertones
```
**Key terms:** VHS screen grab, analog distortion, tracking artifacts, static noise, RGB color separation, screen wobble, heavy film grain

### Product Photography
```
Professional photo of product on polished marble countertop, 
soft gradient background in pastel tones, three-point lighting setup, 
main light from right, shallow depth of field, 8K resolution, 
commercial photography style, clean reflections
```
**Key terms:** studio lighting setup, soft box lighting, high-key lighting, soft diffused highlights, hard rim lights, reflective surface, glossy highlights

### Anime/Animation
```
Studio Ghibli style, a girl in traditional Japanese clothing with white wolf beside her, 
standing in front of magical torii shrine, soft natural lighting, 
detailed background --niji 6 --style expressive
```
**Key terms:** `--niji 5/6`, `--style expressive/cute/scenic`, cel-shaded, Studio Ghibli, Makoto Shinkai style, hand-drawn lines

---

## Camera and lighting terminology reference

### Shot Types
| Shot | Abbreviation | Frame |
|------|--------------|-------|
| Extreme Wide | EWS | Vast environment |
| Wide | WS | Full subject + surroundings |
| Medium Wide | MWS | Knees up |
| Medium | MS | Waist up |
| Medium Close-Up | MCU | Shoulders up |
| Close-Up | CU | Face fills frame |
| Extreme Close-Up | ECU | Eyes/detail only |
| Over-the-Shoulder | OTS | Third-person perspective |

### Camera Movements
| Movement | Description | Prompt phrasing |
|----------|-------------|-----------------|
| Dolly | Forward/backward on tracks | "slow dolly forward toward subject" |
| Track/Truck | Sideways movement | "truck left parallel to subject" |
| Pan | Horizontal rotation | "smooth pan left revealing scene" |
| Tilt | Vertical rotation | "tilt up from ground to sky" |
| Crane | Vertical lift | "crane shot descending from aerial" |
| Arc | Circular around subject | "camera orbits 180 degrees" |
| Steadicam | Stabilized handheld | "steadicam following through crowd" |
| Whip Pan | Rapid horizontal rotation | "whip pan transition" |

### Lighting Patterns
- **Rembrandt:** Triangle of light on shadowed cheek—dramatic, artistic
- **Butterfly:** Shadow under nose—beauty, fashion
- **Split:** Half face lit—mystery, drama
- **Rim/Back light:** Separates subject from background
- **High-key:** Bright, minimal shadows
- **Low-key:** Dark, dramatic shadows
- **Golden hour:** Warm natural backlight

### Lens Reference
| Focal Length | Effect | Best for |
|--------------|--------|----------|
| 14-24mm | Ultra wide, distortion | Landscapes, architecture |
| 35mm | Standard wide, natural | Documentary, street |
| 50mm | Human eye equivalent | General purpose |
| 85mm | Portrait compression, blur | Portraits, beauty |
| 135mm+ | Strong compression | Dramatic portraits, wildlife |
| Anamorphic | 2.39:1 ratio, oval bokeh | Cinematic widescreen |

---

## Failure modes and how to avoid them

| Problem | Cause | Solution |
|---------|-------|----------|
| **Character drift** | Missing trait repetition | Repeat physical traits in every shot; use reference images |
| **Motion artifacts** | Too many simultaneous actions | One hero action per shot |
| **Camera instability** | Over-specifying movements | Use "static tripod" or single move |
| **Unexpected cuts** | Model tendency | Specify "single continuous shot without cuts" |
| **Body distortions** | Limited training data | `--no extra fingers, distorted hands` |
| **Static output** | Motion descriptors late in prompt | Place motion words early; increase motion_bucket_id for SVD |
| **Temporal flickering** | Complex scenes | Simplify visual elements; use FreeInit |
| **Style inconsistency** | Conflicting terms | Don't mix "handheld" + "cinematic" |

**Prompt failures to avoid:**
- Vague instructions ("make a cool video")
- Contradictory elements ("rainy desert sunset")
- Multi-scene complexity in single generation
- Past tense for video ("walked" instead of "walks")
- Negative phrasing in Runway ("no movement")

---

## Multi-tool production workflows

### Professional AI Video Pipeline
```
1. ChatGPT → Script/shot list generation
2. Midjourney → Storyboard frames/concept art
3. Upscaling (Topaz/BigJPG) → Enhanced resolution
4. Runway/Kling → Image-to-video conversion
5. Premiere Pro/DaVinci → Final editing, audio sync
6. Post-processing → Color grade, text overlays
```

### Curious Refuge Method (Feature Film)
1. ChatGPT: Plot ideas, script, shot creation
2. Google Docs: Refined script, organized shot list
3. Midjourney: Visual storyboards (34+ frames typical)
4. Runway Gen-4: Text-to-video generation
5. Premiere Pro: Final assembly

### Quick Iteration Workflow
1. Generate with Midjourney `--style raw`
2. Upscale 2-4x with BigJPG (free)
3. Import to Runway for 5-second animation
4. Add camera movement via prompt
5. Extend if needed with Kling

---

## Expert sources and communities

**Prompt marketplaces:**
- PromptHero (prompthero.com)—millions of tested prompts
- PromptBase—230k+ prompts for Midjourney, Sora, Veo
- Promptsera—free universal prompt engine

**Communities:**
- r/StableDiffusion, r/midjourney, r/SoraAI, r/PromptEngineering
- CivitAI—model downloads and fine-tuned checkpoints
- OpenAI Developer Community

**Official documentation:**
- OpenAI Cookbook Sora 2 Prompting Guide
- Google DeepMind Veo Prompt Guide
- Runway Help Center Gen-4 Guide
- Hugging Face Diffusers documentation

**Tutorial resources:**
- Curious Refuge—AI Filmmaking Pipeline courses
- stable-diffusion-art.com—comprehensive guides
- learn.runcomfy.com—ComfyUI workflows

---

## Conclusion: Actionable synthesis

The convergence of video and image AI has created a new visual language where **specificity trumps creativity in prompts**. Models trained on billions of images respond to precise cinematographic terminology—"35mm lens, f/2.0, Rembrandt lighting" produces dramatically different results than "professional photo."

The most important insight from this research: **structure your prompts like a film brief**, not creative writing. Camera movement first, subject second, environment third, style last. Use present tense for video. Repeat character anchors obsessively for consistency. Test with fixed seeds for reproducible iteration.

For production work, the optimal stack as of December 2025 is Midjourney v6+/Flux for stills → Runway Gen-4 or Kling 2.x for animation → professional editing software for final assembly. Open-source alternatives (HunyuanVideo, CogVideoX) now approach commercial quality for those with adequate hardware.

The field continues advancing rapidly—Sora 2's Cameo feature and Veo 3's native audio represent genuine workflow improvements over 2024 capabilities. Subscribe to r/StableDiffusion and follow the official model documentation to stay current as these systems evolve.