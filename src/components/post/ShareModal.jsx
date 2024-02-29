import { useState } from 'react';
import styled from 'styled-components';
import KakaoModal from './KakaoModal';

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

function ShareModal() {
  const [showModal, setShowModal] = useState(false);
  const [clickValue, setClickValue] = useState('');

  const handleShowModal = (e) => {
    e.preventDefault();
    setShowModal(true);
    setClickValue(e.target.textContent);
  };

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

  return (
    <ShareBox>
      <ShareButton onClick={handleShowModal}>카카오톡 공유</ShareButton>
      <ShareButton onClick={handleShowModal}>URL 공유</ShareButton>
      {showModal && clickValue === '카카오톡 공유' ? <KakaoModal /> : null}
    </ShareBox>
  );
}

export default ShareModal;
