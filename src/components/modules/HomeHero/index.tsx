import { Card } from '@elements/card/card';
import { BlockNameEnum } from '@enums/BlockName';
import { environment } from '@environments/index';
import { FETCHER } from '@fetcher/clients';
import React from 'react';
import useSWR from 'swr';
import ViewPager from './view-pager';

const Hero = () => {
  
  const { data: event } = useSWR(environment.HOME_URL);
  if (!event) return null;

  const { caseOfStudy } = FETCHER(event, BlockNameEnum.heading);

  return (
    <>
      <ViewPager
        cases={caseOfStudy}
      />
    </>
  );
};

export default React.memo(Hero);
