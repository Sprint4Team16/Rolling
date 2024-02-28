import styled from 'styled-components';
import Card from '../post/Card';

function CardList() {
  return (
    <>
      <CardWrapper>
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
          userState="친구"
          cardContent="코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!"
          cardCreatedAt="2023.09.02"
        />
        <Card
          src="img/shareIcon.svg"
          name="김동훈"
          userState="친구"
          cardContent="코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!"
          cardCreatedAt="2023.02.05"
        />
        <Card
          src="img/shareIcon.svg"
          name="김동훈"
          userState="친구"
          cardContent="코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!"
          cardCreatedAt="2023.12.28"
        />
        <Card
          src="img/shareIcon.svg"
          name="김동훈"
          userState="친구"
          cardContent="코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!"
          cardCreatedAt="2023.03.02"
        />
        <Card
          src="img/shareIcon.svg"
          name="김동훈"
          userState="친구"
          cardContent="코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!"
          cardCreatedAt="2023.01.30"
        />
        <Card
          src="img/shareIcon.svg"
          name="김동훈"
          userState="친구"
          cardContent="코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!"
          cardCreatedAt="2023.2.28"
        />
      </CardWrapper>
      ;
    </>
  );
}

export default CardList;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap; // 한 줄에 모든 카드를 나열
  overflow-x: auto; // 가로 스크롤 활성화
  margin: 127px 24px 0px;
  gap: 20px;
`;
