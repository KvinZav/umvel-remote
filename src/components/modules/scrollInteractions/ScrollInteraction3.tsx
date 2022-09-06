import { CustomCard } from '@elements/card/card';
import { BlockNameEnum } from '@enums/BlockName';
import { environment } from '@environments/index';
import { FETCHER } from '@fetcher/clients';
import { useAppState } from '@hooks/customHooks';
import React from 'react';
import useSWR from 'swr';

const ScrollInteraction3 = () => {

  const { data: event } = useSWR(environment.HOME_URL)
  if (!event) return null;

  const { step } = FETCHER(event, BlockNameEnum.scrollInteraction3)  

  const { left, right } = step[0]

  const { center } = step[1]
  const labels = center.text.split('\n\n')  
  
  return(
    <section className="grid grid-cols-2 lg:grid-cols-3 mb-[312px]">
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
      <div className="mt-20 mb-[104px] lg:mt-0 lg:mb-0 px-[72px] lg:px-8 col-span-2 lg:col-span-1 divide-y divide-secondary-10">
        {
          labels.map((i, n) => (
            <div key={n+''} className={`${n !== 0 ? 'py-4' : 'pb-4'}`}>
              <p>{i.replace(/\*/g, '')}</p>
            </div>
          ))
        }
        <div className="flex flex-col-reverse md:flex-row-reverse lg:flex-row justify-between items-center">
          <div className="flex w-32 aspect-square p-9">
            <div className="flex-1 bg-prisma-pink "/>
          </div>
          <div className="py-[104px] lg:py-0">
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