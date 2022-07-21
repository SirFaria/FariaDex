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
  padding-top: ${navHeight + 4}rem;
  width: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding-top: ${navHeight + 3}rem;
    flex-direction: column;
    align-items: center;
  }

  section {
    max-width: 600px;

    @media (max-width: 1024px) {
      max-width: 490px;
    }

    @media (max-width: 768px) {
      max-width: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 2.5rem;
    }

    @media (max-width: 375px) {
      margin-bottom: 2rem;
    }

    span {
      color: ${(props) => props.theme.colors.textSecondary};
      font-size: 2.5rem;
      font-weight: bold;

      strong {
        color: ${(props) => props.theme.colors.primary};
      }

      @media (max-width: 1024px) {
        font-size: 2rem;
      }

      @media (max-width: 375px) {
        font-size: 1.5rem;
        text-align: center;
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

      @media (max-width: 1024px) {
        font-size: 3rem;
        line-height: 3.5rem;
        margin-top: 0.5rem;

        span {
          font-size: 3rem;
        }
      }

      @media (max-width: 768px) {
        font-size: 2.5rem;
        line-height: 3rem;
        text-align: center;

        span {
          font-size: 2.5rem;
        }
      }

      @media (max-width: 375px) {
        font-size: 2rem;
        line-height: 2.4rem;

        span {
          font-size: 2rem;
        }
      }
    }

    p {
      color: rgba(113, 128, 150, 0.6);
      font-size: 1.5rem;
      font-weight: 500;
      font-style: italic;
      margin-top: 1.5rem;

      @media (max-width: 1024px) {
        font-size: 1.3rem;
      }

      @media (max-width: 768px) {
        margin-top: 1rem;
        text-align: center;
      }
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

      @media (max-width: 1024px) {
        width: 10.5rem;
        height: 3rem;
      }

      @media (max-width: 768px) {
        margin-top: 1.5rem;
        font-size: 1.1rem;
        width: 10rem;
        height: 2.7rem;
      }
    }
  }
`;

export const PikachuImage = styled.div`
  position: relative;
  width: 550px;
  height: 550px;

  @media (max-width: 1024px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
