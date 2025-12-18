# Appendix: Key Prompt Templates

This appendix provides ready-to-use prompt templates extracted from the analyzed documents. These templates can be copied, customized, and deployed immediately for various professional applications.

---

## 1. Lead Generation & Outreach Prompt

```
You are a prospecting and outreach research assistant.  
Your job is to identify **10 potential clients** in the [NICHE/INDUSTRY] within [LOCATION].  
The goal is to find businesses that have websites but are underperforming in SEO, so we can offer them tailored services.  

### Step 1: Find Businesses
- Search for businesses in the [NICHE/INDUSTRY] within [LOCATION].  
- Collect their website URLs.  

### Step 2: Evaluate Website SEO Weaknesses
For each business, review its website and identify **specific issues** such as:  
- Missing or poorly optimized title tags  
- Lack of local keywords (e.g., "[NICHE/INDUSTRY] in [LOCATION]")  
- Weak or missing meta descriptions  
- No H1 headings or poor keyword targeting  
- Missing or incorrect local schema markup  
- Lack of Google Business Profile integration or visibility  
- Outdated design, poor mobile responsiveness, or slow load speed  
- Missing location/service pages  

### Step 3: Collect Business & Contact Info
- Business Name  
- Website URL  
- Owner or Primary Contact Person (if available)  
- Email Address (preferably business or owner's email)  

### Step 4: Output Results in a Table
Format your findings into a table with these columns:  
1. Business Name  
2. Website URL  
3. Contact Person (if available)  
4. Email Address  
5. Key SEO Issues  

### Step 5: Generate a Custom Outreach Email for Each Prospect
For every business found, draft a **personalized outreach email** that includes:  
- Greeting with contact name (if available)  
- Mention of their business name and website  
- Reference to **specific SEO issue(s)** found on their site  
- A short explanation of how fixing these issues could bring more visibility, leads, and local clients  
- A simple, direct offer (e.g., free SEO audit, consultation, or quick call)  
- Clear call-to-action to reply  

The email should be professional, helpful, and **tailored** to the business, not generic.  
```

---

## 2. Professional Content Writer Prompt

```
You are a professional content writer trained to create high-quality, SEO-friendly blog posts.  
Follow these rules strictly when generating content:  

1. **Tone of Voice:**  
   - Adhere 100% to the provided tone of voice guidelines in [TONE_OF_VOICE_DOC].  
   - The writing must feel natural, approachable, and aligned with the user's personal brand.  

2. **Readability:**  
   - Write at an eighth-grade reading level to keep the content widely accessible.  
   - Use short paragraphs, clear transitions, and simple phrasing without dumbing things down.  

3. **Data-Backed Statements:**  
   - Whenever a claim or strong statement is made, back it up with **numbers, studies, or reliable data**.  
   - Insert hyperlinks *inline* with the contextual keyword, not at the bottom.  
     Example: "Businesses that blog regularly see a **67% increase in leads** ([source](https://www.example.com/study-link))."  

4. **Images:**  
   - Suggest 2–3 natural placements for images throughout the blog post.  
   - Each time you suggest an image, provide:  
     a) A short description of what the image should be.  
     b) A ready-to-use AI image generation prompt for an image generator.  
     Example:  
     _Image suggestion: A flat-lay photo of a coffee cup next to an open laptop._  
     _Image prompt: "Top-down view of a wooden desk with a laptop, notebook, and coffee cup, natural lighting, realistic photography."_  

5. **Formatting:**  
   - Use headings and subheadings (H2, H3) to structure the content.  
   - Include bulleted lists or tables where they clarify points.  
   - Keep a strong flow: Hook → Main Points → Supporting Data → Takeaway.  

6. **Deliverable:**  
   - A complete blog post that is engaging, accessible, fact-checked, visually supported with image prompts, and in the user's exact tone of voice.  
   - Length: 1,200–1,800 words unless otherwise specified.  
```

---

## 3. YouTube Thumbnail Master Prompt

```
[INPUTS — fill these in]
VIDEO TITLE:
TOPIC / NICHE:
TARGET VIEWER (who is this for?):
PRIMARY EMOTION TO TRIGGER (pick 1): curiosity / shock / awe / urgency / humor / fear / desire / "wtf"
1-SENTENCE PAYOFF (what the viewer gets if they click):
MAIN SUBJECT (me / a person / a product / a character):
REFERENCE IMAGES (optional): (A) subject image (B) background image (C) logo/brand elements
KEY PROP / SYMBOL (optional):
BACKGROUND SETTING:
BRAND STYLE (colors / vibe): 
TEXT ON THUMBNAIL (<= 4 words, exact text in quotes):
FONT STYLE (e.g., bold condensed sans, handwritten marker, tech):
AVOID (competitors' style, clichés, anything off-brand):

[ROLE]
You are a YouTube Thumbnail Art Director + High-CTR Visual Designer.

[TASK]
Generate 6 distinct thumbnail options designed for high click-through rate.
Each option must:
- be 16:9, designed at 1280×720, and readable at phone size
- use a single dominant focal point (face/object) with strong contrast
- keep background simplified + slightly defocused so the subject pops
- include only the exact overlay text requested (no extra text)
- look sharp, premium, and not "AI mush"
- avoid watermarks, logos you invent, garbled text, extra fingers/limbs, or warped faces

[COMPOSITION RULES]
- Subject occupies ~60–70% of frame; eyes/feature on upper third.
- Big expression / clear gesture toward prop or outcome.
- One clear "story beat" (before→after, problem→solution, reveal, danger, impossible result).
- Add a thin outline/rim light around subject for separation (subtle, not cartoon).

[STYLE + CAMERA]
Photorealistic, cinematic lighting, crisp edges, high micro-contrast, shallow depth of field, 35–50mm look.
Color grade: high contrast, slightly saturated, clean highlights, no haze.

[OUTPUT]
Create the single best thumbnail image first (Option 1), then produce Options 2–6 as variations:
- change the hook mechanism (e.g., reaction vs. reveal vs. comparison)
- change background setting OR prop OR framing
- keep brand style consistent across all 6
```

---

## 4. Professional Headshot Master Template

```
Using uploaded Image A (my selfie), create a photorealistic, professional headshot.

KEEP (must not change):
- My identity, facial structure, age, eye shape, nose, mouth, hairline, hairstyle length, and skin texture.
- My expression should remain natural and believable (no uncanny smile).
- Preserve defining marks (moles/freckles/scars). Remove only temporary blemishes.

CHANGE (allowed):
- Professional studio lighting, background, wardrobe, and subtle color grading.

COMPOSITION:
- Head-and-shoulders crop, eye-level camera, slight 10–15° turn.
- Shallow depth of field (portrait look), sharp eyes, natural catchlights.
- Clean background blur; no clutter.

RETOUCH STYLE (anti "Botox / glow-up"):
- No face slimming, no plastic-skin smoothing, no exaggerated teeth whitening, no heavy glam makeup.

OUTPUT:
- Square (1:1) for LinkedIn, high resolution.
```

---

## 5. Social Media Hook Lab Prompt

```
Input:
Core idea: "<IDEA>"
Platform: "<LinkedIn | X | IG | TikTok | YouTube Shorts>"
Voice: "<VOICE>"

Prompt:
Write 20 hooks for <IDEA> on <Platform> in <Voice>.
Constraints:
- 8 hooks must be "pattern interrupts" (odd specificity / surprising contrast).
- 6 hooks must be question hooks (no yes/no).
- 6 hooks must be authority hooks (proof cue without bragging).
No clichés (e.g., "game-changer," "unlock," "here's the thing").
Rank the top 5 by likely retention and explain each in 1 sentence.
```

---

## 6. Content Repurposer Framework

```
I have a long-form article/video transcript about [topic]. Turn it into [number] of different content formats:
- A Twitter thread.
- An Instagram carousel outline (slide titles + key points).
- A LinkedIn post.
- 3 short-form video script ideas (with hooks).
```

---

## 7. Strategic Debate Simulator

```
Act as two experts with opposing views on [topic].
Expert A argues for it. Expert B argues against it.
After the debate, give me a balanced summary and your final recommendation.
```

---

## 8. Failure First Planner

```
Imagine my [goal or project] has failed badly.
List the 5 main reasons it failed.
Then turn each reason into a prevention step in a new plan.
```

---

## 9. Myth vs. Reality Authority Builder

```
Create a social post about [topic]. List 3 common myths, then for each, provide the reality in a concise, shareable way.
```

---

## 10. Carousel Architect (Instagram/LinkedIn)

```
Topic: "<TOPIC>"
Audience: "<AUDIENCE>"

Create a 10-slide carousel outline:
Slide 1: strongest hook (<=7 words)
Slides 2–4: problem + stakes
Slides 5–8: framework (numbered steps)
Slide 9: common mistake + fix
Slide 10: recap + CTA
For each slide: headline + 1–2 supporting bullets.
Also provide 3 cover options and a short caption (<120 words).
```

---

These templates are designed to be modular and adaptable. Customize the placeholders (indicated by square brackets or angle brackets) to fit your specific use case, and iterate based on the results you receive from the AI.
