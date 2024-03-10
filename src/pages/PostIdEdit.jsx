import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DeleteRecipientButton from '../components/common/Buttons/DeleteRecipientButton';
import { getRecipientData } from '../api/GetApi';
import { PostIdWrapper, HeaderWrapper, ButtonSection } from './PostId';
import Header from '../components/common/Header';
import SubHeader from '../components/post/subheader/SubHeader';
import CardItems from '../components/post/card/CardItems';
import BackToPostButton from '../components/common/Buttons/BackToPostButton';

function PostIdEdit() {
  const { id } = useParams();
  const [data, setData] = useState({});

  const handleIdData = async () => {
    try {
      const result = await getRecipientData(id);
      setData(result);
    } catch (error) {
      throw new Error('데이터를 불러오지 못했습니다.', error);
    }
  };

  useEffect(() => {
    handleIdData();
  }, [id]);

  let profileUrl = [];

  if (data && data.recentMessages?.length > 0) {
    profileUrl = data.recentMessages.map((message) => message.profileImageURL);
    console.log(profileUrl);
  }

  return (
    <PostIdWrapper color={data.backgroundColor} image={data.backgroundImageURL}>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <SubHeader
        name={data ? data.name : ''}
        peopleNum={data ? data.messageCount : 0}
        profileUrl={profileUrl}
      />
      <ButtonSection>
        <BackToPostButton moveLink={`/post/${id}`} btnName="뒤로가기" />
        <DeleteRecipientButton />
      </ButtonSection>
      <CardItems messages={data} />
    </PostIdWrapper>
  );
}

export default PostIdEdit;
