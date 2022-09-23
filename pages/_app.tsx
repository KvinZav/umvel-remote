import '../styles/globals.css'
import { SWRConfig } from 'swr';
import Header from '@modules/header';
import { ScrollContextProvider } from '@context/scrollContext';

const swrConfig = {
  revalidateOnFocus: false,
};

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
