import { environment } from '@environments/index';
import useSWR from 'swr';
import { get } from '@fetcher/get';
import WorkCases from '@modules/workCases';
import { OurWorkHeader } from '@modules/pageHeader';
import { BlockNameEnum } from '@enums/BlockName';
import useScrollOffset from '@hooks/useScrollOffset';
import { useEffect } from 'react';
import { FooterCta } from '@modules/footer';
import Head from 'next/head';

export default function OurWork() {
  const isBrowser = typeof window !== 'undefined';
  const { handleScroll } = useScrollOffset();

  const onScroll = () => handleScroll(isBrowser ? window.pageYOffset : 0);

  useEffect(() => {
    isBrowser && window.addEventListener('scroll', onScroll);

    return () => isBrowser && window.removeEventListener('scroll', onScroll);
  }, []);

  const { data } = useSWR(environment.OUR_WORK_URL, get, {
    revalidateOnFocus: false,
  });

  return (
    data && (
      <>
        <Head>
          <title>Digital experiences we have brought to life</title>
          <meta name="keywords" content="Case studies, UX research, design" />
          <meta
            name="description"
            content="Umvel has worked for over 50 clients, across 6 countries, and more than USD $500 million has been transacted on platforms we’ve built."
          />
        </Head>
        <OurWorkHeader
          data={data.data.attributes.body.find(
            (item) => item.__component === BlockNameEnum.pageHeader
          )}
        />
        <WorkCases />
        <FooterCta />
      </>
    )
  );
}
