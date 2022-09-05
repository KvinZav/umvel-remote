import { BlockNameEnum } from "@enums/BlockName";
import { HomeDataInterface } from "@interfaces/home-data/home.interface";

export const FETCHER = (response: HomeDataInterface, blockName: BlockNameEnum) => {
    return response.data.attributes.body.find((block) => block.__component === blockName);
};
