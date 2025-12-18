# The Definitive Sora 2 Expert Prompt Guide: Advanced Structures and Principles

This guide is the result of a hyper-intensive research phase, synthesizing information from academic papers, specialized prompt engineering forums, and professional guides. It details the most advanced Sora 2 prompt structures, focusing on the underlying principles required for **temporal consistency, multi-shot sequencing, and absolute stylistic control.**

---

## I. The Definitive Prompt Structure: The 8-Component Cinematic Script

The most effective, high-control prompt structure is an 8-component script that treats the AI as a full production crew.

| Component | Purpose & Principle | Key Tokens & Modifiers |
| :--- | :--- | :--- |
| **1. Subject & Action** | **Core Narrative:** The central focus and its primary movement. Must use strong, active verbs. | `[Character Name/Archetype]`, `[Active Verb]`, `[Specific Prop]` |
| **2. Environment & Setting** | **World Model Context:** Defines the physical space and its properties. Crucial for physics and lighting. | `[Location]`, `[Time of Day]`, `[Weather]`, `[Atmospheric Effect]` |
| **3. Cinematography** | **Shot List:** The camera's position and framing. Directly controls the composition. | `[Shot Type: e.g., Extreme Close-Up, Wide Shot]`, `[Angle: e.g., Low-Angle, Dutch Tilt]`, `[Framing: e.g., Rule of Thirds]` |
| **4. Technical Metadata** | **Sensor Data:** The most critical layer for **Ultra-Realism**. Mimics real-world camera and lens data. | `Shot on [Camera Model: e.g., ARRI Alexa 65]`, `[Lens: e.g., 50mm Anamorphic]`, `[Aperture: e.g., f/1.4]`, `[Shutter Speed: e.g., 1/50]` |
| **5. Lighting & Color Grade** | **Aesthetic Control:** Defines the mood and visual style. Directly influences the model's color palette. | `[Lighting Type: e.g., Volumetric, Rembrandt]`, `[Color Grade: e.g., Teal and Orange, Desaturated]`, `[Film Stock: e.g., Kodak Portra 400]` |
| **6. Movement & Pacing** | **Temporal Consistency:** Defines the camera's movement and the subject's speed. Essential for smooth, non-glitchy output. | `[Camera Move: e.g., Dolly Zoom, Smooth Tracking Shot]`, `[Pacing: e.g., Slow-Motion, Fast-Paced]`, `[Duration: e.g., 8 seconds]` |
| **7. Stylistic Control** | **Artistic Anchor:** Locks the video into a specific art style or medium. | `[Art Style: e.g., Ukiyo-e, Photorealistic, Pixar-Style 3D]`, `[Medium: e.g., Oil Painting, Stop-Motion Claymation]` |
| **8. Consistency Modifiers** | **Error Correction:** Tokens used to enforce continuity and prevent common AI errors. | `Temporal Consistency`, `Perfect Continuity`, `No Cuts`, `Consistent Character/Wardrobe: [ID/Description]` |

---

## II. Advanced Prompting Techniques for Expert Control

### A. Temporal Consistency and Multi-Shot Sequencing

This is the most challenging aspect of AI video generation. The solution is to structure the prompt as a script with explicit shot breaks.

| Technique | Principle | Example Structure |
| :--- | :--- | :--- |
| **Shot Block Scripting** | Treats the entire prompt as a screenplay. The model is instructed to maintain continuity across blocks. | **SHOT 1:** [Full 8-Component Prompt for Shot A]. **SHOT 2:** [Full 8-Component Prompt for Shot B]. **TRANSITION:** [Match Cut on Motion]. |
| **Character ID Tagging** | To maintain the same character across multiple shots, a unique identifier and detailed description must be repeated. | `Consistent Character: [ID: The Observer, 40s male, worn leather jacket, specific scar above left eye].` |
| **Action Choreography** | Breaking down complex movement into sequential "beats" to ensure smooth flow. | `[Beat 1: Character slowly raises hand]. [Beat 2: Hand pauses, fingers twitch]. [Beat 3: Hand slams down on table].` |

### B. Stylistic Token Libraries (The "Artistic Anchor")

To achieve a specific art style, a combination of medium, artist, and technical tokens is required.

| Style Category | Key Tokens to Use | Example Prompt Segment |
| :--- | :--- | :--- |
| **Hyper-Realism** | **Sensor/Lens:** `RAW photo`, `Canon EOS R5`, `Zeiss Otus 85mm f/1.4`, `Subsurface Scattering`, `Volumetric Lighting`. | `Photorealistic, 8K, RAW photo, Shot on Canon EOS R5 with Zeiss Otus 85mm f/1.4 lens.` |
| **Dystopian/Glitch** | **Aesthetic/Flaw:** `CRT monitor scanlines`, `VHS tracking noise`, `Digital artifacting`, `Teal and Orange grade`, `Low-key lighting`. | `Found footage, VHS tracking noise, 4:3 aspect ratio, digital artifacting, low-key lighting.` |
| **Animation (3D)** | **Engine/Studio:** `Pixar-style 3D animation`, `Rendered in Unreal Engine 5`, `Octane Render`, `Ray Tracing`, `Clean topology`. | `Pixar-style 3D animation, clean topology, rendered in Unreal Engine 5, soft shadows.` |
| **Animation (2D)** | **Medium/Artist:** `Traditional 2D animation`, `Hand-drawn`, `Studio Ghibli style`, `Rotoscoping`, `Watercolor background`. | `Traditional 2D animation, Studio Ghibli style, hand-drawn, watercolor background.` |
| **Abstract/Surreal** | **Concept/Artist:** `Surrealist dreamscape`, `Salvador Dali`, `Escher-like geometry`, `Impossible physics`, `Psychedelic color palette`. | `Surrealist dreamscape, impossible physics, inspired by the geometry of M.C. Escher.` |

---

## III. Ready-to-Use Expert Prompt Example: Multi-Shot Temporal Consistency

This prompt is designed to generate a two-shot sequence that maintains the same character and atmosphere, a critical test of Sora 2's advanced capabilities.

**Content Goal:** A two-shot sequence showing a character's paranoia in a high-tech, low-light environment.

### The Prompt:

> **SHOT 1: Subject & Action:** A man (ID: The Observer, 40s, worn leather jacket, scar above left eye) sits alone at a metal table, slowly raising a cracked ceramic mug to his lips. **Environment:** A dimly lit, concrete bunker. The only light source is a single, flickering fluorescent tube overhead. **Cinematography:** Medium Close-Up, slightly high angle. **Technical Metadata:** Shot on **RED Komodo**, **50mm Anamorphic lens**, **f/2.8**, **1/50 shutter**. **Lighting & Color:** High-contrast, hard shadows, **Desaturated Teal and Grey** color grade. **Movement:** Camera is static. Subject's movement is slow and deliberate. **Consistency Modifiers:** Temporal Consistency, Perfect Continuity.
>
> **SHOT 2: Subject & Action:** The same man (ID: The Observer) quickly turns his head to look over his shoulder. **Environment:** Same concrete bunker. **Cinematography:** Over-the-Shoulder Shot (OTS), focusing on the empty doorway behind him. **Technical Metadata:** Shot on **RED Komodo**, **35mm Anamorphic lens**, **f/2.8**, **1/50 shutter**. **Lighting & Color:** Same high-contrast, hard shadows, **Desaturated Teal and Grey** color grade. **Movement:** Fast, sharp head turn. Camera is static. **Consistency Modifiers:** Temporal Consistency, Perfect Continuity, **Maintain Wardrobe and Scar.**

This structure provides the AI with all the necessary information to execute a complex, consistent, and highly controlled cinematic sequence.
