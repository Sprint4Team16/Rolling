import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/common/Header';
import ListContent from '../components/list/ListContent';
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
        console.error('롤링페이퍼를 불러오지 못했습니다.', error);
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
        <StyledBtn to="/post">나도 만들어보기</StyledBtn>
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

const StyledBtn = styled(Link)`
  width: 280px;
  border-radius: 12px;
  margin: 24px auto;
  padding: 14px 24px;
  font-size: 18px;
  text-align: center;
  color: var(--white);
  background-color: var(--purple600);

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 720px;
  }
  @media (min-width: 375px) and (max-width: 767px) {
    width: 320px;
  }
`;
