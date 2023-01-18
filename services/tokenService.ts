import { getCookie, setCookie, removeCookies } from 'cookies-next';
import { OptionsType } from 'cookies-next/lib/types';
import { NextApiResponse } from 'next';

export class TokenService {
  private ACCESS_TOKEN = 'accessToken';
  private REFRESH_TOKEN = 'refreshToken';

  getToken(options?: OptionsType) {
    const token = JSON.parse(getCookie(this.ACCESS_TOKEN!, options) as string);
    return token;
  }

  getRefreshToken(options?: OptionsType) {
    const token = JSON.parse(getCookie(this.REFRESH_TOKEN!, options) as string);
    return token;
  }

  saveToken(value: string, options?: OptionsType) {
    setCookie(this.ACCESS_TOKEN, value, options);
  }

  removeToken(options?: OptionsType) {
    removeCookies(this.ACCESS_TOKEN, options);
    removeCookies(this.REFRESH_TOKEN, options);
  }
}
