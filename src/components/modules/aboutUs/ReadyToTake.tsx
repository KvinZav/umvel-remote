import PrismButton from '@elements/square-colors';
import { environment } from '@environments/index';
import { get } from '@fetcher/get';
import React from 'react';
import useSWR from 'swr';
import { PhilosophyBulletPoint } from '@interfaces/about-us-data/about-us.interface';
import Link from 'next/link';

export const ReadyToTake = () => {
  const infoAboutUs = useSWR(environment.ABOUT_US, get, {
    revalidateOnFocus: false,
  });

  if (!infoAboutUs.data) {
    return;
  }

  const { quotes } = infoAboutUs.data?.data?.attributes;

  return (
    <div className="md:overflow-auto md:flex md:border border-secondary-10 border-solid mt-24 md:mt-52 xl:mt-[250px]">
      <div
        className="md:aspect-square flex-1 lg:min-h-[56rem] md:min-w-[38rem] lg:min-w-[56rem] xl:min-w-[1280px] md:min-h-[38rem] flex"
      >
        <div className="px-16 py-20 lg:px-32 lg:py-60 xl:pt-96">
          <h1 className="font-bold md:mb-6 text-m3 md:text-b4 mb-4">{quotes.title}</h1>
          <p className="mb-8 text-s1">{quotes.subtitle}</p>
          <div className="p-10 flex md:flex-row flex-col-reverse items-center text-center">
            <Link href="/our-work">
              <PrismButton>{'Our Work'}</PrismButton>
            </Link>

            <p className="font-bold text-m3 md:text-m4 lg:text-m3 md:ml-10 mb-14 md:mb-0">
              We deliver what we promise.
            </p>
          </div>
        </div>
      </div>
      <div
        className="bg-primary-black md:aspect-square flex-1 lg:min-h-[56rem] md:min-w-[38rem] lg:min-w-[56rem] xl:min-w-[1280px] md:min-h-[38rem] flex"
        // className="bg-primary-black xl:w-[50%] max-h-[56rem] lg:min-w-[56rem] lg:min-h-[56rem] md:min-w-[38rem]
        //   md:min-h-[38rem] flex "
      >
        <div className="overflow-auto flex md:overflow-hidden md:block md:px-16 md:py-20 lg:px-32 lg:py-60 xl:pt-96">
          <div className="min-w-[319px] min-h-[319px] md:min-w-[0] md:min-h-[0] p-12 md:p-0">
            <p className="mb-3 text-s1 text-primary-white">{quotes.philosophy.title}</p>
            <h1 className="font-bold lg:mb-2 text-m4 md:text-b4 text-primary-white">
              {quotes.philosophy.body}
            </h1>
          </div>

          <div
            className="min-w-[319px] min-h-[319px] md:min-w-[0] md:min-h-[0] p-12 
              md:p-0 lg:flex justify-between lg:mt-16 lg:space-x-24 xl:space-x-40"
          >
            {quotes?.philosophy.bulletPoints.map((item: PhilosophyBulletPoint, index: number) => {
              return (
                <div key={'indicator-' + index}>
                  <p className="text-s1 mt-6 text-primary-white">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
