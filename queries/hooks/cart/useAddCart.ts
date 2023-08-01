import { TToastType, showToast } from '@components/layouts/toast';
import { updateToCart } from '@services/cart';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ROUTE } from 'constants/constant';
import { useAuthContext } from 'context/authContext';
import { useRouter } from 'next/router';
import { QUERY_KEYS } from 'queries/keys';
import { useState } from 'react';
import { TProduct } from 'types/products';

function useAddCart() {
  const { uid } = useAuthContext();
  const userId = uid || '';
  const router = useRouter();

  const [quantity, setQuantity] = useState(1);

  const queryClient = useQueryClient();

  const addOrUpdateItem = useMutation((product: TProduct) => updateToCart(userId, product), {
    onSuccess: async () => {
      await queryClient.invalidateQueries(QUERY_KEYS.carts(userId));
      showToast({ type: TToastType.success, message: 'Updated to cart successfully' });
      setTimeout(() => {
        router.push(ROUTE.products);
      }, 3000);
      return;
    },
  });

  return { setQuantity, quantity, uid, addOrUpdateItem };
}

export default useAddCart;
