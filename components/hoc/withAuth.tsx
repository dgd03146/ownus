import { ComponentType, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from 'context/authContext';

import {} from 'twin.macro';

const WithAuth = (WrappedComponent: ComponentType<PropsWithChildren>, requireAdmin?: boolean) => {
  const AuthenticatedComponent = (props: PropsWithChildren) => {
    const router = useRouter();
    const { loading, user } = useAuthContext();

    console.log(user, 'withAuth 안 user');

    if (loading) {
      return (
        <div tw="flex justify-center items-center mt-32 ">
          <p tw="te">Loading...</p>
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
