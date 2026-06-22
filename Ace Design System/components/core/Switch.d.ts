import * as React from 'react';

/** On/off toggle with a springy knob. For boolean settings. */
export interface SwitchProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  /** Optional trailing label. */
  label?: string;
  /** @default "md" */
  size?: 'sm' | 'md';
  disabled?: boolean;
  style?: React.CSSProperties;
}

export function Switch(props: SwitchProps): JSX.Element;
