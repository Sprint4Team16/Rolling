import styled from 'styled-components';

function RecipientCard({ name = 'Sowon', writerNum = '30' }) {
  return (
    <CardWrapper>
      <CardContent>
        <RecipientInfo>
          <RecipientText>To.{name}</RecipientText>
          <WriterProfile />
          <WriterText>
            <WriterNumText>{writerNum}</WriterNumText>명이 작성했어요!
          </WriterText>
        </RecipientInfo>
        <Division />
        <EmojiGroup>
          <EmojiCount>
            <Emoji>👍</Emoji>
            <span>20</span>
          </EmojiCount>
          <EmojiCount>
            <Emoji>😍</Emoji>
            <span>12</span>
          </EmojiCount>
          <EmojiCount>
            <Emoji>😢</Emoji>
            <span>7</span>
          </EmojiCount>
        </EmojiGroup>
      </CardContent>
    </CardWrapper>
  );
}

export default RecipientCard;
const CardWrapper = styled.div`
  width: 275px;
  height: 260px;
  padding: 30px 24px 20px 24px;
  border-radius: 16px;
  border: 1px solid #0000001a;
  background-color: var(--purple200);
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecipientInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 43px;
`;

const RecipientText = styled.span`
  font-size: 24px;
  font-weight: 700;
`;

const WriterProfile = styled.div`
  display: flex;
  height: 28px;
`;

const WriterText = styled.span`
  font-size: 16px;
`;

const WriterNumText = styled.span`
  font-weight: 700;
`;

const Division = styled.hr`
  width: 227px;
  border: 1px solid #0000001f;
`;

const EmojiGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;

const EmojiCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 65px;
  height: 36px;
  padding: 8px 12px;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);
  color: var(--white);
  font-size: 16px;
`;

const Emoji = styled.span`
  padding: 0 2px;
  margin-right: 2px;
  font-size: 16px;
`;
