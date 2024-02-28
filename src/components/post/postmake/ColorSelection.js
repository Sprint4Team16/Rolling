import styled from 'styled-components';

function ColorSelection({ color, handleFunction, checkSelected }) {
  return (
    <ColorOption color={color} onClick={handleFunction} selected={checkSelected}>
      {checkSelected && (
        <CheckIcon>
          <img src="img/check.svg" alt="선택" />
        </CheckIcon>
      )}
    </ColorOption>
  );
}

const CheckIcon = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 44px;
  height: 44px;
  padding: 10px;
  border-radius: 100px;
  background: var(--gray500);
  align-items: center;
  justify-content: center;
`;

const ColorOption = styled.div`
  position: relative;
  width: 168px;
  height: 168px;
  background-color: ${(props) => (props.color === 'beige' ? 'var(--orange200)' : `var(--${props.color}200)`)};
  margin: 5px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  cursor: pointer;

  @media (max-width: 768px) {
    width: 154px;
    height: 154px;
    margin: 12px 0;
  }
`;

export default ColorSelection;
