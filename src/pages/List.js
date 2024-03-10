import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import ListContent from '../components/list/ListContent';
import MovePageButton from '../components/common/Buttons/movePageButton';
import { getRecipients } from '../api/GetApi';

function List() {
  const [popularRecipients, setPopularRecipients] = useState([]);
  const [recentRecipients, setRecentRecipients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRecipients();
        const data = response.results;

        // 좋아요순
        const sortedByPopularity = [...data].sort((a, b) => {
          const sumA = a.topReactions.reduce(
            (acc, curr) => acc + curr.count,
            0,
          );
          const sumB = b.topReactions.reduce(
            (acc, curr) => acc + curr.count,
            0,
          );
          return sumB - sumA;
        });

        // 최신순
        const sortedByRecent = [...data].sort((a, b) => b.id - a.id);

        setPopularRecipients(sortedByPopularity);
        setRecentRecipients(sortedByRecent);
      } catch (error) {
        throw new Error('롤링페이퍼를 불러오지 못했습니다.', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Header showButton />
      <ListContent title="인기 롤링 페이퍼 🔥" recipients={popularRecipients} />
      <ListContent
        title="최근에 만든 롤링 페이퍼 ⭐️️"
        recipients={recentRecipients}
      />
      <ButtonContainer>
        <MovePageButton moveLink="/post" btnName="나도 만들어보기" />
      </ButtonContainer>
    </>
  );
}

export default List;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 4rem;
  align-items: center;
  justify-content: center;
`;
