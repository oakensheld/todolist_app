// Ace mobile UI kit — iPhone bezel + status bar + home indicator
function PhoneFrame({ children }) {
  return (
    <div style={{
      width: 390, height: 844, flex: 'none', position: 'relative',
      background: '#000', borderRadius: 54, padding: 5, boxSizing: 'border-box',
      boxShadow: '0 32px 70px rgba(20,22,26,0.28)',
    }}>
      <div style={{
        width: '100%', height: '100%', background: 'var(--surface-page)',
        borderRadius: 49, overflow: 'hidden', position: 'relative',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* status bar */}
        <div style={{
          height: 54, flex: 'none', display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', padding: '0 28px 8px',
          fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 15, color: 'var(--text-strong)',
          position: 'relative', zIndex: 5,
        }}>
          <span>9:41</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <i data-lucide="signal" style={{ width: 16, height: 16 }}></i>
            <i data-lucide="wifi" style={{ width: 16, height: 16 }}></i>
            <i data-lucide="battery-full" style={{ width: 20, height: 16 }}></i>
          </div>
        </div>
        {/* dynamic island */}
        <div style={{
          position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)',
          width: 124, height: 35, background: '#000', borderRadius: 20, zIndex: 10,
        }}></div>

        <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
          {children}
        </div>

        {/* home indicator */}
        <div style={{
          position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)',
          width: 134, height: 5, background: 'var(--ink-900)', borderRadius: 3, opacity: 0.85, zIndex: 20,
        }}></div>
      </div>
    </div>
  );
}
window.PhoneFrame = PhoneFrame;
