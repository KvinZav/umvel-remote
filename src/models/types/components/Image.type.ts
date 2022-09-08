export type ImageProps = {
    alternativeText: string;
    width: number | string
    height: number | string;
    url: string;
    layout?: 'fixed' | 'fill' | 'intrinsic' | 'responsive'; 
}