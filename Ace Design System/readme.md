# Ace Design System

**Ace** is a study, project, and interview-prep planner for students, on **iOS and web**. It helps people break a busy term into small, doable tasks and feel a little momentum every day. Tagline: **"Plan it. Do it. Ace it."**

This repository is the brand's design system: tokens, fonts, reusable React components, full-screen UI-kit recreations, and foundation specimen cards.

> **Sources:** This system was built from scratch from a brief ("a to-do app to manage study, projects and interviews, for iOS and web"). No existing codebase, Figma, or brand assets were provided — the brand, name (Ace), logo, palette, and type are original to this system and open to revision.

---

## CONTENT FUNDAMENTALS

How Ace writes copy:

- **Voice:** warm, encouraging, and plain — a calm study buddy, never a drill sergeant or a robot. Celebrate small wins; never guilt-trip.
- **Person:** address the user as **you**; the product refers to itself rarely and never as "I". Imperative for actions ("Add a task", "Review notes").
- **Casing:** **Sentence case** everywhere — buttons, headers, nav, titles. No Title Case, no ALL-CAPS except the tiny overline labels (e.g. `BY CATEGORY`) used as section eyebrows.
- **Tone examples:**
  - Empty state → "Nothing here — nice work." / "Add your first task to get started."
  - Progress → "3 tasks left. You've got this." / "Nice — that's everything for today."
  - Reminders → "Heads up: problem set 4 is due tomorrow."
- **Avoid:** system-speak ("Task creation was successful"), exclamation pile-ups, blame ("You failed to…"), and corporate filler ("utilize", "leverage").
- **Length:** short. Task titles are fragments ("Finish problem set 4"), not sentences. Microcopy is one short line.
- **Numbers:** counts, dates, due times, and percentages are set in the **mono** face (JetBrains Mono) so they line up and read as data — e.g. `7/12`, `in 3 days`, `86%`, `Jun 22 · 9:30`.
- **Emoji:** not used in the product UI. Meaning is carried by color-coded category dots and Lucide icons instead.

---

## VISUAL FOUNDATIONS

- **Colors:** a clean **white-and-blue** system. Brand blue `#2A6FDB` (`--blue-500`) is the single primary; neutrals are a slightly **cool slate** (`--ink-*`). Surfaces are white-on-`--ink-50` page. See `tokens/colors.css`.
- **Category coding:** the planner color-codes work into four hues — **Study = blue**, **Project = violet** `#7C5CFF`, **Interview = amber** `#E8A21C`, **Personal = green** `#1F8A5B`. These appear as checkbox fills, badge dots, and progress bars. Use them functionally, not decoratively.
- **Type:** **Plus Jakarta Sans** for everything from display to UI (geometric-humanist, friendly but crisp), with **JetBrains Mono** reserved for numerics/metadata. Headlines use tight tracking (`-0.02em`) and heavy weights (700–800). See `tokens/typography.css`.
- **Spacing:** 4px base grid (`--space-*`). Generous but not airy; comfortable list density (~12–14px row padding).
- **Backgrounds:** flat and quiet — solid `--ink-50` page behind white cards. **No gradients, no photographic hero imagery, no textures or patterns.** The one allowed "tint block" is a soft category-bg panel (e.g. `--cat-interview-bg`) used to highlight a single callout (the next-interview card).
- **Corners:** medium and consistent — inputs/buttons `8px` (`--radius-md`), cards `12px` (`--radius-lg`), sheets `16–24px`, pills/avatars full. Friendly, not bubbly.
- **Cards:** white surface + **1px hairline border** (`--border-subtle`) + **soft cool-tinted shadow** (`--shadow-sm`). Shadows are low-opacity and blue-black tinted, never harsh. Interactive cards lift `-2px` and deepen to `--shadow-md` on hover.
- **Borders:** hairline `--ink-200` for dividers and card edges; `--ink-300` for input outlines; brand blue for focus.
- **Hover states:** subtle background tint (ghost → `--ink-100`), filled buttons **darken** one step (`--blue-600`). List rows tint to `--ink-50`.
- **Press states:** buttons **scale to 0.98** with a fast 80ms ease; no color flash beyond the active step.
- **Focus:** a 3px brand-blue ring at 30% opacity (`--focus-ring` / `--shadow-focus`).
- **Transparency & blur:** used sparingly — the iOS bottom tab bar is frosted (`backdrop-filter: blur(16px)` over 86% white), and modal scrims are `rgba(20,22,26,0.4)`. Otherwise surfaces are opaque.
- **Animation:** quick and functional. 120–160ms eases for hover/color; the switch knob and progress arcs use a gentle spring/ease-out; progress bars animate width over ~320ms. **No bounce on content, no infinite/looping decoration, no parallax.**
- **Layout rules:** web uses a fixed 248px sidebar (`--sidebar-w`) + fluid content (max ~760px reading column) + optional 300px right rail. Mobile is a single column with a fixed frosted tab bar and a floating action button bottom-right.

---

## ICONOGRAPHY

- **Icon set: [Lucide](https://lucide.dev)** — loaded from CDN (`https://unpkg.com/lucide`). Chosen for its even ~2px stroke, rounded line caps, and friendly-but-neutral feel that matches Plus Jakarta Sans. This is a **substitution** (no icon set was provided in the brief) — flagged below.
- **Style:** outline / stroke icons only (no filled or duotone), ~18–22px in UI, `currentColor` so they inherit text color. Active nav items render the same icon in brand blue.
- **Usage:** icons clarify actions and nav (`plus`, `search`, `calendar-days`, `briefcase`, `clock`, `alert-circle` for overdue). Pair with a text label except in dense toolbars / the FAB.
- **No emoji, no unicode-glyph icons.** Category meaning is carried by colored dots, not emoji.
- **Logo:** original Ace mark — a rounded-square (24% radius) brand-blue app icon with a white check, plus an "Ace" wordmark. Files in `assets/` (`logo-mark.svg`, `logo-wordmark.svg`, `logo-wordmark-inverse.svg`).

---

## INDEX / MANIFEST

**Root**
- `styles.css` — global entry point (import-only). Consumers link this.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills wrapper.

**`tokens/`** — `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `shadows.css`, `fonts.css` (all `@import`ed by `styles.css`).

**`assets/`** — `logo-mark.svg`, `logo-wordmark.svg`, `logo-wordmark-inverse.svg`.

**`components/core/`** — reusable React primitives (`window.AceDesignSystem_db6642`):
`Button`, `IconButton`, `Checkbox`, `Input`, `Badge`, `Card`, `Avatar`, `Tabs`, `Switch`, `ProgressBar`, `ProgressRing`. Each has `.jsx` + `.d.ts` + `.prompt.md`; `core.card.html` is the showcase.

**`ui_kits/`**
- `web/` — desktop planner: Today dashboard (sidebar + task list + progress rail). Entry `index.html`.
- `mobile/` — iOS planner: Today screen with tab bar + add sheet. Entry `index.html`.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) rendered in the Design System tab.

---

## ⚠️ Substitutions to confirm
- **Fonts** are loaded from the **Google Fonts CDN** (Plus Jakarta Sans + JetBrains Mono), not self-hosted binaries. For offline/production use, add `.woff2` files under `assets/fonts/` and swap the `@import`s in `tokens/fonts.css` for `@font-face` rules.
- **Icons** use **Lucide** via CDN as a stand-in for a bespoke icon set.
- **Brand** (name, logo, palette, type) is original — invented for this brief.
