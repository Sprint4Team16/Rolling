import styled from 'styled-components';
import { useState } from 'react';
import Header from '../common/Header';
import EditForm from './EditForm';

const FormContainer = styled.div`
  margin-top: 4.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function EditMessage() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  console.log(buttonDisabled);

  return (
    <div>
      <Header />
      <FormContainer>
        <EditForm isBtnDisabled={(isContent) => setButtonDisabled(isContent)} />
      </FormContainer>
    </div>
  );
}

export default EditMessage;
