import { environment } from '@environments/index';
import { CASE_FETCHER } from '@fetcher/clients';
import { get } from '@fetcher/get';
import CasesHero from '@modules/cases/CasesHero';
import { useRouter } from 'next/router';
import React from 'react';
import useSWR from 'swr';

const CasesPage = () => {
  
  const router = useRouter()
  const { id } = router.query
  
  const { data: event } = useSWR(environment.CASES_URL, get, {revalidateOnFocus: false})  
  if(!event || typeof id !== 'string') return;

  const caseData = CASE_FETCHER(event, id)
  if (!caseData) return;

  return(
    <>
      <CasesHero
        caseData={caseData}
      />
    </>
  )
}

export default CasesPage;