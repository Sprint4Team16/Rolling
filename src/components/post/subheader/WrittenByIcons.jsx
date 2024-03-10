import ProfileUser from './ProfileUser';

function WrittenByIcons({ profileUrl, peopleNum }) {
  // profileUrl이 없거나 비어있으면 빈 배열을 반환
  const urls = profileUrl || [];

  return (
    <>
      {urls.map((userUrl, index) => {
        const last = index === urls.length - 1;

        return (
          <ProfileUser
            key={userUrl} // 사용하는 곳에서 key prop이 필요
            src={userUrl}
            peopleNum={last ? `+${peopleNum - 3}` : null}
            last={last}
          />
        );
      })}
    </>
  );
}

export default WrittenByIcons;
