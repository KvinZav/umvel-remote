import BasicButton from '@elements/button';
import { CustomCard } from '@elements/card/card';
import CustomImage from '@elements/image-component/CustomImage';
import { BlockNameEnum } from '@enums/BlockName';
import { environment } from '@environments/index';
import { FETCHER } from '@fetcher/clients';
import React from 'react';
import useSWR from 'swr';

const FooterCta = () => {

  const { data: event } = useSWR(environment.HOME_URL)
  if (!event) return null;

  const { left } = FETCHER(event, BlockNameEnum.interactiveFooter)  

  return(
    <div className="grid md:grid-cols-2 bg-primary-black">
      <CustomCard customStyles="flex flex-col items-center justify-center" borderless>
        <div className="flex flex-col w-[280px] lg:w-[420px]">
          <h1 className="text-[26px] md:text-[27px] lg:text-[58px] leading-tight font-bold text-primary-white pb-6 xl:pb-8">{left.title}</h1>
          <p className="text-base lg:text-lg leading-tight text-primary-white pb-6 xl:pb-8">{left.subtitle}</p>
          <BasicButton theme="dark">Lets Talk!</BasicButton>
        </div>
      </CustomCard>
      <CustomCard customStyles="relative grid grid-cols-12" borderless>
        {
          [...new Array(144)].map((_, n) => <div key={n+''} className="border-[0.5px] border-[#333333]"/>)
        }
        <div className="absolute w-full p-[24vw] md:p-[12vw]">
          <CustomImage 
            src={'/assets/images/umvelLogo.svg'}
            alt={'logo-umvel'}
            className="w-full"/>
        </div>
      </CustomCard>
    </div>
  )
}

export default FooterCta;