import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Primary40 } from '../../styles/ButtonStyle';
import { DISPLAY_SIZE } from '../../constants/SIZE_SET';

const ModalBox = styled.div`
  border-radius: 1rem;
`;

const BlackBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -30%);
`;

const CloseBtn = styled(Primary40)`
  width: 12rem;
  position: absolute;
  bottom: 4rem;

  &:hover {
    background: var(--purple700);
  }
`;

const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  width: 60rem;
  height: 47.6rem;
  border-radius: 2rem;

  @media (max-width: ${DISPLAY_SIZE.MAX_MOBILE}px) {
    max-width: 52rem;
    width: 90%;
  }
`;

function ModalWindow({ children }) {
  const [modal, setModal] = useState(true);

  const handleClickBtn = (e) => {
    e.preventDefault();
    setModal((prev) => !prev);
  };

  useEffect(() => {}, [modal]);

  return (
    modal && (
      <ModalBox>
        <BlackBackground />
        <ModalBody>
          <ModalContents>{children}</ModalContents>
          <CloseBtn onClick={handleClickBtn}>확인</CloseBtn>
        </ModalBody>
      </ModalBox>
    )
  );
}

export default ModalWindow;
