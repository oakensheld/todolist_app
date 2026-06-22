import * as React from 'react';

/** Horizontal progress track — e.g. tasks completed in a list. */
export interface ProgressBarProps {
  value?: number;
  /** @default 100 */
  max?: number;
  /** Fill color (often a category color). @default brand blue */
  color?: string;
  /** Track/fill thickness in px. @default 8 */
  height?: number;
  /** Show a mono percentage label at the end. @default false */
  showLabel?: boolean;
  style?: React.CSSProperties;
}

export function ProgressBar(props: ProgressBarProps): JSX.Element;
