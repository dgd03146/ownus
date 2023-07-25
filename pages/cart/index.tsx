import CartItem from '@components/cart/cartItem';
import PriceCard from '@components/cart/priceCard';
import Button from '@components/common/button';
import WithAuth from '@components/hoc/withAuth';
import Loading from '@components/layouts/loading';
import useGetCarts from 'queries/hooks/cart/useGetCarts';
import React from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import {} from 'twin.macro';

const SHIPPING = 3000;

const Cart = () => {
  const { isLoading, products } = useGetCarts();

  if (isLoading) return <Loading />;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    (hasProducts && products.reduce((prev, current) => prev + parseInt(current.price) * current.quantity, 0)) || 0;

  return (
    <section tw="flex flex-col mb-8">
      {!hasProducts && <h2 tw="text-primary3">There is no any item in Cart</h2>}
      {hasProducts && (
        <>
          <ul tw="border-b border-white2 mb-8 py-4">
            {products && products.map((product) => <CartItem key={product.id} product={product} />)}
          </ul>
          <div tw="flex justify-between items-center px-2 tablet:px-8 mb-8">
            <PriceCard text="Item Total Price" price={totalPrice} />
            <BsFillPlusCircleFill tw="shrink-0" />
            <PriceCard text="Shipping Amount" price={SHIPPING} />
            <FaEquals tw="shrink-0" />
            <PriceCard text="Total Price" price={totalPrice + SHIPPING} />
          </div>
          <Button text="Order" />
        </>
      )}
    </section>
  );
};

export default WithAuth(Cart);
