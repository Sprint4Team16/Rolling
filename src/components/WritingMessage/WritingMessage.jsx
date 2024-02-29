import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../common/Header';
import WritingForm from './WritingForm';
import Button from './Button';

const FormContainer = styled.div`
  margin-top: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function WritingMessage() {
  const navigate = useNavigate();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const handleButtonDisabledChange = (disabled) => {
    setButtonDisabled(disabled);
  };

  console.log(buttonDisabled);
  console.log(!!handleButtonDisabledChange);

  return (
    <div>
      <Header />
      <FormContainer>
        <WritingForm isBtnDisabled={handleButtonDisabledChange} />
      </FormContainer>
      <Button onClick={() => navigate('/post')} disabled={buttonDisabled} />
    </div>
  );
}

export default WritingMessage;
