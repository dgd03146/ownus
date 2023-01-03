import Link from 'next/link';
import React from 'react';
import { TbUserCircle } from 'react-icons/tb';
import { BsBag } from 'react-icons/bs';
import { pages } from 'constants/constants';

// TODO: 다이나믹 라우팅, 배열로 돌리기

const Navbar = () => {
  return (
    <nav className="py-5 px-8 flex justify-between items-center w-full font-serif text-primary5">
      <div>
        <Link className="text-3xl font-Cinzel" href={'/'}>
          OWNUS
        </Link>
      </div>
      <ul className="flex gap-20">
        {pages.map((page) => (
          <li key={page.href}>
            <Link className="text-base relative group" href={page.href}>
              {page.title}
              <div className="absolute w-full h-0.5 bg-primary2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-x-6">
        <Link href={'/'}>
          <BsBag className="text-xl cursor-pointer" />
        </Link>
        <Link href={'/'}>
          <TbUserCircle className="text-2xl cursor-pointer" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
