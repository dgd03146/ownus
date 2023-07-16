import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from 'react';
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import { adminUser, login, logout, onUserStateChange } from '@services/firebase';

interface IUser extends User {
  isAdmin?: boolean;
}

type AuthContextType = {
  user: IUser | null;
  loading: boolean;
  // setUserInfo: Dispatch<SetStateAction<IUser | undefined>>;
  login: typeof login;
  logout: typeof logout;
};

const initialAuthContext: Partial<AuthContextType> = {
  login: login,
  logout: logout,
};

type AuthContextProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<typeof initialAuthContext>(initialAuthContext);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  // const [userInfo, setUserInfo] = useState<IUser>();
  const [authState, setAuthState] = useState<{
    user: IUser | null;
    loading: boolean;
  }>({ user: null, loading: true });

  const { user, loading } = authState;

  useEffect(() => {
    const stopListen = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        adminUser(user).then((user) => setAuthState({ user, loading: false }));
      } else {
        setAuthState({ user: null, loading: false });
      }
    });

    return () => stopListen();
  }, [adminUser, getAuth]);

  return <AuthContext.Provider value={{ user, login, logout, loading }}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}

export default AuthContext;
