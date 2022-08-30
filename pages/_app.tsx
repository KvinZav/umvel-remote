import '../styles/globals.css'
import { SWRConfig } from 'swr';
import { GlobalContextProvider } from '@context/globalContext';
import Header from '@modules/header';

const swrConfig = {
  revalidateOnFocus: false,
};

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
