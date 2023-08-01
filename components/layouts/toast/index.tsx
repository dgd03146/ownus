import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './style';

interface ToastProps {
  type: TToastType;
  message?: string;
  action?: string;
}

export enum TToastType {
  success,
  error,
  info,
  warn,
}

const toastOptions: ToastOptions = {
  position: 'bottom-center',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  pauseOnFocusLoss: true,
  closeButton: false,
};

export function showToast({ type, message }: ToastProps) {
  switch (type) {
    case TToastType.success:
      toast.success(message, {
        ...toastOptions,
      });
      break;
    case TToastType.error:
      toast.error(message, {
        ...toastOptions,
      });
    case TToastType.info:
      toast.error(message, {
        ...toastOptions,
      });
      break;
    default:
  }
}

const Toast = () => {
  return <Container />;
};

export default Toast;
