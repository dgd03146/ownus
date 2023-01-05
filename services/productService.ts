import { HttpClientService } from './httpClient';
import { LocalTokenRepository } from './tokenRepository';

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

// 의존성 주입을 이용해서 클래스 내부에서 가지고 있는 것이 아니라, 클래스를 생성할 때 외부에서 주입하는 식으로 변경하게 되면 추후에 AuthService의 코드 수정 없이 AuthService에서 사용하는 httpClient, tokenRepositry와 연관된 동작을 쉽게 변경해서 다양하게 사용할 수 있게 됩니다.
