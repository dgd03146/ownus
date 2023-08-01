import { TProducts } from '../../../types/products';
import { QUERY_KEYS } from '../../keys';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@services/products';
import { useState } from 'react';

export const useGetProducts = () => {
  const [selected, setSelected] = useState('All');

  const handleCategory = (category: string) => {
    setSelected(category);
  };

  const {
    isLoading,
    data: products,
    error,
  } = useQuery<TProducts>(QUERY_KEYS.products(selected), getProducts, {
    select(data) {
      if (selected !== 'All') {
        return data.filter((it) => it.category === selected);
      }
      return data;
    },
  });
  return { products, isLoading, error, selected, handleCategory };
};
