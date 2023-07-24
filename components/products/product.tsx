import Link from 'next/link';
import React from 'react';
import tw, { css } from 'twin.macro';
import { TProduct } from 'types/products';
import { CldImage } from 'next-cloudinary';

type TProps = {
  product: TProduct;
};

const Product = ({ product: { id, image, title, category, price } }: TProps) => {
  return (
    <li tw="mb-[50px]">
      <Link href={`/products/${id}`}>
        <div css={ImageWrapper}>
          <CldImage src={image} alt="product" layout="fill" objectFit="cover" objectPosition="center" loading="lazy" />
        </div>
        <div tw="my-2 text-center flex flex-col gap-y-2">
          <h3 tw="text-primary3 text-opacity-70">{title}</h3>
          <p tw="text-primary7">{category}</p>
          <p tw="text-primary3 font-extrabold">£{price}</p>
        </div>
      </Link>
    </li>
  );
};

export default Product;

const ImageWrapper = css`
  ${tw`relative w-full mobile:h-[350px] tablet:h-[466px] overflow-hidden`}

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
