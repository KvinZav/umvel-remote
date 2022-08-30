import '../styles/globals.css'
import { SWRConfig } from 'swr';
import { GlobalContextProvider } from '@context/globalContext';

const swrConfig = {
  revalidateOnFocus: false,
};

function MyApp({ Component, pageProps }) {
  return <>
    <SWRConfig value={swrConfig}>
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    </SWRConfig>
  </>
}

export default MyApp
