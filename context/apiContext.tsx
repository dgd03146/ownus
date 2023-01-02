import { createContext, useContext } from 'react';
import { APIService } from '@lib/api';
import { HttpClientService } from '@lib/httpClient';

type APIType = {
  api: APIService;
};

const apiContext = createContext<APIType | null>(null);

const { instance } = new HttpClientService('base url');
const api = new APIService(instance);

export const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  return <apiContext.Provider value={{ api }}>{children}</apiContext.Provider>;
};

export const useYoutubeApi = () => {
  return useContext(apiContext);
};
