// Ace mobile UI kit — Profile / You tab
function ProfileScreen() {
  const { Avatar, ProgressRing, ProgressBar } = window.AceDesignSystem_db6642;

  const stats = [
    { label: 'Tasks this week', value: '24', max: '30' },
    { label: 'Study streak', value: '5', suffix: 'days' },
    { label: 'Interviews prepped', value: '2', suffix: 'of 3' },
  ];

  return (
    <div style={{ flex: 1, minHeight: 0, overflow: 'auto', padding: '4px 20px 96px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px 0 28px' }}>
        <Avatar name="Maya Chen" size="lg" />
        <h1 style={{ margin: '14px 0 2px', fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em' }}>Maya Chen</h1>
        <p style={{ margin: 0, fontSize: 14, color: 'var(--text-muted)' }}>Junior · Computer Science</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 16, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: 18, marginBottom: 20, boxShadow: 'var(--shadow-sm)' }}>
        <ProgressRing value={18} max={24} size={56} />
        <div>
          <div style={{ fontSize: 16, fontWeight: 700 }}>Weekly goal</div>
          <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>18 of 24 tasks done</div>
        </div>
      </div>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-faint)', margin: '0 0 10px 2px' }}>Stats</p>
      <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
        {stats.map((s, i) => (
          <div key={s.label} style={{ padding: '16px', borderBottom: i < stats.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontSize: 14, color: 'var(--text-body)' }}>{s.label}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 16, fontWeight: 700, color: 'var(--text-strong)' }}>
                {s.value}{s.suffix ? <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-muted)' }}> {s.suffix}</span> : s.max ? <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-muted)' }}>/{s.max}</span> : null}
              </span>
            </div>
            {s.max && <div style={{ marginTop: 10 }}><ProgressBar value={Number(s.value)} max={Number(s.max)} height={5} /></div>}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {[{ icon: 'bell', label: 'Notifications' }, { icon: 'palette', label: 'Appearance' }, { icon: 'help-circle', label: 'Help & feedback' }].map(item => (
          <button key={item.label} style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px',
            background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)',
            cursor: 'pointer', fontSize: 15, fontWeight: 500, color: 'var(--text-strong)', textAlign: 'left',
          }}>
            <i data-lucide={item.icon} style={{ width: 20, height: 20, color: 'var(--text-muted)' }}></i>
            {item.label}
            <i data-lucide="chevron-right" style={{ width: 18, height: 18, marginLeft: 'auto', color: 'var(--text-faint)' }}></i>
          </button>
        ))}
      </div>
    </div>
  );
}
window.ProfileScreen = ProfileScreen;
