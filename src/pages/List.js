import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import ListContent from '../components/list/ListContent';
import MovePageButton from '../components/common/Buttons/MovePageButton';
import { getAllRecipients } from '../api/GetApi';

function List() {
  const [popularRecipients, setPopularRecipients] = useState([]);
  const [recentRecipients, setRecentRecipients] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  useEffect(() => {
    const fetchData = async () => {
      if (!hasMore) return;

      try {
        const response = await getAllRecipients(offset);
        const data = response.results;

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

        const sortedByRecent = [...data].sort((a, b) => b.id - a.id);

        setPopularRecipients((prevRecipients) => {
          const updatedRecipients = [...prevRecipients, ...sortedByPopularity];
          return updatedRecipients.sort((a, b) => {
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
        });
        setRecentRecipients((prevRecipients) => [
          ...prevRecipients,
          ...sortedByRecent,
        ]);

        if (!response.next) {
          setHasMore(false);
        } else {
          setOffset((prevOffset) => prevOffset + 8);
        }
      } catch (error) {
        throw new Error('롤링페이퍼를 불러오지 못했습니다.', error);
      }
    };

    fetchData();
  }, [offset, hasMore]);

  const lastRecipientRef = useRef();
  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setOffset((prevOffset) => prevOffset + 8);
      }
    });

    if (lastRecipientRef.current) {
      observer.current.observe(lastRecipientRef.current);
    }

    // eslint-disable-next-line
    return () => {
      observer.current.disconnect();
    };
  }, []);

  return (
    <>
      <Header showButton />
      <ListContent title="인기 롤링 페이퍼 🔥" recipients={popularRecipients} />
      <ListContent
        title="최근에 만든 롤링 페이퍼️️"
        recipients={recentRecipients}
        lastRecipientRef={lastRecipientRef}
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
