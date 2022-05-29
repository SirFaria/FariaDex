import styled from "styled-components";

export const TopButton = styled.a<{ scrollLocation?: boolean }>`
  position: fixed;
  bottom: 1rem;
  right: 2.5rem;
  z-index: 100;

  transition: all 200ms;

  ${(props) => (!props.scrollLocation ? "transform: scale(0);" : "")}
`;
