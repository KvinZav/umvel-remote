import BasicButton from '@elements/button';
import { CustomCard } from '@elements/card/card';
import CustomImage from '@elements/image-component/CustomImage';
import { BlockNameEnum } from '@enums/BlockName';
import { environment } from '@environments/index';
import { FETCHER } from '@fetcher/clients';
import React from 'react';
import useSWR from 'swr';

export const FooterCta = ({theme = 'dark'}: {theme?: 'dark' | 'light'}) => {

  const { data: event } = useSWR(environment.HOME_URL)
  if (!event) return null;

  const { left } = FETCHER(event, BlockNameEnum.interactiveFooter);
  const darkTheme = theme === 'dark';

  return(
    <div className={`grid md:grid-cols-2 ${darkTheme ? 'bg-primary-black' : ''}`}>
      <CustomCard customStyles={`flex flex-col items-center justify-center ${!darkTheme ? 'border border-[#ccc]' : ''}`} borderless>
        <div className={`flex flex-col w-[280px] lg:w-[420px] ${darkTheme ? ' text-primary-white' : ''}`}>
          <h1 className={`text-[26px] md:text-[27px] lg:text-[58px] leading-tight font-bold pb-6 xl:pb-8`}>{left.title}</h1>
          <p className="text-base lg:text-lg leading-tight pb-6 xl:pb-8">{left.subtitle}</p>
          <BasicButton theme={theme}>Lets Talk!</BasicButton>
        </div>
      </CustomCard>
      <CustomCard customStyles="relative grid grid-cols-12 h-full" borderless>
        {
          [...new Array(144)].map((_, n) => <div key={n+''} className={`border ${darkTheme ? 'border-[#333]' : 'border-[#ccc]'}`}/>)
        }
        <div className="absolute w-full p-[24vw] md:p-[12vw]">
          <CustomImage 
            src={`/assets/images/${darkTheme ? 'umvelLogo.svg' : 'umvelLogoDark.svg'}`}
            alt={'logo-umvel'}
            className="w-full"/>
        </div>
      </CustomCard>
    </div>
  )
}
