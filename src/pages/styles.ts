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

export const Homepage = styled.div`
  padding-top: ${navHeight}rem;
`;
