import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { Primary56 } from '../../../styles/ButtonStyle';

function EditButton() {
  const navigate = useNavigate();
  const { id: recipientID } = useParams();

  return (
    <Button onClick={() => navigate(`/post/${recipientID}/edit`)}>
      수정하기
    </Button>
  );
}

const Button = styled(Primary56)``;

export default EditButton;
