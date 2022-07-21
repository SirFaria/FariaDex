import styled, { createGlobalStyle } from "styled-components";

export const navHeight = 4.5;
export const contentPadding = 5;
export const wrapperWidth = "min(81rem, 100%)";

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

    button {
      font-family: 'Ubuntu', sans-serif;
    }

  &::-webkit-scrollbar {
    width: 0.7rem;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.secondary};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primary};
  }
  
    &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.primaryI};
  }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  width: min(81rem, 95%);

  margin-inline: auto;

  @media (max-width: 1024px) {
    width: min(56rem, 95%);
  }

  @media (max-width: 768px) {
    width: min(40rem, 95%);
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
