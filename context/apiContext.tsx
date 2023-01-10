import { createContext, useContext } from 'react';
import { APIService } from '@services/api';
import { HttpClientService } from '@services/httpClient';
import { ProductService } from '@services/productService';
import { LocalTokenRepository } from '@services/tokenRepository';
import { AuthService } from '@services/authService';

// FIXME: 이 API CONTEXT로직이 필요가 없는것 같다.

type APIType = {
  productService: ProductService;
  authService: AuthService;
};

const apiContext = createContext<APIType | null>(null);

const tokenRepository = new LocalTokenRepository();
const httpClient = new HttpClientService('baseurl', tokenRepository);
const productService = new ProductService(httpClient);
const authService = new AuthService(httpClient);

export const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <apiContext.Provider value={{ productService, authService }}>
      {children}
    </apiContext.Provider>
  );
};

export const useApi = () => {
  const api = useContext(apiContext);
  if (!api) throw new Error('ApiProvider not found');
  return api;
};
