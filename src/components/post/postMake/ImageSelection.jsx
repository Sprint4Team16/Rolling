import styled from 'styled-components';
import CheckIcon from '../../common/CheckIcon';
import { DISPLAY_SIZE } from '../../../constants/SIZE_SET';

const ImageOption = styled.div`
  position: relative;
  width: 16.8rem;
  height: 16.8rem;
  margin: 0.5rem;
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

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1.6rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.08);
  background: url(${(props) => props.image}) lightgray 50% / cover no-repeat;
  opacity: ${(props) => (props.selected ? '0.5' : '1')};

  > img {
    border-radius: 1.6rem;
  }
`;

function ImageSelection({ image, handleFunction, checkSelected }) {
  return (
    <ImageOption onClick={handleFunction} selected={checkSelected}>
      <ImageWrapper selected={checkSelected}>
        <img
          src={image}
          alt="배경화면 이미지"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </ImageWrapper>
      {checkSelected && <CheckIcon imgSrc="/img/check.svg" />}
    </ImageOption>
  );
}

export default ImageSelection;
