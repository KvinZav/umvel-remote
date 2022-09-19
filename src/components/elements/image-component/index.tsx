import { getStrapiMedia } from "@services/media/getImage";
import { ImageProps } from "@type/components/Image.type";
import NextImage from "next/image";
import { FC } from "react";

const Image: FC<ImageProps> = ({ alt, width, height, url, layout = "fixed", ...props }) => {

    return (
        <NextImage
            width={width}
            height={height}
            objectFit="contain"
            src={getStrapiMedia(url)}
            alt={alt || ""}
            layout={layout}
            {...props}
        />
    );
};

export default Image;