import styled from 'styled-components';
import RecipientCardList from './RecipientCardList';
import { bold24 } from '../../styles/fontStyle';
import { DISPLAY_SIZE } from '../../constants/DISPLAY_SIZE';

function ListContent({ title, recipients }) {
  return (
    <Section>
      <SectionContainer>
        <Title>{title}</Title>
        <RecipientCardList recipients={recipients} />
      </SectionContainer>
    </Section>
  );
}

export default ListContent;

const Section = styled.section`
  display: flex;
  width: 100%;
  max-width: 118rem;
  margin: 0 auto;
  margin-top: 5rem;

  @media (min-width: ${DISPLAY_SIZE.MIN_TABLET}px) and (max-width: ${DISPLAY_SIZE.MAX_TABLET}px) {
    max-width: calc(100% - 48px);
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media (min-width: ${DISPLAY_SIZE.MIN_MOBILE}px) and (max-width: ${DISPLAY_SIZE.MIN_MOBILE}px) {
    max-width: calc(100% - 20px);
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const SectionContainer = styled.div``;

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
