import { removeFromCart } from '@services/firebase';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthContext } from 'context/authContext';
import { QUERY_KEYS } from 'queries/keys';

function useRemoveCart() {
  const { uid } = useAuthContext();
  const userId = uid || '';

  const queryClient = useQueryClient();

  const removeItem = useMutation((id: string) => removeFromCart(userId, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.carts(userId));
    },
  });

  return { removeItem };
}

export default useRemoveCart;
