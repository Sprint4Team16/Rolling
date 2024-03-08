import styled from 'styled-components';

function ProfileUser({ src, last }) {
  const ProfileContainer = styled.div`
    display: flex;
    position: relative;
  `;

  const ImageBox = styled.div`
    width: 28px;
    height: 28px;
    margin-right: ${last ? '0' : '-24px'};

    img {
      width: 100%;
      height: 100%;
      border-radius: 140px;
      border: 1.4px solid #e3e3e3;
      position: relative;
      z-index: ${last ? '2' : '1'};
    }
  `;
  return (
    <ProfileContainer>
      <ImageBox>
        <img src={src} alt="프로필 이미지" />
      </ImageBox>
    </ProfileContainer>
  );
}

export default ProfileUser;
