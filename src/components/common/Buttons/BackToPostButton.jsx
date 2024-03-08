import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Primary56 } from './ButtonStyle';

function BackToPostButton({ moveLink, btnName }) {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate(moveLink);
  };

  return <Button onClick={handleClickButton}>{btnName}</Button>;
}
const Button = styled(Primary56)`
  margin: 24px 24px;
  cursor: pointer;

  @media (max-width: 1248px) {
    width: 100%;
  }
`;
export default BackToPostButton;
