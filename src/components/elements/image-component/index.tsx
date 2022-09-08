import { getStrapiMedia } from "@services/media/getImage";
import { ImageProps } from "@type/components/Image.type";
import NextImage from "next/image";
import { FC } from "react";

const Image: FC<ImageProps> = ({ alternativeText, width, height, url, layout = "fixed" }) => {

    return (
        <NextImage
            width={width}
            height={height}
            objectFit="contain"
            src={getStrapiMedia(url)}
            alt={alternativeText || ""}
            layout={layout}
        />
    );
};

export default Image;