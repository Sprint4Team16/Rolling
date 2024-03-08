import styled from 'styled-components';
import { useRef, useEffect, useState } from 'react';
import DeleteMessageButton from '../common/Buttons/DeleteMessageButton';
import ModalPortal from '../modal/ModalPortal';
import CardModal from '../modal/CardModal';
import { regular12, regular14, regular18, regular20 } from '../../styles/fontStyle';

const userStateColors = {
  가족: { background: 'var(--green100)', color: 'var(--green500)' },
  동료: { background: 'var(--purple100)', color: 'var(--purple600)' },
  지인: { background: 'var(--orange100)', color: 'var(--orange500)' },
  친구: { background: 'var(--blue100)', color: 'var(--blue500)' },
};
export const CardContentWrapper = styled.div`
  position: relative;
  max-width: 384px;
  width: 32%;
  height: 280px;
  justify-content: center;
  align-items: center;

  border-radius: 16px;
  background: var(--white);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);

  cursor: pointer;
  transition: all 0.5s ease-out;
  &:hover {
    transform: translateY(-1.2rem);
  }

  @media (max-width: 1023px) {
    width: 50%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const CardContent = styled.div`
  margin: 28px 24px 24px;
`;

const UserInfo = styled.div`
  display: flex;
  gap: 14px;
`;

const UserPicture = styled.img`
  display: flex;
  width: 56px;
  height: 56px;
  align-items: center;

  border-radius: 100px;
  border: 1px solid var(--gray200);
  background: var(--white);
`;

const UserText = styled.div`
  display: block;
  position: relative;
  color: var(--black);
  ${regular20}
`;

const UserName = styled.span`
  font-weight: 700;
`;

const UserState = styled.div`
  display: flex;
  padding: 1.5px 8px 0;
  margin-top: 6px;
  width: 41px;
  height: 20px;
  text-align: center;
  align-items: center;

  border-radius: 4px;
  background: ${({ $state }) =>
    userStateColors[$state]
      ? userStateColors[$state].background
      : 'defaultColor'};
  color: ${({ $state }) =>
    userStateColors[$state] ? userStateColors[$state].color : 'defaultColor'};

  ${regular14}
`;

const SplitHorizontal = styled.div`
  width: 100%;
  height: 1px;
  background: var(--gray200);
  margin: 15px auto;
`;

const CardContentTextContainer = styled.div`
  height: 112px;
  width: 312px;
`;

const CardContentText = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--gray600);
  width: 100%;
  /* max-height: 112px; */
  /* max-width: 312px; */

  ${regular18}

  flex-wrap: wrap;
`;

const CardCreatedAt = styled.div`
  position: absolute;
  left: 24px;
  bottom: 24px;

  color: var(--gray400);
  ${regular12}
`;

function Card({
  id,
  src,
  name,
  cardFont,
  userState = '친구',
  cardContent = '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!',
  cardCreatedAt = '2023.07.08',
  onDelete,
}) {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const ref = useRef();

  const handleOutsideClick = (e) => {
    if (isCardOpen && (!ref.current || !ref.current.contains(e.target))) {
      setIsCardOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isCardOpen]);

  const handleClickCard = (e) => {
    e.preventDefault();
    setIsCardOpen(!isCardOpen);
  };

  const createdDays = new Date(cardCreatedAt);

  const fontClass = {
    'Noto Sans': 'noto-sans',
    Pretendard: 'pretendard',
    나눔명조: 'nanum-gothic',
    '나눔손글씨 손편지체': 'nanum-myeongjo',
  };

  const font = fontClass[cardFont] || '';

  return (
    <CardContentWrapper ref={ref} onClick={handleClickCard}>
      <CardContent>
        <UserInfo>
          <UserPicture src={src} alt="프로필" />
          <UserText>
            From. <UserName>{name}</UserName>
            <UserState $state={userState}>{userState}</UserState>
          </UserText>
          <DeleteMessageButton id={id} onDelete={onDelete} />
        </UserInfo>
        <SplitHorizontal />
        <CardContentTextContainer>
          <CardContentText
            dangerouslySetInnerHTML={{ __html: cardContent }}
            className={font}
          />
        </CardContentTextContainer>

        <CardCreatedAt>
          {`${createdDays.getFullYear()}. ${
            createdDays.getMonth() + 1
          }. ${createdDays.getDate()}`}
        </CardCreatedAt>
      </CardContent>
      {isCardOpen && (
        <ModalPortal>
          <CardModal
            onClick={(e) => handleOutsideClick(e)}
            id={id}
            src={src}
            name={name}
            cardFont={cardFont}
            userState={userState}
            cardContent={cardContent}
            cardCreatedAt={cardCreatedAt}
          />
        </ModalPortal>
      )}
    </CardContentWrapper>
  );
}
export default Card;
