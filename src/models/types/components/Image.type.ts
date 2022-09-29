export type ImageProps = {
  alt: string;
  width: number | string;
  height: number | string;
  url: string;
  layout?: 'fixed' | 'fill' | 'intrinsic' | 'responsive';
  className?: string;
};
