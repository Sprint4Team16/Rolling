import styled from 'styled-components';
import RecipientCardList from './RecipientCardList';
import { bold24 } from '../../styles/fontStyle';

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
  max-width: 1180px;
  margin: 0 auto;
  margin-top: 50px;

  @media (min-width: 768px) and (max-width: 1199px) {
    max-width: calc(100% - 48px);
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media (min-width: 375px) and (max-width: 767px) {
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
  margin-bottom: 16px;
  ${bold24}

  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
  }
`;
