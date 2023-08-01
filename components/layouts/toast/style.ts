import { ToastContainer } from 'react-toastify';
import tw, { styled } from 'twin.macro';

export const Container = styled(ToastContainer)`
  .Toastify__toast {
    font-size: 16px;
    border-radius: 50px;
    padding: 16px 28px;
    color: #fff;
    background: rgba(107, 115, 135, 0.8);
  }

  .Toastify__toast-icon {
    width: 22px;
    height: 22px;
  }

  .Toastify__toast--info {
    background: rgba(107, 115, 135, 0.8);
  }

  .Toastify__toast--success {
    ${tw`bg-primary2`}
  }

  .Toastify__toast--error {
    ${tw`bg-red`}/* background: rgba(224, 72, 82, 0.8); */
  }
`;
