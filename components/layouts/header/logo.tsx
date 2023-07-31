import Link from 'next/link';
import {} from 'twin.macro';

const Logo = () => (
  <div tw="flex basis-[25%] justify-start ">
    <Link tw="text-xl tablet:text-2xl font-Cinzel font-semibold hover:text-primary4" href={'/'}>
      OWNUS
    </Link>
  </div>
);

export default Logo;
