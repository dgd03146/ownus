export type User = {
  nickname: string;
  profileImg: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type SignupData = LoginData & {
  username: string;
  passwordConfirm?: string;
};
