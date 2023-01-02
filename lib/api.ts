import { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';

interface API {
  instance: AxiosInstance;

  get: <T>(
    endPoint: string,
    params?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T, any>>;

  post: <T>(
    endPoint: string,
    data: T,
    params?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T, any>>;

  put: <T>(
    endPoint: string,
    data: T,
    params?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T, any>>;

  delete: <T>(
    endPoint: string,
    params?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T, any>>;
}

export class APIService implements API {
  instance: AxiosInstance;
  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  post = <T, U>(endPoint: string, data: U, params?: AxiosRequestConfig) => {
    return this.instance.post<T>(endPoint, data, params);
  };

  get = <T>(endPoint: string, params?: AxiosRequestConfig) => {
    return this.instance.get<T>(endPoint, params);
  };

  put = <T, U>(endPoint: string, data: U, params?: AxiosRequestConfig) => {
    return this.instance.put<T>(endPoint, data, params);
  };

  delete = <T>(endPoint: string, params?: AxiosRequestConfig) => {
    return this.instance.delete<T>(endPoint, params);
  };
}
