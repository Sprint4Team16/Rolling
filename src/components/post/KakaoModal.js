import styled from 'styled-components';
import Modal from 'react-modal';
// import { useKakaoShare } from './useKakaoShare';

const ModalBox = styled.div`
  border-radius: 10px;
  padding: 30px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgContainer = styled.div`
  width: 24px;
  height: 24px;
`;

const ModalContents = styled.p`
  font-size: 16px;
  cursor: pointer;
`;

function KakaoModal({ isOpen, onClose }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <ModalBox>
        <ImgContainer
          role="button"
          onClick={onClose}
          onKeyDown={handleKeyDown}
          tabIndex="0"
        >
          <img src="img/close.png" alt="모달 닫기 버튼" />
        </ImgContainer>
        <ModalContents>카카오톡 공유하기</ModalContents>
      </ModalBox>
    </Modal>
  );
}

export default KakaoModal;
