# Ace — Mobile (iOS) UI kit

A high-fidelity iPhone recreation of the Ace planner. Open `index.html` for the interactive build.

## Structure
- **PhoneFrame** (`PhoneFrame.jsx`) — iPhone 14-style bezel, dynamic island, status bar, home indicator.
- **TodayScreen** (`TodayScreen.jsx`) — date header + daily-goal ring, tasks grouped by Morning / Afternoon in rounded cards, a floating + button, a frosted bottom tab bar (Today / Calendar / Prep / You), and a slide-up **add sheet**.

## Interactions
- Tap a checkbox to complete a task (ring + strike-through update).
- Tap **+** to open the add sheet; type a title and **Add to Today**.
- Tab bar switches the active section.

## Composition
Uses Ace core components (`window.AceDesignSystem_db6642`): Checkbox, Badge, ProgressRing, Button, Input. Icons are Lucide (CDN). Frosted bar uses `backdrop-filter`; sheet uses the `--shadow-xl` token and a 24px sheet radius.
