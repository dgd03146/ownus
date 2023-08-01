import { get, ref, remove, set } from 'firebase/database';
import { database } from './firebase';
import { TProduct, TProducts } from 'types/products';
import { ApiError } from 'next/dist/server/api-utils';

export async function getCart(userId: string): Promise<TProducts> {
  try {
    const snapshot = await get(ref(database, `carts/${userId}`));
    const items = snapshot.val() || {};
    return Object.values(items);
  } catch (error) {
    throw Error('Failed to fetch the cart');
  }
}

export async function updateToCart(userId: string, product: TProduct) {
  try {
    await set(ref(database, `carts/${userId}/${product.id}`), product);
  } catch (error) {
    throw Error('Failed to update the product');
  }
}

export async function removeFromCart(userId: string, productId: string) {
  try {
    await remove(ref(database, `carts/${userId}/${productId}`));
  } catch (error) {
    throw Error('Failed to remove the product');
  }
}
