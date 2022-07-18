import { navHeight } from "src/styles/global";
import styled from "styled-components";

export const HaikeiBackground = styled.div`
  background-image: ${(props) => {
    if (props.theme.title == "dark") {
      return `url('/haikei-background-dark.svg')`;
    }
    return `url('/haikei-background-light.svg')`;
  }};
  background-repeat: no-repeat;
  background-size: cover;

  position: fixed;
  inset: 0;
  z-index: -999;
`;

export const Homepage = styled.main`
  padding-top: ${navHeight + 9}rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  section {
    max-width: 600px;

    span {
      color: ${(props) => props.theme.colors.textSecondary};
      font-size: 2.5rem;
      font-weight: bold;

      strong {
        color: ${(props) => props.theme.colors.primary};
      }
    }

    h1 {
      color: ${(props) => props.theme.colors.textSecondary};
      font-size: 4rem;
      font-weight: 700;
      line-height: 4.5rem;
      margin-top: 1.5rem;

      span {
        color: ${(props) => props.theme.colors.primary};
        font-size: 4rem;
        font-weight: 700;
      }
    }

    p {
      color: rgba(113, 128, 150, 0.6);
      font-size: 1.5rem;
      font-weight: 500;
      font-style: italic;
      margin-top: 1.5rem;
    }

    button {
      background: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.textSecondary};
      font-size: 1.2rem;
      font-weight: 500;
      margin-top: 1.8rem;
      width: 12.5rem;
      height: 3.2rem;
      border: none;
      border-radius: 25px;
      cursor: pointer;

      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

      transition: all ease 0.2s;

      &:hover {
        filter: brightness(0.9);
        transform: scale(1.02) translateY(-1px);
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
      }
    }
  }
`;

export const PikachuImage = styled.div`
  position: relative;
  width: 40%;
  height: 200%;
`;
