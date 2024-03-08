import styled from 'styled-components';

export const ButtonCommon = styled.button`
  display: flex;
  justify-content: center;
  gap: 1rem;
  background: var(--${({ disabled }) => (disabled ? 'gray300' : 'purple600')});
  text-align: center;
`;

const PrimaryBtn = styled(ButtonCommon)`
  padding: 1.4rem 2.4rem;

  // active 여부
  &:hover {
    background: var(--purple700);
  }

  &:active {
    background: var(--purple800);
  }

  &:focus {
    /* border: 2px solid var(--purple900); */
    background: var(--purple800);
  }
`;

export const Primary56 = styled(PrimaryBtn)`
  padding: 1.4rem 2.4rem;
  border-radius: 1.2rem;
  background: var(--${({ disabled }) => (disabled ? 'gray300' : 'purple600')});
  /* Font/18 Bold */
  color: var(--white);

  /* Font/18 Bold */
  font-family: Pretendard;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.8rem; /* 155.556% */
  letter-spacing: -0.18px;
`;

export const Primary40 = styled(PrimaryBtn)`
  border-radius: 0.6rem;
  background: var(--${({ disabled }) => (disabled ? 'gray300' : 'purple600')});
  /* Font/16 Regular */
`;

export const Secondary = styled(ButtonCommon)`
  padding: 0.7rem 1.6rem;

  &:hover {
    background: var(--gray300);
  }

  &:active {
    background: var(--gray100);
  }

  &:focus {
    border: 1px solid var(--gray500);
  }
`;
