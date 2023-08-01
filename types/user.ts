export type TUser = {
  nickname: string;
  profileImg: string;
};

export type TLogin = {
  email: string;
  password: string;
};

export type TSignup = TLogin & {
  username: string;
  passwordConfirm?: string;
};
