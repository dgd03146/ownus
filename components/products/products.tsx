import Loading from '@components/layouts/loading';
import React from 'react';
import {} from 'twin.macro';
import Product from './product';
import { useGetProducts } from 'queries/hooks/products/useGetProducts';
import { TProducts } from 'types/products';

type TProps = {
  error: unknown;
  products: TProducts;
};

const Products = ({ error, products }: TProps) => {
  return (
    <>
      {error && <p>Failed to load Data</p>}
      <ul tw="grid tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-3 gap-x-[50px]">
        {products && products.map((product) => <Product key={product.id} product={product} />)}
      </ul>
    </>
  );
};

export default Products;
