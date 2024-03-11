import styled from 'styled-components';

const Icon = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 4.4rem;
  height: 4.4rem;
  padding: 1rem;
  border-radius: 10rem;
  background: var(--gray500);
  align-items: center;
  justify-content: center;
`;

function CheckIcon({ imgSrc }) {
  return (
    <Icon>
      <img src={imgSrc} alt="선택" />
    </Icon>
  );
}

export default CheckIcon;
