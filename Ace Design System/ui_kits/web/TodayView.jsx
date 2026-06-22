// Ace web UI kit — Today view: header, quick-add, grouped task list, right rail
function TodayView({ tasks, onToggle, onAdd, filter, onFilter }) {
  const { Button, Input, Tabs, ProgressRing, ProgressBar, Card, Badge } = window.AceDesignSystem_db6642;
  const [draft, setDraft] = React.useState('');

  const visible = tasks.filter(t => filter === 'all' ? true : filter === 'done' ? t.done : !t.done);
  const done = tasks.filter(t => t.done).length;
  const submit = (e) => {
    if (e) e.preventDefault();
    const value = draft.trim();
    if (!value) return;
    onAdd(value);
    setDraft('');
  };

  return (
    <div style={{ display: 'flex', flex: 1, minWidth: 0, height: '100%' }}>
      {/* main column */}
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
        <div style={{ padding: '28px 32px 0', maxWidth: 760, width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--cat-study)' }}>Monday · Jun 22</div>
              <h1 style={{ margin: '4px 0 0', fontSize: 34, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-strong)' }}>Today's focus</h1>
            </div>
            <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>{done} of {tasks.length} done</div>
          </div>

          {/* quick add */}
          <form onSubmit={submit} style={{ display: 'flex', gap: 10, margin: '20px 0 8px' }}>
            <div style={{ flex: 1 }}>
              <Input value={draft} onChange={setDraft} placeholder="Add a task and press Enter…"
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); submit(e); } }} />
            </div>
            <Button variant="primary" type="submit">Add</Button>
          </form>

          <div style={{ margin: '14px 0 6px' }}>
            <Tabs value={filter} onChange={onFilter} items={[
              { value: 'open', label: 'To do', count: tasks.filter(t => !t.done).length },
              { value: 'done', label: 'Done', count: done },
              { value: 'all', label: 'All' },
            ]} />
          </div>
        </div>

        <div style={{ maxWidth: 760, width: '100%', margin: '0 auto', padding: '0 32px 40px', boxSizing: 'border-box' }}>
          <Card padding="0" style={{ overflow: 'hidden' }}>
            {visible.length === 0 ? (
              <div style={{ padding: '48px 0', textAlign: 'center', color: 'var(--text-faint)' }}>
                <i data-lucide="check-check" style={{ width: 28, height: 28 }}></i>
                <div style={{ marginTop: 8, fontSize: 15 }}>Nothing here — nice work.</div>
              </div>
            ) : visible.map(t => <TaskRow key={t.id} task={t} onToggle={onToggle} />)}
          </Card>
        </div>
      </div>

      {/* right rail */}
      <aside style={{ width: 300, flex: 'none', borderLeft: '1px solid var(--border-subtle)', background: 'var(--surface-card)', padding: 24, boxSizing: 'border-box', overflow: 'auto', display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <ProgressRing value={done} max={tasks.length || 1} size={64} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-strong)' }}>Daily goal</div>
            <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{tasks.length - done} tasks to go</div>
          </div>
        </div>

        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-faint)', margin: '0 0 12px' }}>By category</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[['Study', 'var(--cat-study)', 4, 6], ['Project', 'var(--cat-project)', 1, 3], ['Interview', 'var(--cat-interview)', 2, 4]].map(([n, c, v, m]) => (
              <div key={n}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 6 }}>
                  <span style={{ color: 'var(--text-body)', fontWeight: 500 }}>{n}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{v}/{m}</span>
                </div>
                <ProgressBar value={v} max={m} color={c} height={6} />
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 'auto', background: 'var(--cat-interview-bg)', borderRadius: 'var(--radius-lg)', padding: 16 }}>
          <Badge tone="interview" dot>Interview</Badge>
          <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-strong)', margin: '10px 0 2px' }}>Google · Phone screen</div>
          <div style={{ fontSize: 13, color: 'var(--text-body)' }}>Thursday, 2:00 PM</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, color: 'var(--cat-interview)', marginTop: 8 }}>in 3 days</div>
        </div>
      </aside>
    </div>
  );
}
window.TodayView = TodayView;
