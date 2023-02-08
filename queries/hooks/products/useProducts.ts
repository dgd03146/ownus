import { TProduct } from './../../../types/products';
import { queryKeys } from './../../keys';
import { productService } from './../../../lib/api/instance';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

export const getProducts = async () => {
  try {
    const res = await productService.getProducts();
    return res.data;
  } catch {
    // FIXME: ALERT 토스트로 바꾸기
    console.log('상품 못 불러와');
  }
};

export const useProducts = () => {
  // FIXME: infinite query로 바꿔야함
  const { data: products } = useQuery([queryKeys.products], getProducts, {
    select: (data) =>
      data.map(({ p_info, created_at, is_sold, ...rest }: TProduct) => rest)
  });
  return { products };
};
