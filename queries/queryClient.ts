import { QueryClient } from '@tanstack/react-query';

const queryErrorHandler = (error: unknown): void => {
  const title = error instanceof Error ? error.message : 'error connecting to server';
  console.error(title);
};

export const defaultQueryClientOptions = {
  queries: {
    onError: queryErrorHandler,
    staleTime: 1000 * 60, // 1minute
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
