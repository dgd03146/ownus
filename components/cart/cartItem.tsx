import Image from 'next/image';
import React from 'react';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import { TProduct } from 'types/products';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { addOrUpdateToCart, removeFromCart } from '@services/firebase';
import tw, { css } from 'twin.macro';

type TProps = {
  product: TProduct;
  uid: string;
};

const ICON_CLASS = 'transition-all cursor-pointer hover:text-primary3 hover:scale-105 mx-1';

const CartItem = ({ product, uid }: TProps) => {
  const { id, image, title, quantity, category, price } = product;

  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateToCart(uid, { ...product, quantity: quantity - 1 });
  };

  const handlePlus = () => addOrUpdateToCart(uid, { ...product, quantity: quantity + 1 });

  const handleDelete = () => removeFromCart(uid, id as string);

  return (
    <li tw="flex justify-between my-4 items-center">
      <div css={ImageWrapper}>
        <Image src={image} alt={title} layout="fill" objectFit="cover" objectPosition="center" loading="lazy" />
      </div>
      <div tw="flex-1 flex justify-between ml-8">
        <div tw="basis-3/5">
          <p tw="text-lg">{title}</p>
          <p tw="text-xl font-bold text-primary3">{category}</p>
          <p>£{price}</p>
        </div>
        <div tw="text-2xl flex items-center">
          <AiOutlineMinusSquare css={[tw`${ICON_CLASS}`]} onClick={handleMinus} />
          <span>{quantity}</span>
          <AiOutlinePlusSquare css={[tw`${ICON_CLASS}`]} onClick={handlePlus} />
          <RiDeleteBin5Fill css={[tw`${ICON_CLASS}`]} onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;

const ImageWrapper = css`
  ${tw`relative w-24 tablet:w-[300px] mobile:h-[100px] tablet:h-[200px] overflow-hidden rounded-md`}

  img {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }

  :hover img {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
`;
