import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { defaultQueryClientOptions } from '../queries/queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Layout from '@components/layouts/layout';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: defaultQueryClientOptions
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout title="Ownus">
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
