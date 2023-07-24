import Image from 'next/image';
import React, { useState } from 'react';
import {} from 'twin.macro';
import { ImageWrapper, ProductInfo } from './style';
import { HiPlus } from 'react-icons/hi';
import { HiMinus } from 'react-icons/hi';
import Link from 'next/link';

import { TProduct } from 'types/products';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { ParsedUrlQuery } from 'querystring';
import { addOrUpdateToCart, getProduct, getProducts } from '@services/firebase';
import { useAuthContext } from 'context/authContext';
import useAddCart from 'queries/hooks/cart/useAddCart';

interface ProductPageParams extends ParsedUrlQuery {
  id: string;
}

type ProductPageProps = {
  product: TProduct;
};

export const getStaticPaths: GetStaticPaths<ProductPageParams> = async () => {
  const products = await getProducts();

  return {
    paths: products.map(({ id }) => ({
      params: { id: id || '' },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<ProductPageProps, ProductPageParams> = async ({ params }) => {
  const { id } = params as ProductPageParams;
  try {
    const product = await getProduct(id);
    return {
      props: { product },
      revalidate: parseInt(process.env.REVALIDATE_SECONDS!),
    };
  } catch (err) {
    return { notFound: true };
  }
};

const Product = ({ product }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title, image, category, price, description } = product;
  const { handleAddCart, handlePlus, handleMinus, quantity } = useAddCart(product);

  return (
    <div tw="w-11/12 mobile:w-10/12 tablet:w-8/12 my-8 mx-auto">
      <div tw="py-8 flex gap-x-20">
        <div tw="basis-1/2">
          <ImageWrapper>
            <Image src={image} alt="product" layout="fill" objectFit="cover" objectPosition="center" loading="lazy" />
          </ImageWrapper>
        </div>
        <ProductInfo>
          <p tw="text-sm text-gray2 mb-[2px]">{category}</p>
          <h3 tw="text-primary3 mb-2 font-semibold text-2xl">{title}</h3>
          <p tw="break-all mb-8">{description}</p>
          <p tw="text-primary3 mb-8 font-semibold text-xl">£{price}</p>
          <div tw="flex gap-x-4 mb-8">
            <div tw="border-white2 border-[1px] flex items-center justify-between p-2 font-semibold ">
              <button>
                <HiMinus tw="text-gray1" onClick={handleMinus} />
              </button>
              <p tw="px-4">{quantity}</p>
              <button onClick={handlePlus}>
                <HiPlus />
              </button>
            </div>
            <button tw="bg-primary3 text-white1 py-3 px-12 whitespace-nowrap hover:bg-primary4" onClick={handleAddCart}>
              ADD CART
            </button>
          </div>
        </ProductInfo>
      </div>
    </div>
  );
};

export default Product;
