import { environment } from '@environments/index';
import useSWR from 'swr';
import { get } from '@fetcher/get';
import WorkCases from '@modules/workCases';


export default function OurWork() {

  const { data } = useSWR(environment.OUR_WORK_URL, get, {
    revalidateOnFocus: false,
  });

  return data && (
    <>
      <WorkCases />
    </>
  );
}
