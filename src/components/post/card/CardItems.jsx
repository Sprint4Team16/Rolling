import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Card, { CardContentWrapper } from './Card';
import { getAllMessages } from '../../../api/GetApi';
import { DISPLAY_SIZE } from '../../../constants/SIZE_SET';
import { deleteMessages } from '../../../api/DeleteApi';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 120rem;
  margin: 0rem auto 0rem;
  padding-bottom: 12.7rem;
  gap: 2.4rem 2%;

  @media (max-width: ${DISPLAY_SIZE.MAX_TABLET}px) {
    margin-left: 2.4rem;
    margin-right: 2.4rem;
  }
  @media (min-width: ${DISPLAY_SIZE.MIN_MOBILE}px) and (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    margin: 0rem 2.4rem 0rem;
  }
`;

const CardAdd = styled(CardContentWrapper)`
  display: ${({ $isDisplay }) => ($isDisplay ? ' none' : 'block')};
  justify-content: center;
  position: relative;
  transition: all 0.5s ease-out;
  &:hover {
    transform: translateY(-1.2rem);
  }

  @media (min-width: ${DISPLAY_SIZE.MIN_TABLET}px) and (max-width: ${DISPLAY_SIZE.MAX_TABLET}px) {
    max-width: ${DISPLAY_SIZE.MAX_TABLET}px;
    width: 49%;
  }
  @media (max-width: ${DISPLAY_SIZE.MIN_TABLET}px) {
    max-width: ${DISPLAY_SIZE.MIN_TABLET}px;
    min-width: 32rem;
    width: 100%;
  }
`;

const PlusIcon = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  padding: 1.6rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10rem;
  background: var(--gray500);
`;

function CardItems({ data }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const isEditRoute = location.pathname.includes('/edit');

  const [messages, setMessages] = useState([]);
  const [target, setTarget] = useState(null);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const handleMessages = async () => {
    try {
      if (!hasMore) {
        return;
      }
      const result = await getAllMessages(id, offset);
      const counts = result.count;
      if (counts < offset || result.next === null) {
        setHasMore(false);
      }
      setOffset((prev) => prev + 8);
      setMessages((prev) => [...prev, ...result.results]);
    } catch (error) {
      throw new Error('데이터를 불러오지 못했습니다.', error);
    }
  };

  const handleDeleteMessage = async (messageId) => {
    try {
      await deleteMessages(messageId);
      const deletedId = messageId;
      const newMessageList = messages.filter(
        (message) => message.id !== deletedId,
      );
      setMessages(newMessageList);
    } catch (error) {
      throw new Error('메세지 삭제에 실패했습니다.', error);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      const onIntersect = async ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          await handleMessages(id, offset);
          observer.observe(entry.target);
        }
      };
      observer = new IntersectionObserver(onIntersect, { threshold: 0.1 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [offset, target]);

  return (
    <CardContainer id="observer" className="card-container">
      <CardAdd
        onClick={() => navigate(`/post/${data.id}/message`)}
        $isDisplay={isEditRoute}
      >
        <PlusIcon>
          <img src="/img/plusIcon.svg" alt="" />
        </PlusIcon>
      </CardAdd>
      {messages &&
        messages.map((message) => (
          <Card
            key={message.id}
            id={message.id}
            src={message.profileImageURL}
            name={message.sender}
            cardFont={message.font}
            userState={message.relationship}
            cardContent={message.content}
            cardCreatedAt={message.createdAt}
            onDelete={handleDeleteMessage}
          />
        ))}
      <div ref={setTarget} style={{ width: '100%', height: '1rem' }} />
    </CardContainer>
  );
}

export default CardItems;
