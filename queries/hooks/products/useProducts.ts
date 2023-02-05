import { queryKeys } from './../../keys';
import { productService } from './../../../lib/api/instance';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

export const getProducts = async () => {
  try {
    const res = await productService.getProducts();
    return res.data;
  } catch {
    alert('상품 못불러옴');
  }
};

export const useProducts = () => {
  // FIXME: infinite query로 바꿔야함ㄴ
  const { data: products } = useQuery([queryKeys.products], getProducts);
  return { products };
};
