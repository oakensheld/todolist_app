import React from 'react';

export function ProgressRing({ value = 0, max = 100, size = 56, stroke = 6, color = 'var(--color-primary)', label, style = {}, ...rest }) {
  const pct = Math.max(0, Math.min(1, value / max));
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <span style={{ position: 'relative', display: 'inline-flex', width: size, height: size, ...style }} {...rest}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--ink-200)" strokeWidth={stroke} />
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke}
          strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - pct)}
          style={{ transition: 'stroke-dashoffset 420ms cubic-bezier(0.4,0,0.2,1)' }}
        />
      </svg>
      <span style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-mono)', fontWeight: 'var(--weight-semibold)',
        fontSize: size * 0.26, color: 'var(--text-strong)',
      }}>
        {label != null ? label : `${Math.round(pct * 100)}%`}
      </span>
    </span>
  );
}
