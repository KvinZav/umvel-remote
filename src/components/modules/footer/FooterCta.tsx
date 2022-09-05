import BasicButton from '@elements/button';
import { CustomCard } from '@elements/card/card';
import { BlockNameEnum } from '@enums/BlockName';
import { environment } from '@environments/index';
import { FETCHER } from '@fetcher/clients';
import React from 'react';
import useSWR from 'swr';

const FooterCta = ({data}) => {

  const { data: event } = useSWR(environment.HOME_URL)
  if (!event) return null;

  const { left, right } = FETCHER(event, BlockNameEnum.interactiveFooter)

  console.log(left, right);
  


  return(
    <div className="grid md:grid-cols-2 bg-primary-black">
      <CustomCard customStyles="px-12 xl:px-32 flex flex-col items-center justify-center" borderless>
        <div className="flex flex-col">
          <h1 className="text-[26px] md:text-[27px] xl:text-[58px] leading-tight font-bold text-primary-white pb-6 xl:pb-8">{data.left.title}</h1>
          <p className="text-base xl:text-lg leading-tight text-primary-white pb-6 xl:pb-8">{data.left.subtitle}</p>
          <BasicButton theme="dark">Lets Talk!</BasicButton>
        </div>
      </CustomCard>
      <CustomCard customStyles="relative grid grid-cols-12" borderless>
        {
          [...new Array(144)].map((_, n) => <div key={n+''} className="border-[0.5px] hover:border-8 border-[#333333] hover:border-prisma-red"/>)
        }
        <img className="absolute w-full p-28" src={'/assets/images/umvelLogo.svg'}/>
      </CustomCard>
    </div>
  )
}

export default FooterCta;