# Ace backend

REST API for the Ace planner's tasks and lists, backed by SQLite (`ace.db`, created on first run).

## Run

```
npm install
npm start
```

Listens on `http://localhost:3001` (override with `PORT`). The web UI kit at
`../Ace Design System/ui_kits/web/index.html` calls this API directly — open that file
in a browser while this server is running.

## Endpoints

- `GET /api/lists` — lists with `open` task counts.
- `GET /api/tasks` — all tasks, newest first.
- `POST /api/tasks` — body `{ title, listId, dateKey, dueTime }`.
- `PATCH /api/tasks/:id` — body `{ done }` (omit to toggle).
- `DELETE /api/tasks` — body `{ ids: [...] }`.
