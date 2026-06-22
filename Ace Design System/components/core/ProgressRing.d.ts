import * as React from 'react';

/** Circular progress dial with a centered percentage (or custom label). Good for daily-goal widgets. */
export interface ProgressRingProps {
  value?: number;
  /** @default 100 */
  max?: number;
  /** Diameter in px. @default 56 */
  size?: number;
  /** Ring thickness. @default 6 */
  stroke?: number;
  /** Arc color. @default brand blue */
  color?: string;
  /** Override the centered text (defaults to rounded %). */
  label?: string;
  style?: React.CSSProperties;
}

export function ProgressRing(props: ProgressRingProps): JSX.Element;
