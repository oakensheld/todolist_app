// Ace web UI kit — a single task row
function TaskRow({ task, onToggle, selected, onSelect }) {
  const { Checkbox, Badge } = window.AceDesignSystem_db6642;
  const [hover, setHover] = React.useState(false);
  const catColor = { study: 'var(--cat-study)', project: 'var(--cat-project)', interview: 'var(--cat-interview)', personal: 'var(--cat-personal)' };
  const catTone = { study: 'study', project: 'project', interview: 'interview', personal: 'personal' };
  const overdue = task.overdue && !task.done;
  const selectable = typeof onSelect === 'function';

  return (
    <div
      onClick={selectable ? () => onSelect(task.id) : undefined}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px',
        background: selected ? 'var(--blue-50)' : hover ? 'var(--surface-hover)' : 'var(--surface-card)',
        borderBottom: '1px solid var(--border-subtle)', transition: 'background 120ms ease',
        cursor: selectable ? 'pointer' : 'default',
        outline: selected ? '2px solid var(--color-primary)' : 'none',
        outlineOffset: -2,
      }}
    >
      <span onClick={selectable ? (e) => e.stopPropagation() : undefined}>
        <Checkbox checked={task.done} onChange={() => onToggle(task.id)} color={catColor[task.cat]} />
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 15, fontWeight: 500,
          color: task.done ? 'var(--text-faint)' : 'var(--text-strong)',
          textDecoration: task.done ? 'line-through' : 'none',
        }}>{task.title}</div>
        {task.note && <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>{task.note}</div>}
      </div>
      <Badge tone={catTone[task.cat]} dot>{task.list}</Badge>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 5, minWidth: 88, justifyContent: 'flex-end',
        fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 500,
        color: overdue ? 'var(--danger)' : 'var(--text-muted)',
      }}>
        <i data-lucide={overdue ? 'alert-circle' : 'clock'} style={{ width: 13, height: 13 }}></i>
        {task.due}
      </div>
      <i data-lucide="grip-vertical" style={{ width: 16, height: 16, color: 'var(--ink-300)', opacity: hover ? 1 : 0 }}></i>
    </div>
  );
}
window.TaskRow = TaskRow;
