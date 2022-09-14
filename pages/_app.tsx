import '../styles/globals.css'
import { SWRConfig } from 'swr';
import { GlobalContextProvider, useAppState } from '@context/globalContext';
import Header from '@modules/header';
import { useEffect } from 'react';

const swrConfig = {
  revalidateOnFocus: false,
};

const colors = [
    "bg-cases-capa",
    "bg-cases-prevue",
    "bg-cases-argo",
    "bg-cases-campaign",
    "bg-cases-viva",
    "bg-cases-food-central",
    "bg-cases-oeio",
]

function MyApp({ Component, pageProps }) {

  return <>
    <SWRConfig value={swrConfig}>
      <GlobalContextProvider>
        <Header />
        <Component {...pageProps} />
      </GlobalContextProvider>
    </SWRConfig>
  </>
}

export default MyApp
