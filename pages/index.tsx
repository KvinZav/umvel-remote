import { environment } from '@environments/index';
import useSWR from 'swr';
import { get } from '@fetcher/get';


export default function Home() {

  const { data, error } = useSWR(environment.HOME_URL, get, {
    revalidateOnFocus: false,
  });


  return (
    <h1 className="text-3xl font-bold underline">
      Umvel Website!
    </h1>
  )
}
