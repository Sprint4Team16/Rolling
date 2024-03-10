import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import SubHeader from '../components/post/SubHeader';
import { getRecipientData } from '../api/GetApi';
import EditButton from '../components/common/Buttons/EditButton';
import CardItems from '../components/post/card/CardItems';
import { DISPLAY_SIZE } from '../constants/SIZE_SET';
import { BACKGROUND_COLOR } from '../constants/COLOR_SET';

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  @media (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    display: none;
  }
`;

export const PostIdWrapper = styled.div`
  background-color: ${($props) => {
    const colorInfo = BACKGROUND_COLOR[$props.color];
    return colorInfo && colorInfo.background;
  }};
  background-image: url(${($props) => $props.image || 'none'});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

export const ButtonSection = styled.div`
  display: flex;
  margin: 6.3rem auto 1rem;
  max-width: 120rem;
  justify-content: end;
  align-items: center;

  @media (max-width: ${DISPLAY_SIZE.MAX_TABLET}px) {
    margin: 6.3rem 2.4rem 1.5rem;
  }
`;

// eslint-disable-next-line
export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 120rem;
  margin: 0rem auto 0rem;
  padding-bottom: 12.7rem;
  gap: 2.4rem 2%;

  @media (max-width: ${DISPLAY_SIZE.MAX_TABLET}px) {
    margin: 9.3rem 2.4rem 2rem;
  }
  @media (min-width: ${DISPLAY_SIZE.MIN_MOBILE}px) and (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    margin: 9.3rem 2.4rem 0rem;
  }
`;

function PostId() {
  const { id } = useParams();
  const [data, setData] = useState({});

  const handleIdData = async () => {
    try {
      const result = await getRecipientData(id);
      setData(result);
    } catch (error) {
      // console.error(error);
    }
  };

  useEffect(() => {
    handleIdData();
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
        <EditButton />
      </ButtonSection>
      <CardItems data={data} />
    </PostIdWrapper>
  );
}

export default PostId;
