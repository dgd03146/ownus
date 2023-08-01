import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import { getProducts } from '@services/products';
import { QUERY_KEYS } from 'queries/keys';
import React from 'react';
import Categories from '@components/products/categories';
import Products from '@components/products/products';
import { REVALIDATE_TIME } from 'constants/constant';
import { useGetProducts } from 'queries/hooks/products/useGetProducts';
import Loading from '@components/layouts/loading';
import Head from 'next/head';
import background from '/public/images/background.jpg';

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
      <Head>
        <title>"Ownus Flowers"</title>
        <meta name="description" content="The perfect choice for your needs" />
        <meta property="og:title" content="Ownus Flowers" />
        <meta property="og:image" content={products && products[0].image} />
        <meta property="og:description" content="The perfect choice for your needs" />
      </Head>
      <div tw="mx-auto">
        <Categories selected={selected} handleCategory={handleCategory} />
        {!products && isLoading && <Loading />}
        {products && <Products products={products} error={error} />}
      </div>
    </>
  );
};

export default ProductsPage;
