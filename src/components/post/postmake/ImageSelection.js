import styled from 'styled-components';

function ImageSelection({ image, handleFunction, checkSelected }) {
  return (
    <ImageOption
      image={image}
      onClick={handleFunction}
      selected={checkSelected}
    >
      {checkSelected && (
        <CheckIcon>
          <img src="img/check.svg" alt="선택" />
        </CheckIcon>
      )}
    </ImageOption>
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

const ImageOption = styled.div`
  position: relative;
  background: url(${(props) => props.image}) lightgray 50% / cover no-repeat;
  opacity: ${(props) => (props.selected ? '0.5' : '1')};
  width: 168px;
  height: 168px;
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

export default ImageSelection;
