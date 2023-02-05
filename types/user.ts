export type User = {
  nickname: string;
  profileImg: string;
};

export type Login = {
  email: string;
  password: string;
};

export type Signup = Login & {
  username: string;
  passwordConfirm?: string;
};
