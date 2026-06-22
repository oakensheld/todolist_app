import React from 'react';

const tones = {
  neutral: { bg: 'var(--ink-100)', fg: 'var(--ink-700)' },
  primary: { bg: 'var(--blue-50)', fg: 'var(--blue-700)' },
  success: { bg: 'var(--green-50)', fg: 'var(--green-600)' },
  warning: { bg: 'var(--amber-50)', fg: 'var(--amber-600)' },
  danger:  { bg: 'var(--red-50)', fg: 'var(--red-600)' },
  study:   { bg: 'var(--cat-study-bg)', fg: 'var(--blue-700)' },
  project: { bg: 'var(--cat-project-bg)', fg: 'var(--violet-600)' },
  interview:{ bg: 'var(--cat-interview-bg)', fg: 'var(--amber-600)' },
  personal:{ bg: 'var(--cat-personal-bg)', fg: 'var(--green-600)' },
};

export function Badge({ children, tone = 'neutral', dot = false, size = 'md', style = {}, ...rest }) {
  const t = tones[tone] || tones.neutral;
  const small = size === 'sm';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      height: small ? 20 : 24, padding: small ? '0 8px' : '0 10px',
      background: t.bg, color: t.fg, borderRadius: 'var(--radius-full)',
      fontFamily: 'var(--font-sans)', fontSize: small ? 'var(--text-2xs)' : 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--tracking-snug)',
      whiteSpace: 'nowrap', ...style,
    }} {...rest}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor', flex: 'none' }} />}
      {children}
    </span>
  );
}
