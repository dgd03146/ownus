import { addNewProduct } from '@services/firebase';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from 'queries/keys';

import { TProduct } from 'types/products';

type TMutateData = {
  product: TProduct;
  url: string;
};

function useAddProduct() {
  const queryClient = useQueryClient();

  const addProduct = useMutation(({ product, url }: TMutateData) => addNewProduct(product, url), {
    onSuccess: () => queryClient.invalidateQueries(QUERY_KEYS.products),
  });
  return { addProduct };
}

export default useAddProduct;
