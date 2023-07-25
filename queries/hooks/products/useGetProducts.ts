import { TProducts } from '../../../types/products';
import { QUERY_KEYS } from '../../keys';

import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@services/firebase';

export const useGetProducts = () => {
  const { isLoading, data: products, error } = useQuery<TProducts>(QUERY_KEYS.products, getProducts);
  return { products, isLoading, error };
};
