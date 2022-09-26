import React from "react";
import { BlockNameEnum } from "@enums/BlockName";
import { CardTeam } from "@elements/card";
import { Sizes } from "@enums/sizes.enum";

const configNames = [
  { size: Sizes.LG, rows: 7, columns: 7 },
  { size: Sizes.MD, rows: 4, columns: 4 },
];

export const HeaderAboutUs = ({data}) => {
  return (
    <div>
      <CardTeam
        config={configNames}
        className="relative border border-secondary-10 border-solid hidden md:block w-[100%] h-[42rem] p-[2vw]"
        names={data.names}
      >
        <div className="absolute w-[200px] lg:w-[400px] top-[8vw] left-[8vw]">
          <p className="font-bold text-[31px] lg:text-[58px]">We are Umvel</p>
        </div>
      </CardTeam>
    </div>
  );
};
