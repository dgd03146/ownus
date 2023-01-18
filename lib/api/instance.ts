import { AuthService } from '@services/authService';
import { ProductService } from '@services/productService';
import { TokenService } from '@services/tokenService';
import { HttpClientService } from './httpClient';

export const tokenRepository = new TokenService();
const httpClient = new HttpClientService('baseurl', tokenRepository);
export const productService = new ProductService(httpClient);
export const authService = new AuthService(httpClient);
