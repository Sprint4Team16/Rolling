import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { Primary56 } from '../../styles/ButtonStyle';

function SubmitButton({ onSubmit, btnDisable, btnName }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isEditRoute = location.pathname.includes('/edit');

  const handleButtonClick = async () => {
    const recipientId = await onSubmit();
    if (isEditRoute) {
      navigate(`/post/${recipientId}/edit`, { replace: true });
    } else {
      navigate(`/post/${recipientId}`, { replace: true });
    }
  };

  return (
    <Button onClick={handleButtonClick} disabled={btnDisable}>
      {btnName}
    </Button>
  );
}

const Button = styled(Primary56)`
  width: 72rem;
  @media (max-width: 76.8rem) {
    min-width: 32rem;
    width: 100%;
  }
`;

export default SubmitButton;
