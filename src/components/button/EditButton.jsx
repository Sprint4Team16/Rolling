import styled from 'styled-components';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Primary56 } from '../../styles/ButtonStyle';

function TempEditButton({ messageId }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { id: recipientID } = useParams();
  const isEditRoute = location.pathname.includes('/edit');

  if (isEditRoute) {
    return (
      <ButtonAbsolute
        onClick={() => navigate(`/post/${recipientID}/edit/${messageId}`)}
      >
        메세지 수정하기
      </ButtonAbsolute>
    );
  }

  return (
    <Button onClick={() => navigate(`/post/${recipientID}/edit`)}>
      수정하기
    </Button>
  );
}

const Button = styled(Primary56)``;

const ButtonAbsolute = styled(Button)`
  position: absolute;
  top: 3.3rem;
  right: 3.6rem;
`;

export default TempEditButton;
