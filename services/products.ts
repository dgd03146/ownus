import { v4 as uuid } from 'uuid';
import { ref, get, set } from 'firebase/database';
import { database } from './firebase';
import { TProduct, TProducts } from 'types/products';
import { ApiError } from 'next/dist/server/api-utils';

export async function getProducts() {
  try {
    const snapshot = await get(ref(database, 'products'));
    if (snapshot.exists()) {
      return Object.values<TProduct>(snapshot.val());
    }
    return [];
  } catch (error) {
    throw Error('Failed to fetch products');
  }
}

export async function getProduct(id: string) {
  try {
    const snapshot = await get(ref(database, `products/${id}`));
    if (snapshot.exists()) {
      return snapshot.val();
    }
  } catch (error) {
    throw Error('Failed to fetch product');
  }
}

export async function addNewProduct(product: TProduct, image: string) {
  try {
    const id = uuid();
    return await set(ref(database, `products/${id}`), {
      ...product,
      id,
      price: parseInt(product.price),
      image,
    });
  } catch (error) {
    throw Error('Failed to add new product');
  }
}
