import Image from 'next/image';
import { PropsWithChildren } from 'react';
import background from '/public/images/background.jpg';
import Header from './header';
import Head from 'next/head';
import { useRouter } from 'next/router';
import tw from 'twin.macro';
import Footer from './footer';
// import SideBar from './sidebar';

interface LayoutProps extends PropsWithChildren {
  title: string;
}

// TODO: children 안 쓸거면 수정

const Layout = ({ children, title }: LayoutProps) => {
  const { pathname } = useRouter();
  const isHomePage = pathname === '/';
  const isAuthPage = pathname.startsWith('/auth');
  const isProductPage = pathname.startsWith('/products');
  return (
    <>
      {/* TODO: title 각 페이지마다 동적으로 할 수 있게 수정해야할듯? */}
      <Head>
        <title>{title}</title>
      </Head>
      <div tw="h-screen flex relative ">
        <div tw="z-10 w-full h-full absolute flex ">
          <div tw="w-full flex flex-col">
            {!isAuthPage && (
              <>
                <header tw="mb-[92px]">
                  <Header />
                </header>
                <Image
                  tw="block mobile:hidden"
                  src={background}
                  alt="background"
                  // layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                />
              </>
            )}
            <main tw="w-[90%] max-w-[1280px] mx-auto my-12 flex-[1]">{children}</main>
            {!isAuthPage && !isHomePage && <Footer />}
          </div>
        </div>
        {isHomePage && (
          <Image
            tw="hidden mobile:block"
            src={background}
            alt="background"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        )}
      </div>
      {isHomePage && <Footer />}
    </>
  );
};

export default Layout;

// tw="h-screen flex relative"
