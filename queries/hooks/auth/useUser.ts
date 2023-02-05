// import { userService } from './../../lib/api/instance';

import { queryKeys } from '../../keys';
import { queryClient } from '../../queryClient';
import { useMutation, useQuery } from '@tanstack/react-query';
import { authService } from '@lib/api/instance';
import { useRouter } from 'next/router';
import { User } from 'types/user';

const getUser = async () => {
  try {
    const res = await authService.getUser();
    return res.data;
  } catch (error) {
    // FIXME: 에러메시지 출력으로 바꾸기 ERROR Boundary를 사용하든.
    console.log(error);
  }
};

// 새로고침시 유저정보 다시 받아오기위해서 getUser 요청? 캐시에 user정보가 있으면 캐시 만료될때까지.
export const useUser = () => {
  const { data: user } = useQuery<User>([queryKeys.user], () => getUser());

  const clearUser = () => {
    // reset user to null
    queryClient.setQueryData([queryKeys.user], null);
  };

  return { user, clearUser };
};
