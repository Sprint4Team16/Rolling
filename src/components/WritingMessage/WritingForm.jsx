import { useState, useEffect } from 'react';
import styled from 'styled-components';
import EditorBox from './TextEditor';

const IndexMessage = styled.p`
  color: var(--gray900);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.24px;
`;

const MainForm = styled.form`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  
`;

const FormSubject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const InputText = styled.input`
  display: flex;
  width: 720px;
  padding: 12px 16px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid var(--gray300);
  background: var(--white);
`;

const ErrorMessage = styled.p`
  color: var(--error);
`;

const ProfileSelectZone = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const YourProfileImage = styled.div`
  display: flex;
  padding: 24px;
  align-items: flex-start;
  gap: 10px;
`;

const ImageSelectionList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-center;
  gap: 12px;
`;

const ImageSelectDirection = styled.p`
  color: var(--gray500);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.16px;
`;

const RelationSelect = styled.select`
  display: flex;
  width: 320px;
  height: 50px;
  padding: 12px 16px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--gray300);
`;

const TextAreaDevice = styled.div`
  display: flex;
  width: 720px;
  height: 260px;
  padding: 16px 1px 16px 1px;
  justify-content: center;
  align-items: center;
`;

function WritingForm({ isBtnDisabled }) {
  const imageList = ['img/image43.svg', 'img/image44.svg'];
  const nonProfileImage = ['img/nonSelected.svg'];
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [profile, setProfile] = useState(nonProfileImage);
  const [relationship, setRelationship] = useState('');
  const [font, setFont] = useState('');
  const [content, setContent] = useState('');
  const [isContent, setIsContent] = useState(true);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(!e.target.value.trim());
  };

  const handleContentChange = (contents) => {
    setContent(contents);
  };

  const handleProfileSelect = (prof) => {
    setProfile(prof);
  };

  const handleButtonClick = (imageUrl) => {
    handleProfileSelect(imageUrl);
  };

  const handleRelationshipSelect = (relation) => {
    setRelationship(relation);
  };

  const handleFontChange = (fonts) => {
    setFont(fonts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    handleProfileSelect(nonProfileImage);
  }, []);

  useEffect(() => {
    setIsContent(!!content && !!name);
    isBtnDisabled(!!isContent);
  }, [content, name, isContent]);

  return (
    <div>
      <MainForm onSubmit={handleSubmit}>
        <FormSubject>
          <IndexMessage>From.</IndexMessage>
          <InputText
            type="text"
            value={name}
            placeholder="이름을 입력해 주세요."
            onChange={handleNameChange}
            onBlur={(e) => { if (!e.target.value.trim()) setNameError(true); }}
          />
          {nameError && <ErrorMessage>값을 입력해주세요.</ErrorMessage>}
        </FormSubject>

        <FormSubject>
          <IndexMessage>프로필 이미지</IndexMessage>
          <ProfileSelectZone>
            <YourProfileImage>
              <button type="button" onClick={() => handleProfileSelect(profile)}>
                <img src={profile} alt="프로필 이미지" />
              </button>
            </YourProfileImage>
            <ImageSelectionList>
              <ImageSelectDirection>프로필 이미지를 선택해주세요!</ImageSelectDirection>
              <div>
                <button type="button" onClick={() => handleButtonClick(imageList[0])}>
                  <img src={imageList[0]} alt="예시1" />
                </button>
                <button type="button" onClick={() => handleButtonClick(imageList[1])}>
                  <img src={imageList[1]} alt="예시2" />
                </button>
              </div>
            </ImageSelectionList>
          </ProfileSelectZone>
        </FormSubject>

        <FormSubject>
          <IndexMessage>상대와의 관계</IndexMessage>
          <RelationSelect value={relationship} onChange={handleRelationshipSelect} placeholder="지인">
            <option value="지인">지인</option>
            <option value="친구">친구</option>
            <option value="동료">동료</option>
            <option value="가족">가족</option>
          </RelationSelect>
        </FormSubject>

        <FormSubject>
          <IndexMessage>내용을 입력해 주세요</IndexMessage>
          <TextAreaDevice>
            <EditorBox onContentChange={handleContentChange} />
          </TextAreaDevice>
        </FormSubject>

        <FormSubject>
          <IndexMessage>폰트 선택</IndexMessage>
          <RelationSelect value={font} onChange={handleFontChange}>
            <option value="Noto Sans">Noto Sans</option>
            <option value="Main">Main</option>
          </RelationSelect>
        </FormSubject>

      </MainForm>
    </div>
  );
}

export default WritingForm;
