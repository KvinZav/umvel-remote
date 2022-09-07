import { ImageProps } from "next/image";
import {CSSProperties} from "react";

export interface ICustomImage extends ImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
}
