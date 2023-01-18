import { Keys } from '../keys';
import { queryClient } from '../queryClient';
import { useMutation } from '@tanstack/react-query';
import { authService } from '@lib/api/instance';
import { LoginRequest } from 'types/user';
import { useRouter } from 'next/router';
const { USER_QUERY_KEY } = Keys;

export const useLogin = () => {
  const router = useRouter();
  const { mutate: onLogin } = useMutation(
    ({ email, password }: LoginRequest) => authService.login(email, password),
    {
      onSuccess(userData) {
        queryClient.setQueryData([USER_QUERY_KEY], userData);
        // 로그인이 성공하면 그 데이터를 캐시에다가 저장한다. 토큰은 셋쿠키해서 그 데이터는 profileImg, nickname
        // 로그인 성공하면 home으로 라우팅시키는데!...
        router.push('/');
        return true;
      },
      onError() {
        return false;
      }
    }
  );
  return onLogin;
};
