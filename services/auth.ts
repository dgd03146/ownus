import { User, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { auth, database, provider } from './firebase';
import { ApiError } from 'next/dist/server/api-utils';
import { TToastType, showToast } from '@components/layouts/toast';
import { get, ref } from 'firebase/database';

export function login() {
  signInWithPopup(auth, provider).catch((error: ApiError) => {
    showToast({ type: TToastType.error, message: 'Failed to Login' || error.message });
  });
}

export async function logout() {
  return signOut(auth).catch(() => {
    signInWithPopup(auth, provider).catch((error: ApiError) => {
      showToast({ type: TToastType.error, message: 'Failed to Logout' || error.message });
    });
  });
}

export async function adminUser(user: User) {
  return get(ref(database, 'admins')) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    })
    .catch(() => {
      throw new Error('Error occurred while checking admin status for user');
    });
}
