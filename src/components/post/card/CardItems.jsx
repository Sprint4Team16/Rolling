import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Card, { CardContentWrapper } from '../Card';
import { getAllMessages } from '../../../api/GetApi';
import { DISPLAY_SIZE } from '../../../constants/DISPLAY_SIZE';

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
  @media (min-width: ${DISPLAY_SIZE.MIN_MOBILE}px) and(max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    margin: 9.3rem 2.4rem 0rem;
  }
`;
// eslint-disable-next-line
const CardAdd = styled(CardContentWrapper)`
  display: ${({ $isDisplay }) => ($isDisplay ? ' none' : 'block')};
  justify-content: center;
  position: relative;
  transition: all 0.4s ease-out;
  &:hover {
    transform: translateY(-1.2rem);
  }
`;
// eslint-disable-next-line
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

function CardItems({ onDelete, data }) {
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
      if (counts < offset) {
        setHasMore(false);
      }
      setOffset((prev) => prev + 8);
      setMessages((prev) => [...prev, ...result.results]);
    } catch (error) {
      throw new Error('데이터를 불러오지 못했습니다.', error);
    }
  };

  useEffect(() => {
    handleMessages(id);
  }, [id]);

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
      observer = new IntersectionObserver(onIntersect, { threshold: 1 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [offset, target]);

  return (
    // eslint-disable-next-line
    <CardContainer id="observer" className="card-container">
      <CardAdd
        onClick={() => navigate(`/post/${data.id}/message`)}
        $isDisplay={isEditRoute}
      >
        <PlusIcon>
          <img src="/img/plusIcon.svg" alt="" />
        </PlusIcon>
      </CardAdd>
      {/* refactoring : undefined 처리 최적화 */}
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
            onDelete={onDelete}
          />
        ))}
      <div ref={setTarget} style={{ width: '100%', height: 30 }} />
    </CardContainer>
  );
}

export default CardItems;
