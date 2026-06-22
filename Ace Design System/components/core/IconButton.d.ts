import * as React from 'react';

/** Square button containing a single icon. Always pass `label` for accessibility. */
export interface IconButtonProps {
  /** The icon element (e.g. a Lucide <i data-lucide> or SVG). */
  children: React.ReactNode;
  /** Accessible label / tooltip — required. */
  label: string;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** @default "ghost" */
  variant?: 'ghost' | 'outline' | 'filled';
  /** Selected/toggled state (ghost only). @default false */
  active?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function IconButton(props: IconButtonProps): JSX.Element;
