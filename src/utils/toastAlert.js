import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notification = (type, message) => {
  if (type === 'success') {
    toast.success(message, {
      theme: 'light',
      position: 'top-right',
      autoClose: 3000,
    });
  } else if (type === 'error') {
    toast.error(message, {
      theme: 'light',
      position: 'top-right',
      autoClose: 3000,
    });
  }
};
