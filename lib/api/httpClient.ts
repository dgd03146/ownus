import { EndPoint } from '@lib/constants/endpoint';
import axios, {
  AxiosDefaults,
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios';
import { TokenService } from '../../services/tokenService';

// interface HttpClient {
//   readonly instance: AxiosInstance;
// }

// TODO: token Repository 주입받아서 유연하게 쓸 수 있게 하자.
// TODO: 초기화 간단하게 나타내기

let isTokenRefreshing = false;

export class HttpClientService {
  private baseURL: string;
  tokenRepository: TokenService;
  instance: AxiosInstance;

  constructor(baseURL: string, tokenRepository: TokenService) {
    this.tokenRepository = tokenRepository;
    this.baseURL = baseURL;
    this.instance = axios.create({
      baseURL: this.baseURL
      // headers: { Authorization: this.tokenRepository.getToken() }
    });

    this.handleInterceptor();
  }

  private setAuthorizationHeader(
    request: AxiosDefaults | AxiosRequestConfig | any,
    token: string
  ) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  private async handleRefreshToken(refreshToken: string) {
    isTokenRefreshing = true;

    const { data } = await this.instance.post(EndPoint.refresh, {
      refreshToken
    });
    const { accessToken: newAccessToken } = data;
    this.tokenRepository.saveToken(newAccessToken);
    this.setAuthorizationHeader(this.instance.defaults, newAccessToken);

    isTokenRefreshing = false;
    return newAccessToken;
  }

  private handleRequest(config: AxiosRequestConfig) {
    const token = this.tokenRepository.getToken();
    token && this.setAuthorizationHeader(config, token);
    return config;
  }

  private handleRequestError(error: AxiosError): Promise<AxiosError> {
    return Promise.reject(error);
  }

  private handleResponse({ data }: AxiosResponse) {
    return data;
  }

  protected async handleResponseError(error: AxiosError) {
    const { status, message, config } = error;
    if (status === 401) {
      if (message === 'token expired' && !isTokenRefreshing) {
        // isTokenRefreshing이 false인 경우에만 token refresh 요청
        const originalConfig = config; // 원래의 요청
        // token expired 메세지가 나타날 경우
        const refreshToken = this.tokenRepository.getRefreshToken();
        const token = await this.handleRefreshToken(refreshToken);

        this.setAuthorizationHeader(originalConfig, token);
      } else {
        this.tokenRepository.removeToken();
      }
    }
    return Promise.reject(error);
  }

  private handleInterceptor() {
    this.instance.interceptors.request.use(
      this.handleRequest,
      this.handleRequestError
    );

    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleResponseError
    );
  }
}

// TODO: best way to handle axios error? 프리온보딩 강의에 있었는듯?
