import '../styles/globals.css'
import { SWRConfig } from 'swr';
import Header from '@modules/header';

const swrConfig = {
  revalidateOnFocus: false,
};

function MyApp({ Component, pageProps }) {
  return <>
    <SWRConfig value={swrConfig}>
      <Header />
      <Component {...pageProps} />
    </SWRConfig>
  </>
}

export default MyApp
