import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import tw, { css } from 'twin.macro';

const Products = () => {
  // Mock Data
  const data = [
    {
      product_id: 'p1',
      p_name: '꽃',
      p_price: '500,000원',
      p_info: '너무 이쁜꽃이에여',
      thunbnail_url:
        'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      created_at: ' ',
      is_sold: ' '
    },
    {
      product_id: 'p1',
      p_name: '꽃',
      p_price: '500,000원',
      p_info: '너무 이쁜꽃이에여',
      thunbnail_url:
        'https://images.unsplash.com/photo-1558350315-8aa00e8e4590?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      created_at: ' ',
      is_sold: ' '
    },
    {
      product_id: 'p1',
      p_name: '꽃',
      p_price: '500,000원',
      p_info: '너무 이쁜꽃이에여',
      thunbnail_url:
        'https://images.unsplash.com/photo-1431263154979-0982327fccbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      created_at: ' ',
      is_sold: ' '
    },
    {
      product_id: 'p1',
      p_name: '꽃',
      p_price: '500,000원',
      p_info: '너무 이쁜꽃이에여',
      thunbnail_url:
        'https://images.unsplash.com/photo-1431263154979-0982327fccbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      created_at: ' ',
      is_sold: ' '
    },
    {
      product_id: 'p1',
      p_name: '꽃',
      p_price: '500,000원',
      p_info: '너무 이쁜꽃이에여',
      thunbnail_url:
        'https://images.unsplash.com/photo-1431263154979-0982327fccbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      created_at: ' ',
      is_sold: ' '
    },
    {
      product_id: 'p1',
      p_name: '꽃',
      p_price: '500,000원',
      p_info: '너무 이쁜꽃이에여',
      thunbnail_url:
        'https://images.unsplash.com/photo-1431263154979-0982327fccbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      created_at: ' ',
      is_sold: ' '
    }
  ];
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
          {data.map(({ product_id, p_name, p_price, thunbnail_url }) => (
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
          ))}
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
