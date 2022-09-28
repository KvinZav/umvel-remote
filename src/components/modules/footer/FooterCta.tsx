import BasicButton from '@elements/button';
import { BlockNameEnum } from '@enums/BlockName';
import { environment } from '@environments/index';
import { FETCHER } from '@fetcher/clients';
import React from 'react';
import useSWR from 'swr';
import UmvelCard from './UmvelCard';

export const FooterCta = ({theme = 'dark'}: {theme?: 'dark' | 'light'}) => {

  const { data: event } = useSWR(environment.HOME_URL)
  if (!event) return null;

  const { left } = FETCHER(event, BlockNameEnum.interactiveFooter);
  const darkTheme = theme === 'dark';

  return (
    <UmvelCard darkTheme={darkTheme} >
        <div className="p-12 lg:p-32">
          <h1 className="text-[26px] md:text-[27px] lg:text-[58px] leading-tight font-bold pb-6 xl:pb-8">{left.title}</h1>
          <p className="text-base lg:text-lg leading-tight pb-6 xl:pb-8">{left.subtitle}</p>
          <BasicButton theme={theme}>{'Let\'s Talk!'}</BasicButton>
        </div>
    </UmvelCard>
  )
}
