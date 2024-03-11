import styled from 'styled-components';
import { useState } from 'react';
import Header from '../common/Header';
import WritingForm from './WritingForm';

const FormContainer = styled.div`
  margin-top: 4.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function WritingMessage() {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  return (
    <div>
      <Header />
      <FormContainer>
        <WritingForm
          isBtnDisabled={(isContent) => setButtonDisabled(isContent)}
          disabled={buttonDisabled}
        />
      </FormContainer>
    </div>
  );
}

export default WritingMessage;
