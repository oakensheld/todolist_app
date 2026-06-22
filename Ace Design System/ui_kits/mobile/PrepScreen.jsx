// Ace mobile UI kit — Interview prep tab
function PrepScreen({ tasks, onToggle }) {
  const { Checkbox, Badge, ProgressBar } = window.AceDesignSystem_db6642;
  const prep = tasks.filter(t => t.cat === 'interview');
  const done = prep.filter(t => t.done).length;
  const catColor = { interview: 'var(--cat-interview)' };

  return (
    <div style={{ flex: 1, minHeight: 0, overflow: 'auto', padding: '4px 20px 96px' }}>
      <div style={{ padding: '8px 0 16px' }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--cat-interview)' }}>Interview prep</div>
        <h1 style={{ margin: '2px 0 0', fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em' }}>Prep</h1>
      </div>

      <div style={{ background: 'var(--cat-interview-bg)', borderRadius: 'var(--radius-xl)', padding: 18, marginBottom: 20 }}>
        <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-strong)' }}>Google · Phone screen</div>
        <div style={{ fontSize: 14, color: 'var(--text-body)', marginTop: 4 }}>Thursday, 2:00 PM</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, color: 'var(--cat-interview)', marginTop: 6 }}>in 4 days</div>
        <div style={{ marginTop: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 6, color: 'var(--text-muted)' }}>
            <span>Tasks done</span>
            <span style={{ fontFamily: 'var(--font-mono)' }}>{done}/{prep.length}</span>
          </div>
          <ProgressBar value={done} max={prep.length || 1} color="var(--cat-interview)" height={6} />
        </div>
      </div>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-faint)', margin: '0 0 8px 2px' }}>Prep tasks</p>
      <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
        {prep.map((t, i) => (
          <div key={t.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', borderBottom: i < prep.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
            <Checkbox checked={t.done} onChange={() => onToggle(t.id)} color={catColor.interview} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 16, fontWeight: 500, color: t.done ? 'var(--text-faint)' : 'var(--text-strong)', textDecoration: t.done ? 'line-through' : 'none' }}>{t.title}</div>
              <div style={{ marginTop: 4 }}><Badge tone="interview" dot size="sm">{t.list}</Badge></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
window.PrepScreen = PrepScreen;
