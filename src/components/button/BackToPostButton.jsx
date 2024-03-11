import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Primary56 } from '../../styles/ButtonStyle';

function BackToPostButton({ moveLink, btnName }) {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate(moveLink);
  };

  return <Button onClick={handleClickButton}>{btnName}</Button>;
}
const Button = styled(Primary56)`
  margin: 0 1.5rem;
  cursor: pointer;
`;
export default BackToPostButton;
