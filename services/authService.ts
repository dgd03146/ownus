import { HttpClientService } from '../lib/api/httpClient';
import { UsersEndPoint } from 'constants/endpoint';
import { TokenService } from './tokenService';
import { AxiosResponse } from 'axios';

type AuthResponse = {
  nickname: string;
  profileImg: string;
  accessToken: string;
};

export class AuthService {
  private httpClient: HttpClientService;
  private tokenRepository: TokenService;
  constructor(httpClient: HttpClientService) {
    this.httpClient = httpClient;
    // FIXME: 굳이 tokenRepository를 주입받아야하나?
    this.tokenRepository = this.httpClient.tokenRepository; // 주입받은 httpClient의 tokenRepository를 사용
  }

  async login(email: string, password: string) {
    const res = await this.httpClient.instance.post<AuthResponse>(UsersEndPoint.login, { email, password });

    return res;
  }

  async signup(username: string, email: string, password: string): Promise<any> {
    return await this.httpClient.instance.get(UsersEndPoint.signup);
  }

  async getUser() {
    return await this.httpClient.instance.get(UsersEndPoint.user);
  }

  logout() {
    this.tokenRepository.removeToken();

    // FIXME: 로그아웃
    alert('로그아웃되엇습니다');
  }
}
