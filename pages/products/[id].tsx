import Image from 'next/image';
import React, { useState } from 'react';
import tw, { css } from 'twin.macro';
import { MockProduct, MockProducts } from 'mock/products';
import { AdditionalInfo, ImageWrapper, ProductInfo } from './styles';
import { HiPlus } from 'react-icons/hi';
import { HiMinus } from 'react-icons/hi';
import Link from 'next/link';
import { getRelatedProducts } from 'utils/relatedProducts';
import { TProduct, TProducts } from 'types/products';
import { GetStaticPaths, GetStaticProps } from 'next';
import { productService } from '@lib/api/instance';
import { QueryClient } from '@tanstack/react-query';
import { queryKeys } from 'queries/keys';
import { ParsedUrlQuery } from 'querystring';

interface ProductPageParams extends ParsedUrlQuery {
  product_id: string;
}

type ProductPageProps = {
  product: TProduct;
};

// export const getStaticPaths: GetStaticPaths<ProductPageParams> = async () => {
//   const queryClient = new QueryClient();
//   const products = queryClient.getQueryData<TProduct[]>([queryKeys.products])!;

//   return {
//     paths: products.map(({ product_id }) => ({
//       params: { product_id: product_id.toString() }
//     })),
//     fallback: 'blocking'
//   };
// };

// export const getStaticProps: GetStaticProps<
//   ProductPageProps,
//   ProductPageParams
// > = async ({ params }) => {
//   const { product_id } = params!;
//   try {
//     const product = await productService.getProduct(product_id);
//     return {
//       props: { product },
//       revalidate: parseInt(process.env.REVALIDATE_SECONDS!)
//     };
//   } catch (err) {
//     return { notFound: true };
//   }
// };

const Product = () => {
  const { p_name, p_info, p_price, p_images, thunbnail_url } = MockProduct;
  const [quantity, setQuantity] = useState(1);

  const handlePlus = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleMinus = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity((prev) => prev - 1);
  };

  return (
    <div tw="w-11/12 mobile:w-10/12 tablet:w-8/12 my-8 mx-auto">
      <div tw="py-8 flex gap-x-20">
        <div tw="basis-1/2">
          <ImageWrapper>
            <Image
              src={thunbnail_url}
              alt="product"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              loading="lazy"
            />
          </ImageWrapper>
        </div>
        <ProductInfo>
          <p tw="text-sm text-gray2 mb-[2px]">카테고리</p>
          <h3 tw="text-primary3 mb-2 font-semibold text-2xl">{p_name}</h3>
          <p tw="break-all mb-8">{p_info}</p>
          <p tw="text-primary3 mb-8 font-semibold text-xl">{p_price}원</p>
          <div tw="flex gap-x-4 mb-8">
            <div tw="border-white2 border-[1px] flex items-center justify-between p-2 font-semibold">
              <button>
                <HiMinus tw="text-gray1" onClick={handleMinus} />
              </button>
              <input tw="text-center w-10" type="number" value={quantity} />
              <button onClick={handlePlus}>
                <HiPlus />
              </button>
            </div>
            <Link href={'/cart'}>
              <button tw="bg-primary3 text-white1 py-3 px-12 whitespace-nowrap">
                장바구니 담기
              </button>
            </Link>
          </div>
          {/* <AdditionalInfo>
            <p>category</p>
            <p>category</p>
            <p>category</p>
          </AdditionalInfo> */}
        </ProductInfo>
      </div>
      <div tw="my-28">
        <div tw="flex justify-center gap-x-24">
          <div tw="bg-primary5 text-white1 rounded-xl px-4 py-1">
            <p>상품 설명</p>
          </div>
          <div tw="bg-primary5 text-white1 rounded-xl px-4 py-1">
            <p>추가 정보</p>
          </div>
          <div tw="bg-primary5 text-white1 rounded-xl px-4 py-1">
            <p>리뷰</p>
          </div>
        </div>
        <div tw="h-[1px] w-[80%] mx-auto bg-primary1 my-4" />
        <div tw="mx-auto my-8 w-[60%]">
          <p tw="break-all">
            상품은 이렇습니다 이상품은 이래서 좋습니다 상품은 이렇습니다
            이상품은 이래서 좋습니다상품은 이렇습니다 이상품은 이래서
            좋습니다상품은 이렇습니다 이상품은 이래서 좋습니다상품은 이렇습니다
            이상품은 이래서 좋습니다상품은 이렇습니다 이상품은 이래서 좋습니다
          </p>
        </div>
      </div>
      <div tw="my-32">
        <h3 tw="mb-8 text-primary3 font-semibold">관련 상품</h3>
        <ul tw="flex gap-x-8">
          {getRelatedProducts(MockProducts).map(
            ({ thunbnail_url, p_name, p_price }) => (
              <li>
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
                <h3 tw="text-[18px] font-semibold mb-[2px]">{p_name}</h3>
                <p>{p_price}원</p>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Product;

const imageWrapper = css`
  ${tw`relative w-[250px] h-[250px] overflow-hidden`}

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
