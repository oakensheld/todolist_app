// Ace web UI kit — All tasks with add form, list filter, selection + delete
function AllTasksView({ tasks, onToggle, onAdd, onDelete, lists }) {
  const { Card, Tabs, Button, Input } = window.AceDesignSystem_db6642;
  const [filter, setFilter] = React.useState('all');
  const [draft, setDraft] = React.useState('');
  const [listId, setListId] = React.useState('suanfa');
  const [dueDate, setDueDate] = React.useState('2026-06-22');
  const [dueTime, setDueTime] = React.useState('');
  const [selected, setSelected] = React.useState(() => new Set());

  React.useEffect(() => { setSelected(new Set()); }, [filter]);

  const filters = [
    { value: 'all', label: '全部' },
    ...lists.map(l => ({
      value: l.id,
      label: l.name,
      count: tasks.filter(t => t.listId === l.id && !t.done).length,
    })),
  ];

  const visible = filter === 'all' ? tasks : tasks.filter(t => t.listId === filter);
  const open = visible.filter(t => !t.done).length;
  const selectedCount = selected.size;

  const toggleSelect = (id) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const deleteSelected = () => {
    if (selectedCount === 0) return;
    onDelete([...selected]);
    setSelected(new Set());
  };

  const submit = (e) => {
    if (e) e.preventDefault();
    const title = draft.trim();
    if (!title) return;
    onAdd({ title, listId, dateKey: dueDate, dueTime: dueTime.trim() });
    setDraft('');
    setDueTime('');
  };

  const fieldLabel = { fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 6 };

  return (
    <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
      <div style={{ padding: '28px 32px 0', maxWidth: 760, width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>Everything</div>
        <h1 style={{ margin: '4px 0 0', fontSize: 34, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-strong)' }}>All tasks</h1>
        <p style={{ margin: '8px 0 20px', fontSize: 14, color: 'var(--text-muted)' }}>{open} open · {visible.length} total</p>

        <Card padding="20" style={{ marginBottom: 20 }}>
          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div>
              <div style={fieldLabel}>Task title</div>
              <Input value={draft} onChange={setDraft} placeholder="What do you need to do?" />
            </div>
            <div>
              <div style={fieldLabel}>Type</div>
              <Tabs variant="pill" value={listId} onChange={setListId} items={lists.map(l => ({ value: l.id, label: l.name }))} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: 10, alignItems: 'end' }}>
              <div>
                <div style={fieldLabel}>Due date</div>
                <Input type="date" value={dueDate} onChange={setDueDate} />
              </div>
              <div>
                <div style={fieldLabel}>Due time</div>
                <Input type="time" value={dueTime} onChange={setDueTime} placeholder="Optional" />
              </div>
              <Button variant="primary" type="submit" style={{ height: 42 }}>Add</Button>
            </div>
          </form>
        </Card>

        <Tabs value={filter} onChange={setFilter} items={filters} />
      </div>

      <div style={{ maxWidth: 760, width: '100%', margin: '0 auto', padding: '16px 32px 40px', boxSizing: 'border-box' }}>
        {selectedCount > 0 && (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: 12, padding: '10px 14px', background: 'var(--blue-50)',
            borderRadius: 'var(--radius-md)', border: '1px solid var(--blue-100)',
          }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-strong)' }}>
              {selectedCount} selected
            </span>
            <div style={{ display: 'flex', gap: 8 }}>
              <Button variant="ghost" onClick={() => setSelected(new Set())}>Cancel</Button>
              <Button variant="danger" onClick={deleteSelected}>Delete</Button>
            </div>
          </div>
        )}
        <Card padding="0" style={{ overflow: 'hidden' }}>
          {visible.length === 0 ? (
            <div style={{ padding: '48px 0', textAlign: 'center', color: 'var(--text-faint)' }}>
              <i data-lucide="inbox" style={{ width: 28, height: 28 }}></i>
              <div style={{ marginTop: 8, fontSize: 15 }}>No tasks in this category.</div>
            </div>
          ) : visible.map(t => (
            <TaskRow
              key={t.id}
              task={t}
              onToggle={onToggle}
              selected={selected.has(t.id)}
              onSelect={toggleSelect}
            />
          ))}
        </Card>
      </div>
    </div>
  );
}
window.AllTasksView = AllTasksView;
