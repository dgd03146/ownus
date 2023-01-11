import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';

import { useApi } from 'context/apiContext';

import background from '/public/images/background.jpg';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // FIXME:그냥 써봄 이런식으로 써야함!
  const { productService } = useApi();
  const { authService } = useApi();

  authService.singin('email', '비번');
}
