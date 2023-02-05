import { authService } from '@lib/api/instance';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { queryKeys } from 'queries/keys';
import { queryClient } from 'queries/queryClient';
import { SignupData } from 'types/user';

export const useSignup = () => {
  const router = useRouter();

  const { mutate: onSignUp } = useMutation(
    ({ username, email, password }: SignupData) =>
      authService.signup(username, email, password),
    {
      onSuccess() {
        // 회원가입 성공하면 로그인페이지로 라우팅
        alert('회원가입에 성공했습니다'); // FIXME: ALERT 토스트로 바꾸기
        router.push('/login');
      },
      onError() {
        alert('회원가입 실패!'); // FIXME: 에러 메세지 토스트로 표시하기
      }
    }
  );

  return onSignUp;
};
