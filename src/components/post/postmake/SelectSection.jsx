import styled from 'styled-components';
import { bold24, regular16 } from '../../../styles/fontStyle';
import { DISPLAY_SIZE } from '../../../constants/DISPLAY_SIZE';

function SelectSection() {
  return (
    <Section>
      <Title>배경화면을 선택해 주세요.</Title>
      <Content>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</Content>
    </Section>
  );
}

const Section = styled.div`
  width: 72rem;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  margin-top: 5rem;

  @media (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    width: 32rem;
  }
`;

const Title = styled.p`
  color: var(--gray900);
  ${bold24}
`;
const Content = styled.p`
  color: var(--gray500);
  ${regular16}
`;

export default SelectSection;
