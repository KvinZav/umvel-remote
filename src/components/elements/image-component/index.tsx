import { getStrapiMedia } from '@services/media/getImage';
import { ImageProps } from '@type/components/Image.type';
import NextImage from 'next/image';
import { FC } from 'react';

const Image: FC<ImageProps> = ({ alt, width, height, url, layout = 'fixed', priority, objectFit = "contain", ...props }) => {
  return (
    <NextImage
      width={width}
      height={height}
      objectFit={objectFit}
      src={url.includes('https://') ? getStrapiMedia(url) : url}
      alt={alt || ''}
      layout={layout}
      priority={priority}
      {...props}
    />
  );
};

export default Image;
