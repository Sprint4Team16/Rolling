import { toast, ToastContainer } from 'react-toastify';

export function notify() {
  toast.success('URL이 복사되었습니다.');
}

function Toast() {
  return (
    <ToastContainer
      position="bottom-center"
      limit={1}
      closeButton={false}
      autoClose={5000}
      hideProgressBar="true"
    />
  );
}

export default Toast;
