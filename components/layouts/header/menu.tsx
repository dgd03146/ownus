import Link from 'next/link';
import Button from '@components/common/button';
import CartStatus from '@components/cart/cartStatus';
import UserInfo from '@components/user';
import { useAuthContext } from 'context/authContext';
import {} from 'twin.macro';
import { ROUTE } from 'constants/constant';

const Menu = () => {
  const { user, login, logout } = useAuthContext();
  return (
    <div tw="hidden tablet:flex items-center gap-x-12 font-semibold text-[12px] basis-[25%] justify-end">
      {user && (
        <Link className="group" tw="relative transform transition duration-300 hover:scale-110" href={ROUTE.cart}>
          <CartStatus />
        </Link>
      )}
      <Link className="group" tw="relative" href={ROUTE.products}>
        <p>PRODUCTS</p>
        <div tw="absolute w-full h-0.5 bg-primary4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </Link>
      {user && user.isAdmin && (
        <Link className="group" href={ROUTE.new_products} tw="relative ">
          <p>NEW</p>
          <div tw="absolute w-full h-0.5 bg-primary4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </Link>
      )}
      {user && <UserInfo user={user} />}
      {!user && <Button text="LOGIN" onClick={login} />}
      {user && <Button text="LOGOUT" onClick={logout} />}
    </div>
  );
};

export default Menu;
