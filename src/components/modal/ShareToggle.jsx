import { useLocation } from 'react-router-dom';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
// import Toast from '../common/Toast';

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

function ShareToggle({ setIsKakaoOpen }) {
  const handleClickKakao = (e) => {
    e.preventDefault();
    setIsKakaoOpen((prev) => !prev);
  };

  const handleClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('URL이 복사되었습니다.');
    } catch (error) {
      console.log(error);
    }
  };

  const location = useLocation();
  const baseUrl = 'http://localhost:3000';

  return (
    <ShareBox>
      <ShareButton onClick={handleClickKakao}>카카오톡 공유</ShareButton>
      <ShareButton
        onClick={() => handleClipBoard(`${baseUrl}${location.pathname}`)}
      >
        URL 공유
      </ShareButton>
    </ShareBox>
  );
}

export default ShareToggle;
