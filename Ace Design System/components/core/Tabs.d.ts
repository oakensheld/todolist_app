import * as React from 'react';

export type TabItem = string | { value: string; label: string; count?: number };

/** Horizontal tab/segmented switcher. `underline` for content sections, `pill` for compact filters. */
export interface TabsProps {
  /** Tabs — plain strings or objects with an optional count badge. */
  items: TabItem[];
  /** Currently selected value. */
  value: string;
  onChange?: (value: string) => void;
  /** @default "underline" */
  variant?: 'underline' | 'pill';
  style?: React.CSSProperties;
}

export function Tabs(props: TabsProps): JSX.Element;
