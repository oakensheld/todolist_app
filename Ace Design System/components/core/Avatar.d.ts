import * as React from 'react';

/** Circular user avatar — image when `src` is set, otherwise tinted initials derived from `name`. */
export interface AvatarProps {
  /** Full name; used for initials and to pick a tint. */
  name?: string;
  /** Image URL. Falls back to initials if omitted. */
  src?: string;
  /** @default "md" */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

export function Avatar(props: AvatarProps): JSX.Element;
