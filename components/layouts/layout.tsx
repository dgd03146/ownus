import Image from 'next/image';
import { PropsWithChildren } from 'react';
import background from '/public/images/background.jpg';
import Header from './header';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {} from 'twin.macro';
import Footer from './footer';
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
            <>
              <header tw="mb-[92px]">
                <Header />
              </header>
              {isHomePage && (
                <Image
                  tw="block mobile:hidden"
                  src={background}
                  alt="background"
                  // layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                />
              )}
            </>
            {!isHomePage && <PageTitlte />}
            <main tw="w-[90%] max-w-[1280px] mx-auto my-12 flex-[1]">{children}</main>
            {!isHomePage && <Footer />}
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
