import '../styles/globals.css';
import { SWRConfig } from 'swr';
import Header from '@modules/header';
import { ScrollContextProvider } from '@context/scrollContext';
import { FooterMenu } from '@modules/footer';
import ModalCookies from '@elements/ModalCookies';
import { useEffect, useState } from 'react';

const swrConfig = {
  revalidateOnFocus: false,
};

/**
 * @description tailwind - there is a JIT that creates the classes used in tail 
 * per page but only if it is in code, this stays because when they arrive 
 * from the api the name does not exist when a map is used
 */
const colors = [
  'bg-cases-capa',
  'bg-cases-prevue',
  'bg-cases-argo',
  'bg-cases-campaign',
  'bg-cases-viva',
  'bg-cases-food-central',
  'bg-cases-oeio',
  'bg-cases-cancer-buddy',
  'bg-cases-buyback',
  'bg-cases-miyana',
  'bg-cases-seguros-mundial',
  'bg-cases-arrivia',
  'bg-cases-viva-app',
  'bg-cases-smart-walk',
  'bg-cases-ecri',
];

function MyApp({ Component, pageProps }) {
  const [showModal, setShowModal] = useState(false);

  const windowGlobal = typeof window !== 'undefined' && window;

  useEffect(() => {
    if (!sessionStorage.getItem('consent')) {
      sessionStorage.setItem('consent', 'false');
    }
    if (sessionStorage.getItem('consent') !== 'true') {
      setShowModal(true);
    }
  }, []);
  
  return (
    <>
    <ModalCookies showModal={showModal} refWindow={windowGlobal}/>
      <SWRConfig value={swrConfig}>
        <ScrollContextProvider>
          <Header />
          <Component {...pageProps} />
          <FooterMenu />
        </ScrollContextProvider>
      </SWRConfig>
    </>
  );
}

export default MyApp;
