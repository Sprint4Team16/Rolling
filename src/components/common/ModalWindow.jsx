import { useState } from 'react';
import styled from 'styled-components';
// import { useKakaoShare } from './useKakaoShare';

const ModalBox = styled.div`
  padding: 50px 20px;
  border-radius: 10px;
`;

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
  width: 30%;
  height: 50%;
  transform: translate(-50%, -30%);
`;

const CloseBtn = styled.button`
  width: 120px;
  padding: 7px 16px;
  align-items: center;
  border-radius: 6px;
  background: var(--Purple-600, #9935ff);
  color: #fff;
  font-size: 16px;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.16px;
  cursor: pointer;
  position: absolute;
  bottom: 40px;
`;

const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 10px;
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

function ModalWindow({ children }) {
  const [modal, setModal] = useState(true);

  const handleClickBtn = (e) => {
    e.preventDefault();
    setModal((prev) => !prev);
  };

  return (
    modal && (
      <ModalBox>
        <Mask />
        <ModalBody>
          <ModalContents>
            {children}
            <CloseBtn onClick={handleClickBtn}>확인</CloseBtn>
          </ModalContents>
        </ModalBody>
      </ModalBox>
    )
  );
}

export default ModalWindow;
