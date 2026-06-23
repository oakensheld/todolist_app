// Ace mobile UI kit — Calendar week view
function CalendarScreen({ tasks, onToggle }) {
  const { Checkbox, Badge } = window.AceDesignSystem_db6642;
  const catColor = { study: 'var(--cat-study)', project: 'var(--cat-project)', interview: 'var(--cat-interview)', personal: 'var(--cat-personal)' };

  const today = todayKey();
  const [weekOffset, setWeekOffset] = React.useState(0);
  const [selectedKey, setSelectedKey] = React.useState(today);

  const addDays = (key, delta) => {
    const [y, m, d] = key.split('-').map(Number);
    return new Date(Date.UTC(y, m - 1, d + delta)).toISOString().slice(0, 10);
  };

  // Monday-start week containing "today", shifted by weekOffset weeks.
  const weekStart = React.useMemo(() => {
    const [y, m, d] = today.split('-').map(Number);
    const isoDow = (new Date(Date.UTC(y, m - 1, d)).getUTCDay() + 6) % 7; // 0 = Monday
    return addDays(today, -isoDow + weekOffset * 7);
  }, [today, weekOffset]);

  const weekDays = React.useMemo(() => Array.from({ length: 7 }, (_, i) => {
    const key = addDays(weekStart, i);
    const [y, m, d] = key.split('-').map(Number);
    const label = new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-US', { weekday: 'short', timeZone: 'UTC' });
    const open = tasks.filter(t => t.dateKey === key && !t.done).length;
    return { key, label, day: d, isToday: key === today, open };
  }), [weekStart, tasks, today]);

  const monthLabel = (() => {
    const [y, m] = weekStart.split('-').map(Number);
    return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
  })();

  const formatSelectedLabel = (key) => {
    const [y, m, d] = key.split('-').map(Number);
    const date = new Date(Date.UTC(y, m - 1, d));
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long', timeZone: 'UTC' });
    const month = date.toLocaleDateString('en-US', { month: 'short', timeZone: 'UTC' });
    return key === today ? `Today · ${weekday} · ${month} ${d}` : `${weekday} · ${month} ${d}`;
  };

  const dayTasks = tasks
    .filter(t => t.dateKey === selectedKey)
    .sort((a, b) => (a.dueTime || '').localeCompare(b.dueTime || ''));

  // Swipe left/right over the week strip to move between weeks.
  const touchStartX = React.useRef(null);
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) setWeekOffset(w => w + (dx < 0 ? 1 : -1));
    touchStartX.current = null;
  };

  const navBtn = {
    width: 30, height: 30, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)',
    background: 'var(--surface-card)', cursor: 'pointer', color: 'var(--text-body)',
  };

  return (
    <div style={{ flex: 1, minHeight: 0, overflow: 'auto', padding: '4px 20px 96px' }}>
      <div style={{ padding: '8px 0 20px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>{monthLabel}</div>
          <h1 style={{ margin: '2px 0 0', fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em' }}>Calendar</h1>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <button type="button" onClick={() => setWeekOffset(w => w - 1)} aria-label="Previous week" style={navBtn}>
            <i data-lucide="chevron-left" style={{ width: 16, height: 16 }}></i>
          </button>
          <button type="button" onClick={() => { setWeekOffset(0); setSelectedKey(today); }} style={{ ...navBtn, width: 'auto', padding: '0 10px', fontSize: 11, fontWeight: 700 }}>Today</button>
          <button type="button" onClick={() => setWeekOffset(w => w + 1)} aria-label="Next week" style={navBtn}>
            <i data-lucide="chevron-right" style={{ width: 16, height: 16 }}></i>
          </button>
        </div>
      </div>

      <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} style={{ display: 'flex', gap: 6, marginBottom: 24, touchAction: 'pan-y' }}>
        {weekDays.map(d => {
          const selected = d.key === selectedKey;
          return (
            <button key={d.key} type="button" onClick={() => setSelectedKey(d.key)} style={{
              flex: 1, textAlign: 'center', padding: '10px 0', borderRadius: 'var(--radius-lg)', cursor: 'pointer',
              background: d.isToday ? 'var(--color-primary)' : 'var(--surface-card)',
              border: d.isToday ? '1px solid var(--color-primary)' : selected ? '1.5px solid var(--color-primary)' : '1px solid var(--border-subtle)',
              color: d.isToday ? '#fff' : 'var(--text-strong)',
            }}>
              <div style={{ fontSize: 10, fontWeight: 700, opacity: d.isToday ? 0.85 : 1 }}>{d.label}</div>
              <div style={{ fontSize: 18, fontWeight: 800, margin: '4px 0' }}>{d.day}</div>
              {d.open > 0 && (
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: d.isToday ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)' }}>{d.open}</div>
              )}
            </button>
          );
        })}
      </div>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-faint)', margin: '0 0 10px 2px' }}>{formatSelectedLabel(selectedKey)}</p>
      <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
        {dayTasks.length === 0 ? (
          <div style={{ padding: '32px 0', textAlign: 'center', color: 'var(--text-faint)', fontSize: 15 }}>Nothing scheduled.</div>
        ) : dayTasks.map((t, i) => (
          <div key={t.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', borderBottom: i < dayTasks.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
            <Checkbox checked={t.done} onChange={() => onToggle(t.id)} color={catColor[t.cat]} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 16, fontWeight: 500, color: t.done ? 'var(--text-faint)' : 'var(--text-strong)', textDecoration: t.done ? 'line-through' : 'none' }}>{t.title}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                <Badge tone={t.cat} dot size="sm">{t.list}</Badge>
                {t.dueTime && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{t.dueTime}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
window.CalendarScreen = CalendarScreen;
