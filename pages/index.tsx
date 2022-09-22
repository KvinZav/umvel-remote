import { environment } from '@environments/index';
import useSWR from 'swr';
import { get } from '@fetcher/get';
import ScrollInteraction1 from '@modules/scrollInteractions/ScrollInteraction1';
import useScrollOffset from '@hooks/useScrollOffset';
import { useEffect, useRef } from 'react';
import Hero from '@modules/hero';
import { FooterMenu, FooterTeam, FooterCta } from '@modules/footer';
import ScrollInteraction2 from '@modules/scrollInteractions/ScrollInteraction2';
import Quotes from '@modules/quotes';
import MainMenuHighlights from '@modules/mainMenu/Highlights';
import Highlights from '@modules/highlights';
import { Clients } from '@modules/clients';
import { BlockNameEnum } from '@enums/BlockName';
import { HomeDataInterface } from '@interfaces/home-data/home.interface';
import { ButtonScroll } from '@elements/ButtonScroll';
import ScrollInteraction3 from '@modules/scrollInteractions/ScrollInteraction3';

export default function Home() {
  const isBrowser = typeof window !== "undefined"

  const { data, error } = useSWR<HomeDataInterface>(environment.HOME_URL, get, {
    revalidateOnFocus: false,
  }); 
  
  const { handleScroll } = useScrollOffset();

  const onScroll = () => handleScroll(isBrowser ? window.pageYOffset : 0);
  
  useEffect(() => {
    isBrowser && window.addEventListener('scroll', onScroll )

    return () => isBrowser && window.removeEventListener("scroll", onScroll);
  }, []);

  const highlightsRef = useRef();

  return data && (
    <div>
      <Hero />
      {<ButtonScroll elementTo={highlightsRef}/>}
      <div ref={highlightsRef}>
        <MainMenuHighlights/>
      </div>
      <ScrollInteraction1/>
        <Highlights/>
      <ScrollInteraction2
        steps={data?.data?.attributes.body[4].step}
      />
      <Quotes />
      <Clients />
      <ScrollInteraction3/>     
      <FooterCta/>
      <FooterTeam
        data={data.data.attributes.body
          .find((item) => item.__component === BlockNameEnum.team)}
      />
      <FooterMenu data={data.data.attributes.body
          .find((item) => item.__component === BlockNameEnum.menu)}/>
    </div>
  );
}
