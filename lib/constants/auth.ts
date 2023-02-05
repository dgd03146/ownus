export const EmailInput = {
  id: 'email',
  type: 'email',
  label: '이메일 주소',
  placeholder: '이메일 주소를 입력해주세요',
  rules: {
    required: '이메일은 필수 입력입니다.',
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: '이메일 형식에 맞지 않습니다.'
    }
  }
};

export const PasswordInput = {
  id: 'password',
  type: 'password',
  label: '비밀번호',
  placeholder: '비밀번호를 입력해주세요',
  rules: {
    required: '비밀번호는 필수 입력입니다.',
    minLength: {
      value: 8,
      message: '8자리 이상 비밀번호를 사용하세요.'
    },
    pattern: {
      value: /^(?=.*\d)(?=.*[a-zA-ZS]).{8,}/,
      message: '영문, 숫자를 혼용하여 입력하세요.'
    },
    maxLength: {
      value: 16,
      message: '16자 이하의 비밀번호를 사용하세요.'
    }
  }
};

export const PasswordConfirmInput = {
  id: 'passwordConfirm',
  type: 'password',
  label: '비밀번호 확인',
  placeholder: '비밀번호를 다시 입력해주세요',
  rules: {
    required: '비밀번호를 확인 해주세요.'
  }
};

export const UsernameInput = {
  id: 'username',
  type: 'name',
  label: '이름',
  placeholder: '사용하실 이름을 입력해주세요',
  rules: {
    required: '이름은 필수 입력입니다.',
    minLength: {
      value: 3,
      message: '3글자 이상 이름을 입력하세요.'
    }
  }
};
