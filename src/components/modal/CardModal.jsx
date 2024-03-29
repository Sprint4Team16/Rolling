import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import ModalWindow from './ModalWindow';
import {
  bold20,
  regular12,
  regular14,
  regular18,
  regular20,
} from '../../styles/FontStyle';
import { DISPLAY_SIZE } from '../../constants/SIZE_SET';
import { FONTS } from '../../constants/TEXT_SET';
import { USER_STATE } from '../../constants/COLOR_SET';
import EditButton from '../button/EditButton';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const CardContent = styled.div`
  margin: 2rem 4rem;
  @media (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    width: 80%;
  }
`;

const UserInfo = styled.div`
  display: flex;
  margin-top: 4rem;
  margin-bottom: 2rem;
  gap: 1.4rem;
`;

const UserPicture = styled.img`
  display: flex;
  width: 5.6rem;
  height: 5.6rem;
  align-items: center;

  border-radius: 10rem;
  border: 0.1rem solid var(--gray200);
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
  padding: 0.15rem 0.8rem 0;
  margin-top: 0.6rem;
  width: 4.1rem;
  height: 2rem;
  text-align: center;
  align-items: center;

  border-radius: 0.4rem;
  background: ${({ $state }) =>
    USER_STATE[$state] ? USER_STATE[$state].background : 'defaultColor'};
  color: ${({ $state }) =>
    USER_STATE[$state] ? USER_STATE[$state].color : 'defaultColor'};

  ${regular14}
`;

const SplitHorizontal = styled.div`
  width: 52rem;
  height: 0.1rem;
  background: var(--gray200);
  margin: 1.5rem auto;
  @media (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    max-width: 52rem;
    margin: 1.5rem 0;
    width: 90%;
  }
`;

const CardContentTextContainer = styled.div`
  height: 100%;
  width: 52rem;
  padding: 1rem;
  @media (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    max-width: 52rem;
    width: 100%;
  }
`;

const CardContentText = styled.div`
  overflow-wrap: break-word;
  overflow: hidden;
  color: var(--gray600);
  line-height: normal;
  width: 52rem;
  min-height: 24rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 2rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0.8rem;
    background-clip: padding-box;
    border: 0.9rem solid transparent;
    background-color: var(--gray300);
  }

  p {
    overflow: auto;
    padding-top: 0.1rem;
  }

  ${regular18}

  flex-wrap: wrap;
  @media (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    max-width: 52rem;
    width: 100%;
  }
`;

const CardCreatedAt = styled.div`
  position: absolute;
  top: 5.6rem;
  right: 4.5rem;

  color: var(--gray400);
  ${regular12}
`;

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

  const font = FONTS[cardFont] || '';

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
            <EditButton messageId={id} />
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

export default CardModal;
