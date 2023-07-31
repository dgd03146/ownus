import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import tw from 'twin.macro';
import { useRouter } from 'next/router';
import Modal from '../../modal/modal';
import { createPortal } from 'react-dom';
import Menu from '@components/layouts/header/menu';
import Logo from './logo';
import useScrollHeader from 'hooks/useScrollHeader';
import useModal from 'hooks/useModal';

const Header = () => {
  const { isScroll } = useScrollHeader();
  const { portalElement, showMenu, handleMenuModal } = useModal();
  const { pathname } = useRouter();
  const isHomePage = pathname === '/';

  return (
    <header
      css={[
        tw`z-[1] fixed py-[10px] mobile:py-[30px] px-[60px]  flex items-center w-full justify-between text-primary3 `,
        !isHomePage && isScroll && tw`bg-primary1 py-2`,
      ]}
    >
      <Logo />
      <Menu />
      <div tw="block tablet:hidden">
        <button tw=" text-2xl " onClick={handleMenuModal}>
          {!showMenu && <AiOutlineMenu />}
          {showMenu && portalElement ? createPortal(<Modal handleMenuModal={handleMenuModal} />, portalElement) : null}
        </button>
      </div>
    </header>
  );
};

export default Header;
