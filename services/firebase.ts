// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { User } from 'firebase/auth';
import { getDatabase, ref, get, set, remove } from 'firebase/database';
import { TProduct, TProducts } from 'types/products';
import { v4 as uuid } from 'uuid';

// TODO: 서비스 분리하기

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const database = getDatabase(app);

export function login() {
  signInWithPopup(auth, provider).catch((error) => {
    console.error(error);
  });
}

export async function logout() {
  return signOut(auth).catch((error) => {
    console.error(error);
  });
}

export function onUserStateChange(callback: Function) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
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
    });
}

export async function addNewProduct(product: TProduct, image: string) {
  const id = uuid();
  return set(ref(database, `products/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    image,
  });
}

export async function getProducts(): Promise<TProducts> {
  return get(ref(database, 'products')).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values<TProduct>(snapshot.val());
    }
    return [];
  });
}

export async function getProduct(id: string): Promise<TProduct> {
  return get(ref(database, `products/${id}`)).then((snapshot) => {
    if (snapshot.exists()) {
      return snapshot.val();
    }
    return {};
  });
}

export async function getCart(userId: string): Promise<TProducts> {
  return get(ref(database, `carts/${userId}`)) //
    .then((snapshot) => {
      const items = snapshot.val() || {};
      return Object.values(items);
    });
}

export async function addOrUpdateToCart(userId: string, product: TProduct) {
  return set(ref(database, `carts/${userId}/${product.id}`), product);
}

export async function removeFromCart(userId: string, productId: string) {
  return remove(ref(database, `carts/${userId}/${productId}`));
}
