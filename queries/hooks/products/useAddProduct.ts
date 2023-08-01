import { TToastType, showToast } from '@components/layouts/toast';
import { addNewProduct } from '@services/products';
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
      showToast({ type: TToastType.success, message: 'Registered successfully' });
      setTimeout(() => {
        router.push(ROUTE.products);
      }, 4000);
      return;
    },
  });
  return { addProduct };
}

export default useAddProduct;
