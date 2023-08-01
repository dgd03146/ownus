import { TToastType, showToast } from '@components/layouts/toast';
import { QueryClient } from '@tanstack/react-query';

const queryErrorHandler = (error: unknown): void => {
  const title = error instanceof Error ? error.message : 'Error connecting to server';
  showToast({ type: TToastType.error, message: title });
};

export const defaultQueryClientOptions = {
  queries: {
    onError: queryErrorHandler,
    staleTime: 10000 * 60, // 1minute
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  },

  mutations: {
    onError: queryErrorHandler,
  },
};

export const queryClient = new QueryClient({
  defaultOptions: defaultQueryClientOptions,
});
