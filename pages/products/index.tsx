import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import { getProducts } from '@services/firebase';
import { QUERY_KEYS } from 'queries/keys';
import React from 'react';
import Categories from '@components/products/categories';
import Products from '@components/products/products';
import { REVALIDATE_TIME } from 'constants/constant';
import { useGetProducts } from 'queries/hooks/products/useGetProducts';
import Loading from '@components/layouts/loading';

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery(QUERY_KEYS.products('All'), getProducts);
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
      revalidate: REVALIDATE_TIME,
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
  const { products, isLoading, error, selected, handleCategory } = useGetProducts();

  return (
    <>
      <div tw="mx-auto">
        <Categories selected={selected} handleCategory={handleCategory} />
        {!products && isLoading && <Loading />}
        {products && <Products products={products} error={error} />}
      </div>
    </>
  );
};

export default ProductsPage;
