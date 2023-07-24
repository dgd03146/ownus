import Image from 'next/image';
import React from 'react';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import { TProduct } from 'types/products';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { addOrUpdateToCart, removeFromCart } from '@services/firebase';

type TProps = {
  product: TProduct;
  uid: string;
};

const CartItem = ({ product, uid }: TProps) => {
  const { id, image, title, quantity, price } = product;

  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateToCart(uid, { ...product, quantity: quantity - 1 });
  };

  const handlePlus = () => addOrUpdateToCart(uid, { ...product, quantity: quantity + 1 });

  const handleDelete = () => removeFromCart(uid, id as string);

  return (
    <li>
      <Image src={image} alt={title} width={300} height={300} />
      <div>
        <p>{title}</p>
        <div>
          <AiOutlineMinusSquare onClick={handleMinus} />
          <span>{quantity}</span>
          <AiOutlinePlusSquare onClick={handlePlus} />
          <RiDeleteBin5Fill onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
