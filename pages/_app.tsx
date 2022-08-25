import '../styles/globals.css'
import { SWRConfig } from 'swr';

const swrConfig = {
  revalidateOnFocus: false,
};

function MyApp({ Component, pageProps }) {
  return <>
    <SWRConfig value={swrConfig}>
      <Component {...pageProps} />
    </SWRConfig>
  </>
}

export default MyApp
