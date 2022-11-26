import { navHeight } from "src/styles/global";
import styled from "styled-components";

export const Homepage = styled.div`
  padding-top: ${navHeight}rem;
`;

export const InvisibleDiv = styled.div`
  position: relative;
  bottom: 500px;
  width: 10px;
  height: 10px;

  background-color: transparent;

  pointer-events: none;

  @media screen and (min-width: 1024px) {
    bottom: 400px;
  }
`;

export const LoadingText = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 1.5rem;
  font-weight: 700;

  text-align: center;

  padding-bottom: 1.5rem;
`;
