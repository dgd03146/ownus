import { AuthService } from './authService';

import { ProductService } from '@services/productService';
import { HttpClientService } from './httpClient';
import { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';

// interface API {
//   get: <T>(
//     endPoint: string,
//     params?: AxiosRequestConfig
//   ) => Promise<AxiosResponse<T, any>>;

//   post: <T>(
//     endPoint: string,
//     data: T,
//     params?: AxiosRequestConfig
//   ) => Promise<AxiosResponse<T, any>>;

//   put: <T>(
//     endPoint: string,
//     data: T,
//     params?: AxiosRequestConfig
//   ) => Promise<AxiosResponse<T, any>>;

//   delete: <T>(
//     endPoint: string,
//     params?: AxiosRequestConfig
//   ) => Promise<AxiosResponse<T, any>>;
// }

export class APIService {
  productService: ProductService;
  authService: AuthService;
  constructor(productSevice: ProductService, authService: AuthService) {
    this.productService = productSevice;
    this.authService = authService;
  }

  get = () => {
    this.productService.getAllProducts();
  };

  post = () => {
    this.productService.getAllProducts();
  };
  // constructor(private instance: AxiosInstance) {}

  // // FIXME: 여기 코드를 굳이 이렇게 짜야할 필요가 있을까? 그냥 바로 service에서 사용하면 안됨?

  // // 여기 로직을 나누고 싶은데?? service 별로..
  // // FIXME: PRACTICE 요렇게 하면 되는데 service 별로 나누고 싶음. 이 클래스에서 구현말고? 이클래스의 instance를 사용하면서?
  // search = (keyword: string, params?: AxiosRequestConfig) => {
  //   return this.instance.get(`/search/${keyword}`, params);
  // };

  // post = <T, U>(endPoint: string, data: U, params?: AxiosRequestConfig) => {
  //   return this.instance.post<T>(endPoint, data, params);
  // };

  // get = <T>(endPoint: string, params?: AxiosRequestConfig) => {
  //   return this.instance.get<T>(endPoint, params);
  // };

  // put = <T, U>(endPoint: string, data: U, params?: AxiosRequestConfig) => {
  //   return this.instance.put<T>(endPoint, data, params);
  // };

  // delete = <T>(endPoint: string, params?: AxiosRequestConfig) => {
  //   return this.instance.delete<T>(endPoint, params);
  // };
}
