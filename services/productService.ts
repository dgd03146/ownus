import { HttpClientService } from '../lib/api/httpClient';

export class ProductService {
  private httpClient: HttpClientService;

  constructor(httpClient: HttpClientService) {
    this.httpClient = httpClient;
  }

  async getAllProducts() {
    // TODO: 약간 요런느낌?
    return await this.httpClient.instance.get('products', { params: '' });
  }
}
