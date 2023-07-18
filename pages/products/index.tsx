import { dehydrate, QueryClient } from '@tanstack/react-query';
import { MockProducts } from 'mock/products';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from 'queries/hooks/products/useProducts';
import { queryKeys } from 'queries/keys';
import React from 'react';
import tw, { css } from 'twin.macro';
import Categories from '@components/products/categories';
import Pages from '@components/products/pages';
import Products from '@components/products/products';

// export const getStaticProps: GetStaticProps = async () => {
//   const queryClient = new QueryClient();

//   // FIXME: data 다 받을 필요없다. react query select option 사용해서 필터 하자.

//   try {
//     await queryClient.prefetchQuery([queryKeys.products], getProducts);
//     return {
//       props: {
//         dehydratedState: dehydrate(queryClient),
//       },
//       revalidate: parseInt(process.env.REVALIDATE_SECONDS!),
//     };
//   } catch (e) {
//     return {
//       notFound: true,
//     };
//   } finally {
//     queryClient.clear();
//   }
// };

const ProductsPage = () => {
  // TODO: 페이지네이션, products map 돌려서 사용해야함, 나중에 주석 풀기!
  // const { products } = useProducts();

  return (
    <>
      <div tw="mx-auto">
        <Categories />
        <Products />
        <Pages />
      </div>
    </>
  );
};

export default ProductsPage;
