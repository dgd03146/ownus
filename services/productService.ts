import { ProductsEndPoint } from './../lib/constants/endpoint';
import { HttpClientService } from '../lib/api/httpClient';

export class ProductService {
  private httpClient: HttpClientService;

  constructor(httpClient: HttpClientService) {
    this.httpClient = httpClient;
  }

  async getProducts() {
    return await this.httpClient.instance.get(ProductsEndPoint.products);
  }
}
