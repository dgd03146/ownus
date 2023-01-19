import { getCookie, setCookie, removeCookies } from 'cookies-next';
import { OptionsType } from 'cookies-next/lib/types';

// FIXME: constants 폴더로 넘기기
const COOKIE_EXPIRATION_TIME = 3600;

export class TokenService {
  private ACCESS_TOKEN = 'accessToken';
  private REFRESH_TOKEN = 'refreshToken';

  saveToken(accessToken: string, refreshToken: string) {
    setCookie(this.ACCESS_TOKEN, accessToken, {
      maxAge: COOKIE_EXPIRATION_TIME,
      path: '/'
    });
    setCookie(this.REFRESH_TOKEN, refreshToken, {
      maxAge: COOKIE_EXPIRATION_TIME,
      path: '/'
    });
  }

  getToken(options?: OptionsType) {
    const token = JSON.parse(getCookie(this.ACCESS_TOKEN!, options) as string);
    return token;
  }

  getRefreshToken(options?: OptionsType) {
    const token = JSON.parse(getCookie(this.REFRESH_TOKEN!, options) as string);
    return token;
  }

  removeToken(options?: OptionsType) {
    removeCookies(this.ACCESS_TOKEN, options);
    removeCookies(this.REFRESH_TOKEN, options);
  }
}
