import Loading from '@components/layouts/loading';
import { getProducts } from '@services/firebase';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import {} from 'twin.macro';
import Product from './product';
import { TProducts } from 'types/products';

const Products = () => {
  const { isLoading, data: products, error } = useQuery<TProducts>(['products'], getProducts);
  console.log(products, 'products');
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
