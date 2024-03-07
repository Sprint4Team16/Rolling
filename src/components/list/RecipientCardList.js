import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import RecipientCard from './RecipientCard';
import { getRecipients } from '../../api/GetApi';

function RecipientList() {
  const [recipients, setRecipients] = useState([]);
  const containerRef = useRef(null);

  const handleRecipientsLoad = async () => {
    try {
      const response = await getRecipients();
      const data = response.results;
      setRecipients(data);
    } catch (error) {
      console.error('롤링페이퍼를 불러오지 못했습니다.', error);
    }
  };

  useEffect(() => {
    handleRecipientsLoad();
  }, []);

  const handleLeftButton = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= containerRef.current.clientWidth;
    }
  };

  const handleRightButton = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += containerRef.current.clientWidth;
    }
  };

  return (
    <CarouselContainer>
      {recipients.length > 4 && (
        <LeftButton onClick={handleLeftButton}>
          <img src="/img/arrow_left.svg" alt="arrow_left" />
        </LeftButton>
      )}
      <CardsContainer ref={containerRef}>
        {recipients.map((recipient) => (
          <RecipientCard key={recipient.id} recipient={recipient} />
        ))}
      </CardsContainer>
      {recipients.length > 4 && (
        <RightButton onClick={handleRightButton}>
          <img src="/img/arrow_right.svg" alt="arrow_right" />
        </RightButton>
      )}
    </CarouselContainer>
  );
}

export default RecipientList;

const CardsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  scroll-behavior: smooth;
  & > * {
    flex-shrink: 0;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1160px;
`;

const Button = styled.button`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: #ffffffe5;
  border-radius: 50px;
  border: 1px solid #dadcdf;
  box-shadow: 0px 4px 8px 0px #00000014;
  cursor: pointer;

  @media (max-width: 1199px) {
    display: none;
  }
`;

const LeftButton = styled(Button)`
  left: -20px;
  z-index: 1;
`;

const RightButton = styled(Button)`
  right: -20px;
  z-index: 1;
`;
