import React from 'react';
import tw from 'twin.macro';

const Footer = () => {
  return (
    <div tw="py-20 bg-primary1">
      <div tw="flex justify-between w-11/12 mobile:w-10/12 tablet:w-8/12 mx-auto text-primary3">
        <div>
          <h1 tw="font-Cinzel mb-2">OWNUS</h1>
          <p>© 2020 Qode Interactive, All Rights Reserved</p>
        </div>
        <div tw="grid grid-cols-3 gap-x-32">
          <div>
            <h3 tw="font-semibold mb-4">About</h3>
            <ul>
              <li>About Us</li>
              <li>Shop</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3 tw="font-semibold mb-4">Contact</h3>
            <ul>
              <li>About Us</li>
              <li>Shop</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3 tw="font-semibold mb-4">Follow Us</h3>
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
