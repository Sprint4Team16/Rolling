import styled, { css } from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import EmojiDropDown from './EmojiDropDown';
import WrittenByIcons from './WrittenByIcons';
import ShareToggle from '../../modal/ShareToggle';
import KakaoModal from '../../modal/KakaoModal';
import ModalPortal from '../../modal/ModalPortal';
import Toast from '../../common/Toast';
import { Outlined36 } from '../../../styles/ButtonStyle';
import { bold18, bold28 } from '../../../styles/fontStyle';
import { DISPLAY_SIZE } from '../../../constants/SIZE_SET';

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubHeaderWrapper = styled.div`
  width: 100%;
  background-color: var(--white);
  position: sticky;
  top: 6.2rem;
  z-index: 99999;

  @media (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    top: 0;
  }
`;

const SubHeaderContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  max-width: 120rem;
  margin: 0 auto;
  padding: 1.3rem 0;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${DISPLAY_SIZE.MIN_TABLET}px) and (max-width: ${DISPLAY_SIZE.MAX_TABLET}px) {
    margin: 0 2.4rem;
  }
  @media (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    display: block;
    padding: 0;
  }
`;

const Name = styled.div`
  color: var(--gray800);
  ${bold28}

  @media (min-width: 470px) and (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    padding: 1.2rem 2rem;
  }
  @media (max-width: 469px) {
    padding: 1.2rem 2rem;
    color: var(--gray-800, #2b2b2b);

    ${bold18}
  }
`;

const SplitBarHorizontal = styled.div`
  display: none;
  width: 100%;
  height: 0.1rem;
  background-color: var(--gray200);

  @media (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    display: block;
  }
`;

const PostIdSetting = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    margin-left: 2.4rem;
    padding: 0.8rem 0rem;
  }
  @media (max-width: 469px) {
    margin-left: 2rem;
  }
`;

const WrittenBy = styled.div`
  ${FlexCenter}
  gap: 1.1rem;
  color: var(--gray900);
  ${bold18}

  @media (max-width: 1023px) {
    display: none;
  }
`;

const SplitBarVertical = styled.div`
  width: 0.1rem;
  height: 2.8rem;
  background-color: var(--gray200);
  line-height: 27px;
`;

const SplitBarVertical1 = styled(SplitBarVertical)`
  margin: 0 2.8rem;

  @media (max-width: 1023px) {
    display: none;
  }
`;

const SplitBarVertical2 = styled(SplitBarVertical)`
  margin: 0 1.3rem;
`;

const ShareButton = styled(Outlined36)`
  padding: 0.6rem 1.6rem;
  @media (max-width: 470px) {
    padding: 0.6rem 0.8rem;
  }
`;

const ShareWrapper = styled.div`
  position: absolute;
  top: 4.5rem;
  right: 0.2rem;
  z-index: 9999;
`;

const Container = styled(ToastContainer)`
  .Toastify__toast {
    font-size: 1.6rem;
    padding: 1.9rem 3rem;
    color: var(--white);
    align-items: center;
    justify-content: center;
    width: 52.4rem;
    margin: 0 auto;
    right: 33%;
  }

  .Toastify__toast-icon {
    width: 2.4rem;
    height: 2.4rem;
  }

  .Toastify__toast--success {
    background: var(--black);
  }
`;

function SubHeader({ name, peopleNum, profileUrl }) {
  const [shareToggle, setShareToggle] = useState(false);
  const [isKakaoOpen, setIsKakaoOpen] = useState(false);
  const [isUrlCopy, setIsUrlCopy] = useState(false);
  const ref = useRef();

  const handleOutsideClick = (e) => {
    if (shareToggle && (!ref.current || !ref.current.contains(e.target))) {
      setShareToggle(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [shareToggle]);

  const handleClickShare = (e) => {
    e.preventDefault();
    setShareToggle(!shareToggle);
  };

  return (
    <SubHeaderWrapper>
      <SubHeaderContainer>
        <Name>To. {name}</Name>
        <SplitBarHorizontal />
        <PostIdSetting>
          <WrittenBy>
            <WrittenByIcons profileUrl={profileUrl} peopleNum={peopleNum} />
            {peopleNum}명이 작성했어요!
          </WrittenBy>
          <SplitBarVertical1 />
          <EmojiDropDown />
          <SplitBarVertical2 />
          <ShareButton ref={ref} onClick={handleClickShare}>
            <img src="/img/shareIcon.svg" alt="" />
          </ShareButton>
          {shareToggle && (
            <ShareWrapper>
              <ShareToggle
                setIsKakaoOpen={setIsKakaoOpen}
                setIsUrlCopy={setIsUrlCopy}
              />
            </ShareWrapper>
          )}
          {isKakaoOpen && (
            <ModalPortal>
              <KakaoModal />
            </ModalPortal>
          )}
          {isUrlCopy && (
            <ModalPortal>
              <Container limit={1} />
              <Toast />
            </ModalPortal>
          )}
        </PostIdSetting>
      </SubHeaderContainer>
    </SubHeaderWrapper>
  );
}

export default SubHeader;
