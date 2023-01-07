import Link from 'next/link';
import React from 'react';

const LoginHeader = () => {
  return (
    <header className="py-8 flex justify-between items-center w-full font-serif text-primary5">
      <Link className="text-4xl font-Cinzel" href={'/'}>
        OWNUS
      </Link>
    </header>
  );
};

export default LoginHeader;
