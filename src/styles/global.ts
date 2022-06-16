import styled, { createGlobalStyle } from "styled-components";

export const navHeight = 4.5;
export const contentPadding = 5;

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
    font-size: 1rem;
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.background};
    font-family: 'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased !important;
    font-weight: 300;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  width: min(81rem, 100%);

  margin-inline: auto;

  @media (max-width: 1024px) {
    width: min(50rem, 100%);
  }

  @media (max-width: 768px) {
    width: min(40rem, 100%);
  }

  @media (max-width: 375px) {
    width: 100%;
    padding-inline: 1rem;
  }

  @media (max-width: 320px) {
    width: 100%;
    padding-inline: 0.5rem;
  }
`;
