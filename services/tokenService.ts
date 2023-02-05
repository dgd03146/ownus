import { getCookie, setCookie, removeCookies } from 'cookies-next';
import { OptionsType } from 'cookies-next/lib/types';

export class TokenService {
  private ACCESS_TOKEN_KEY = 'accessToken';
  private REFRESH_TOKEN_KEY = 'refreshToken';
  private ACCESS_TOKEN: null | string = null;
  // AccessToken private 변수로 지정

  saveToken(accessToken: string, refreshToken: string, options?: OptionsType) {
    this.ACCESS_TOKEN = accessToken;
    setCookie(this.REFRESH_TOKEN_KEY, refreshToken, {
      // RefreshToken만 쿠키에 저장
      ...options
    });
  }

  getToken(options?: OptionsType) {
    const token = JSON.parse(
      getCookie(this.ACCESS_TOKEN_KEY!, options) as string
    );
    return token;
  }

  getRefreshToken(options?: OptionsType) {
    const token = JSON.parse(
      getCookie(this.REFRESH_TOKEN_KEY!, options) as string
    );
    return token;
  }

  removeToken(options?: OptionsType) {
    removeCookies(this.ACCESS_TOKEN_KEY, options);
    removeCookies(this.REFRESH_TOKEN_KEY, options);
  }
}
