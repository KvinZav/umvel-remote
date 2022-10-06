export type ImageProps = {
  alt: string;
  width?: number | string;
  height?: number | string;
  url: string;
  layout?: 'fixed' | 'fill' | 'intrinsic' | 'responsive';
  className?: string;
  priority?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  previewUrl?: string;
};
