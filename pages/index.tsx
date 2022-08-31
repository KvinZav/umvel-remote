import { environment } from '@environments/index';
import useSWR from 'swr';
import { get } from '@fetcher/get';
import ScrollInteraction1 from '@modules/ScrollInteraction1';
import { useAppState } from '@hooks/customHooks';
import { useEffect } from 'react';
import { Hero } from '@modules/hero';
import Highlights from '@elements/Highlights';


export default function Home() {
  const isBrowser = typeof window !== "undefined"

  const { data, error } = useSWR(environment.HOME_URL, get, {
    revalidateOnFocus: false,
  });
  
  const { handleScroll, scrollOffset } = useAppState()

  const onScroll = () => handleScroll(isBrowser ? window.pageYOffset : 0)
  
  useEffect(() => {
    isBrowser && window.addEventListener('scroll', onScroll )

    return () => isBrowser && window.removeEventListener("scroll", onScroll);
  }, [])
  
  return data && (
    <div>
      <Hero data={data?.data?.attributes.body
          .find((item) => item.__component === "heading.heading")} />
      <Highlights
        cases={data?.data?.attributes.body.find(i => i.__component === 'highlights.highlights').cases}
      />
      <ScrollInteraction1
        steps={data?.data?.attributes.body.find(i => i.__component === "scroll-interaction.scroll-interaction").step}
        offsetY={scrollOffset}
      />
    </div>
  )
}
