import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { defaultQueryClientOptions } from '../queries/queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Layout from '@components/layouts/layout';
import React from 'react';
import { AuthContextProvider } from 'context/authContext';
import Toast from '@components/layouts/toast';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: defaultQueryClientOptions,
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Hydrate state={pageProps.dehydratedState}>
          <Toast />
          <Layout title="Ownus">
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
        <ReactQueryDevtools />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}
