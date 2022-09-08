export interface CardInterface {
    styles: {
        textStyles: {  height: "title" | "subtitle" | "paragraph", align: string };
        direction?: "col" | "col-reverse";
        color?: string;
        textPositionHorizontal: "start" | "center" | "end";
        textPositionVertical: "start" | "center" | "end";
        bg: string;
        bgSecondary?:string;
        borderColor?: string;
    },
    text?: string;
    description?: string;
    imageUrl?: string;
    showDescription?: boolean;
    showButton?:boolean;
}

