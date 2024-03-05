// import styled from 'styled-components';
// import { useKakaoShare } from './useKakaoShare';
import './KakaoModal.css';

// const ModalBox = styled.div`
//   display: inline-flex;
//   flex-direction: column;
//   padding: 40px 20px;
//   border-radius: 8px;
//   border: 1px solid #ccc;
//   background: #fff;
//   box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
//   z-index: 9999;
// `;

// const ModalContents = styled.button`
//   width: 400px;
//   padding: 12px 16px;
//   align-items: center;
//   color: #181818;
//   font-size: 16px;
//   line-height: 26px;
//   letter-spacing: -0.16px;

//   &:hover {
//     background: #f6f6f6;
//   }
// `;

function KakaoModal() {
  console.log('호출됏니?');

  return (
    <div className="MyModal">
      <div className="Mask" />
      <div className="Modal-body">
        <div className="content">
          <h3>모달 타이틀</h3>
          <p>모달 텍스트 입니다.</p>
          <button type="submit">닫기</button>
        </div>
      </div>
    </div>
  );
}

export default KakaoModal;
