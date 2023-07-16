import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillCartPlusFill } from 'react-icons/bs';
import tw from 'twin.macro';
import { useRouter } from 'next/router';
import UserInfo from '@components/user';
import Button from '@components/common/button';
import { useAuthContext } from 'context/authContext';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useRouter();
  const isHomePage = pathname === '/';
  const { user, login, logout } = useAuthContext();

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
        tw`z-[1] fixed py-[30px] px-[60px]  flex items-center w-full justify-between text-primary3`,
        !isHomePage && isScroll && tw`bg-primary1 py-2`,
      ]}
    >
      <div tw="flex basis-[25%] justify-start">
        <Link tw="text-xl mobile:text-2xl font-Cinzel font-semibold hover:text-primary4" href={'/'}>
          OWNUS
        </Link>
      </div>
      <div tw="hidden mobile:flex items-center gap-x-12 font-semibold text-[12px] basis-[25%] justify-end ">
        {user && (
          <Link className="group" tw="relative" href={'/cart'}>
            <p>CART</p>
            <div tw="absolute w-full h-0.5 bg-primary4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </Link>
        )}
        <Link className="group" tw="relative" href={'/products'}>
          <p>PRODUCTS</p>
          <div tw="absolute w-full h-0.5 bg-primary4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </Link>
        {user && user.isAdmin && (
          <Link href={'/products'} tw="hover:text-primary4 text-2xl">
            <BsFillCartPlusFill />
          </Link>
        )}
        {user && <UserInfo user={user} />}
        {!user && <Button text="LOGIN" onClick={login} />}
        {user && <Button text="LOGOUT" onClick={logout} />}
      </div>
      <button tw="block text-2xl mobile:hidden" onClick={handleTogle}>
        {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
    </header>
  );
};

export default Header;
