import { HttpClientService } from '../lib/api/httpClient';
import { UserEndPoint } from '@lib/constants/endpoint';
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
    this.tokenRepository = this.httpClient.tokenRepository; // 주입받은 httpClient의 tokenRepository를 사용
  }

  async login(email: string, password: string) {
    const res = await this.httpClient.instance.post<AuthResponse>(
      UserEndPoint.login,
      { email, password }
    );

    this.tokenRepository.saveToken(res.data.accessToken);
    return res.data;
  }

  async signUp(email: string, password: string): Promise<any> {
    return await this.httpClient.instance.get(UserEndPoint.signUp);
  }

  logout() {
    this.tokenRepository.removeToken();
  }
}
