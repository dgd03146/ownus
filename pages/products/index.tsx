import { dehydrate, QueryClient } from '@tanstack/react-query';
import { MockProducts } from 'mock/products';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts, useProducts } from 'queries/hooks/products/useProducts';
import { queryKeys } from 'queries/keys';
import React from 'react';
import tw, { css } from 'twin.macro';
import { TProducts } from 'types/products';
import { FaHeart } from 'react-icons/fa';

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  // FIXME: data 다 받을 필요없다. react query select option 사용해서 필터 하자.

  try {
    await queryClient.prefetchQuery([queryKeys.products], getProducts);
    return {
      props: {
        dehydratedState: dehydrate(queryClient)
      },
      revalidate: parseInt(process.env.REVALIDATE_SECONDS!)
    };
  } catch (e) {
    return {
      notFound: true
    };
  } finally {
    queryClient.clear();
  }
};

const Products = () => {
  // TODO: 페이지네이션, products map 돌려서 사용해야함, 나중에 주석 풀기!
  // const { products } = useProducts();

  return (
    <>
      <div tw="w-11/12 mobile:w-10/12 tablet:w-8/12 my-8 mx-auto">
        <div tw="flex justify-end">
          <select tw="font-semibold text-primary6" value={'최신순'}>
            <option value="popular">인기순</option>
            <option value="popular">리뷰순</option>
          </select>
        </div>
        <ul tw="grid py-8 gap-x-8 gap-y-12 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 ">
          {/* FIXME: products 데이터로 수정 */}
          {MockProducts.map(
            ({ product_id, p_name, p_price, thunbnail_url }) => (
              <li key={product_id}>
                <div tw="mb-4 flex justify-between items-center">
                  <span tw="bg-primary6 px-1 text-white1 text-sm font-Playfair">
                    NEW
                  </span>
                  <FaHeart tw="cursor-pointer text-[18px]" />
                </div>
                <Link href={`/products/${product_id}`}>
                  <div css={imageWrapper}>
                    <Image
                      src={thunbnail_url}
                      alt="product"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      loading="lazy"
                    />
                  </div>
                </Link>
                <div tw="mt-2">
                  <p tw="text-sm text-gray2 mb-[2px]">카테고리</p>
                  <h3 tw="text-[18px] font-semibold mb-[2px]">{p_name}</h3>
                  <p>{p_price}원</p>
                </div>
              </li>
            )
          )}
        </ul>
        <div tw="flex justify-center my-28">
          <ul tw="flex gap-x-12 text-primary3">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Products;

const imageWrapper = css`
  ${tw`relative w-full mobile:h-[450px] tablet:h-[300px] overflow-hidden`}

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
