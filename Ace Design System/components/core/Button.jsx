import React from 'react';

const sizes = {
  sm: { height: 32, padding: '0 12px', fontSize: 14, gap: 6 },
  md: { height: 40, padding: '0 16px', fontSize: 15, gap: 8 },
  lg: { height: 48, padding: '0 22px', fontSize: 16, gap: 8 },
};

const palettes = {
  primary: {
    background: 'var(--color-primary)', color: 'var(--text-on-primary)',
    border: '1px solid transparent',
    hoverBg: 'var(--color-primary-hover)', activeBg: 'var(--color-primary-active)',
  },
  secondary: {
    background: 'var(--surface-card)', color: 'var(--text-strong)',
    border: '1px solid var(--border-default)',
    hoverBg: 'var(--surface-hover)', activeBg: 'var(--ink-100)',
  },
  ghost: {
    background: 'transparent', color: 'var(--text-body)',
    border: '1px solid transparent',
    hoverBg: 'var(--ink-100)', activeBg: 'var(--ink-200)',
  },
  danger: {
    background: 'var(--danger)', color: '#fff',
    border: '1px solid transparent',
    hoverBg: 'var(--red-600)', activeBg: 'var(--red-600)',
  },
};

export function Button({
  children, variant = 'primary', size = 'md', block = false,
  disabled = false, iconLeft = null, iconRight = null, style = {}, ...rest
}) {
  const s = sizes[size] || sizes.md;
  const p = palettes[variant] || palettes.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const bg = disabled ? p.background
    : active ? p.activeBg : hover ? p.hoverBg : p.background;

  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        display: block ? 'flex' : 'inline-flex',
        width: block ? '100%' : 'auto',
        alignItems: 'center', justifyContent: 'center', gap: s.gap,
        height: s.height, padding: s.padding, fontSize: s.fontSize,
        fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-semibold)',
        lineHeight: 1, letterSpacing: 'var(--tracking-snug)',
        background: bg, color: p.color, border: p.border,
        borderRadius: 'var(--radius-md)', cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1, transition: 'background 120ms ease, transform 80ms ease',
        transform: active && !disabled ? 'scale(0.98)' : 'scale(1)',
        whiteSpace: 'nowrap', ...style,
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
