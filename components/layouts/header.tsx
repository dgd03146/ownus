import Link from 'next/link';
import React, { useState } from 'react';
import { TbUserCircle } from 'react-icons/tb';
import { BsBag } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { Pages } from '@lib/constants/pages';
import tw, { css } from 'twin.macro';

// TODO: 다이나믹 라우팅, 배열로 돌리기

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleTogle = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header tw="relative py-3 mobile:py-4 px-8 flex justify-between items-center w-full font-semibold text-primary3 bg-white1 mobile:bg-opacity-0">
      <div>
        <Link tw="text-xl mobile:text-2xl font-Cinzel" href={'/'}>
          OWNUS
        </Link>
      </div>
      <ul
        css={[
          tw`mobile:flex gap-20 absolute mobile:static top-[56px] bg-white1 mobile:bg-opacity-0 w-full mobile:w-auto left-0 px-8 mobile:px-0 py-4 mobile:py-0 `,
          !showMenu && tw`hidden`
        ]}
      >
        {Pages.map((page) => (
          <li
            tw="flex justify-between py-2 mobile:py-0 text-primary3"
            key={page.href}
          >
            <Link className="group" tw="text-base relative" href={page.href}>
              {page.title}
              <div tw="absolute w-full h-0.5 bg-primary2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
            <div>
              <IoIosArrowForward tw="text-2xl block mobile:hidden" />
            </div>
          </li>
        ))}
      </ul>
      <div tw="hidden mobile:flex items-center gap-x-6">
        <Link href={'/'}>
          <BsBag tw="text-xl cursor-pointer" />
        </Link>
        <Link href={'/'}>
          <TbUserCircle tw="text-2xl cursor-pointer" />
        </Link>
      </div>
      <button tw="block text-2xl mobile:hidden" onClick={handleTogle}>
        {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
    </header>
  );
};

export default Header;
