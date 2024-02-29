import styled from 'styled-components';
// eslint-disable-next-line
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import SubHeader from '../components/post/SubHeader';
import Card, { CardContentWrapper } from '../components/post/Card';

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  @media (max-width: 767px) {
    display: none;
  }
`;

const PostIdWrapper = styled.div`
  background-color: ${(props) => props.color || 'var(--orange200)'};
  background-image: url(${(props) => props.image || 'none'});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
`;
// eslint-disable-next-line
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 127px auto 0px;
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
// eslint-disable-next-line
const CardAdd = styled(CardContentWrapper)`
  justify-content: center;
  position: relative;
`;
// eslint-disable-next-line
const PlusIcon = styled.div`
  width: 56px;
  height: 56px;
  padding: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100px;
  background: var(--gray500);
`;

function PostId({ color, image, name, peopleNum }) {
  return (
    <PostIdWrapper color={color} image={image}>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <SubHeader name={name || 'Minjoon'} peopleNum={peopleNum || 2} />
      <CardWrapper>
        <CardAdd>
          <PlusIcon>
            <img src="img/plusIcon.svg" alt="" />
          </PlusIcon>
        </CardAdd>
        <Card
          src="img/shareIcon.svg"
          name="김동훈"
          userState="친구"
          cardContent="코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!"
          cardCreatedAt="2023.07.08"
        />
        <Card
          src="img/shareIcon.svg"
          name="김동훈"
          userState="동료"
          cardContent="코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!"
          cardCreatedAt="2023.07.08"
        />
        <Card
          src="img/shareIcon.svg"
          name="김동훈"
          userState="가족"
          cardContent="코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!"
          cardCreatedAt="2023.07.08"
        />
        <Card
          src="img/shareIcon.svg"
          name="김동훈"
          userState="지인"
          cardContent="코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!"
          cardCreatedAt="2023.07.08"
        />
        <Card
          src="img/shareIcon.svg"
          name="김동훈"
          userState="지인"
          cardContent="코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!"
          cardCreatedAt="2023.07.08"
        />
        <Card
          src="img/shareIcon.svg"
          name="김동훈"
          userState="지인"
          cardContent="코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!"
          cardCreatedAt="2023.07.08"
        />
        <Card
          src="img/shareIcon.svg"
          name="김동훈"
          userState="지인"
          cardContent="코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!"
          cardCreatedAt="2023.07.08"
        />
      </CardWrapper>
    </PostIdWrapper>
  );
}

export default PostId;
