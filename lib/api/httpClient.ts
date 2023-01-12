import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { LocalTokenRepository } from '../../services/tokenRepository';

// interface HttpClient {
//   readonly instance: AxiosInstance;
// }

// TODO: token Repository 주입받아서 유연하게 쓸 수 있게 하자.
// TODO: 초기화 간단하게 나타내기

export class HttpClientService {
  private baseURL: string;
  tokenRepository: LocalTokenRepository;
  instance: AxiosInstance;

  constructor(baseURL: string, tokenRepository: LocalTokenRepository) {
    this.tokenRepository = tokenRepository;
    this.baseURL = baseURL;
    this.instance = axios.create({
      baseURL: this.baseURL,
      headers: { Authorization: this.tokenRepository.get() }
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

  protected handleError = (error: any) => Promise.reject(error);
}

// TODO: best way to handle axios error? 프리온보딩 강의에 있었는듯?
