import React from 'react';

export function Tabs({ items = [], value, onChange, variant = 'underline', style = {}, ...rest }) {
  const pill = variant === 'pill';
  return (
    <div
      role="tablist"
      style={{
        display: 'inline-flex', alignItems: 'center',
        gap: pill ? 4 : 4,
        padding: pill ? 4 : 0,
        background: pill ? 'var(--surface-sunken)' : 'transparent',
        borderRadius: pill ? 'var(--radius-md)' : 0,
        borderBottom: pill ? 'none' : '1px solid var(--border-subtle)',
        fontFamily: 'var(--font-sans)', ...style,
      }}
      {...rest}
    >
      {items.map((it) => {
        const key = typeof it === 'string' ? it : it.value;
        const label = typeof it === 'string' ? it : it.label;
        const count = typeof it === 'string' ? null : it.count;
        const selected = key === value;
        return (
          <button
            key={key} role="tab" aria-selected={selected}
            onClick={() => onChange && onChange(key)}
            style={pill ? {
              display: 'inline-flex', alignItems: 'center', gap: 6,
              height: 32, padding: '0 14px', border: 'none', cursor: 'pointer',
              borderRadius: 'var(--radius-sm)',
              background: selected ? 'var(--surface-card)' : 'transparent',
              color: selected ? 'var(--text-strong)' : 'var(--text-muted)',
              boxShadow: selected ? 'var(--shadow-xs)' : 'none',
              fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)',
              fontFamily: 'var(--font-sans)', transition: 'all 120ms ease',
            } : {
              display: 'inline-flex', alignItems: 'center', gap: 6,
              height: 40, padding: '0 4px', marginBottom: -1, border: 'none',
              background: 'transparent', cursor: 'pointer',
              borderBottom: `2px solid ${selected ? 'var(--color-primary)' : 'transparent'}`,
              color: selected ? 'var(--text-strong)' : 'var(--text-muted)',
              fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)',
              fontFamily: 'var(--font-sans)', transition: 'color 120ms ease',
            }}
          >
            {label}
            {count != null && (
              <span style={{
                fontSize: 'var(--text-2xs)', fontWeight: 'var(--weight-bold)',
                color: selected ? 'var(--color-primary)' : 'var(--text-faint)',
                background: selected ? 'var(--blue-50)' : 'var(--ink-100)',
                borderRadius: 'var(--radius-full)', padding: '2px 7px', lineHeight: 1,
              }}>{count}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
