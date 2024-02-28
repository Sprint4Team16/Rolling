import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import SelectSection from '../components/post/postmake/SelectSection';
import PostButton from '../components/post/postmake/PostButton';
import PostInputSection from '../components/post/postmake/PostInputSection';
import ColorSelection from '../components/post/postmake/ColorSelection';
import ImageSelection from '../components/post/postmake/ImageSelection';

async function getAPI(query) {
  const response = await fetch(`https://rolling-api.vercel.app${query}`);
  const body = await response.json();

  return body;
}

const colorList = ['beige', 'purple', 'blue', 'green'];

function Post() {
  const [isColor, setIsColor] = useState(true);
  const [selectColor, setSelectColor] = useState(null);
  const [background, setBackground] = useState([]);
  const [selectImage, setSelectImage] = useState(null);
  const [inputUser, setInputUser] = useState('');
  const [inputError, setInputError] = useState(null);
  const [btnDisable, setBtnDisable] = useState(true);

  const handleImageLoad = async () => {
    try {
      const response = await getAPI('/background-images/');
      const result = response.imageUrls;
      setBackground(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
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
        <SelectToggle onClick={toggleHandler}>
          {isColor ? (
            <>
              <OnButton>컬러</OnButton>
              <OffButton>이미지</OffButton>
            </>
          ) : (
            <>
              <OffButton>컬러</OffButton>
              <OnButton>이미지</OnButton>
            </>
          )}
        </SelectToggle>
        {isColor ? (
          <Select>
            {colorList.map((color) => (
              <ColorSelection
                color={color}
                handleFunction={() => handleColorChange(color)}
                checkSelected={selectColor === color}
              />
            ))}
          </Select>
        ) : (
          <Select>
            {background.map((image) => (
              <ImageSelection
                image={image}
                handleFunction={() => handleImageChange(image)}
                checkSelected={selectImage === image}
              />
            ))}
          </Select>
        )}
        <PostButton btnDisable={btnDisable} />
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
  margin: 57px auto;
  width: 720px;
  text-align: left;

  @media (max-width: 768px) {
    width: 320px;
  }
`;

const SelectToggle = styled.div`
  display: inline-flex;
  align-items: flex-start;
  margin-top: 24px;
`;

const BtnCommon = styled.button`
  display: flex;
  width: 122px;
  height: 40px;
  padding: 7px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const OnButton = styled(BtnCommon)`
  border-radius: 6px;
  border: 2px solid var(--purple600);
  background: var(--white, #fff);

  color: var(--purple700);
  text-align: center;
  /* Font/16 Bold */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.16px;
`;

const OffButton = styled(BtnCommon)`
  border-radius: 6px;
  background: var(--gray100);

  color: var(--gray900);
  text-align: center;
  /* Font/16 Regular */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.16px;
`;

const Select = styled.div`
  width: 720px;
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
  margin-bottom: 45px;
  flex-wrap: wrap;
  flex-direction: row;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 320px;
  }
`;

export default Post;
