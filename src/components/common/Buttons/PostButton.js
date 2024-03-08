import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Primary56 } from './ButtonStyle';

function PostButton({ onSubmit, btnDisable }) {
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    const recipientId = await onSubmit();
    navigate(`/post/${recipientId}`, { replace: true });
  };

  return (
    <Button onClick={handleButtonClick} disabled={btnDisable}>
      생성하기
    </Button>
  );
}

const Button = styled(Primary56)`
  width: 72rem;
  @media (max-width: 768px) {
    min-width: 32rem;
    width: 100%;
  }
`;

export default PostButton;
