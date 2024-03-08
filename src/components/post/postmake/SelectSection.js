import styled from 'styled-components';
import { bold24, regular16 } from '../../../styles/fontStyle';

function SelectSection() {
  return (
    <Section>
      <Title>배경화면을 선택해 주세요.</Title>
      <Content>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</Content>
    </Section>
  );
}

const Section = styled.div`
  width: 720px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  margin-top: 50px;

  @media (max-width: 768px) {
    width: 320px;
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
