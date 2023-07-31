import { addNewProduct } from '@services/firebase';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ROUTE } from 'constants/constant';
import { useRouter } from 'next/router';
import { QUERY_KEYS } from 'queries/keys';

import { TProduct } from 'types/products';

type TMutateData = {
  product: TProduct;
  url: string;
};

function useAddProduct() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const addProduct = useMutation(({ product, url }: TMutateData) => addNewProduct(product, url), {
    onSuccess: async () => {
      await queryClient.invalidateQueries(QUERY_KEYS.products('All'));
      return router.push(ROUTE.products);
    },
  });
  return { addProduct };
}

export default useAddProduct;
