import Card from '../Card';

function CardItems({ messages }) {
  return (
    // eslint-disable-next-line
    <>
      {/* refactoring : undefined 처리 최적화 */}
      {messages &&
        messages.map((message) => (
          <Card
            key={message.id}
            src={message.profileImageURL}
            name={message.sender}
            userState={message.relationship}
            cardContent={message.content}
            cardCreatedAt={message.createdAt}
          />
        ))}
    </>
  );
}

export default CardItems;
