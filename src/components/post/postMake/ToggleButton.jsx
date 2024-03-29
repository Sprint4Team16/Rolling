import styled from 'styled-components';
import { Secondary } from '../../../styles/ButtonStyle';
import { bold16, regular16 } from '../../../styles/FontStyle';

const SelectToggle = styled.div`
  display: inline-flex;
  align-items: flex-start;
  margin-top: 2.4rem;
`;

const BtnCommon = styled(Secondary)`
  display: flex;
  width: 12.2rem;
  height: 4rem;
  padding: 0.7rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const OnButton = styled(BtnCommon)`
  border-radius: 6px;
  border: 0.2rem solid var(--purple600);
  background: var(--white);

  color: var(--purple700);
  text-align: center;
  ${bold16}
  cursor: default;
`;

const OffButton = styled(BtnCommon)`
  border-radius: 0.6rem;
  background: var(--gray100);

  color: var(--gray900);
  text-align: center;
  ${regular16}
`;

function ToggleButton({ state, handler, text1, text2 }) {
  return state ? (
    <SelectToggle onClick={handler}>
      <OnButton disabled>{text1}</OnButton>
      <OffButton>{text2}</OffButton>
    </SelectToggle>
  ) : (
    <SelectToggle onClick={handler}>
      <OffButton>{text1}</OffButton>
      <OnButton disabled>{text2}</OnButton>
    </SelectToggle>
  );
}

export default ToggleButton;
