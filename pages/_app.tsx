import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../react-query/queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ApiProvider } from 'context/apiContext';
import Layout from '@components/layouts/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApiProvider>
      <QueryClientProvider client={queryClient}>
        <Layout title="Ownus">
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ApiProvider>
  );
}
