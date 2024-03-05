import styled from 'styled-components';
// import { useKakaoShare } from './useKakaoShare';

const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalContents = styled.button`
  background: white;
  padding: 1rem;
  width: 400px;
  height: auto;

  &:hover {
    background: #f6f6f6;
  }
`;

function KakaoModal() {
  console.log('호출됏니?');

  return (
    <div className="MyModal">
      <Mask />
      <ModalBody>
        <ModalContents>
          <h3>모달 타이틀</h3>
          <p>모달 텍스트 입니다.</p>
          <button type="submit">닫기</button>
        </ModalContents>
      </ModalBody>
    </div>
  );
}

export default KakaoModal;
