import { toast } from 'react-toastify';

type CustomNotifyProps = {
  message: string;
  type: 'success' | 'error';
};

export const useCustomToast = () => {
  const notify = ({ message, type }: CustomNotifyProps) =>
    toast.info(message, {
      closeButton: true,
      theme: 'colored',
      type: type,
      autoClose: 3000,
      position: 'top-center',
      hideProgressBar: false,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
    });

  return { notify };
};
