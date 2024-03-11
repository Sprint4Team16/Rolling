import { useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import { bold16 } from '../../styles/FontStyle';

const ShareBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 1rem 0.1rem;
  border-radius: 0.8rem;
  border: 1px solid var(--gray300);
  background: var(--white);
  box-shadow: 0rem 0.2rem 1.2rem 0rem rgba(0, 0, 0, 0.08);
`;

const ShareButton = styled.button`
  width: 13.8rem;
  padding: 1.2rem 1.6rem;
  align-items: center;
  color: var(--gray900);
  ${bold16}

  &:hover {
    background: var(--gray100);
  }
`;

function ShareToggle({ setIsKakaoOpen, setIsUrlCopy }) {
  const handleClickKakao = async (e) => {
    e.preventDefault();
    setIsKakaoOpen((prev) => !prev);
  };

  const handleClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickUrl = () => {
    setIsUrlCopy((prev) => !prev);
    setTimeout(() => {
      setIsUrlCopy(false);
    }, 5000);
  };

  const location = useLocation();
  const baseUrl = 'https://sp4-team16-rolling.netlify.app';

  return (
    <ShareBox>
      <ShareButton onClick={handleClickKakao}>카카오톡 공유</ShareButton>
      <ShareButton
        onClick={() => {
          handleClipBoard(`${baseUrl}${location.pathname}`);
          handleClickUrl();
        }}
      >
        URL 공유
      </ShareButton>
    </ShareBox>
  );
}

export default ShareToggle;
