import styled from 'styled-components';

function ProfileUser({ src, last, peopleNum }) {
  const ProfileContainer = styled.div`
    display: flex;
    position: relative;
  `;

  const ImageBox = styled.div`
    width: 2.8rem;
    height: 2.8rem;
    margin-right: ${last ? '0' : '-2.4rem'};

    img {
      width: 100%;
      height: 100%;
      border-radius: 14rem;
      border: 0.14rem solid #e3e3e3;
      position: relative;
      z-index: ${last ? '2' : '1'};
    }
  `;

  const RemainBox = styled.div`
    width: 2.8rem;
    height: 2.8rem;
    margin-left: -1.2rem;
    background: var(--white);
    border-radius: 14rem;
    border: 0.14rem solid #e3e3e3;
    z-index: 3;
    text-align: center;

    p {
      font-size: 1.2rem;
      color: #484848;
    }
  `;

  return (
    <ProfileContainer>
      <ImageBox>
        <img src={src} alt="프로필 이미지" />
      </ImageBox>
      {peopleNum > 0 && (
        <RemainBox>
          <p>{peopleNum}</p>
        </RemainBox>
      )}
    </ProfileContainer>
  );
}

export default ProfileUser;
