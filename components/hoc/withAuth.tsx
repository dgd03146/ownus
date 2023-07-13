// import { useUser } from 'queries/hooks/auth/useUser';
import { ComponentType, useEffect } from 'react';
import { useRouter } from 'next/router';

const WithAuth = (WrappedComponent: ComponentType) => {
  // FIXME: useRouter 못쓰는건가?
  // const router = useRouter();

  const HOC = () => {
    // 유저가 없으면 로그인 페이지로 이동 로그인이 필요한 페이지만 적용 ex) 상품 구매? 페이지?

    // FIXME: 서버 페이지 연결하고 주석 풀기
    // useEffect(() => {
    //   const { user } = useUser();
    //   if (!user) {
    //     // FIXME: Alert 대신 Toast 띄어주기!
    //     alert('로그인이 필요합니다!');
    //     router.push('/login');
    //   } else {
    //     // FIXME: Alert 대신 Toast 띄어주기!
    //     alert('로그인이 되어있습니다!');
    //     router.push('/');
    //   }
    // }, []);

    return <WrappedComponent />;
  };

  return HOC;
};

export default WithAuth;
