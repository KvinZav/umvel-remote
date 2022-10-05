import BasicButton from '@elements/button';
import { BlockNameEnum } from '@enums/BlockName';
import { environment } from '@environments/index';
import { FETCHER } from '@fetcher/clients';
import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';
import UmvelCard from './UmvelCard';

//eslint-disable-next-line react/display-name
export const FooterCta = React.memo(({ theme = 'dark' }: { theme?: 'dark' | 'light' }) => {
  
  const { data: event } = useSWR(environment.HOME_URL);
  if (!event) return null;

  const { left } = FETCHER(event, BlockNameEnum.interactiveFooter);
  const darkTheme = theme === 'dark';

  return (
    <UmvelCard darkTheme={darkTheme} >
        <div className='p-12 md:p-[8%_4vw] lg:p-[10%_5vw] xl:p-[182px]'>
          <h1 className={`text-m4 lg:text-b3 font-bold pb-6 xl:pb-8`}>{left.title}</h1>
          <p className="text-s1 pb-6 xl:pb-8">{left.subtitle}</p>
          <Link href="/lets-talk">
            <a>
              <BasicButton theme={theme}>{'Let\'s Talk!'}</BasicButton>
            </a>
          </Link>
        </div>
    </UmvelCard>
  );
});
