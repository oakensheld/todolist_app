const path = require('path');
const Database = require('better-sqlite3');

const db = new Database(path.join(__dirname, 'ace.db'));
db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS lists (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    cat TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    note TEXT,
    list_id TEXT NOT NULL REFERENCES lists(id),
    due_time TEXT,
    date_key TEXT,
    scheduled TEXT,
    done INTEGER NOT NULL DEFAULT 0,
    overdue INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

const CAT_BY_LIST = { bishe: 'project', suanfa: 'study', bagu: 'personal', mianshi: 'interview' };

const LISTS = [
  { id: 'bishe', name: '毕设', cat: 'project' },
  { id: 'suanfa', name: '算法', cat: 'study' },
  { id: 'bagu', name: '八股', cat: 'personal' },
  { id: 'mianshi', name: '面试', cat: 'interview' },
];

const SEED_TASKS = [
  { title: 'Finish problem set 4', note: 'Sections 3.2–3.5', listId: 'suanfa', dueTime: '11:00', dateKey: '2026-06-22', scheduled: 'today', done: 0 },
  { title: 'Review Big-O cheat sheet', note: null, listId: 'bagu', dueTime: '1:00', dateKey: '2026-06-22', scheduled: 'today', done: 0 },
  { title: 'Stand-up with capstone team', note: null, listId: 'bishe', dueTime: '2:30', dateKey: '2026-06-22', scheduled: 'today', done: 0 },
  { title: 'Email Prof. Ramirez about extension', note: null, listId: 'suanfa', dueTime: '9:30', dateKey: '2026-06-22', scheduled: 'today', done: 1 },
  { title: 'Mock interview — arrays & strings', note: null, listId: 'mianshi', dueTime: '4:00', dateKey: '2026-06-22', scheduled: 'today', done: 0 },
  { title: 'Submit reading response', note: null, listId: 'suanfa', dueTime: '8:00', dateKey: '2026-06-22', scheduled: 'today', done: 0, overdue: 1 },
  { title: 'Read chapter 7 — dynamic programming', note: null, listId: 'suanfa', dueTime: '', dateKey: '2026-06-23', scheduled: 'tomorrow', done: 0 },
  { title: 'Practice binary tree problems', note: null, listId: 'suanfa', dueTime: '', dateKey: '2026-06-23', scheduled: 'tomorrow', done: 0 },
  { title: 'Draft capstone milestone doc', note: null, listId: 'bishe', dueTime: '', dateKey: '2026-06-25', scheduled: 'wed', done: 0 },
  { title: '背 Redis 八股要点', note: null, listId: 'bagu', dueTime: '', dateKey: '2026-06-28', scheduled: 'later', done: 0 },
];

function seedIfEmpty() {
  const listCount = db.prepare('SELECT COUNT(*) AS n FROM lists').get().n;
  if (listCount === 0) {
    const insertList = db.prepare('INSERT INTO lists (id, name, cat) VALUES (?, ?, ?)');
    for (const l of LISTS) insertList.run(l.id, l.name, l.cat);
  }

  const taskCount = db.prepare('SELECT COUNT(*) AS n FROM tasks').get().n;
  if (taskCount === 0) {
    const insertTask = db.prepare(`
      INSERT INTO tasks (title, note, list_id, due_time, date_key, scheduled, done, overdue)
      VALUES (@title, @note, @listId, @dueTime, @dateKey, @scheduled, @done, @overdue)
    `);
    for (const t of SEED_TASKS) insertTask.run({ overdue: 0, ...t });
  }
}

seedIfEmpty();

module.exports = { db, CAT_BY_LIST };
