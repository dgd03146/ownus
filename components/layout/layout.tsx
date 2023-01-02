import { PropsWithChildren } from 'react';
import Footer from './footer';
import Header from './header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
