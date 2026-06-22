const express = require('express');
const cors = require('cors');
const { db } = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

const TODAY_KEY = '2026-06-22';
const SCHEDULED_BY_DATE = { '2026-06-22': 'today', '2026-06-23': 'tomorrow', '2026-06-25': 'wed', '2026-06-28': 'later' };

function scheduledFor(dateKey) {
  return SCHEDULED_BY_DATE[dateKey] || null;
}

function rowToTask(row) {
  return {
    id: row.id,
    title: row.title,
    note: row.note || undefined,
    cat: row.cat,
    list: row.name,
    listId: row.list_id,
    dueTime: row.due_time || '',
    dateKey: row.date_key,
    scheduled: row.scheduled,
    done: !!row.done,
    overdue: !!row.overdue,
  };
}

const TASK_SELECT = `
  SELECT tasks.*, lists.name AS name, lists.cat AS cat
  FROM tasks JOIN lists ON lists.id = tasks.list_id
`;

app.get('/api/lists', (req, res) => {
  const rows = db.prepare(`
    SELECT lists.id, lists.name, lists.cat,
      (SELECT COUNT(*) FROM tasks WHERE tasks.list_id = lists.id AND tasks.done = 0) AS open
    FROM lists
  `).all();
  res.json(rows);
});

app.get('/api/tasks', (req, res) => {
  const rows = db.prepare(`${TASK_SELECT} ORDER BY tasks.id DESC`).all();
  res.json(rows.map(rowToTask));
});

app.post('/api/tasks', (req, res) => {
  const { title, listId, dateKey, dueTime } = req.body || {};
  const value = (title || '').trim();
  if (!value) return res.status(400).json({ error: 'title is required' });

  const list = db.prepare('SELECT id FROM lists WHERE id = ?').get(listId);
  if (!list) return res.status(400).json({ error: 'unknown listId' });

  const key = dateKey || TODAY_KEY;
  const info = db.prepare(`
    INSERT INTO tasks (title, note, list_id, due_time, date_key, scheduled, done, overdue)
    VALUES (?, NULL, ?, ?, ?, ?, 0, 0)
  `).run(value, listId, (dueTime || '').trim(), key, scheduledFor(key));

  const row = db.prepare(`${TASK_SELECT} WHERE tasks.id = ?`).get(info.lastInsertRowid);
  res.status(201).json(rowToTask(row));
});

app.patch('/api/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const existing = db.prepare('SELECT id FROM tasks WHERE id = ?').get(id);
  if (!existing) return res.status(404).json({ error: 'not found' });

  if (typeof req.body.done === 'boolean') {
    db.prepare('UPDATE tasks SET done = ? WHERE id = ?').run(req.body.done ? 1 : 0, id);
  } else {
    db.prepare('UPDATE tasks SET done = NOT done WHERE id = ?').run(id);
  }

  const row = db.prepare(`${TASK_SELECT} WHERE tasks.id = ?`).get(id);
  res.json(rowToTask(row));
});

app.delete('/api/tasks', (req, res) => {
  const ids = Array.isArray(req.body?.ids) ? req.body.ids : [];
  if (ids.length === 0) return res.status(400).json({ error: 'ids array is required' });

  const placeholders = ids.map(() => '?').join(',');
  db.prepare(`DELETE FROM tasks WHERE id IN (${placeholders})`).run(...ids);
  res.json({ deleted: ids });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Ace backend listening on http://localhost:${PORT}`);
});
