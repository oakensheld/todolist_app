import React from 'react';

const sizes = { xs: 24, sm: 32, md: 40, lg: 56 };
const palette = [
  ['#EEF4FD', 'var(--blue-700)'],
  ['#F1EEFE', 'var(--violet-600)'],
  ['#FDF4E2', 'var(--amber-600)'],
  ['#E8F6EF', 'var(--green-600)'],
];

function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase() || '?';
}

export function Avatar({ name = '', src, size = 'md', style = {}, ...rest }) {
  const dim = sizes[size] || sizes.md;
  const idx = name ? name.charCodeAt(0) % palette.length : 0;
  const [bg, fg] = palette[idx];

  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: dim, height: dim, flex: 'none', borderRadius: 'var(--radius-full)',
      overflow: 'hidden', background: bg, color: fg,
      fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-bold)',
      fontSize: dim * 0.4, letterSpacing: '-0.01em', userSelect: 'none', ...style,
    }} {...rest}>
      {src
        ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : initials(name)}
    </span>
  );
}
