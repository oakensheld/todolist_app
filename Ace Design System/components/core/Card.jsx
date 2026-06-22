import React from 'react';

export function Card({
  children, padding = 'var(--space-5)', interactive = false,
  elevation = 'sm', style = {}, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const shadows = { none: 'none', xs: 'var(--shadow-xs)', sm: 'var(--shadow-sm)', md: 'var(--shadow-md)' };
  const base = shadows[elevation] ?? shadows.sm;

  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding,
        boxShadow: interactive && hover ? 'var(--shadow-md)' : base,
        transform: interactive && hover ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'box-shadow 160ms ease, transform 160ms ease',
        cursor: interactive ? 'pointer' : 'default',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
