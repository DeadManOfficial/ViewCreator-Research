'''
# Part 4: "Glitch" in Action - Prompt Examples

Here are three examples of how Glitch would generate a Sora 2 prompt for a gaming news podcast, each using a different expert facet.

---

### Example 1: The Corporate Takeover

-   **Topic:** A beloved, creatively-driven indie studio is acquired by a massive, publicly-traded publisher known for aggressive monetization.
-   **Expert Facet:** The Political Operator
-   **Core Visual Metaphor:** A small, vibrant, hand-painted diorama (the indie studio) is meticulously encased in a sterile, transparent, acrylic box by robotic arms (the publisher). The box is then placed on a vast, sterile shelf filled with hundreds of identical boxes.

#### Sora 2 JSON Prompt:

```json
{
  "prompt": "Macro shot of a tiny, vibrant, hand-painted diorama of a fantasy world. Suddenly, large, sterile robotic arms descend into the frame, meticulously lowering a transparent acrylic cube over the diorama. The camera pulls back to reveal the cube is being placed onto a vast, sterile, white shelf that stretches into infinity, filled with thousands of identical cubes, each containing a different, once-unique world. The lighting shifts from warm and artisanal to cold, clinical, and uniform.",
  "style": "dystopian corporate realism with a focus on scale and texture",
  "camera_movement": "slow, dramatic pull-back revealing the immense, sterile environment",
  "lighting": "starts warm and intimate, shifts to cold, even, fluorescent lighting",
  "duration": "12s",
  "aspect_ratio": "16:9",
  "mood": "clinical, sterile, mournful, inevitable",
  "additional_parameters": {
    "motion_intensity": "low",
    "color_palette": "vibrant primary colors being washed out by sterile white and transparent acrylic"
  },
  "audio_cues": {
    "music": {
      "style": "a faint, whimsical melody that is slowly drowned out by a low, oppressive electronic hum",
      "volume_db": -20
    },
    "sfx": [
      { "type": "the soft click of the acrylic box sealing shut", "time": "0:06", "volume_db": -8 },
      { "type": "the hum of robotic servos", "time": "0:02", "volume_db": -15 }
    ],
    "ambience": "dead silence, replaced by a faint, sterile room tone"
  },
  "physics": "the subtle reflection and refraction of light through the acrylic, distorting the view of the diorama within",
  "continuity": {
    "character_state": "N/A",
    "props": ["hand-painted diorama", "robotic arms", "acrylic cube", "infinite shelf"],
    "lighting_direction": "top-down, even, shadowless lighting at the end"
  }
}
```

---

### Example 2: The Game-Breaking Bug

-   **Topic:** A newly launched online RPG is plagued by a bug that allows players to duplicate rare items, crashing the in-game economy.
-   **Expert Facet:** The Mechanic
-   **Core Visual Metaphor:** A beautiful, intricate tapestry representing the game's world is being woven by a celestial loom. Suddenly, a single thread snags, and with each subsequent pass of the shuttle, the snag pulls harder, unraveling entire sections of the tapestry into a chaotic mess of loose, tangled threads.

#### Sora 2 JSON Prompt:

```json
{
  "prompt": "An extreme close-up on a beautiful, intricate tapestry being woven on a celestial, cosmic loom. The threads glow with magical energy. A single golden thread snags. The camera follows the shuttle as it passes again, pulling the snag tighter, causing a cascade of unraveling threads. The once-orderly pattern dissolves into a chaotic, tangled mess. The glowing threads flicker and die as they come loose.",
  "style": "mythic fantasy with digital corruption and glitch aesthetics",
  "camera_movement": "tight follow-cam on the shuttle, then a rapid zoom-out to show the scale of the unraveling chaos",
  "lighting": "warm, magical glow that is consumed by encroaching digital noise and darkness",
  "duration": "10s",
  "aspect_ratio": "16:9",
  "mood": "orderly, satisfying, then suddenly chaotic and destructive",
  "additional_parameters": {
    "motion_intensity": "high",
    "color_palette": "gold, royal blue, and emerald green, collapsing into a mess of glitchy, pixelated static"
  },
  "audio_cues": {
    "music": {
      "style": "a serene, orchestral piece that is abruptly interrupted by harsh, distorted digital static and error sounds",
      "volume_db": -15
    },
    "sfx": [
      { "type": "the soft 'thwump' of the loom, which becomes a sharp, tearing sound", "time": "0:04", "volume_db": -9 },
      { "type": "the sound of a thousand threads snapping at once", "time": "0:07", "volume_db": -6 }
    ],
    "ambience": "a gentle, humming harmony that descends into digital noise"
  },
  "physics": "the realistic physics of threads under tension snapping and tangling, combined with the surreal effect of magical energy dissipating",
  "continuity": {
    "character_state": "N/A",
    "props": ["celestial loom", "glowing tapestry", "snagged golden thread"],
    "lighting_direction": "internal glow from the threads, which is extinguished"
  }
}
```

---

### Example 3: The Leak

-   **Topic:** A major, unannounced sequel is leaked via a blurry, off-screen photo of a developer's monitor posted on 4chan.
-   **Expert Facet:** The Leaker (Zero-Day)
-   **Core Visual Metaphor:** A single drop of ink (the leak) falls into a pristine, clear body of water (the publisher's marketing plan). The ink rapidly spreads in cloudy, uncontrollable tendrils, irrevocably staining the entire body of water and obscuring the view of a carefully constructed crystal city at the bottom (the game).

#### Sora 2 JSON Prompt:

```json
{
  "prompt": "A top-down shot of perfectly still, crystal-clear water. A single drop of black ink falls into the center of the frame in slow motion. Upon impact, the ink explodes outwards in chaotic, cloudy tendrils, rapidly obscuring the view of a pristine, glowing crystal city visible at the bottom of the water. The camera slowly zooms in as the black ink completely overtakes the frame.",
  "style": "abstract, minimalist, high-contrast cinematography",
  "camera_movement": "slow, continuous top-down zoom",
  "lighting": "bright, clean, high-key lighting that is consumed by the spreading darkness of the ink",
  "duration": "14s",
  "aspect_ratio": "16:9",
  "mood": "pristine, calm, then sudden and irreversible corruption",
  "additional_parameters": {
    "motion_intensity": "moderate",
    "color_palette": "crystal clear, pure white, and absolute black"
  },
  "audio_cues": {
    "music": {
      "style": "complete silence, broken only by a single, deep, resonant 'thump' as the ink hits the water",
      "volume_db": -12
    },
    "sfx": [
      { "type": "a faint, high-frequency ringing that grows in intensity as the ink spreads", "time": "0:05", "volume_db": -20 }
    ],
    "ambience": "total silence"
  },
  "physics": "hyper-realistic fluid dynamics of the ink spreading through the water in complex, fractal patterns",
  "continuity": {
    "character_state": "N/A",
    "props": ["drop of black ink", "clear water", "crystal city"],
    "lighting_direction": "bright, even light from above"
  }
}
```
'''
