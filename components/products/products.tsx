import Loading from '@components/layouts/loading';
import { getProducts } from '@services/firebase';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import React from 'react';
import {} from 'twin.macro';
import Product from './product';
import { useProducts } from 'queries/hooks/products/useProducts';

const Products = () => {
  const { isLoading, products, error } = useProducts();

  return (
    <>
      {isLoading && <Loading />}
      {error && <p>Failed to load Data</p>}
      <ul tw="grid tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-3">
        {products && products.map((product) => <Product key={product.id} product={product} />)}
      </ul>
    </>
  );
};

export default Products;
