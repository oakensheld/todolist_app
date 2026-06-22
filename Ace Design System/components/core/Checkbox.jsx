import React from 'react';

const sizes = { sm: 18, md: 20, lg: 24 };

export function Checkbox({
  checked = false, onChange, label, size = 'md', disabled = false,
  color = 'var(--color-primary)', style = {}, ...rest
}) {
  const dim = sizes[size] || sizes.md;
  const [hover, setHover] = React.useState(false);

  return (
    <label
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)',
        color: 'var(--text-body)', userSelect: 'none', ...style,
      }}
      {...rest}
    >
      <span
        onClick={() => !disabled && onChange && onChange(!checked)}
        style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: dim, height: dim, flex: 'none', borderRadius: 'var(--radius-sm)',
          background: checked ? color : 'var(--surface-card)',
          border: checked ? `1px solid ${color}`
            : `1.5px solid ${hover ? 'var(--border-strong)' : 'var(--border-default)'}`,
          transition: 'background 120ms ease, border-color 120ms ease',
          boxShadow: checked ? 'none' : 'var(--shadow-xs)',
        }}
      >
        {checked && (
          <svg width={dim * 0.62} height={dim * 0.62} viewBox="0 0 24 24" fill="none"
            stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </span>
      {label && (
        <span style={{
          textDecoration: checked ? 'line-through' : 'none',
          color: checked ? 'var(--text-faint)' : 'var(--text-body)',
          transition: 'color 120ms ease',
        }}>{label}</span>
      )}
    </label>
  );
}
