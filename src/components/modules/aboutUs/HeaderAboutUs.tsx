import React from 'react';
import { CardTeam } from '@elements/card';
import { Sizes } from '@enums/sizes.enum';
import { environment } from '@environments/index';
import { get } from '@fetcher/get';
import useSWR from 'swr';
import CustomImage from '@elements/image-component/CustomImage';
import { AboutUsHeader } from '@interfaces/about-us-data/about-us.interface';

const configNames = [
  { size: Sizes.LG, rows: 6, columns: 12 },
  { size: Sizes.MD, rows: 7, columns: 7 },
  { size: Sizes.SM, rows: 8, columns: 5 },
];

export const HeaderAboutUs = ({ data }) => {
  const infoAboutUs = useSWR(environment.ABOUT_US, get, {
    revalidateOnFocus: false,
  });

  if (!infoAboutUs.data) {
    return;
  }

  const { header } = infoAboutUs.data?.data?.attributes;

  return (
    <div>
      <CardTeam
        config={configNames}
        className="relative md:block w-[100%] p-[2vw] pt-0"
        names={data.names}
      >
        <div
          className="absolute lg:w-[660px] md:w-[463px] w-[240px] right-[0] left-[0] 
            top-[15%] mx-auto lg:flex items-end"
        >
          <CustomImage
            src={'assets/images/umvelLogoDark.svg'}
            alt={'logo-umvel'}
            className="min-w-[96px] w-[96px] md:min-w-[128px] md:w-[128px] 
              lg:min-w-[144px] lg:w-[144px] mb-2.5 mx-auto lg:mr-6"
          />
          <div className="lg:text-left text-center">
            <p className="font-bold text-[38px] md:text-[68px] lg:text-[78px]">{header?.title}</p>
            <p className="font-bold text-[16px] md:text-[20px] lg:text-[24px]">
              {header?.subtitle}
            </p>
          </div>
        </div>

        <div className="absolute bottom-[20%] lg:bottom-[25%] w-[96%] flex justify-between px-[8%] flex-wrap">
          {header?.highlightText.map((item: AboutUsHeader, index: number) => {
            return (
              <div
                key={'indicator-' + index}
                className={`${index == 2 ? 'w-full' : 'w-6/12'} 
                  md:w-4/12 md:flex md:justify-center flex-col lg:flex-row text-center items-center`}
              >
                <p className="font-bold text-[28px] md:text-[38px] mr-2">{item.title}</p>
                <p className="text-[16px] md:text-[20px]">{item.subtitle}</p>
              </div>
            );
          })}
        </div>
      </CardTeam>
    </div>
  );
};
