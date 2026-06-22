// Ace mobile UI kit — Today screen content (header, progress, task list, tab bar, add sheet)
function TodayScreen({ tasks, onToggle, onAdd }) {
  const { Checkbox, Badge, ProgressRing, Button, Input } = window.AceDesignSystem_db6642;
  const [adding, setAdding] = React.useState(false);
  const [draft, setDraft] = React.useState('');
  const catColor = { study: 'var(--cat-study)', project: 'var(--cat-project)', interview: 'var(--cat-interview)', personal: 'var(--cat-personal)' };
  const done = tasks.filter(t => t.done).length;

  const groups = [
    { key: 'Morning', items: tasks.filter(t => t.slot === 'am') },
    { key: 'Afternoon', items: tasks.filter(t => t.slot === 'pm') },
  ];

  const submit = () => { if (draft.trim()) { onAdd(draft.trim()); setDraft(''); setAdding(false); } };

  return (
    <React.Fragment>
      {/* scrollable content */}
      <div style={{ flex: 1, minHeight: 0, overflow: 'auto', padding: '4px 20px 96px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0 16px' }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--cat-study)' }}>Mon · Jun 22</div>
            <h1 style={{ margin: '2px 0 0', fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em' }}>Today</h1>
          </div>
          <ProgressRing value={done} max={tasks.length || 1} size={52} />
        </div>

        {groups.map(g => g.items.length > 0 && (
          <div key={g.key} style={{ marginBottom: 18 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-faint)', margin: '0 0 8px 2px' }}>{g.key}</p>
            <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              {g.items.map((t, i) => (
                <div key={t.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', borderBottom: i < g.items.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
                  <Checkbox checked={t.done} onChange={() => onToggle(t.id)} color={catColor[t.cat]} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 16, fontWeight: 500, color: t.done ? 'var(--text-faint)' : 'var(--text-strong)', textDecoration: t.done ? 'line-through' : 'none' }}>{t.title}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                      <Badge tone={t.cat} dot size="sm">{t.list}</Badge>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{t.due}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* floating add button */}
      <button onClick={() => setAdding(true)} aria-label="Add task" style={{
        position: 'absolute', right: 20, bottom: 92, width: 56, height: 56, borderRadius: 28,
        background: 'var(--color-primary)', border: 'none', color: '#fff', cursor: 'pointer',
        boxShadow: '0 10px 24px rgba(42,111,219,0.42)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 30,
      }}>
        <i data-lucide="plus" style={{ width: 26, height: 26 }}></i>
      </button>

      {/* add sheet */}
      {adding && (
        <div onClick={() => setAdding(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(20,22,26,0.4)', zIndex: 40, display: 'flex', alignItems: 'flex-end' }}>
          <div onClick={e => e.stopPropagation()} style={{ width: '100%', background: 'var(--surface-card)', borderRadius: '24px 24px 0 0', padding: '20px 20px 36px', boxShadow: 'var(--shadow-xl)' }}>
            <div style={{ width: 40, height: 4, borderRadius: 2, background: 'var(--ink-300)', margin: '0 auto 18px' }}></div>
            <h2 style={{ margin: '0 0 14px', fontSize: 20, fontWeight: 700 }}>New task</h2>
            <Input value={draft} onChange={setDraft} placeholder="What do you need to do?" autoFocus
              onKeyDown={(e) => e.key === 'Enter' && submit()} />
            <div style={{ height: 14 }}></div>
            <Button variant="primary" block onClick={submit}>Add to Today</Button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
window.TodayScreen = TodayScreen;
