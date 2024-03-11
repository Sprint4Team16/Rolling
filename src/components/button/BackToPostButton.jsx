import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Primary56 } from '../../styles/ButtonStyle';

const Button = styled(Primary56)`
  margin-right: 1.5rem;
  cursor: pointer;
`;

function BackToPostButton({ moveLink, btnName }) {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate(moveLink);
  };

  return <Button onClick={handleClickButton}>{btnName}</Button>;
}

export default BackToPostButton;
