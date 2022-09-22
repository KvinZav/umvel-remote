import { environment } from '@environments/index';
import { CASE_FETCHER } from '@fetcher/clients';
import { get } from '@fetcher/get';
import { CasesDataInterface } from '@interfaces/cases-data/cases.interface';
import { useRouter } from 'next/router';
import React from 'react';
import useSWR from 'swr';

const CasesPage = () => {
  const router = useRouter()
  const { id } = router.query

  const {data: event} = useSWR(environment.CASES_URL, get, {revalidateOnFocus: false})
  
  if(!event || !id) return

  const { title } = CASE_FETCHER(event, id)  

  return(
    <>
      <h1>{title}</h1>
    </>
  )
}

export default CasesPage;