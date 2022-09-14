import { environment } from '@environments/index';
import useSWR from 'swr';
import { get } from '@fetcher/get';
import WorkCases from '@modules/workCases';
import { OurWorkHeader } from '@modules/pageHeader';
import { BlockNameEnum } from '@enums/BlockName';
import FooterCta from '@modules/footer/FooterCta';
import { useAppState } from '@hooks/customHooks';
import { useEffect } from 'react';

export default function OurWork() {

  const isBrowser = typeof window !== "undefined"
  const { handleScroll } = useAppState();

  const onScroll = () => handleScroll(isBrowser ? window.pageYOffset : 0);
  
  useEffect(() => {    
    isBrowser && window.addEventListener('scroll', onScroll )

    return () => isBrowser && window.removeEventListener("scroll", onScroll);
  }, []);

  const { data } = useSWR(environment.OUR_WORK_URL, get, {
    revalidateOnFocus: false,
  });

  return data && (
    <>
      <OurWorkHeader data={data.data.attributes.body
          .find((item) => item.__component === BlockNameEnum.pageHeader)}/>
      <WorkCases />
      <FooterCta theme='light'/>
    </>
  );
}