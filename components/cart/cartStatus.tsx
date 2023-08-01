import useGetCarts from 'queries/hooks/cart/useGetCarts';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {} from 'twin.macro';

const CartStatus = () => {
  const { products } = useGetCarts();

  return (
    <div tw="relative">
      <AiOutlineShoppingCart tw="text-2xl" />
      {products && (
        <p tw="w-5 h-5 text-center bg-primary3 text-white1 font-bold rounded-full absolute -top-2 -right-2">
          {products.length}
        </p>
      )}
    </div>
  );
};

export default CartStatus;
