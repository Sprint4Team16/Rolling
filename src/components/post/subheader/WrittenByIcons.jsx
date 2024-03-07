import ProfileUser from './ProfileUser';

function WrittenByIcons({ messages }) {
  return (
    <>
      {/* {으앙~} */}
      {messages &&
        messages.map((message) => (
          <ProfileUser
            key={message.id}
            id={message.id}
            src={message.profileImageURL}
          />
        ))}
    </>
  );
}

export default WrittenByIcons;
