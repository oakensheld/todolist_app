import React from 'react';

export function ProgressBar({ value = 0, max = 100, color = 'var(--color-primary)', height = 8, showLabel = false, style = {}, ...rest }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-sans)', ...style }} {...rest}>
      <div style={{ flex: 1, height, background: 'var(--ink-200)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
        <div style={{
          width: `${pct}%`, height: '100%', background: color,
          borderRadius: 'var(--radius-full)', transition: 'width 320ms cubic-bezier(0.4,0,0.2,1)',
        }} />
      </div>
      {showLabel && (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-muted)', minWidth: 38, textAlign: 'right' }}>
          {Math.round(pct)}%
        </span>
      )}
    </div>
  );
}
