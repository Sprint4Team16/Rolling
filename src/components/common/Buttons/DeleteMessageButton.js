import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Outlined36 } from '../../../styles/ButtonStyle';

function DeleteMessageButton({ id, onDelete }) {
  const location = useLocation();
  const isEditRoute = location.pathname.includes('/edit');

  const handleButtonClick = async (e) => {
    e.stopPropagation();
    onDelete(id);
  };

  return (
    <Button onClick={(e) => handleButtonClick(e)} $isDisplay={isEditRoute}>
      <DeleteImg src="/img/deleted.svg" alt="삭제" />
    </Button>
  );
}

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

export default DeleteMessageButton;
