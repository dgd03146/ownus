import { Keys } from '../keys';
import { queryClient } from '../queryClient';
import { useMutation } from '@tanstack/react-query';
import { User } from 'types/user';
import { authService } from '@lib/api/instance';

const { USER_QUERY_KEY } = Keys;

type SignInVariables = {
  email: string;
  password: string;
};

export const useSignIn = () => {
  const { mutate: onSign } = useMutation<User, Error, SignInVariables>(
    ({ email, password }) => authService.singin(email, password),
    {
      onSuccess(data) {
        queryClient.setQueryData([USER_QUERY_KEY], data);
        return true;
        // TODO: 네비게이트 시켜줘야함
      },
      onError(error) {
        console.log(error.message);
        return false;
      }
    }
  );
  return onSign;
};
