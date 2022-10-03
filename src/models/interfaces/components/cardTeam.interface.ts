import { Sizes } from '@enums/sizes.enum';
import { CSSProperties, ReactNode } from 'react';

export interface CardTeamConfiguration {
  rows: number;
  columns: number;
  size: Sizes;
}

export interface CardTeamComponent {
  config: CardTeamConfiguration[];
  names: string[];
  className?: string;
  style?: CSSProperties;
  defaultConfig?: CardTeamConfiguration;
  children?: ReactNode;
}
