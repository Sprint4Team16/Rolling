import styled from 'styled-components';
import { useState, useEffect } from 'react';
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
  const [isNameEntered, setIsNameEntered] = useState(false);
  const [isContentEntered, setIsContentEntered] = useState(false);
  const [btnDisable, setBtnDisable] = useState(true);

  const handleNameChange = (e) => {
    setIsNameEntered(e.target.value.trim() !== '');
  };

  const handleContentChange = (contentEntered) => {
    setIsContentEntered(contentEntered);
  };

  const handleFormSubmit = (formData) => {
    console.log('제출 완료', formData);
  };

  const handleButtonClick = () => {
    setBtnDisable(true);
    document.getElementById('writingForm').submit();
  };

  useEffect(() => {
    setBtnDisable(!(isNameEntered && isContentEntered));
  }, [isNameEntered, isContentEntered]);

  return (
    <div>
      <Header />
      <FormContainer>
        <WritingForm
          onNameChange={handleNameChange}
          onContentChange={handleContentChange}
          onSubmit={handleFormSubmit}
          id="writingForm"
        />
      </FormContainer>
      <Button onclick={handleButtonClick} disabled={btnDisable} />
    </div>
  );
}

export default WritingMessage;
