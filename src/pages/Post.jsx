import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import SelectSection from '../components/post/postMake/SelectSection';
import PostInputSection from '../components/post/postMake/PostInputSection';
import ColorSelection from '../components/post/postMake/ColorSelection';
import ImageSelection from '../components/post/postMake/ImageSelection';
import ToggleButton from '../components/post/postMake/ToggleButton';
import SubmitButton from '../components/button/SubmitButton';
import { getBackground } from '../api/GetApi';
import { submitRollingPost } from '../api/PostApi';
import { DISPLAY_SIZE } from '../constants/SIZE_SET';
import { COLOR_LIST } from '../constants/OPTION_SET';

function Post() {
  const [isColor, setIsColor] = useState(true);
  const [selectColor, setSelectColor] = useState(COLOR_LIST[0]);
  const [background, setBackground] = useState([]);
  const [selectImage, setSelectImage] = useState(null);
  const [inputUser, setInputUser] = useState('');
  const [inputError, setInputError] = useState(null);
  const [btnDisable, setBtnDisable] = useState(true);

  useEffect(() => {
    const handleImageLoad = async () => {
      try {
        const response = await getBackground();
        const result = response.imageUrls;
        setBackground(result);
      } catch (error) {
        throw new Error('이미지를 불러오지 못했습니다.', error);
      }
    };
    handleImageLoad();
  }, []);

  const handleInput = (e) => {
    const { value } = e.target;
    setInputUser(value);
    setBtnDisable(value.trim() === '');
    setInputError(value.trim() === '');
  };

  const handleBlur = () => {
    setInputError(inputUser.trim() === '');
  };

  const toggleHandler = () => {
    setIsColor(!isColor);
    if (isColor) {
      setSelectImage(background[0]);
      setSelectColor(null);
    } else {
      setSelectColor('beige');
      setSelectImage(null);
    }
  };

  const handleColorChange = (color) => {
    setSelectColor(color);
    setSelectImage(null);
  };

  const handleImageChange = (image) => {
    setSelectImage(image);
    setSelectColor(null);
  };

  return (
    <PostPage>
      <Header />
      <PostSection>
        <PostInputSection
          user={inputUser}
          handleInput={handleInput}
          handleBlur={handleBlur}
          inputError={inputError}
        />
        <SelectSection />
        <ToggleButton
          state={isColor}
          handler={toggleHandler}
          text1="컬러"
          text2="이미지"
        />
        {isColor ? (
          <Select>
            {COLOR_LIST.map((color, index) => (
              <ColorSelection
                key={`${color}${index + 1}`}
                color={color}
                handleFunction={() => handleColorChange(color)}
                checkSelected={selectColor === color}
              />
            ))}
          </Select>
        ) : (
          <Select>
            {background.map((image, index) => (
              <ImageSelection
                key={`${image}${index + 1}`}
                image={image}
                handleFunction={() => handleImageChange(image)}
                checkSelected={selectImage === image}
              />
            ))}
          </Select>
        )}
        <SubmitButton
          onSubmit={async () => {
            const data = {
              name: inputUser,
              backgroundColor: `${selectColor === null ? 'beige' : selectColor}`,
              backgroundImageURL: selectImage,
            };
            const response = await submitRollingPost(data);
            return response.id;
          }}
          btnDisable={btnDisable}
          btnName="생성하기"
        />
      </PostSection>
    </PostPage>
  );
}

const PostPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  background: var(--white);
  margin: 5.7rem auto;
  width: 72rem;
  text-align: left;

  @media (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    width: 32rem;
  }
`;

const Select = styled.div`
  width: 72rem;
  display: flex;
  justify-content: space-between;
  margin-top: 4.5rem;
  margin-bottom: 4.5rem;
  flex-wrap: wrap;
  flex-direction: row;
  flex-shrink: 0;

  @media (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    width: 32rem;
  }
`;

export default Post;
