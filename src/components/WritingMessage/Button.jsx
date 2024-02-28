import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  display: flex;
  width: 720px;
  height: 56px;
  margin: 60px auto;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  color: var(--white);
  background-color: var(--purple600);
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  letter-spacing: -0.18px;
`;

function Button() {
  return (
    <ButtonContainer>
      <Link to="/">생성하기</Link>
    </ButtonContainer>
  );
}

export default Button;
