import Image from 'next/image';
import { PropsWithChildren } from 'react';
import background from '/public/images/background.jpg';
import Navbar from './navbar';
import Head from 'next/head';
import { useRouter } from 'next/router';
// import SideBar from './sidebar';

interface LayoutProps extends PropsWithChildren {
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="h-screen flex relative">
        <div className="z-10 w-full h-full absolute flex">
          <div className="w-full">
            <header>
              <Navbar />
            </header>
            <main>{children}</main>
          </div>
        </div>
        {isHome && (
          <Image
            src={background}
            alt="background"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        )}
      </div>
    </>
  );
};

export default Layout;
