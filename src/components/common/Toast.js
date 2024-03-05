import { toast, ToastContainer } from 'react-toastify';

export function notify({ text }) {
  toast.success(text);
}

function Toast() {
  return (
    <ToastContainer
      position="bottom-center"
      limit={1}
      closeButton={false}
      autoClose={5000}
      hideProgressBar
    />
  );
}

export default Toast;
