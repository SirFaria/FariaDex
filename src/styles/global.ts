import { createGlobalStyle } from "styled-components";

export const navHeight = 5;

export default createGlobalStyle`

  html {
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    transition: background ease 200ms;
  }

  a {
    text-decoration: none;
  }

  body {
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.background};
    font-family: 'Ubuntu', sans-serif;
  }
`;
