import { authService } from '@lib/api/instance';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { queryKeys } from 'queries/keys';
import { queryClient } from 'queries/queryClient';
import React from 'react';
import { LoginRequest } from 'types/user';

export const useLogin = () => {
  const router = useRouter();

  const { mutate: onLogin } = useMutation(
    ({ email, password }: LoginRequest) => authService.login(email, password),
    {
      onSuccess(userData) {
        queryClient.setQueryData([queryKeys.user], userData);
        // 로그인이 성공하면 그 데이터를 캐시에다가 저장한다. 토큰은 셋쿠키해서 그 데이터는 profileImg, nickname
        // 로그인 성공하면 home으로 라우팅
        router.push('/');
      },
      onError() {
        console.log('로그인 실패?'); // FIXME: 에러 메세지 토스트로 표시하기
      }
    }
  );

  return onLogin;
};
