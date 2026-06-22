// Ace mobile UI kit — shared bottom tab bar
function TabBar({ tab, onTab }) {
  const tabs = [['today', 'Today', 'sun'], ['calendar', 'Calendar', 'calendar-days'], ['prep', 'Prep', 'briefcase'], ['you', 'You', 'user']];

  return (
    <nav style={{
      position: 'absolute', left: 0, right: 0, bottom: 0, height: 84, paddingBottom: 20,
      background: 'rgba(255,255,255,0.86)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
      borderTop: '1px solid var(--border-subtle)', display: 'flex', zIndex: 25,
    }}>
      {tabs.map(([id, label, icon]) => (
        <button key={id} onClick={() => onTab(id)} style={{
          flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3,
          border: 'none', background: 'transparent', cursor: 'pointer',
          color: tab === id ? 'var(--color-primary)' : 'var(--text-faint)',
        }}>
          <i data-lucide={icon} style={{ width: 22, height: 22 }}></i>
          <span style={{ fontSize: 10, fontWeight: 600 }}>{label}</span>
        </button>
      ))}
    </nav>
  );
}
window.TabBar = TabBar;
