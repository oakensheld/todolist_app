// Ace mobile UI kit — Calendar week view
function CalendarScreen() {
  const days = [
    { label: 'Mon', date: 22, today: true, count: 5 },
    { label: 'Tue', date: 23, today: false, count: 3 },
    { label: 'Wed', date: 24, today: false, count: 2 },
    { label: 'Thu', date: 25, today: false, count: 4, highlight: true },
    { label: 'Fri', date: 26, today: false, count: 1 },
    { label: 'Sat', date: 27, today: false, count: 0 },
    { label: 'Sun', date: 28, today: false, count: 0 },
  ];

  const events = [
    { time: '11:00', title: 'Problem set 4 due', cat: 'study' },
    { time: '2:30', title: 'Capstone stand-up', cat: 'project' },
    { time: '4:00', title: 'Mock interview', cat: 'interview' },
  ];
  const catColor = { study: 'var(--cat-study)', project: 'var(--cat-project)', interview: 'var(--cat-interview)' };

  return (
    <div style={{ flex: 1, minHeight: 0, overflow: 'auto', padding: '4px 20px 96px' }}>
      <div style={{ padding: '8px 0 20px' }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>June 2026</div>
        <h1 style={{ margin: '2px 0 0', fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em' }}>Calendar</h1>
      </div>

      <div style={{ display: 'flex', gap: 6, marginBottom: 24 }}>
        {days.map(d => (
          <div key={d.date} style={{
            flex: 1, textAlign: 'center', padding: '10px 0', borderRadius: 'var(--radius-lg)',
            background: d.today ? 'var(--color-primary)' : d.highlight ? 'var(--cat-interview-bg)' : 'var(--surface-card)',
            border: d.highlight && !d.today ? '1px solid var(--cat-interview)' : '1px solid var(--border-subtle)',
            color: d.today ? '#fff' : 'var(--text-strong)',
          }}>
            <div style={{ fontSize: 10, fontWeight: 700, opacity: d.today ? 0.85 : 1 }}>{d.label}</div>
            <div style={{ fontSize: 18, fontWeight: 800, margin: '4px 0' }}>{d.date}</div>
            {d.count > 0 && (
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: d.today ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)' }}>{d.count}</div>
            )}
          </div>
        ))}
      </div>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-faint)', margin: '0 0 10px 2px' }}>Today</p>
      <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
        {events.map((e, i) => (
          <div key={e.title} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', borderBottom: i < events.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', minWidth: 44 }}>{e.time}</span>
            <span style={{ width: 4, height: 32, borderRadius: 2, background: catColor[e.cat], flex: 'none' }}></span>
            <span style={{ fontSize: 15, fontWeight: 500, color: 'var(--text-strong)' }}>{e.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
window.CalendarScreen = CalendarScreen;
