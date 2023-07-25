import { addOrUpdateToCart } from '@services/firebase';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthContext } from 'context/authContext';
import { QUERY_KEYS } from 'queries/keys';
import { useState } from 'react';
import { TProduct } from 'types/products';

function useAddCart() {
  const { uid } = useAuthContext();
  const userId = uid || '';

  const [quantity, setQuantity] = useState(1);

  const queryClient = useQueryClient();

  const addOrUpdateItem = useMutation((product: TProduct) => addOrUpdateToCart(userId, product), {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.carts(userId));
    },
  });

  return { setQuantity, quantity, uid, addOrUpdateItem };
}

export default useAddCart;
