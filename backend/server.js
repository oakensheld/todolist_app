const path = require('path');
const express = require('express');
const cors = require('cors');
const { db } = require('./db');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'Ace Design System')));

// "Today" tracks the real calendar date in China Standard Time (UTC+8,
// no DST) rather than a fixed demo date, so the app advances day to day.
function todayKey() {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Shanghai' }).format(new Date());
}

function addDays(dateKey, delta) {
  const [y, m, d] = dateKey.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d + delta)).toISOString().slice(0, 10);
}

// Derived from date_key on every read (not stored) so a task's "today"/
// "tomorrow" tag stays correct as the real date moves forward.
function scheduledFor(dateKey) {
  const today = todayKey();
  if (dateKey === today) return 'today';
  if (dateKey === addDays(today, 1)) return 'tomorrow';
  return null;
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
    scheduled: scheduledFor(row.date_key),
    done: !!row.done,
    overdue: !!row.overdue,
  };
}

const TASK_SELECT = `
  SELECT tasks.*, lists.name AS name, lists.cat AS cat
  FROM tasks JOIN lists ON lists.id = tasks.list_id
`;

app.get('/', (req, res) => res.redirect('/ui_kits/web/index.html'));

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

  const key = dateKey || todayKey();
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
  const ids = req.body && Array.isArray(req.body.ids) ? req.body.ids : [];
  if (ids.length === 0) return res.status(400).json({ error: 'ids array is required' });

  const placeholders = ids.map(() => '?').join(',');
  db.prepare(`DELETE FROM tasks WHERE id IN (${placeholders})`).run(...ids);
  res.json({ deleted: ids });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Ace backend listening on http://localhost:${PORT}`);
});
