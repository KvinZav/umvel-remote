import { getStrapiMedia } from '@services/media/getImage';
import { ImageProps } from '@type/components/Image.type';
import NextImage from 'next/image';
import { FC } from 'react';

const Image: FC<ImageProps> = ({ alt, width, height, url, layout = 'fixed', priority, objectFit = "contain", previewUrl, title, ...props }) => {
  return (
    <NextImage
      width={width}
      height={height}
      objectFit={objectFit}
      src={url.includes('https://') ? getStrapiMedia(url) : url}
      alt={alt || ''}
      layout={layout}
      priority={priority}
      placeholder={previewUrl ? "blur" : "empty"}
      blurDataURL={previewUrl}
      title={title}
      {...props}
    />
  );
};

export default Image;
