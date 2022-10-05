import Image from '@elements/image-component';
import PrismButton from '@elements/square-colors';
import { Body } from '@interfaces/home-data/home.interface';
import React from 'react';

export const OurWorkHeader = ({ data, onScrollButtonClick }: { data: Body, onScrollButtonClick: () => any }) => {
  return (
    <section className="w-full flex flex-col-reverse md:flex-row px-[70px] py-24 md:py-[124px] lg:py-40 xl:py-[211px]">
      <div className="flex justify-center items-center lg:items-start md:justify-end lg:ml-10 h-36 md:h-auto lg:pt-6">
        <PrismButton onClick={onScrollButtonClick}>
          <Image url="/assets/icons/arrowDown.svg" width={12} height={12} alt="Down" />
        </PrismButton>
      </div>
      <div className="flex flex-col justify-evenly md:ml-16 xl:ml-[92px] text-center md:text-left my-2 space-y-2">
        <h1 className="text-m3 md:text-b4 lg:text-b3 font-bold">
          {data.left.title}
        </h1>
        <p className="text-s3 md:text-m5 lg:text-m3">{data.left.subtitle}</p>
      </div>
    </section>
  );
};
