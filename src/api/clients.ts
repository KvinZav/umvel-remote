import { BlockNameEnum } from "@enums/BlockName";
import { CasesDataInterface } from "@interfaces/cases-data/cases.interface";
import { HomeDataInterface } from "@interfaces/home-data/home.interface";

export const FETCHER = (response: HomeDataInterface, blockName: BlockNameEnum) => {
    return response.data.attributes.body.find((block) => block.__component === blockName);
};

export const CASE_FETCHER = (response: CasesDataInterface, id : string) => {    
    return response.cases.find(caseItem => caseItem.data.id.toString() === id)?.data.attributes;
};
