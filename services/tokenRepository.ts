interface TokenRepositoryInterface {
  save(token: string): void;
  get(): string | null | undefined;
  remove(): void;
}

export class LocalTokenRepository implements TokenRepositoryInterface {
  private TOKEN_KEY = 'ACCESS_TOKEN';

  save(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  get() {
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      return localStorage.getItem('key');
    }
  }

  remove() {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}

// fetch("todos", {
// 	headers:{
// 		Authorization:tokenRepository.get();
// 	}
// }
