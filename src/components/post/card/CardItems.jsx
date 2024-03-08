import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Card, { CardContentWrapper } from '../Card';
import { getAllMessages } from '../../../api/GetApi';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0px auto 0px;
  padding-bottom: 127px;
  gap: 24px 2%;

  @media (max-width: 1247px) {
    margin-left: 24px;
    margin-right: 24px;
  }
  @media (min-width: 360px) and(max-width: 767px) {
    margin: 93px 24px 0px;
    /* align-content: center; */
  }
`;
// eslint-disable-next-line
const CardAdd = styled(CardContentWrapper)`
  justify-content: center;
  position: relative;
  transition: all 0.5s ease-out;
  &:hover {
    transform: translateY(-1.2rem);
  }
`;
// eslint-disable-next-line
const PlusIcon = styled.div`
  width: 56px;
  height: 56px;
  padding: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100px;
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

      // setMessages(result.results);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   handleMessages(id);
  // }, []);

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
      {/* {isLoading && <p>Loading...</p>} */}
    </CardContainer>
  );
}

export default CardItems;
