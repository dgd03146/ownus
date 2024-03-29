import { ComponentType, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from 'context/authContext';
import {} from 'twin.macro';
import Loading from '@components/layouts/loading';

const WithAuth = (WrappedComponent: ComponentType<PropsWithChildren>, requireAdmin?: boolean) => {
  const AuthenticatedComponent = (props: PropsWithChildren) => {
    const router = useRouter();
    const { loading, user } = useAuthContext();

    if (loading) {
      return (
        <div tw="flex justify-center items-center mt-32 ">
          <Loading />
        </div>
      );
    }

    if ((requireAdmin && !user?.isAdmin) || !user) {
      if (typeof window !== 'undefined') {
        router.push('/');
      }
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default WithAuth;
