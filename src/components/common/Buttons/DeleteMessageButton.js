import styled from 'styled-components';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import { deleteMessages } from '../../../api/DeleteApi';

function DeleteMessageButton() {
  const navigate = useNavigate();
  const { id: recipientID } = useParams();
  const location = useLocation();
  const isEditRoute = location.pathname.includes('/edit');

  // temp messageID(parameter로 messageID를 받으면 해당 공간에 messageID 넣기)
  // const handleButtonClick = async () => {
  //   await deleteMessages(1);
  //   navigate(`/post/${recipientID}/edit`);
  // };

  const handleButtonClick = () => {
    navigate(`/post/${recipientID}`);
  };

  return (
    <Button onClick={handleButtonClick} $isDisplay={isEditRoute}>
      <DeleteImg src="/img/deleted.svg" alt="삭제" />
    </Button>
  );
}

const Button = styled.button`
  position: absolute;
  right: 24px;
  display: ${({ $isDisplay }) => ($isDisplay ? 'block' : 'none')};
  /* display: flex; */
  padding: 6px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: var(--white);
  border-radius: 6px;
  border: 1px solid var(--gray300);

  &:hover {
    background: var(--gray300);
  }

  &:active {
    background: var(--gray100);
  }

  &:focus {
    border: 1px solid var(--gray500);
  }
`;

const DeleteImg = styled.img`
  width: 24px;
  height: 24px;
`;

export default DeleteMessageButton;
