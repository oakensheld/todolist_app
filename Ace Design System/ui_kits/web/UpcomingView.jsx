// Ace web UI kit — Upcoming with month calendar + day task list
function UpcomingView({ tasks, onToggle }) {
  const { Card } = window.AceDesignSystem_db6642;
  const TODAY_KEY = '2026-06-22';
  const SCHEDULED_DATES = { today: TODAY_KEY, tomorrow: '2026-06-23', wed: '2026-06-25', later: '2026-06-28' };
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const navBtn = {
    width: 34, height: 34, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)',
    background: 'var(--surface-card)', cursor: 'pointer', color: 'var(--text-body)',
  };

  const [viewYear, setViewYear] = React.useState(2026);
  const [viewMonth, setViewMonth] = React.useState(5);
  const [selectedKey, setSelectedKey] = React.useState(TODAY_KEY);

  const dateKey = (y, m, d) => `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
  const taskDateKey = (t) => t.dateKey || (t.scheduled && SCHEDULED_DATES[t.scheduled]) || null;

  const countsByDay = React.useMemo(() => {
    const map = {};
    tasks.forEach(t => {
      const key = taskDateKey(t);
      if (!key) return;
      if (!map[key]) map[key] = { total: 0, open: 0 };
      map[key].total += 1;
      if (!t.done) map[key].open += 1;
    });
    return map;
  }, [tasks]);

  const buildGrid = (year, month) => {
    const first = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startPad = (first.getDay() + 6) % 7;
    const cells = [];
    for (let i = 0; i < startPad; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);
    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  };

  const shiftMonth = (delta) => {
    const d = new Date(viewYear, viewMonth + delta, 1);
    setViewYear(d.getFullYear());
    setViewMonth(d.getMonth());
  };

  const formatLabel = (key) => {
    const [y, m, d] = key.split('-').map(Number);
    const date = new Date(y, m - 1, d);
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
    const month = MONTHS[m - 1].slice(0, 3);
    if (key === TODAY_KEY) return `Today · ${weekday} · ${month} ${d}`;
    return `${weekday} · ${month} ${d}`;
  };

  const grid = buildGrid(viewYear, viewMonth);
  const dayTasks = tasks.filter(t => taskDateKey(t) === selectedKey);
  const openOnDay = dayTasks.filter(t => !t.done).length;

  return (
    <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
      <div style={{ padding: '28px 32px 0', maxWidth: 760, width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>Calendar</div>
        <h1 style={{ margin: '4px 0 0', fontSize: 34, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-strong)' }}>Upcoming</h1>
        <p style={{ margin: '8px 0 0', fontSize: 14, color: 'var(--text-muted)' }}>Pick a day to see what's scheduled.</p>
      </div>

      <div style={{ maxWidth: 760, width: '100%', margin: '0 auto', padding: '24px 32px 40px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Card padding="20">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <h2 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: 'var(--text-strong)' }}>{MONTHS[viewMonth]} {viewYear}</h2>
            <div style={{ display: 'flex', gap: 4 }}>
              <button type="button" onClick={() => shiftMonth(-1)} aria-label="Previous month" style={navBtn}>
                <i data-lucide="chevron-left" style={{ width: 18, height: 18 }}></i>
              </button>
              <button type="button" onClick={() => { setViewYear(2026); setViewMonth(5); setSelectedKey(TODAY_KEY); }} style={{ ...navBtn, width: 'auto', padding: '0 10px', fontSize: 13, fontWeight: 600 }}>Today</button>
              <button type="button" onClick={() => shiftMonth(1)} aria-label="Next month" style={navBtn}>
                <i data-lucide="chevron-right" style={{ width: 18, height: 18 }}></i>
              </button>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, marginBottom: 4 }}>
            {WEEKDAYS.map(w => (
              <div key={w} style={{ textAlign: 'center', fontSize: 11, fontWeight: 700, letterSpacing: '0.04em', color: 'var(--text-faint)', padding: '4px 0' }}>{w}</div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
            {grid.map((day, i) => {
              if (day == null) return <div key={`e-${i}`} />;
              const key = dateKey(viewYear, viewMonth, day);
              const isToday = key === TODAY_KEY;
              const isSelected = key === selectedKey;
              const stats = countsByDay[key];
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedKey(key)}
                  style={{
                    aspectRatio: '1', border: isToday && !isSelected ? '2px solid var(--color-primary)' : '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)', cursor: 'pointer', padding: 4,
                    background: isSelected ? 'var(--color-primary)' : 'var(--surface-card)',
                    color: isSelected ? '#fff' : 'var(--text-strong)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2,
                    transition: 'background 120ms ease, border-color 120ms ease',
                  }}
                >
                  <span style={{ fontSize: 15, fontWeight: isSelected || isToday ? 800 : 500 }}>{day}</span>
                  {stats && stats.open > 0 && (
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600,
                      color: isSelected ? 'rgba(255,255,255,0.85)' : 'var(--color-primary)',
                    }}>{stats.open}</span>
                  )}
                </button>
              );
            })}
          </div>
        </Card>

        <section>
          <h2 style={{ margin: '0 0 10px', fontSize: 13, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
            {formatLabel(selectedKey)}
            {dayTasks.length > 0 && <span style={{ fontWeight: 500, textTransform: 'none', letterSpacing: 0, color: 'var(--text-muted)' }}> · {openOnDay} open</span>}
          </h2>
          <Card padding="0" style={{ overflow: 'hidden' }}>
            {dayTasks.length === 0 ? (
              <div style={{ padding: '40px 0', textAlign: 'center', color: 'var(--text-faint)' }}>
                <i data-lucide="calendar-off" style={{ width: 28, height: 28 }}></i>
                <div style={{ marginTop: 8, fontSize: 15 }}>Nothing on this day.</div>
              </div>
            ) : dayTasks.map(t => <TaskRow key={t.id} task={t} onToggle={onToggle} />)}
          </Card>
        </section>
      </div>
    </div>
  );
}

window.UpcomingView = UpcomingView;
