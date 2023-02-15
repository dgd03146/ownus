import { TProducts } from './../types/products';
import { TProduct } from '../types/products';
export const getRelatedProducts = (products: TProduct[]) => {
  return products.slice(0, 4);
};
