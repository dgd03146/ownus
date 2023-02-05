import { dehydrate, QueryClient } from '@tanstack/react-query';
import { MockProducts } from 'mock/products';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts, useProducts } from 'queries/hooks/products/useProducts';
import { queryKeys } from 'queries/keys';
import React from 'react';
import tw, { css } from 'twin.macro';
import { Products } from 'types/products';

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.products], getProducts);
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    },
    // hydrate에서 revalidate 될까??
    revalidate: parseInt(process.env.REVALIDATE_SECONDS!)
  };
};

const Products = () => {
  // TODO: 페이지네이션, products map 돌려서 사용해야함
  const { products } = useProducts();

  return (
    <>
      <div tw="w-11/12 mobile:w-10/12 tablet:w-8/12 my-8 mx-auto">
        <div tw="flex">
          <input
            tw="border-[1px] border-white2 px-2 py-1"
            type="text"
            placeholder="Search"
          />
        </div>
        <ul tw="grid py-8 gap-x-10 gap-y-5 tablet:grid-cols-2 desktop:grid-cols-3 ">
          {MockProducts.map(
            ({ product_id, p_name, p_price, thunbnail_url }) => (
              <li key={product_id}>
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
                <div tw="text-center text-primary3 my-4">
                  <p tw="my-2 text-xl">{p_name}</p>
                  <p>{p_price}</p>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
};

export default Products;

const imageWrapper = css`
  ${tw`relative w-full mobile:h-[500px] tablet:h-[300px] overflow-hidden`}

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
