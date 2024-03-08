import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { Primary56 } from './ButtonStyle';

function EditMessageButton({ messageID }) {
  const navigate = useNavigate();
  const { id: recipientID } = useParams();

  return (
    <Button onClick={() => navigate(`/post/${recipientID}/edit/${messageID}`)}>
      메세지 수정하기
    </Button>
  );
}

const Button = styled(Primary56)`
  position: absolute;
  top: 3.3rem;
  right: 3.6rem;
`;

export default EditMessageButton;
