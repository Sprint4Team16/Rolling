import styled from 'styled-components';
import { useState } from 'react';
import Header from '../common/Header';
import WritingForm from './WritingForm';

const FormContainer = styled.div`
  margin-top: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function WritingMessage() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  console.log(buttonDisabled);

  return (
    <div>
      <Header />
      <FormContainer>
        <WritingForm
          isBtnDisabled={(isContent) => setButtonDisabled(isContent)}
        />
      </FormContainer>
    </div>
  );
}

export default WritingMessage;
