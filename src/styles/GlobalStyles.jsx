import { createGlobalStyle } from 'styled-components';
import './color.css';
import './font.css';
import reset from './reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 62.5%;
    font-family: 'Pretendard';
  }
`;
export default GlobalStyles;
