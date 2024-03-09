import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Primary56 } from '../../../styles/ButtonStyle';
import { DISPLAY_SIZE } from '../../../constants/DISPLAY_SIZE';

function BackToPostButton({ moveLink, btnName }) {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate(moveLink);
  };

  return <Button onClick={handleClickButton}>{btnName}</Button>;
}
const Button = styled(Primary56)`
  margin: 2.4rem 2.4rem;
  cursor: pointer;

  @media (max-width: ${DISPLAY_SIZE.MAX_TABLET}px) {
    width: 100%;
  }
`;
export default BackToPostButton;
