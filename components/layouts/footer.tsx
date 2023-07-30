import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';
import {} from 'twin.macro';

const Footer = () => {
  // FIXME: 맵으로 묶어서 정렬하기, 공통 컴포넌트 분리
  return (
    <div tw="py-16 bg-primary1 px-[60px]">
      <div tw="flex justify-center flex-col laptop:flex-row gap-y-4 laptop:gap-x-10 desktop:gap-x-40 mx-auto text-primary3">
        <div>
          <h3 tw="font-Cinzel font-semibold mb-2">OWNUS</h3>
          <p>©2023 GeoJungIm All Rights Reserved</p>
        </div>
        <div tw=" gap-x-20 gap-y-4 desktop:gap-x-32 flex flex-col tablet:grid tablet:grid-cols-3">
          <div>
            <p tw="font-bold mb-4">About</p>
            <ul>
              <li>Company. Ownus</li>
              <li>Ltd Owner: Geojungim</li>
              <li>Address. London, UK</li>
            </ul>
          </div>
          <div>
            <p tw="font-bold mb-4">Contact</p>
            <ul>
              <li>ibory1220@gmail.com</li>
              <li>44-1234-5678</li>
            </ul>
          </div>
          <div>
            <p tw="font-bold mb-4">Follow Us</p>
            <ul tw="text-xl flex flex-col gap-y-2">
              <li>
                <Link href={'https://www.linkedin.com/in/dgd03146'}>
                  <AiFillLinkedin />
                </Link>
              </li>
              <li>
                <Link href={'https://github.com/dgd03146'}>
                  <AiFillGithub />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
