import '../styles/globals.css';
import { SWRConfig } from 'swr';
import Header from '@modules/header';
import { ScrollContextProvider } from '@context/scrollContext';
import { FooterMenu } from '@modules/footer';
import ModalCookies from '@elements/ModalCookies';
import { useEffect, useState } from 'react';
import MainLogo from '@elements/LogoNavBar/MainLogo';
import Script from 'next/script';

const swrConfig = {
  revalidateOnFocus: false,
};

/**
 * @description tailwind - there is a JIT that creates the classes used in tail 
 * per page but only if it is in code, this stays because when they arrive 
 * from the api the name does not exist when a map is used
 */
const colors = [
  'bg-#0F55C3',
  'bg-#538e82',
  'bg-cases-argo',
  'bg-cases-campaign',
  'bg-#2F7C38',
  'bg-#348181',
  'bg-#CBA552',
  'bg-#F1DE4F',
  'bg-#6BB7E6',
  'bg-cases-miyana',
  'bg-#5B96CD',
  'bg-#04A3AC',
  'bg-#40AD4C',
  'bg-#DA3440',
  'bg-#0081C6',
];

function MyApp({ Component, pageProps, userAgent }) {  
  
  const [showModal, setShowModal] = useState(false);

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
    {/* Google tag (gtag.js) */}
    <Script async id="google-tag-manager" src="https://www.googletagmanager.com/gtag/js?id=G-QEPBH435ZF"></Script>
    <Script id="google-tag-manager-datalayer-push">
      {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-QEPBH435ZF');`}
    </Script>
    <ModalCookies showModal={showModal}/>
      <SWRConfig value={swrConfig}>
        <ScrollContextProvider>
          <MainLogo/>
          <Header />
          <Component {...pageProps} />
          <FooterMenu />
        </ScrollContextProvider>
      </SWRConfig>
    </>
  );
}

export default MyApp;