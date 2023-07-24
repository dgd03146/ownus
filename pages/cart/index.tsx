import CartItem from '@components/cart/cartItem';
import PriceCard from '@components/cart/priceCard';
import WithAuth from '@components/hoc/withAuth';
import Loading from '@components/layouts/loading';
import { useAuthContext } from 'context/authContext';

import useGetCarts from 'queries/hooks/cart/useGetCarts';
import React from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';

const SHIPPING = 3000;

const Cart = () => {
  const { isLoading, products } = useGetCarts();
  const { uid } = useAuthContext();

  if (isLoading) return <Loading />;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    (hasProducts && products.reduce((prev, current) => prev + parseInt(current.price) * current.quantity, 0)) || 0;

  return (
    <section>
      <h1>My Cart</h1>
      {!hasProducts && <p>There is no any item in Cart</p>}
      {hasProducts && (
        <>
          <ul>
            {products && products.map((product) => <CartItem key={product.id} product={product} uid={uid as string} />)}
          </ul>
          <div>
            <PriceCard text="Item Total Price" price={totalPrice} />
            <BsFillPlusCircleFill />
            <PriceCard text="Shipping Amount" price={SHIPPING} />
            <FaEquals />
            <PriceCard text="Total Price" price={totalPrice + SHIPPING} />
          </div>
        </>
      )}
    </section>
  );
};

export default WithAuth(Cart);
