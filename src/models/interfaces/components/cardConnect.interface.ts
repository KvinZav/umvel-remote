import { Position } from '@enums/position.enum';
import { Sizes } from '@enums/sizes.enum';
import { CSSProperties, ReactNode } from 'react';

export interface CardConnectConfiguration {
  size: Sizes;
  align: Position;
}

export interface CardConnectComponent {
  config: CardConnectConfiguration[];
  alignDefault?: Position;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export interface positionConfiguration {
  [key: string]: ConnectorConfiguration;
}

export interface ConnectorConfiguration {
  image: string;
  className: string;
  widthConnector: string;
  style: CSSProperties;
}
