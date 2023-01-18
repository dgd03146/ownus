export type LoginResponse = {
  nickname: string;
  profileImg: string;
  accessToken?: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};
