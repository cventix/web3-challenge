import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

function MyApp({ Component, pageProps }: AppProps | any) {
  const emptyPage = (page: any) => page;
  const getLayout = Component.getLayout ?? emptyPage;
  return (
    <ThirdwebProvider desiredChainId={ChainId.Mainnet}>
      {getLayout(<Component {...pageProps} />)}
    </ThirdwebProvider>
  );
}

export default MyApp;
