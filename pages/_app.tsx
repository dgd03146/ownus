import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../react-query/queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ApiProvider } from 'context/apiContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ApiProvider>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </ApiProvider>
    </QueryClientProvider>
  );
}
