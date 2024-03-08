import ProfileUser from './ProfileUser';

function WrittenByIcons({ messages, peopleNum }) {
  if (!messages || messages.length === 0) {
    return null; // Return early if messages are null or empty
  }

  const uniqueUsers = [...new Set(messages.map((message) => message.id))];
  const limitedUsers = uniqueUsers.slice(0, 3);

  return (
    <>
      {/* {으앙~} */}
      {limitedUsers.map((userId, index) => {
        const userMessages = messages.filter(
          (message) => message.id === userId,
        );
        const last = index === limitedUsers.length - 1;

        return (
          <ProfileUser
            key={userId}
            id={userId}
            src={userMessages[0].profileImageURL}
            peopleNum={last ? `+${peopleNum - 3}` : null}
            last={last}
          />
        );
      })}
    </>
  );
}

export default WrittenByIcons;
