import { addOrUpdateToCart } from '@services/firebase';
import { useAuthContext } from 'context/authContext';
import { useState } from 'react';
import { TProduct } from 'types/products';

function useAddCart(product: TProduct) {
  const { uid } = useAuthContext();
  const { id, title, image, category, price } = product;

  const [quantity, setQuantity] = useState(1);

  const handlePlus = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleMinus = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity((prev) => prev - 1);
  };

  const handleAddCart = () => {
    const product = { id, image, title, price, category, quantity: 1 };
    addOrUpdateToCart(uid as string, product);
  };

  return { handleAddCart, handlePlus, handleMinus, quantity };
}

export default useAddCart;
