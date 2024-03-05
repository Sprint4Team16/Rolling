import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DeleteRecipientButton from '../components/common/Buttons/DeleteRecipientButton';
import { getRecipientData, getAllMessages } from '../api/GetApi';
import {
  PostIdWrapper,
  HeaderWrapper,
  ButtonSection,
  CardWrapper,
} from './PostId';
import Header from '../components/common/Header';
import SubHeader from '../components/post/SubHeader';
import CardItems from '../components/post/card/CardItems';

function PostIdEdit() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [messages, setMessages] = useState(null);

  const handleIdData = async () => {
    try {
      const result = await getRecipientData(id);
      setData(result);
    } catch (error) {
      // console.error(error);
    }
  };

  const handleMessages = async () => {
    try {
      const result = await getAllMessages(id);
      setMessages(result.results);
    } catch (error) {
      // console.error(error);
    }
  };

  useEffect(() => {
    handleIdData();
    handleMessages(id);
  }, []);

  return (
    <PostIdWrapper color={data.backgroundColor} image={data.backgroundImageURL}>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <SubHeader
        name={data ? data.name : ''}
        peopleNum={data ? data.messageCount : 0}
      />
      <ButtonSection>
        <DeleteRecipientButton />
      </ButtonSection>
      <CardWrapper>
        <CardItems messages={messages} />
      </CardWrapper>
    </PostIdWrapper>
  );
}

export default PostIdEdit;
