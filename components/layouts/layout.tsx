import Image from 'next/image';
import { PropsWithChildren } from 'react';
import background from '/public/images/background.jpg';
import Header from './header/header';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {} from 'twin.macro';
import Footer from './footer/footer';
import PageTitlte from './pageTitle';

interface LayoutProps extends PropsWithChildren {
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  const { pathname } = useRouter();
  const isHomePage = pathname === '/';

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div tw="h-screen flex relative ">
        <div tw="z-10 w-full h-full absolute flex ">
          <div tw="w-full flex flex-col">
            <header tw="mb-[48px] mobile:mb-[92px]">
              <Header />
            </header>
            {!isHomePage && (
              <div tw="flex-[1]">
                <PageTitlte />
                <main tw="w-[90%] max-w-[1280px] mx-auto my-12 ">{children}</main>
              </div>
            )}
            {!isHomePage && <Footer />}
          </div>
        </div>
        {isHomePage && (
          <Image src={background} alt="background" fill objectFit="cover" objectPosition="top" priority={true} />
        )}
      </div>
      {isHomePage && <Footer />}
    </>
  );
};

export default Layout;

// tw="h-screen flex relative"
