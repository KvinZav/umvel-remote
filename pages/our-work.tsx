import { environment } from '@environments/index';
import useSWR from 'swr';
import { get } from '@fetcher/get';
import WorkCases from '@modules/workCases';
import { OurWorkHeader } from '@modules/pageHeader';
import { BlockNameEnum } from '@enums/BlockName';

export default function OurWork() {

  const { data } = useSWR(environment.OUR_WORK_URL, get, {
    revalidateOnFocus: false,
  });

  return data && (
    <>
      <OurWorkHeader data={data.data.attributes.body
          .find((item) => item.__component === BlockNameEnum.pageHeader)}/>
      <WorkCases />
    </>
  );
}
