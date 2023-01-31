export type IconNameType =
  | 'Delete'
  | 'Send'
  | 'Search'
  | 'People'
  | 'Rocket'
  | 'Devices'
  | 'Lock'
  | 'Support'
  | 'Insights'
  | 'Storefront';

export type IconProps = {
  name: IconNameType;
  size?: number;
  props?: any;
};
