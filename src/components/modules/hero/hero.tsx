import { Card } from '@elements/card/card';
import { BlockNameEnum } from '@enums/BlockName';
import { environment } from '@environments/index';
import { FETCHER } from '@fetcher/clients';
import useMediaQuery from '@hooks/useMediaQuery';
import React from 'react';
import useSWR from 'swr';
import ViewPager from './view-pager';

const Hero = () => {
  
  const isMobile = useMediaQuery('(max-width: 639px)');
  const tablet = useMediaQuery('(max-width: 1023px) and (min-width: 640px)');

  const { data: event } = useSWR(environment.HOME_URL);
  if (!event) return null;

  const { block, caseOfStudy } = FETCHER(event, BlockNameEnum.heading);

  return (
    <>
      <div className="">
          <ViewPager
            cases={caseOfStudy}
          />
      </div>
    </>
  );
};

export default React.memo(Hero);
