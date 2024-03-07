import styled from 'styled-components';

function ProfileUser({ src }) {
  const ProfileContainer = styled.div`
    display: flex;
  `;
  return (
    <ProfileContainer>
      <img src={src} alt="프로필 이미지" />
    </ProfileContainer>
  );
}

export default ProfileUser;
