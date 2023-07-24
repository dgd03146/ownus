import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import { getProducts } from '@services/firebase';
import { QUERY_KEYS } from 'queries/keys';
import React from 'react';
import Categories from '@components/products/categories';
import Pagination from '@components/products/pagination';
import Products from '@components/products';

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery(QUERY_KEYS.products, getProducts);
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
      revalidate: parseInt(process.env.REVALIDATE_SECONDS!),
    };
  } catch (e) {
    return {
      notFound: true,
    };
  } finally {
    queryClient.clear();
  }
};

const ProductsPage = () => {
  return (
    <>
      <div tw="mx-auto">
        <Categories />
        <Products />
        <Pagination />
      </div>
    </>
  );
};

export default ProductsPage;
