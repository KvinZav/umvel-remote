import TechnicalInformation from '@modules/technicalInformation';
import { environment } from '@environments/index';
import { CASE_FETCHER } from '@fetcher/clients';
import { get } from '@fetcher/get';
import { useRouter } from 'next/router';
import React from 'react';
import useSWR from 'swr';
import ContactLayout from '@layouts/ContactLayout';
import CasesHero from '@modules/casesHero';
import { DeliveredValue } from '@modules/deliveredValue';
import { KeyFeatures } from '@modules/keyFeatures';
import CasesQuote from '@modules/casesQuote';
import CasesApp from '@modules/casesApp';
import CasesLearned from '@modules/casesLearned';
import { OtherCases } from '@modules/otherCases';
import Head from 'next/head';

const CasesPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: event } = useSWR(environment.CASES_URL, get, { revalidateOnFocus: false });
  if (!event || typeof id !== 'string') return;

  const {data, meta} = CASE_FETCHER(event, id);
  if (!data) return;

  const caseData = data.attributes

  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <CasesHero caseData={caseData} />
      <TechnicalInformation caseData={caseData} />
      <DeliveredValue data={caseData.deliverValue} primaryColor={caseData.primaryColor} />
      <KeyFeatures data={caseData.feature} />
      <CasesQuote caseData={caseData} />
      <CasesApp caseData={caseData} />
      <CasesLearned caseData={caseData} />
      <ContactLayout />
      <OtherCases caseData={caseData}/>
    </>
  );
};

export default CasesPage;
