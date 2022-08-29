import { environment } from '@environments/index';
import useSWR from 'swr';
import { get } from '@fetcher/get';
import Highlights from '@elements/Highlights';
import ScrollInteraction1 from '@modules/ScrollInteraction1';


export default function Home() {

  const { data, error } = useSWR(environment.HOME_URL, get, {
    revalidateOnFocus: false,
  });    

  console.log(data);
  
  return data && (
    <div>
      {/* <Highlights
        cases={data?.data?.attributes.body.find(i => i.__component === 'highlights.highlights').cases}
      /> */}
      <ScrollInteraction1/>
    </div>
  )
}
