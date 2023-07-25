import { useRouter } from 'next/router';
import React from 'react';
import {} from 'twin.macro';
import { getLastPath } from 'utils/getLastPath';

const PageTitlte = () => {
  const router = useRouter();
  const title = getLastPath(router.asPath);

  return (
    <div tw="py-8 bg-primary1 text-primary3 px-[60px] font-Cinzel flex justify-center">
      <p tw="font-semibold">{title}</p>
    </div>
  );
};

export default PageTitlte;
