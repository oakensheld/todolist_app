---
name: ace-design
description: Use this skill to generate well-branded interfaces and assets for Ace, a study/project/interview planner for students (iOS + web), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map
- `readme.md` — full design guide: voice, visual foundations, iconography, manifest.
- `styles.css` — link this once; it `@import`s all tokens + fonts.
- `tokens/` — CSS custom properties (colors, type, spacing, radius, shadows, fonts).
- `components/core/` — React primitives. Build the bundle, then read via `window.AceDesignSystem_db6642`. Each has a `.prompt.md` with usage.
- `ui_kits/web` and `ui_kits/mobile` — full interactive screen recreations to copy patterns from.
- `assets/` — logo files.

## Essentials
- Brand blue `#2A6FDB`; cool-slate neutrals; white surfaces on `--ink-50`.
- Plus Jakarta Sans (UI/display) + JetBrains Mono (numbers/dates/%).
- Category coding: study=blue, project=violet, interview=amber, personal=green.
- Sentence case, warm/encouraging copy, no emoji. Lucide outline icons.
- Medium radii (8/12px), soft cool shadows, hairline borders, 120–160ms eases, press scales to 0.98.
