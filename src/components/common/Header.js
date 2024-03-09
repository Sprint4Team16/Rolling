import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Outlined40 } from '../../styles/ButtonStyle';

const StyledNav = styled.nav`
  width: 100%;
  background: #fff;
  position: sticky;
  border-bottom: 0.1rem solid #ccc;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

const StyledHeader = styled.div`
  max-height: 6.4rem;
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.1rem 0rem;
  @media (max-width: 1247px) {
    margin: 0 2.4rem;
  }
`;

const Button = styled(Outlined40)``;

const LogoURL = styled.a`
  display: flex;
  padding: 0.6rem 0;
  gap: 0.8rem;
  align-items: center;
`;
const LogoText = styled.div`
  color: var(--gray-light-gray-90, #4a494f);
  font-size: 2rem;
  font-weight: 700;
`;

function Header({ showButton }) {
  return (
    <StyledNav>
      <StyledHeader>
        <LogoURL href="/">
          <img src="/img/logo.svg" alt="로고 사진" />
          <LogoText>Rolling</LogoText>
        </LogoURL>
        {showButton && (
          <Link to="/post">
            <Button>롤링 페이퍼 만들기</Button>
          </Link>
        )}
      </StyledHeader>
    </StyledNav>
  );
}

export default Header;
