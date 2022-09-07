import { getStrapiMedia } from "@services/media/getImage";
import { ImageProps } from "@type/components/Image.type";
import NextImage from "next/image";
import { FC } from "react";

const Image: FC<ImageProps> = ({ alternativeText, width, height, url }) => {

    return (
        <NextImage
            layout="responsive"
            width={width}
            height={height}
            objectFit="contain"
            src={getStrapiMedia(url)}
            alt={alternativeText || ""}
        />
    );
};

export default Image;