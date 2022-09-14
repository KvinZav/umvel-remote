import WorkCases from '@modules/workCases';
import { OurWorkHeader } from '@modules/pageHeader';
import { BlockNameEnum } from '@enums/BlockName';
import FooterCta from '@modules/footer/FooterCta';

export default function OurWork() {

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
  )
}

export default OurWorkPage;
