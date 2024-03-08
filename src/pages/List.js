import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import ListContent from '../components/list/ListContent';
import MovePageButton from '../components/common/Buttons/movePageButton';

function List() {
  return (
    <>
      <Header showButton />
      <ListContent title="인기 롤링 페이퍼 🔥">Rb</ListContent>
      <ListContent title="최근에 만든 롤링 페이퍼 ⭐️️">Rb</ListContent>
      <ButtonContainer>
        <MovePageButton moveLink="/post" btnName="나도 만들어보기" />
      </ButtonContainer>
    </>
  );
}

export default List;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 100%;
  }
  @media (min-width: 375px) and (max-width: 767px) {
    width: 100%;
  }
`;
