import { environment } from '@environments/index';
import useSWR from 'swr';
import { get } from '@fetcher/get';
import { HomeDataInterface } from '@interfaces/home-data/home.interface';
import WorkCases from '@modules/workCases';


export default function Home() {
  const isBrowser = typeof window !== "undefined"

  const { data, error } = useSWR<HomeDataInterface>(environment.OUR_WORK_URL, get, {
    revalidateOnFocus: false,
  }); 

  return data && (
    <div>
        <WorkCases />
    </div>
  );
}
