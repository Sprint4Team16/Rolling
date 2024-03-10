import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { Outlined36 } from '../../../styles/ButtonStyle';

function DeleteMessageButton({ id, onDelete }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isEditRoute = location.pathname.includes('/edit');

  const handleButtonClick = async (e) => {
    e.stopPropagation();
    await onDelete(id);
    // navigate('/post/4210/edit');
    navigate(0);
  };

  return (
    <Button onClick={handleButtonClick} $isDisplay={isEditRoute}>
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
