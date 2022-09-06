import { environment } from '@environments/index';
import useSWR from 'swr';
import { get } from '@fetcher/get';
import ScrollInteraction1 from '@modules/scrollInteractions/ScrollInteraction1';
import { useAppState } from '@hooks/customHooks';
import { useEffect } from 'react';
import { Hero } from '@modules/hero';
import FooterCta from '@modules/footer/FooterCta';
import FooterMenu1 from '@modules/footer/footerMenu';
import ScrollInteraction2 from '@modules/scrollInteractions/ScrollInteraction2';
import Quotes from '@modules/quotes';
import ScrollInteraction3 from '@modules/scrollInteractions/ScrollInteraction3';
import MainMenuHighlights from '@modules/mainMenu/Highlights';
import Highlights from '@modules/highlights';
import { Clients } from '@modules/clients';
import Prueba from '@modules/highlights/desktop';


export default function Home() {
  const isBrowser = typeof window !== "undefined"

  const { data, error } = useSWR(environment.HOME_URL, get, {
    revalidateOnFocus: false,
  });  
  
  const { handleScroll } = useAppState()

  const onScroll = () => handleScroll(isBrowser ? window.pageYOffset : 0)
  
  useEffect(() => {
    isBrowser && window.addEventListener('scroll', onScroll )

    return () => isBrowser && window.removeEventListener("scroll", onScroll);
  }, [])  

  return data && (
    <div>
      <Hero data={data?.data?.attributes.body
          .find((item) => item.__component === "heading.heading")} />
      <MainMenuHighlights/>
      <ScrollInteraction1/>
      <Highlights/>
      <ScrollInteraction2
        steps={data?.data?.attributes.body[4].step}
      />
      <Quotes />
      <Clients />
      <ScrollInteraction3/>
      <FooterCta/>
      <FooterMenu1/>
    </div>
  )
}
