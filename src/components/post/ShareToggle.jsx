import { useState, useRef } from 'react';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
// import Toast, { notify } from '../common/Toast';
import KakaoModal from './KakaoModal';
import ModalPortal from './ModalPortal';

const ShareBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 10px 1px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: #fff;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;

const ShareButton = styled.button`
  width: 138px;
  padding: 12px 16px;
  align-items: center;
  color: #181818;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.16px;

  &:hover {
    background: #f6f6f6;
  }
`;

function ShareToggle() {
  const [isKakaoOpen, setIsKakaoOpen] = useState(false);
  const ref = useRef();

  console.log(isKakaoOpen);

  // const handleClipBoard = async (text) => {
  //   try {
  //     await navigator.clipboard.writeText(text);
  //     alert('URL이 복사 되었습니다.');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const urlBaseLink = 'http://localhost:3000/post/';
  // const handleCopyUrl = () => {
  //   handleClipBoard(`${urlBaseLink}${userId}`);
  // };
  // 임의로 /post:id 부분은 userId로 작성했습니다! 이후에 API

  return (
    <ShareBox>
      <ShareButton
        ref={ref}
        onClick={() => {
          setIsKakaoOpen((prev) => !prev);
        }}
      >
        카카오톡 공유
      </ShareButton>
      <ModalPortal>{isKakaoOpen === true ? <KakaoModal /> : null}</ModalPortal>
      <ShareButton>URL 공유</ShareButton>
    </ShareBox>
  );
}

export default ShareToggle;
