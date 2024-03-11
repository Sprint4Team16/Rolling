import styled from 'styled-components';
import { bold14, bold24, regular18 } from '../../styles/fontStyle';
import { DISPLAY_SIZE } from '../../constants/SIZE_SET';
import MovePageButton from '../button/MovePageButton';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--white);
  margin: 6rem auto 2.4rem;

  @media (max-width: ${DISPLAY_SIZE.MAX_TABLET}px) {
    margin: 4.9rem 2.4rem;
  }

  @media (min-width: ${DISPLAY_SIZE.MIN_MOBILE}px) and (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    margin: 4.2rem 2.4rem 3.7rem;
  }
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 120rem;
  border-radius: 1.6rem;
  background: #f6f8ff;

  @media (max-width: ${DISPLAY_SIZE.MAX_TABLET}px) {
    width: 100%;
    flex-direction: column;
    gap: 3.6rem;
  }

  @media (min-width: ${DISPLAY_SIZE.MIN_MOBILE}px) and (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    gap: 4.8rem;
  }
`;

const FirstSectionContainer = styled(SectionContainer)`
  padding: 6rem 0 6rem 6rem;
  margin-bottom: 3rem;

  @media (min-width: ${DISPLAY_SIZE.MIN_MOBILE}px) and (max-width: ${DISPLAY_SIZE.MAX_TABLET}px) {
    padding: 0;
  }
`;

const SecondSectionContainer = styled(SectionContainer)`
  padding: 6rem 6rem 6rem 0;
  margin-top: 0;
  img {
    width: 72rem;
    height: 20.4rem;
  }

  @media (min-width: ${DISPLAY_SIZE.MIN_MOBILE}px) and (max-width: ${DISPLAY_SIZE.MAX_TABLET}px) {
    padding: 0;
    flex-direction: column-reverse;
    img {
      width: auto;
      height: auto;
    }
  }
`;

const ArticleContainer = styled.div`
  height: 15.8rem;
  grid-area: article;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-right: 15.2rem;

  h2 {
    ${bold24}
  }

  p {
    color: var(--gray500);
    ${regular18}
    margin: 0;
  }

  @media (max-width: ${DISPLAY_SIZE.MAX_TABLET}px) {
    height: 12rem;
    margin-bottom: 4rem;
    padding: 4rem;
    margin-right: 0;

    br {
      display: inline-block;
      content: ' ';
      padding: 0 0.2rem;
    }
  }

  @media (min-width: ${DISPLAY_SIZE.MIN_MOBILE}px) and (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    padding: 2.4rem;
  }
`;

const StyledPointBtn = styled.button`
  width: 8.2rem;
  height: 3.2rem;
  padding: 0.6rem 1.2rem;
  border-radius: 5rem;
  background: var(--purple600);
  border: none;
  ${bold14}
  text-align: center;
  color: var(--white);
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15rem;

  @media (min-width: ${DISPLAY_SIZE.MIN_MOBILE}px) and (max-width: ${DISPLAY_SIZE.MAX_TABLET}px) {
    width: 100%;
  }
`;

function MainSection() {
  return (
    <>
      <StyledSection>
        <FirstSectionContainer>
          <ArticleContainer>
            <StyledPointBtn>Point. 01</StyledPointBtn>
            <h2>
              누구나 손쉽게, 온라인 <br />
              롤링 페이퍼를 만들 수 있어요
            </h2>
            <p>로그인 없이 자유롭게 만들어요.</p>
          </ArticleContainer>
          <img src="/img/img_01.svg" alt="롤링페이퍼 예시 사진" />
        </FirstSectionContainer>
        <SecondSectionContainer>
          <img src="/img/img_02.png" alt="이모지 예시 사진" />
          <ArticleContainer>
            <StyledPointBtn>Point. 02</StyledPointBtn>
            <h2>
              서로에게 이모지로 감정을 <br />
              표현해 보세요
            </h2>
            <p>롤링 페이퍼에 이모지를 추가할 수 있어요.</p>
          </ArticleContainer>
        </SecondSectionContainer>
      </StyledSection>
      <BtnContainer>
        <MovePageButton moveLink="/list" btnName="구경해보기" />
      </BtnContainer>
    </>
  );
}

export default MainSection;
