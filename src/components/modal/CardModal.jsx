import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import ModalWindow from '../common/ModalWindow';
import EditMessageButton from '../common/Buttons/EditMessageButton';
import { bold20, regular12, regular14, regular18, regular20 } from '../../styles/fontStyle';

const userStateColors = {
  가족: { background: 'var(--green100)', color: 'var(--green500)' },
  동료: { background: 'var(--purple100)', color: 'var(--purple600)' },
  지인: { background: 'var(--orange100)', color: 'var(--orange500)' },
  친구: { background: 'var(--blue100)', color: 'var(--blue500)' },
};

function CardModal({
  id,
  src,
  name,
  cardFont,
  userState,
  cardContent,
  cardCreatedAt,
}) {
  const location = useLocation();
  const isEditRoute = location.pathname.includes('/edit');

  const createdDays = new Date(cardCreatedAt);
  const fontClass = {
    'Noto Sans': 'noto-sans',
    Pretendard: 'pretendard',
    나눔명조: 'nanum-gothic',
    '나눔손글씨 손편지체': 'nanum-myeongjo',
  };

  const font = fontClass[cardFont] || '';

  const newCardContent = cardContent.replace(/ql-/g, '');

  const Card = (
    <Container onClick={(e) => e.stopPropagation()}>
      <CardContent>
        <UserInfo>
          <UserPicture src={src} alt="프로필" />
          <UserText>
            From. <UserName>{name}</UserName>
            <UserState $state={userState}>{userState}</UserState>
          </UserText>
          {isEditRoute ? (
            <EditMessageButton messageID={id} />
          ) : (
            <CardCreatedAt>
              {`${createdDays.getFullYear()}. ${
                createdDays.getMonth() + 1
              }. ${createdDays.getDate()}`}
            </CardCreatedAt>
          )}
        </UserInfo>
        <SplitHorizontal />
        <CardContentTextContainer>
          <CardContentText
            dangerouslySetInnerHTML={{ __html: newCardContent }}
            className={font}
          />
        </CardContentTextContainer>
      </CardContent>
    </Container>
  );

  return <ModalWindow children={Card} />;
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const CardContent = styled.div`
  margin: 20px 40px;
`;

const UserInfo = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 20px;
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
  ${bold20}
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
  width: 520px;
  height: 1px;
  background: var(--gray200);
  margin: 15px auto;
`;

const CardContentTextContainer = styled.div`
  height: 100%;
  width: 520px;
`;

const CardContentText = styled.div`
  overflow-wrap: break-word;
  overflow: hidden;
  color: var(--gray600);
  width: 520px;
  height: 240px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 20px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-clip: padding-box;
    border: 9px solid transparent;
    background-color: var(--gray300);
  }
  
  p {
    padding-top: 1px;
  }

  /* max-height: 112px; */
  /* max-width: 312px; */

  ${regular18}

  flex-wrap: wrap;
`;

const CardCreatedAt = styled.div`
  ${Text}
  position: absolute;
  top: 56px;
  right: 45px;

  color: var(--gray400);
  ${regular12}
`;

export default CardModal;
