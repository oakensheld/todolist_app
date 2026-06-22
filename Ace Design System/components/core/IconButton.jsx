import React from 'react';

const sizes = { sm: 32, md: 40, lg: 48 };
const iconSizes = { sm: 16, md: 18, lg: 20 };

export function IconButton({
  children, label, size = 'md', variant = 'ghost',
  disabled = false, active = false, style = {}, ...rest
}) {
  const dim = sizes[size] || sizes.md;
  const [hover, setHover] = React.useState(false);
  const filled = variant === 'filled';
  const bg = filled
    ? (hover ? 'var(--color-primary-hover)' : 'var(--color-primary)')
    : active ? 'var(--blue-50)'
    : hover ? 'var(--ink-100)' : 'transparent';
  const color = filled ? '#fff' : active ? 'var(--color-primary)' : 'var(--text-body)';

  return (
    <button
      aria-label={label}
      title={label}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: dim, height: dim, flex: 'none',
        background: bg, color, border: variant === 'outline' ? '1px solid var(--border-default)' : '1px solid transparent',
        borderRadius: 'var(--radius-md)', cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1, transition: 'background 120ms ease, color 120ms ease',
        ...style,
      }}
      {...rest}
    >
      <span style={{ display: 'inline-flex', width: iconSizes[size], height: iconSizes[size] }}>
        {children}
      </span>
    </button>
  );
}
