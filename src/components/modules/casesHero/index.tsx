import useMediaQuery from '@hooks/useMediaQuery';
import { CaseAttributes } from '@interfaces/cases-data/cases.interface';
import React from 'react';
import CasesHeroDesktop from './desktop';
import CasesHeroMobile from './mobile';
import CasesHeroTablet from './tablet';

export type CasesHeroProps = {
  caseData: CaseAttributes
}


const CasesHero = (props: CasesHeroProps) => {

  const mobile = useMediaQuery('(max-width: 640px)');
  const tablet = useMediaQuery('(max-width: 1024px) and (min-width: 640px)');
  const desktop = useMediaQuery('(min-width: 1024px)');


  if(mobile) return <CasesHeroMobile caseData={props.caseData}/>
  if(tablet) return <CasesHeroTablet caseData={props.caseData}/>
  if(desktop) return <CasesHeroDesktop caseData={props.caseData}/>
}

export default CasesHero;