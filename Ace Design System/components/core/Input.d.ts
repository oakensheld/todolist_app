import * as React from 'react';

/** Text field with optional label, hint, icons and validation state. */
export interface InputProps {
  value?: string;
  onChange?: (next: string) => void;
  placeholder?: string;
  /** @default "text" */
  type?: string;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Field label above the control. */
  label?: string;
  /** Helper or error text below. */
  hint?: string;
  /** Show error styling (red border, red hint). @default false */
  invalid?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
