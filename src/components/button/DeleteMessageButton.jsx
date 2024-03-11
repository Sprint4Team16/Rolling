import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Outlined36 } from '../../styles/ButtonStyle';

const Button = styled(Outlined36)`
  position: absolute;
  right: 2.4rem;
  display: ${({ $isDisplay }) => ($isDisplay ? 'block' : 'none')};
  padding: 0.6rem;
  line-height: 0;
`;

const DeleteImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

function DeleteMessageButton({ id: messageId, onDelete }) {
  const location = useLocation();
  const isEditRoute = location.pathname.includes('/edit');

  const handleButtonClick = async (e) => {
    e.stopPropagation();
    await onDelete(messageId);
  };

  return (
    <Button onClick={handleButtonClick} $isDisplay={isEditRoute}>
      <DeleteImg src="/img/deleted.svg" alt="메세지 삭제" />
    </Button>
  );
}

export default DeleteMessageButton;
