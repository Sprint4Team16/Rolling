import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Primary56 } from '../../styles/ButtonStyle';

function PutPatchButton({ onSubmit, btnDisable }) {
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    const recipientId = await onSubmit();
    navigate(`/post/${recipientId}/edit`, { replace: true });
  };

  return (
    <Button onClick={handleButtonClick} disabled={btnDisable}>
      수정하기
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

export default PutPatchButton;
