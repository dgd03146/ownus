import { TToastType, showToast } from '@components/layouts/toast';
import { removeFromCart } from '@services/cart';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ROUTE } from 'constants/constant';
import { useAuthContext } from 'context/authContext';
import router from 'next/router';
import { QUERY_KEYS } from 'queries/keys';

function useRemoveCart() {
  const { uid } = useAuthContext();
  const userId = uid || '';

  const queryClient = useQueryClient();

  const removeItem = useMutation((id: string) => removeFromCart(userId, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.carts(userId));
      showToast({ type: TToastType.success, message: 'Removed cart item successfully' });
      setTimeout(() => {
        router.push(ROUTE.products);
      }, 3000);
    },
  });

  return { removeItem };
}

export default useRemoveCart;
