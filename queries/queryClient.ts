import { QueryClient } from '@tanstack/react-query';

const queryErrorHandler = (error: unknown): void => {
  const title =
    error instanceof Error ? error.message : 'error connecting to server';
  console.log(title, 'error 핸들링여기서 해봄');
  // TODO: 토스트 UI 만들기
};

export const defaultQueryClientOptions = {
  queries: {
    onError: queryErrorHandler,
    staleTime: 600000, // 10minutes
    cacheTime: 900000, // 15minutes
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    suspense: true
  },
  // TODO: mutation 옵션 설정
  mutations: {
    onError: queryErrorHandler
  }
};

export const queryClient = new QueryClient({
  defaultOptions: defaultQueryClientOptions
});
