import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Layout from '@components/layout/layout';
import { useApi } from 'context/apiContext';
import { AuthService } from '@services/authService';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // FIXME:그냥 써봄 이런식으로 써야함!
  const { productService } = useApi();
  productService.getAllProducts();
  // TODO: 이런식으로?
  // authService.singin()
}
