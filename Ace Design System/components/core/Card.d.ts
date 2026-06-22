import * as React from 'react';

/** Rounded white surface with a subtle border + soft shadow. The default container for grouped content. */
export interface CardProps {
  children: React.ReactNode;
  /** CSS padding value. @default "var(--space-5)" */
  padding?: string;
  /** Lift + deepen shadow on hover, show pointer. @default false */
  interactive?: boolean;
  /** Resting elevation. @default "sm" */
  elevation?: 'none' | 'xs' | 'sm' | 'md';
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}

export function Card(props: CardProps): JSX.Element;
