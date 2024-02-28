import styled from 'styled-components';
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
  return (
    <div>
      <Header />
      <FormContainer>
        <WritingForm />
      </FormContainer>
      <Button />
    </div>
  );
}

export default WritingMessage;
