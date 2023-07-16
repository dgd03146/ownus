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
import { ProductsFilter } from 'constants/constant';

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  // FIXME: data 다 받을 필요없다. react query select option 사용해서 필터 하자.

  try {
    await queryClient.prefetchQuery([queryKeys.products], getProducts);
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
      revalidate: parseInt(process.env.REVALIDATE_SECONDS!),
    };
  } catch (e) {
    return {
      notFound: true,
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
      <div tw="my-24 mx-auto">
        <ul tw="flex justify-center pt-12 gap-x-8 pb-16 px-[50px] text-[13px] text-primary3 font-semibold text-opacity-60">
          {ProductsFilter.map((it) => (
            <li className="group" tw="relative cursor-pointer" key={it.title}>
              <p>{it.title}</p>
              <div tw="absolute w-full h-0.5 bg-primary4 scale-x-0 group-hover:scale-x-90 transition-transform duration-500" />
            </li>
          ))}
        </ul>
        <ul tw="grid py-8 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-3">
          {/* FIXME: products 데이터로 수정 */}
          {MockProducts.map(({ product_id, p_name, p_price, thunbnail_url }) => (
            <li tw="px-[50px] mb-[50px]" key={product_id}>
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
                <div tw="my-2 text-center font-GowunDodam">
                  <p tw="text-primary3 font-semibold text-opacity-70 text-[14px]">{p_name}</p>
                  <p tw="text-primary3 font-extrabold text-[15px]">{p_price}원</p>
                </div>
              </Link>
            </li>
          ))}
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
