import Link from 'next/link';
import React from 'react';
import tw from 'twin.macro';
const SignHeader = () => {
  return (
    <header tw="py-8 flex justify-between items-center w-full text-primary5">
      <Link tw="text-4xl font-Cinzel" href={'/'}>
        OWNUS
      </Link>
    </header>
  );
};

export default SignHeader;
