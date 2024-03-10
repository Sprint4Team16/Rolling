import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import EditorBox from './TextEditor';
import Dropdown from '../common/Dropdown';
import { getProfile } from '../../api/GetApi';
import PostButton from '../common/Buttons/PostButton';
import { submitMessagePost } from '../../api/PostApi';
import { bold24, regular16 } from '../../styles/fontStyle';
import { DISPLAY_SIZE } from '../../constants/SIZE_SET';
import { FONT_LIST, RELATION_LIST } from '../../constants/OPTION_SET';

const FormPage = styled.div`
  max-width: 72rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 auto;
  display: flex;
  justify-content: center;

  @media (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    max-width: calc(100% - 32px);
  }
`;

const IndexMessage = styled.p`
  color: var(--gray900);
  ${bold24}
`;

const MainForm = styled.form`
  display: inline-flex;
  flex-direction: column;
  max-width: 72rem;
  align-items: flex-start;
  gap: 5rem;
`;

const FormSubject = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
`;

const InputTextContainer = styled.div`
  position: relative;

  @media (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    min-width: 32rem;
    width: 100%;
  }
`;

const InputText = styled.input`
  display: flex;
  width: 72rem;
  padding: 1.2rem 1.6rem;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  border: 0.1rem solid
    ${(props) => (props.isError ? 'var(--error)' : 'var(--gray300)')};
  background: var(--white);

  @media (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    min-width: 32rem;
    width: 100%;
  }
`;

const ErrorMessage = styled.p`
  position: absolute;
  top: calc(100% + 5px);
  left: calc(2%);
  color: var(--error);
`;

const ProfileSelectZone = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 3.2rem;
`;

const ProfileZone = styled.img`
  border-radius: 10rem;
  flex-wrap: wrap;
  width: 10rem;

  @media (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    width: 8rem;
  }
`;

const YourProfileImage = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const ImageSelectionList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-center;
  gap: 1.2rem;
`;

const ImageSelectDirection = styled.p`
  color: var(--gray500);
  ${regular16}
`;

const ProfileImageContainer = styled.div`
  flex-wrap: wrap;
  max-width: 56rem;
`;

const ProfileImage = styled.img`
  display: flex;
  width: 5.6rem;
  height: 5.6rem;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10rem;
  border: 0.1rem solid var(--gray200);
  background: var(--white);

  @media (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    width: 4rem;
    height: 4rem;
  }
`;

function WritingForm({ isBtnDisabled }) {
  const nonProfileImage = ['/img/nonSelected.svg'];
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [profile, setProfile] = useState('');
  const [relation, setRelation] = useState('지인');
  const [fonts, setFonts] = useState('Noto Sans');
  const [contents, setContents] = useState('');
  const [isContent, setIsContent] = useState(true);
  const [profileImages, setProfileImages] = useState([]);
  const { id: recipientID } = useParams();

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(!e.target.value.trim());
  };

  const handleContentChange = (content) => {
    setContents(content);
  };

  const handleProfileSelect = (prof) => {
    setProfile(prof);
  };

  const handleFontChange = (font) => {
    setFonts(font);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const handleImageLoad = async () => {
      try {
        const response = await getProfile();
        const result = response.imageUrls;
        setProfileImages(result);
        if (result.length > 0) {
          setProfile(result[0]);
        }
      } catch (error) {
        throw new Error('이미지를 불러오지 못했습니다.', error);
      }
    };
    handleImageLoad();
  }, []);

  useEffect(() => {
    handleProfileSelect(nonProfileImage);
  }, []);

  useEffect(() => {
    setIsContent(!!contents && !!name);
    isBtnDisabled(!!isContent);
  }, [contents, name, isContent]);

  return (
    <FormPage>
      <MainForm onSubmit={handleSubmit}>
        <FormSubject>
          <IndexMessage>From.</IndexMessage>
          <InputTextContainer>
            <InputText
              type="text"
              value={name}
              placeholder="이름을 입력해 주세요."
              onChange={handleNameChange}
              onBlur={(e) => {
                if (!e.target.value.trim()) setNameError(true);
              }}
              isError={nameError}
            />
            {nameError && <ErrorMessage>값을 입력해주세요.</ErrorMessage>}
          </InputTextContainer>
        </FormSubject>

        <FormSubject>
          <IndexMessage>프로필 이미지</IndexMessage>
          <ProfileSelectZone>
            <YourProfileImage>
              <ProfileZone src={profile} alt="프로필 이미지" />
            </YourProfileImage>
            <ImageSelectionList>
              <ImageSelectDirection>
                프로필 이미지를 선택해주세요!
              </ImageSelectDirection>
              <ProfileImageContainer>
                {profileImages.map((image) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => handleProfileSelect(image)}
                  >
                    <ProfileImage src={image} alt={`Profile ${image}`} />
                  </button>
                ))}
              </ProfileImageContainer>
            </ImageSelectionList>
          </ProfileSelectZone>
        </FormSubject>

        <FormSubject>
          <IndexMessage>상대와의 관계</IndexMessage>
          <Dropdown
            $state="0"
            options={RELATION_LIST}
            placeholder={RELATION_LIST[0]}
            onChange={(selectedOption) => setRelation(selectedOption)}
          />
        </FormSubject>

        <FormSubject>
          <IndexMessage>내용을 입력해 주세요</IndexMessage>
          {/* <TextAreaDevice> */}
          <EditorBox onContentChange={handleContentChange} />
          {/* </TextAreaDevice> */}
        </FormSubject>

        <FormSubject>
          <IndexMessage>폰트 선택</IndexMessage>
          <Dropdown
            $state="1"
            options={FONT_LIST}
            placeholder={FONT_LIST[0]}
            onChange={(selectedOption) => handleFontChange(selectedOption)}
          />
        </FormSubject>
        <PostButton
          onSubmit={async () => {
            const data = {
              team: '16',
              recipientId: Number(recipientID),
              sender: name,
              profileImageURL: profile,
              relationship: relation,
              content: contents,
              font: fonts,
            };
            const response = await submitMessagePost(recipientID, data);
            return response.recipientId;
          }}
          btnDisable={!isContent}
        />
      </MainForm>
    </FormPage>
  );
}

export default WritingForm;
