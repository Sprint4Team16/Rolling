import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function PostButton({ btnDisable }) {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate('/list')} disabled={btnDisable}>
      생성하기
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  width: 720px;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: var(--${({ disabled }) => (disabled ? 'gray300' : 'purple600')});

  color: var(--white);
  text-align: center;
  /* Font/18 Bold */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 155.556% */
  letter-spacing: -0.18px;

  cursor: ${({ disabled }) => disabled && 'not-allowed'};

  @media (max-width: 768px) {
    width: 320px;
  }
`;

export default PostButton;