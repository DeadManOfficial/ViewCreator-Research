# ViewCreator Design Analysis

## 1. Color Palette
- **Background:** Very dark blue/black (approx. `#0a0a0f` or `#05050a`).
- **Sidebar:** Slightly lighter dark blue (approx. `#0f1016`).
- **Accent/Primary:** Bright Blue (approx. `#3b82f6` or `#2563eb`) used for buttons ("Create Agent", "Add Step") and active states.
- **Text:** White/Off-white for primary text, muted gray for secondary.
- **Borders:** Very subtle, dark borders.

## 2. Layout Structure
- **Sidebar (Left):**
    - **Header:** "ViewCreator" Logo + Credits Counter (Card style).
    - **Navigation:**
        - **Platform:** Post, Platform Tools (Accordion: YouTube, Instagram, Facebook, TikTok, X).
        - **Tools:** Create, Profiles, Connect Socials, Analytics, Trends.
        - **Agents:** Agents, AI Clipping Agent, Spark.
        - **Utility:** Calendar.
    - **Footer:** Settings, Sign out.
- **Main Content Area:**
    - **Canvas/Flow View:** A node-based graph view (Start -> Plan -> Video -> Publish) connected by curved blue lines.
    - **Playground View:** Split pane. Left side for configuration (Text/Image mode, Quality, Aspect Ratio), Right side for preview/canvas.

## 3. UI Components
- **Buttons:** Rounded corners, solid blue fill for primary, ghost/outline for secondary.
- **Cards:** Dark, glass-like background with subtle borders.
- **Inputs:** Dark background, rounded corners.
- **Icons:** Line icons (Lucide style matches well).
- **Typography:** Sans-serif, clean (Inter or similar).

## 4. Specific Features to Recreate
- **Credits Display:** Prominent "Credits: 25" card in sidebar.
- **Platform Tools Accordion:** Collapsible list of social platforms.
- **Flow Visualization:** The "Start -> Plan -> Video -> Publish" visual pipeline is key to the "Agent" feel.
- **"Playground" Interface:** The specific layout for creating content (Text vs Image toggle).
