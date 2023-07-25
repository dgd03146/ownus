import React from 'react';
import tw from 'twin.macro';

const Footer = () => {
  // FIXME: 맵으로 묶어서 정렬하기, 공통 컴포넌트 분리
  return (
    <div tw="py-16 bg-primary1 px-[60px]">
      <div tw="flex justify-center gap-x-40 mx-auto text-primary3">
        <div>
          <h3 tw="font-Cinzel font-semibold mb-2">OWNUS</h3>
          <p>© 2020 Qode Interactive, All Rights Reserved</p>
        </div>
        <div tw="grid grid-cols-3 gap-x-32">
          <div>
            <p tw="font-bold mb-4">About</p>
            <ul>
              <li>About Us</li>
              <li>Shop</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <p tw="font-bold mb-4">Contact</p>
            <ul>
              <li>About Us</li>
              <li>Shop</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <p tw="font-bold mb-4">Follow Us</p>
            <ul>
              <li>About Us</li>
              <li>Shop</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
