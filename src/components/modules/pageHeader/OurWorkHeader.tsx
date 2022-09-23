import Image from '@elements/image-component';
import PrismButton from '@elements/square-colors';
import { Body } from '@interfaces/home-data/home.interface';
import React from 'react';

export const OurWorkHeader = ({data}: {data: Body}) => {
  return (
    <section className="w-full flex flex-col-reverse md:flex-row px-[72px] md:px-24 lg:px-60 py-24 md:py-[124px] lg:py-40">
        <div className="flex justify-center items-center lg:items-start md:justify-end lg:ml-10 h-36 md:h-auto lg:pt-6">
          <PrismButton>
            <Image url="/assets/icons/arrowDown.svg" width={12} height={12} alt="Down"/>
          </PrismButton>
        </div>
        <div className="flex flex-col justify-evenly md:ml-16 text-center md:text-left my-2 space-y-2">
          <h1 className="lg:leading-tight text-[1.625rem] md:text-4xl lg:text-[58px] font-bold">{data.left.title}</h1>
          <p className="text-sm md:text-xl lg:text-[1.75rem]">{data.left.subtitle}</p>
        </div>
      </section>
  );
};
