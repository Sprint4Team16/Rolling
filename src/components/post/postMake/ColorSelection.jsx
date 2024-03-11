import styled from 'styled-components';
import CheckIcon from '../../common/CheckIcon';
import { DISPLAY_SIZE } from '../../../constants/SIZE_SET';

const ColorOption = styled.div`
  position: relative;
  width: 16.8rem;
  height: 16.8rem;
  background-color: ${(props) =>
    props.color === 'beige' ? 'var(--orange200)' : `var(--${props.color}200)`};
  margin: 0.5rem;
  border-radius: 1.6rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.4s ease-out;
  &:hover {
    transform: translateY(-1.2rem);
  }
  @media (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    width: 15.4rem;
    height: 15.4rem;
    margin: 1.2rem 0;
  }
`;

function ColorSelection({ color, handleFunction, checkSelected }) {
  return (
    <ColorOption
      color={color}
      onClick={handleFunction}
      selected={checkSelected}
    >
      {checkSelected && <CheckIcon imgSrc="/img/check.svg" />}
    </ColorOption>
  );
}

export default ColorSelection;
