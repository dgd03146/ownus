import Link from 'next/link';
import React from 'react';
import { TbUserCircle } from 'react-icons/tb';
import { BsBag } from 'react-icons/bs';
import { pages } from 'constants/pages';
import tw from 'twin.macro';
// TODO: 다이나믹 라우팅, 배열로 돌리기

const Header = () => {
  return (
    <header tw="py-5 px-8 flex justify-between items-center w-full font-semibold text-primary5">
      <div>
        <Link tw="text-3xl font-Cinzel" href={'/'}>
          OWNUS
        </Link>
      </div>
      <ul tw="flex gap-20">
        {pages.map((page) => (
          <li key={page.href}>
            <Link className="group" tw="text-base relative" href={page.href}>
              {page.title}
              <div tw="absolute w-full h-0.5 bg-primary2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          </li>
        ))}
      </ul>
      <div tw="flex items-center gap-x-6">
        <Link href={'/'}>
          <BsBag tw="text-xl cursor-pointer" />
        </Link>
        <Link href={'/'}>
          <TbUserCircle tw="text-2xl cursor-pointer" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
