import { AuthService } from '@services/authService';
import { ProductService } from '@services/productService';
import { LocalTokenRepository } from '@services/tokenRepository';
import { HttpClientService } from './httpClient';

const tokenRepository = new LocalTokenRepository();
const httpClient = new HttpClientService('baseurl', tokenRepository);
export const productService = new ProductService(httpClient);
export const authService = new AuthService(httpClient);
