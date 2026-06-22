// Ace web UI kit — Single list view
function ListView({ list, tasks, onToggle }) {
  const { Card } = window.AceDesignSystem_db6642;
  const catColor = { study: 'var(--cat-study)', project: 'var(--cat-project)', interview: 'var(--cat-interview)', personal: 'var(--cat-personal)' };

  if (!list) {
    return (
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-faint)', fontSize: 15 }}>
        Select a list from the sidebar.
      </div>
    );
  }

  const items = tasks.filter(t => t.listId === list.id);
  const open = items.filter(t => !t.done).length;

  return (
    <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
      <div style={{ padding: '28px 32px 0', maxWidth: 760, width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 12, height: 12, borderRadius: 4, background: catColor[list.cat] }}></span>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>List</div>
        </div>
        <h1 style={{ margin: '4px 0 0', fontSize: 34, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-strong)' }}>{list.name}</h1>
        <p style={{ margin: '8px 0 0', fontSize: 14, color: 'var(--text-muted)' }}>{open} open · {items.length} total</p>
      </div>

      <div style={{ maxWidth: 760, width: '100%', margin: '0 auto', padding: '24px 32px 40px', boxSizing: 'border-box' }}>
        <Card padding="0" style={{ overflow: 'hidden' }}>
          {items.length === 0 ? (
            <div style={{ padding: '48px 0', textAlign: 'center', color: 'var(--text-faint)' }}>
              <i data-lucide="list" style={{ width: 28, height: 28 }}></i>
              <div style={{ marginTop: 8, fontSize: 15 }}>This list is empty.</div>
            </div>
          ) : items.map(t => <TaskRow key={t.id} task={t} onToggle={onToggle} />)}
        </Card>
      </div>
    </div>
  );
}
window.ListView = ListView;
