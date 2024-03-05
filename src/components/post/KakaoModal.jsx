import styled from 'styled-components';
import ModalWindow from '../common/ModalWindow';

function KakaoModal() {
  const ShareContainer = styled.div`
    display: flex;
  `;
  const KakaoImg = styled.div`
    cursor: pointer;
  `;
  const ShareKakao = (
    <ShareContainer>
      <KakaoImg>
        <img src="/img/Kakao.svg" alt="카카오톡 공유" />
      </KakaoImg>
    </ShareContainer>
  );

  return <ModalWindow children={ShareKakao} />;
}

export default KakaoModal;
