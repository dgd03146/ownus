import { useUser } from 'queries/hooks/useUser';
import { ComponentType, useEffect } from 'react';
import { useRouter } from 'next/router';

const WithAuth = (WrappedComponent: ComponentType) => {
  const router = useRouter();

  const HOC = () => {
    // 유저가 없으면 로그인 페이지로 이동 로그인이 필요한 페이지만 적용 ex) 상품 구매? 페이지?

    useEffect(() => {
      const { user } = useUser();
      if (!user) {
        // FIXME: Alert 대신 Toast 띄어주기!
        alert('로그인이 필요합니다!');
        router.push('/login');
      } else {
        // FIXME: Alert 대신 Toast 띄어주기!
        alert('로그인이 되어있습니다!');
        router.push('/');
      }
    }, []);

    return <WrappedComponent />;
  };

  return HOC;
};

export default WithAuth;
