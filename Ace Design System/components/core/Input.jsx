import React from 'react';

const sizes = {
  sm: { height: 36, fontSize: 14, padding: '0 12px' },
  md: { height: 42, fontSize: 15, padding: '0 14px' },
  lg: { height: 48, fontSize: 16, padding: '0 16px' },
};

export function Input({
  value, onChange, placeholder, type = 'text', size = 'md',
  iconLeft = null, iconRight = null, disabled = false, invalid = false,
  label, hint, style = {}, ...rest
}) {
  const s = sizes[size] || sizes.md;
  const [focus, setFocus] = React.useState(false);

  const borderColor = invalid ? 'var(--danger)'
    : focus ? 'var(--border-focus)' : 'var(--border-default)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-sans)', ...style }}>
      {label && (
        <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)' }}>{label}</span>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        height: s.height, padding: s.padding,
        background: disabled ? 'var(--ink-100)' : 'var(--surface-card)',
        border: `1px solid ${borderColor}`, borderRadius: 'var(--radius-md)',
        boxShadow: focus ? 'var(--shadow-focus)' : 'var(--shadow-xs)',
        transition: 'border-color 120ms ease, box-shadow 120ms ease',
        opacity: disabled ? 0.6 : 1,
      }}>
        {iconLeft && <span style={{ display: 'inline-flex', color: 'var(--text-faint)', width: 18, height: 18 }}>{iconLeft}</span>}
        <input
          type={type} value={value} placeholder={placeholder} disabled={disabled}
          onChange={(e) => onChange && onChange(e.target.value)}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
            fontSize: s.fontSize, fontFamily: 'var(--font-sans)', color: 'var(--text-strong)',
          }}
          {...rest}
        />
        {iconRight && <span style={{ display: 'inline-flex', color: 'var(--text-faint)', width: 18, height: 18 }}>{iconRight}</span>}
      </div>
      {hint && (
        <span style={{ fontSize: 'var(--text-xs)', color: invalid ? 'var(--danger)' : 'var(--text-muted)' }}>{hint}</span>
      )}
    </div>
  );
}
