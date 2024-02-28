import styled from 'styled-components';
import CheckIcon from '../../common/CheckIcon';

function ImageSelection({ image, handleFunction, checkSelected }) {
  return (
    <ImageOption image={image} onClick={handleFunction} selected={checkSelected}>
      {checkSelected && <CheckIcon imgSrc="img/check.svg" />}
    </ImageOption>
  );
}

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
