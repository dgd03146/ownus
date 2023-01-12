import { HttpClientService } from './httpClient';
import { LocalTokenRepository } from './tokenRepository';

export class AuthService {
  private httpClient: HttpClientService;
  private tokenRepository: LocalTokenRepository;
  constructor(
    httpClient: HttpClientService
    // tokenRepository: LocalTokenRepository
  ) {
    this.httpClient = httpClient;
    this.tokenRepository = this.httpClient.tokenRepository; // 주입받은 httpClient의 tokenRepository를 사용
  }

  async signup(email: string, password: string) {
    // TODO: 약간 요런느낌?
    const accessTOKEN = (await this.httpClient.instance.post(
      'data',
      { email, password },
      { params: '' }
    )) as string;
    this.tokenRepository.save(accessTOKEN);

    // this.httpClient
    //   .fetch('auth/signup', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       email,
    //       password
    //     })
    //   })
    //   .then((res) => res.json())
    //   .then(({ access_token }) => this.tokenRepository.save(access_token));
  }

  async singin(email: string, password: string): Promise<any> {
    console.log(email, password, 'signIn에서 동작?');
    // return await this.httpClient.instance.get('products', { params: '' });
  }

  signout() {
    this.tokenRepository.remove();
  }
}

// TODO: 이제 이걸 CONTEXT에서 관리?
// const tokenRepository = new LocalTokenRepository();
// const httpClient = new HttpClientService(
//   'process.env.BASE_URL',
//   tokenRepository
// );

// export const authService = new AuthService(httpClient);

// 의존성 주입을 이용해서 클래스 내부에서 가지고 있는 것이 아니라, 클래스를 생성할 때 외부에서 주입하는 식으로 변경하게 되면 추후에 AuthService의 코드 수정 없이 AuthService에서 사용하는 httpClient, tokenRepositry와 연관된 동작을 쉽게 변경해서 다양하게 사용할 수 있게 됩니다.

// 이유?!
