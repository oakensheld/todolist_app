import * as React from 'react';

/** Task / option checkbox. When `label` is set and checked, the label gets a strike-through (task-done affordance). */
export interface CheckboxProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  /** Optional inline label. */
  label?: string;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Fill color when checked (e.g. a category color). @default brand blue */
  color?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export function Checkbox(props: CheckboxProps): JSX.Element;
