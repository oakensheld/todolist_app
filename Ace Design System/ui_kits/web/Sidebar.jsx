// Ace web UI kit — left navigation sidebar
function Sidebar({ active, onNavigate, lists, activeList, todayCount }) {
  const { Avatar, Badge } = window.AceDesignSystem_db6642;
  const nav = [
    { id: 'today', label: 'Today', icon: 'sun', count: todayCount },
    { id: 'upcoming', label: 'Upcoming', icon: 'calendar-days' },
    { id: 'all', label: 'All tasks', icon: 'list-checks' },
    { id: 'interviews', label: 'Interview prep', icon: 'briefcase' },
  ];
  const catColor = { study: 'var(--cat-study)', project: 'var(--cat-project)', interview: 'var(--cat-interview)', personal: 'var(--cat-personal)' };

  const item = (selected) => ({
    display: 'flex', alignItems: 'center', gap: 10, height: 38, padding: '0 10px',
    borderRadius: 'var(--radius-md)', cursor: 'pointer', fontSize: 14,
    fontWeight: selected ? 700 : 500,
    color: selected ? 'var(--color-primary)' : 'var(--text-body)',
    background: selected ? 'var(--blue-50)' : 'transparent',
  });

  return (
    <aside style={{
      width: 248, flex: 'none', height: '100%', boxSizing: 'border-box',
      background: 'var(--surface-card)', borderRight: '1px solid var(--border-subtle)',
      display: 'flex', flexDirection: 'column', padding: '16px 12px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 8px 18px' }}>
        <img src="../../assets/logo-mark.svg" width="30" height="30" alt="Ace" />
        <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-strong)' }}>Ace</span>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {nav.map(n => (
          <div key={n.id} style={item(active === n.id)} onClick={() => onNavigate(n.id)}>
            <i data-lucide={n.icon} style={{ width: 18, height: 18 }}></i>
            <span style={{ flex: 1 }}>{n.label}</span>
            {n.count != null && <Badge tone={active === n.id ? 'primary' : 'neutral'} size="sm">{n.count}</Badge>}
          </div>
        ))}
      </nav>

      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-faint)', margin: '22px 10px 8px' }}>Lists</p>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {lists.map(l => (
          <div key={l.id} style={item(activeList === l.id && active === 'list')} onClick={() => onNavigate('list', l.id)}>
            <span style={{ width: 9, height: 9, borderRadius: 3, background: catColor[l.cat], flex: 'none' }}></span>
            <span style={{ flex: 1 }}>{l.name}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint)' }}>{l.open}</span>
          </div>
        ))}
      </nav>

      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 10, padding: '10px 8px', borderTop: '1px solid var(--border-subtle)' }}>
        <Avatar name="Maya Chen" size="sm" />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-strong)' }}>Maya Chen</div>
          <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Junior · CS</div>
        </div>
        <i data-lucide="settings" style={{ width: 16, height: 16, color: 'var(--text-faint)' }}></i>
      </div>
    </aside>
  );
}
window.Sidebar = Sidebar;
