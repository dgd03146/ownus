import Backdrop from './backdrop';
import {} from 'twin.macro';
import Menu from '@components/layouts/header/menu';

type TProps = {
  handleMenuModal: () => void;
};

export default function Modal({ handleMenuModal }: TProps) {
  return (
    <Backdrop>
      <Menu showMenu={true} handleMenuModal={handleMenuModal} />
    </Backdrop>
  );
}
