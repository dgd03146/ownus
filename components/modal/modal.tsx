import Backdrop from './backdrop';
import Header from '../layouts/header';
import {} from 'twin.macro';
import Menu from '@components/layouts/header/menu';

type TProps = {
  handleMenuModal: () => void;
};

export default function Modal({ handleMenuModal }: TProps) {
  return (
    <Backdrop handleMenuModal={handleMenuModal}>
      <Menu />
    </Backdrop>
  );
}
