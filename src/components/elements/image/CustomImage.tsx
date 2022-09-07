import { ICustomImage } from "@interfaces/components/ICustomImage";

const CustomImage = ({ src, alt, ...props }: ICustomImage) => {
  return (
    <picture>
      <source srcSet={src}/>
      <img
        src={src}
        alt={alt}
        {...props}
      />
    </picture>
  );
};

export default CustomImage;
