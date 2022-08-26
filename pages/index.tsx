import { environment } from '@environments/index';
import useSWR from 'swr';
import { get } from '@fetcher/get';
import Highlights from 'components/Highlights';


export default function Home() {

  const { data, error } = useSWR(environment.HOME_URL, get, {
    revalidateOnFocus: false,
  });    

  return data && (
    <div>
      <Highlights
        cases={data?.data?.attributes.body.find(i => i.__component === 'highlights.highlights').cases}
      />
    </div>
  )
}
