import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a,
  button {
    cursor: pointer;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: #191919;
  }
`;

export default GlobalStyle;
