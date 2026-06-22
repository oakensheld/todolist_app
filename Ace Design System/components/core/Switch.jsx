import React from 'react';

export function Switch({ checked = false, onChange, disabled = false, size = 'md', label, style = {}, ...rest }) {
  const dims = size === 'sm' ? { w: 36, h: 20, k: 14 } : { w: 44, h: 24, k: 18 };
  const control = (
    <span
      role="switch" aria-checked={checked}
      onClick={() => !disabled && onChange && onChange(!checked)}
      style={{
        display: 'inline-flex', alignItems: 'center', flex: 'none',
        width: dims.w, height: dims.h, padding: 3, borderRadius: 'var(--radius-full)',
        background: checked ? 'var(--color-primary)' : 'var(--ink-300)',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
        transition: 'background 160ms ease',
      }}
    >
      <span style={{
        width: dims.k, height: dims.k, borderRadius: '50%', background: '#fff',
        boxShadow: 'var(--shadow-sm)',
        transform: `translateX(${checked ? dims.w - dims.k - 6 : 0}px)`,
        transition: 'transform 160ms cubic-bezier(0.34,1.56,0.64,1)',
      }} />
    </span>
  );
  if (!label) return React.cloneElement(control, { style: { ...control.props.style, ...style } });
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--text-body)', ...style }} {...rest}>
      {control}{label}
    </label>
  );
}
