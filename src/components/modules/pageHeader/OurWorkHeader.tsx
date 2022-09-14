import SquareColors from '@elements/square-colors';
import { Body } from '@interfaces/home-data/home.interface';
import React from 'react';

export const OurWorkHeader = ({data}: {data: Body}) => {
  return (
    <section className="w-full flex flex-col-reverse md:flex-row px-[16vw] py-[10vw]">
        <div className="aspect-square flex justify-center md:justify-end my-6">
          <div className="w-[128px]">
            <SquareColors text="↓" textSize='md'/>
          </div>
        </div>
        <div className="flex flex-col justify-evenly md:ml-[2rem] text-center md:text-left my-6">
          <h1 className="text-[1.625rem] md:text-4xl lg:text-[3.625rem]">{data.left.title}</h1>
          <p className="text-sm md:text-2xl lg:text-[1.75rem]">{data.left.subtitle}</p>
        </div>
      </section>
  );
};
