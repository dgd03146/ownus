import { EndPoint } from '@lib/constants/endpoint';
import axios, {
  AxiosDefaults,
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios';
import { TokenService } from '../../services/tokenService';

interface IFailedRequestQueue {
  onSuccess: (token: string) => void;
  // FIXME: error 타입 AXIOS Error로?
  onFailure: (error: unknown) => void;
}

export class HttpClientService {
  private baseURL: string;
  tokenRepository: TokenService;
  instance: AxiosInstance;
  isTokenRefreshing = false;
  failedRequestQueue: IFailedRequestQueue[] = [];

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
    this.isTokenRefreshing = true;
    try {
      const { data } = await this.instance.post(EndPoint.refresh, {
        refreshToken
      });
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
        data;
      this.tokenRepository.saveToken(newAccessToken, newRefreshToken);
      this.setAuthorizationHeader(this.instance.defaults, newAccessToken);
      this.failedRequestQueue.forEach((request) =>
        request.onSuccess(newAccessToken)
      );
      this.failedRequestQueue = [];
    } catch (error) {
      this.failedRequestQueue.forEach((request) => request.onFailure(error));

      this.failedRequestQueue = [];
      this.tokenRepository.removeToken();
    } finally {
      this.isTokenRefreshing = false;
    }
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

  private async handleResponseError(error: AxiosError) {
    const { status, message, config } = error;
    if (status === 401) {
      if (
        message === 'token expired' ||
        (message === 'no authorization' && !this.isTokenRefreshing)
      ) {
        // 토큰이 만료되었거나 페이지를 새로고침해서 accessToken이 없어지는 경우 isTokenRefreshing이 false인 경우에만 token refresh 요청
        const originalConfig = config!; // 원래의 요청
        // token expired 메세지가 나타날 경우
        const refreshToken = await this.tokenRepository.getRefreshToken();

        !this.isTokenRefreshing && this.handleRefreshToken(refreshToken);

        return new Promise((resolve, reject) => {
          this.failedRequestQueue.push({
            onSuccess: (token: string) => {
              this.setAuthorizationHeader(originalConfig, token);
              resolve(this.instance(originalConfig));
            },
            onFailure: (error) => {
              reject(error);
            }
          });
        });
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
