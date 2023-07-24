import Loading from '@components/layouts/loading';
import { getProducts } from '@services/firebase';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import React from 'react';
import {} from 'twin.macro';
import Product from './product';
import { useGetProducts } from 'queries/hooks/products/useGetProducts';

const Products = () => {
  const { isLoading, products, error } = useGetProducts();

  return (
    <>
      {isLoading && <Loading />}
      {error && <p>Failed to load Data</p>}
      <ul tw="grid tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-3 gap-x-[50px]">
        {products && products.map((product) => <Product key={product.id} product={product} />)}
      </ul>
    </>
  );
};

export default Products;
