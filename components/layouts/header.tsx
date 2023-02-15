import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { TbUserCircle } from 'react-icons/tb';
import { BsBag } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { Pages } from '@lib/constants/constant';
import tw, { css } from 'twin.macro';
import { useRouter } from 'next/router';

// TODO: 다이나믹 라우팅, 배열로 돌리기

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useRouter();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTogle = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header
      css={[
        tw`z-1 fixed py-[30px] px-[60px] flex items-center w-full text-primary3`,
        !isHomePage && isScroll && tw`bg-primary1 py-2`
      ]}
    >
      <div tw="flex basis-[25%] justify-start">
        <Link
          tw="text-xl mobile:text-2xl font-Cinzel font-semibold hover:text-primary4"
          href={'/'}
        >
          OWNUS
        </Link>
      </div>
      <ul
        css={[
          tw`mobile:flex gap-20 absolute mobile:static top-[56px] bg-white1 mobile:bg-opacity-0 w-full mobile:w-auto left-0 px-8 mobile:px-0 py-4 mobile:py-0 justify-center basis-[50%] `,
          !showMenu && tw`hidden`
        ]}
      >
        {Pages.map((page) => (
          <li
            tw="flex justify-between py-2 mobile:py-0 hover:text-primary4"
            key={page.href}
          >
            <Link
              className="group"
              tw="relative font-bold text-[12px]"
              href={page.href}
            >
              {page.title}
              {/* <div tw="absolute w-full h-0.5 bg-primary4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" /> */}
            </Link>
            <div>
              <IoIosArrowForward tw="text-2xl block mobile:hidden" />
            </div>
          </li>
        ))}
      </ul>
      <div tw="hidden mobile:flex items-center gap-x-12 font-semibold text-[12px] basis-[25%] justify-end ">
        <Link href={'/'} tw="hover:text-primary4">
          <p>CART</p>
        </Link>
        <Link href={'/'} tw="hover:text-primary4">
          <p>MY PAGE</p>
        </Link>
        <Link href={'/'} tw="hover:text-primary4">
          <p>JOIN</p>
        </Link>
      </div>
      <button tw="block text-2xl mobile:hidden" onClick={handleTogle}>
        {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
    </header>
  );
};

export default Header;
