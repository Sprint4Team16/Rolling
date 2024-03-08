import { useState } from 'react';
import styled from 'styled-components';
import { Primary40 } from './Buttons/ButtonStyle';
// import { useKakaoShare } from './useKakaoShare';

const ModalBox = styled.div`
  border-radius: 10px;
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
  width: 120px;
  position: absolute;
  bottom: 40px;
`;

const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  width: 600px;
  height: 476px;
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
