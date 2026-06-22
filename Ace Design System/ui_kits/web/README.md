# Ace — Web app UI kit

A high-fidelity recreation of the Ace desktop planner. Open `index.html` for the interactive build.

## Screens / regions
- **Sidebar** (`Sidebar.jsx`) — logo, primary nav (Today / Upcoming / All / Interview prep), color-coded lists, user footer.
- **TodayView** (`TodayView.jsx`) — date header, quick-add input, To do / Done / All filter tabs, the task list, and a right rail with the daily-goal ring, per-category progress, and the next interview card.
- **TaskRow** (`TaskRow.jsx`) — checkbox (category-colored), title with strike-through when done, list badge, due time (red + alert icon when overdue), drag handle on hover.

## Interactions
- Check / uncheck tasks (updates counts, ring, and strike-through).
- Quick-add: type a title, Enter or **Add** to prepend it.
- Filter tabs switch between open / done / all.

## Composition
Built entirely from Ace core components (`window.AceDesignSystem_db6642`): Button, Input, Checkbox, Tabs, Card, Badge, ProgressBar, ProgressRing, Avatar. Icons are Lucide (CDN). Layout uses the `--sidebar-w`, spacing, radius and shadow tokens.
