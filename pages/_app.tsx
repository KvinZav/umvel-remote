import '../styles/globals.css'
import { SWRConfig } from 'swr';
import Header from '@modules/header';
import { ScrollContextProvider } from '@context/scrollContext';

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
    "bg-cases-cancer-buddy",
]

function MyApp({ Component, pageProps }) {

  return <>
    <SWRConfig value={swrConfig}>
      <ScrollContextProvider>
        <Header />
        <Component {...pageProps} />
      </ScrollContextProvider>
    </SWRConfig>
  </>
}

export default MyApp
