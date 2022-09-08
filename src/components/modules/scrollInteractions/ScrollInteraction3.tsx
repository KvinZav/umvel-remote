import { CustomCard } from '@elements/card/card';
import SquareColors from '@elements/square-colors';
import { BlockNameEnum } from '@enums/BlockName';
import { environment } from '@environments/index';
import { FETCHER } from '@fetcher/clients';
import { useAppState } from '@hooks/customHooks';
import useMediaQuery from '@hooks/useMediaQuery';
import React from 'react';
import useSWR from 'swr';

const ScrollInteraction3 = () => {

  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const { data: event } = useSWR(environment.HOME_URL)
  if (!event) return null;

  const { step } = FETCHER(event, BlockNameEnum.scrollInteraction3)  

  const { left, right } = step[0]

  const { center } = step[1]
  const labels = center.text.split('\n\n')
  
  return(
    <section className="grid grid-cols-2 lg:grid-cols-3 mb-[104px] md:mb-[112px] lg:mb-[312px]">
      <CustomCard customStyles="flex justify-end items-center p-4">
        <h1 className="text-[32px] md:text-[58px] font-bold text-right max-w-xs">
          {left.text}
        </h1>
      </CustomCard>
      <CustomCard customStyles="flex justify-start items-center p-4">
        <h2 className="text-[32px] md:text-[58px] font-bold text-left max-w-xs">
          <br/>
          {right.text.toLowerCase()}
        </h2>
      </CustomCard>
      {/* TODO: Replace with missing contents from CMS */}
      <div className="flex flex-col mt-20 lg:mt-0 lg:mb-0 px-[72px] md:px-36 lg:px-8 col-span-2 lg:col-span-1">
        {
          <ul className="flex flex-1 flex-col justify-between divide-y divide-secondary-10">
            {labels.slice(0, isDesktop ? 4 : labels.length).map((i, n) => (
              <li className="flex items-center h-full py-8 lg:py-0" key={n+''}>
                <p>{i.replace(/\*/g, '')}</p>
              </li>
            ))}
          </ul>
          }
        <div className="flex flex-col-reverse md:flex-row-reverse lg:flex-row justify-between items-center self-center w-full lg:w-auto">
          <div className="min-w-[52px] min-h-[52px] mr-3">
            <SquareColors text="Our Work" textSize="sm"/>
          </div>
          <div className="py-[104px] lg:py-0 mr-7 flex justify-center">
            <h2 className="font-bold text-xl">
              We seamlessly deliver business value.
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScrollInteraction3;