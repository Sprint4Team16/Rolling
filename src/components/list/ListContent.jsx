import styled from 'styled-components';
import RecipientCardList from './RecipientCardList';
import { bold24 } from '../../styles/FontStyle';
import { DISPLAY_SIZE } from '../../constants/SIZE_SET';

const Section = styled.section`
  display: column;
  width: 100%;
  max-width: 118rem;
  margin: 0 auto;
  margin-top: 5rem;

  @media (min-width: ${DISPLAY_SIZE.MIN_TABLET}px) and (max-width: ${DISPLAY_SIZE.MAX_TABLET}px) {
    max-width: calc(100% - 48px);
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media (min-width: ${DISPLAY_SIZE.MIN_MOBILE}px) and (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    max-width: calc(100% - 20px);
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const TitleContainer = styled.div``;
const RecipientCardListContainer = styled.div``;

const Title = styled.h2`
  display: flex;
  margin-bottom: 1.6rem;
  ${bold24}

  @media (min-width: ${DISPLAY_SIZE.MIN_MOBILE}px) and (max-width: ${DISPLAY_SIZE.MIN_MOBILE}px) {
    font-size: 2rem;
    font-weight: 600;
    line-height: 3rem;
  }
`;

function ListContent({ title, recipients }) {
  return (
    <Section>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <RecipientCardListContainer>
        <RecipientCardList recipients={recipients} />
      </RecipientCardListContainer>
    </Section>
  );
}

export default ListContent;
