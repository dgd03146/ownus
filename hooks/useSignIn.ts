import { Keys } from './../react-query/keys';
import { queryClient } from './../react-query/queryClient';
import { useMutation } from '@tanstack/react-query';
import { useApi } from 'context/apiContext';

// const api = useContext(apiContext);

const { USER_QUERY_KEY } = Keys;

export type User = {
  id: number;
  nickname: string;
  profileImg: string;
};

type SignInVariables = {
  email: string;
  password: string;
};

export const useSignIn = () => {
  const { authService } = useApi();

  const { mutate: onSign } = useMutation<User, Error, SignInVariables>(
    ({ email, password }) => authService.singin(email, password),
    {
      onSuccess(data) {
        queryClient.setQueryData([USER_QUERY_KEY], data);
        return true;
      },
      onError(error) {
        console.log(error.message);
        return false;
      }
    }
  );
  return onSign;
};
