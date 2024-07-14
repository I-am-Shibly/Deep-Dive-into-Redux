import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const toastAlert = (type, value) => {
  if (type === 'success') {
    toast.success(value, {
      theme: 'dark',
      position: 'top-right',
      autoClose: 2000,
    });
  } else if (type === 'error') {
    toast.error(value, {
      theme: 'dark',
      position: 'top-right',
      autoClose: 3000,
    });
  }
};
