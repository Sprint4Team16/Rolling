import styled from 'styled-components';
import { bold24, regular12, regular16 } from '../../../styles/fontStyle';
import { DISPLAY_SIZE } from '../../../constants/SIZE_SET';

function PostInputSection({ user, handleInput, handleBlur, inputError }) {
  return (
    <InputSection>
      <InputTitle>To.</InputTitle>
      <Input
        placeholder="받는 사람 이름을 입력해 주세요"
        value={user}
        onChange={handleInput}
        onBlur={handleBlur}
        error={inputError}
      />
      {inputError && <ErrorMessage>값을 입력해 주세요.</ErrorMessage>}
    </InputSection>
  );
}

const InputSection = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  gap: 1.2rem;
`;

const InputTitle = styled.p`
  color: var(--gray900);
  ${bold24}
`;

const Input = styled.input`
  display: flex;
  width: 72rem;
  padding: 1.2rem 1.6rem;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--gray300);
  border: ${(props) => props.error && '2px solid var(--error)'};
  background: var(--white);

  &::placeholder {
    color: var(--gray500);
    ${regular16}
  }

  @media (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    width: 32rem;
  }
`;

const ErrorMessage = styled.p`
  position: absolute;
  top: calc(100% + 5px);
  left: calc(2%);
  color: var(--error);
  ${regular12}
`;

export default PostInputSection;
