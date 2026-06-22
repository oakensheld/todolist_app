import * as React from 'react';

/** Small pill for status, counts, priority, or category labels. */
export interface BadgeProps {
  children: React.ReactNode;
  /** Color tone — semantic or a planner category. @default "neutral" */
  tone?: 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'study' | 'project' | 'interview' | 'personal';
  /** Show a leading dot. @default false */
  dot?: boolean;
  /** @default "md" */
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
