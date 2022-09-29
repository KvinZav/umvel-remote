import { MutableRefObject } from "react";

export type WorkCaseProps = {
    project: any;
    inverted?: boolean;
    alignImage?: 'left' | 'right' | 'center';
    caseRef?: (el : HTMLDivElement) => any;
}
