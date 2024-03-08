import styled from 'styled-components';

export const ButtonCommon = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 1rem;

  cursor: ${({ disabled }) => disabled && 'not-allowed'};
`;

const PrimaryBtn = styled(ButtonCommon)`
  background: var(--${({ disabled }) => (disabled ? 'gray300' : 'purple600')});
  color: var(--white);

  // active 여부
  &:hover:enabled {
    background: var(--purple700);
  }

  &:active:enabled {
    background: var(--purple800);
  }

  &:focus:enabled {
    /* border: 2px solid var(--purple900); */
    background: var(--purple800);
  }
`;

export const Primary56 = styled(PrimaryBtn)`
  padding: 1.4rem 2.4rem;
  border-radius: 1.2rem;

  /* Font/18 Bold */
  font-family: Pretendard;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.8rem; /* 155.556% */
  letter-spacing: -0.18px;
`;

export const Primary40 = styled(PrimaryBtn)`
  padding: 0.7rem 1.6rem;
  border-radius: 0.6rem;
  /* Font/16 Regular */
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  line-height: 2.6rem; /* 162.5% */
  letter-spacing: -0.16px;
`;

export const Secondary = styled(ButtonCommon)`
  padding: 0.7rem 1.6rem;
  border-radius: 0.6rem;
  color: var(--${({ disabled }) => (disabled ? 'white' : 'purple700')});
  border: 1px solid var(--purple600);

  &:hover:enabled {
    background: var(--purple700);
  }

  &:active:enabled {
    background: var(--purple800);
  }

  &:focus:enabled {
    /* border: 2px solid var(--purple900); */
    background: var(--purple800);
  }
`;

export const Outlined36 = styled(ButtonCommon)`
  padding: 0.6rem 1.6rem;
  border-radius: 0.6rem;
  background: var(--${({ disabled }) => (disabled ? 'gray300' : 'white')});
  color: var(--${({ disabled }) => (disabled ? 'white' : 'gray900')});
  border: 1px solid var(--gray300);
  /* Font/16 Regular */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  &:hover:enabled {
    background: var(--gray100);
  }

  &:active:enabled {
    background: var(--gray100);
  }

  &:focus:enabled {
    border: 1px solid var(--gray500);
  }
`;
