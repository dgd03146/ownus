import axios, { AxiosInstance, AxiosResponse } from 'axios';

interface HttpClient {
  readonly instance: AxiosInstance;
}

export class HttpClientService implements HttpClient {
  readonly instance: AxiosInstance;
  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL
    });
    this.handleInterceptor();
  }
  private handleInterceptor = () => {
    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleError
    );
  };

  private handleResponse = ({ data }: AxiosResponse) => data;

  // TODO: best way to handle axios error? 프리온보딩 강의에 있었는듯?
  protected handleError = (error: any) => Promise.reject(error);
}
