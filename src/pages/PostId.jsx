import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import SubHeader from '../components/post/SubHeader';
// import { getAllMessages, getRecipientData } from '../api/GetApi';
import { getRecipientData } from '../api/GetApi';
import EditButton from '../components/common/Buttons/EditButton';
import CardItems from '../components/post/card/CardItems';

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  @media (max-width: 767px) {
    display: none;
  }
`;

const userBackgroundColors = {
  beige: { background: 'var(--orange200)' },
  purple: { background: 'var(--purple200)' },
  green: { background: 'var(--green200)' },
  blue: { background: 'var(--blue200)' },
};

export const PostIdWrapper = styled.div`
  background-color: ${(props) => {
    const colorInfo = userBackgroundColors[props.color];
    return colorInfo && colorInfo.background;
  }};
  background-image: url(${(props) => props.$image || 'none'});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

export const ButtonSection = styled.div`
  display: flex;
  margin: 63px auto 11px;
  max-width: 1200px;
  gap: 10px;
  justify-content: end;
  align-items: center;
`;

// eslint-disable-next-line
export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0px auto 0px;
  padding-bottom: 127px;
  gap: 24px 2%;

  @media (max-width: 1247px) {
    margin-left: 24px;
    margin-right: 24px;
  }
  @media (min-width: 360px) and(max-width: 767px) {
    margin: 93px 24px 0px;
    /* align-content: center; */
  }
`;

function PostId() {
  const { id } = useParams();
  const [data, setData] = useState({});
  // const [messages, setMessages] = useState(null);

  const handleIdData = async () => {
    try {
      const result = await getRecipientData(id);
      setData(result);
    } catch (error) {
      // console.error(error);
    }
  };

  // const handleMessages = async () => {
  //   try {
  //     const result = await getAllMessages(id);
  //     setMessages(result.results);
  //   } catch (error) {
  //     // console.error(error);
  //   }
  // };

  useEffect(() => {
    handleIdData();
    // handleMessages(id);
  }, []);

  return (
    <PostIdWrapper
      color={data.backgroundColor}
      $image={data.backgroundImageURL}
    >
      {/* {console.log(id)} */}
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <SubHeader
        name={data ? data.name : ''}
        peopleNum={data ? data.messageCount : 0}
      />
      <ButtonSection>
        <EditButton />
      </ButtonSection>
      {/* <CardWrapper> */}
      {/* <CardItems messages={messages} data={data} /> */}
      <CardItems data={data} />
      {/* </CardWrapper> */}
    </PostIdWrapper>
  );
}

export default PostId;
