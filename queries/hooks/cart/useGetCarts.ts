import { getCart } from '@services/firebase';
import { useQuery } from '@tanstack/react-query';
import { useAuthContext } from 'context/authContext';
import { QUERY_KEYS } from 'queries/keys';

import { TProducts } from 'types/products';

function useGetCarts() {
  const { uid } = useAuthContext();
  const { data: products, isLoading } = useQuery<TProducts>(QUERY_KEYS.carts(uid || ''), () => getCart(uid as string), {
    enabled: !!uid,
  });
  return { products, isLoading };
}

export default useGetCarts;
