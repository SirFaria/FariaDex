import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a{
    text-decoration: none;
  }

  body {
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.background};
    font-family: 'Ubuntu', sans-serif;
  }
`;
