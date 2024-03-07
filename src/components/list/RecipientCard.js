import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

function RecipientCard({ recipient }) {
  const backgroundColor = recipient.backgroundColor || 'beige';
  const backgroundImage = recipient.backgroundImageURL;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/post/${recipient.id}`);
  };

  return (
    <CardWrapper
      onClick={handleCardClick}
      $backgroundColor={backgroundColor}
      $backgroundImage={backgroundImage}
    >
      <CardContent>
        <RecipientInfo>
          <RecipientText $backgroundImage={backgroundImage}>
            To. {recipient.name}
          </RecipientText>
          <WriterText $backgroundImage={backgroundImage}>
            <WriterNumText>{recipient.messageCount}</WriterNumText>명이
            작성했어요!
          </WriterText>
        </RecipientInfo>
        <Division />
        <EmojiGroup>
          {recipient.topReactions.map((reaction) => (
            <EmojiCount key={reaction.id}>
              <Emoji>{reaction.emoji}</Emoji>
              <span>{reaction.count}</span>
            </EmojiCount>
          ))}
        </EmojiGroup>
      </CardContent>
    </CardWrapper>
  );
}

export default RecipientCard;

const getColor = (backgroundColor) => {
  switch (backgroundColor) {
    case 'purple':
      return 'var(--purple200)';
    case 'beige':
      return 'var(--orange200)';
    case 'blue':
      return 'var(--blue200)';
    case 'green':
      return 'var(--green200)';
    default:
      return 'var(--orange200)';
  }
};

const getPatternImage = (backgroundColor) => {
  switch (backgroundColor) {
    case 'purple':
      return '/img/pattern_purple.svg';
    case 'beige':
      return '/img/pattern_orange.svg';
    case 'blue':
      return '/img/pattern_blue.svg';
    case 'green':
      return '/img/pattern_green.svg';
    default:
      return '';
  }
};

const RecipientTextColor = ({ backgroundImage }) =>
  backgroundImage ? 'var(--white)' : 'var(--gray900)';

const WriterTextColor = ({ backgroundImage }) =>
  backgroundImage ? 'var(--gray200)' : 'var(--gray700)';

/* eslint-disable */
const CardWrapper = styled.a`
  position: relative;
  width: 275px;
  height: 260px;
  padding: 30px 24px 20px 24px;
  border-radius: 16px;
  border: 1px solid #0000001a;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0px 2px 12px 0px #00000014;
  background-color: ${({ $backgroundColor }) => getColor($backgroundColor)};
  ${({ $backgroundImage, $backgroundColor }) =>
    $backgroundImage
      ? css`
          background-image: url(${$backgroundImage});
          background-size: cover;
          background-repeat: no-repeat;
        `
      : css`
          &::before {
            content: '';
            position: absolute;
            width: 142px;
            height: 142px;
            top: 118px;
            left: 133px;
            background-image: url(${getPatternImage($backgroundColor)});
            background-size: cover;
            background-repeat: no-repeat;
          }
        `}

  @media (min-width: 375px) and (max-width: 767px) {
    width: 208px;
    height: 232px;
    background-color: ${({ $backgroundColor }) => getColor($backgroundColor)};
    ${({ $backgroundImage, $backgroundColor }) =>
      $backgroundImage
        ? css`
            background-image: url(${$backgroundImage});
            background-size: cover;
            background-repeat: no-repeat;
          `
        : css`
            &::before {
              content: '';
              position: absolute;
              width: 107.4px;
              height: 142px;
              top: 118px;
              left: 100.6px;
              background-image: url(${getPatternImage($backgroundColor)});
              background-size: cover;
              background-repeat: no-repeat;
            }
          `}
  }
`;
/* eslint-enable */

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecipientInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 43px;

  @media (min-width: 375px) and (max-width: 767px) {
    margin-bottom: 33px;
  }
`;

const RecipientText = styled.span`
  font-size: 24px;
  color: ${({ $backgroundImage }) =>
    RecipientTextColor({ backgroundImage: $backgroundImage })};
  font-weight: 700;

  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 18px;
  }
`;

const WriterText = styled.span`
  color: ${({ $backgroundImage }) =>
    WriterTextColor({ backgroundImage: $backgroundImage })};
  font-size: 16px;

  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 14px;
  }
`;

const WriterNumText = styled.span`
  font-weight: 700;
`;

const Division = styled.hr`
  position: relative;
  width: 227px;
  z-index: 1;
  border: 1px solid #0000001f;

  @media (min-width: 375px) and (max-width: 767px) {
    width: 162px;
  }
`;

const EmojiGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
  z-index: 1;
`;

const EmojiCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: auto;
  height: 36px;
  padding: 8px 12px;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);
  color: var(--white);
  font-size: 16px;

  @media (min-width: 375px) and (max-width: 767px) {
    padding: 6px 8px;
    font-size: 14px;
  }
`;

const Emoji = styled.span`
  padding: 0 2px;
  margin-right: 2px;
  font-size: 16px;
`;
