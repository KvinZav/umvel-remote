import '../styles/globals.css'
import { SWRConfig } from 'swr';
import Header from '@modules/header';
import { ScrollContextProvider } from '@context/scrollContext';
import { FooterMenu } from '@modules/footer';

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
    "bg-cases-buyback",
    "bg-cases-miyana",
    "bg-cases-seguros-mundial",
    "bg-cases-arrivia",
    "bg-cases-viva-app",
    "bg-cases-smart-walk",
    "bg-cases-ecri",
]

function MyApp({ Component, pageProps }) {

  return <>
    <SWRConfig value={swrConfig}>
      <ScrollContextProvider>
        <Header />
        <Component {...pageProps} />
        <FooterMenu />
      </ScrollContextProvider>
    </SWRConfig>
  </>
}

export default MyApp
