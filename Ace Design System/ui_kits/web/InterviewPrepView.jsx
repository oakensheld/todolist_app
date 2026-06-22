// Ace web UI kit — Interview prep dashboard
function InterviewPrepView({ tasks, onToggle }) {
  const { Card, ProgressBar } = window.AceDesignSystem_db6642;
  const prep = tasks.filter(t => t.cat === 'interview');
  const done = prep.filter(t => t.done).length;

  const topics = [
    { name: 'Arrays & strings', done: 8, total: 12 },
    { name: 'Trees & graphs', done: 3, total: 10 },
    { name: 'System design', done: 1, total: 6 },
  ];

  return (
    <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
      <div style={{ padding: '28px 32px 0', maxWidth: 760, width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--cat-interview)' }}>Interview prep</div>
        <h1 style={{ margin: '4px 0 0', fontSize: 34, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-strong)' }}>Google · Phone screen</h1>
        <p style={{ margin: '8px 0 0', fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--cat-interview)' }}>Thursday, Jun 26 · 2:00 PM · in 4 days</p>
      </div>

      <div style={{ maxWidth: 760, width: '100%', margin: '0 auto', padding: '24px 32px 40px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ background: 'var(--cat-interview-bg)', borderRadius: 'var(--radius-lg)', padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-strong)' }}>Prep progress</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)' }}>{done}/{prep.length} tasks</span>
          </div>
          <ProgressBar value={done} max={prep.length || 1} color="var(--cat-interview)" height={8} />
        </div>

        <section>
          <h2 style={{ margin: '0 0 10px', fontSize: 13, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>Topic coverage</h2>
          <Card padding="20" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {topics.map(t => (
              <div key={t.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, marginBottom: 6 }}>
                  <span style={{ fontWeight: 500 }}>{t.name}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{t.done}/{t.total}</span>
                </div>
                <ProgressBar value={t.done} max={t.total} color="var(--cat-interview)" height={6} />
              </div>
            ))}
          </Card>
        </section>

        <section>
          <h2 style={{ margin: '0 0 10px', fontSize: 13, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>Prep tasks</h2>
          <Card padding="0" style={{ overflow: 'hidden' }}>
            {prep.length === 0 ? (
              <div style={{ padding: '32px 0', textAlign: 'center', color: 'var(--text-faint)', fontSize: 15 }}>No prep tasks yet.</div>
            ) : prep.map(t => <TaskRow key={t.id} task={t} onToggle={onToggle} />)}
          </Card>
        </section>
      </div>
    </div>
  );
}
window.InterviewPrepView = InterviewPrepView;
