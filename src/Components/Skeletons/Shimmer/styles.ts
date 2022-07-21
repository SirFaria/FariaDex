import styled, { keyframes } from "styled-components";

const loading = keyframes`
  0% {transform: translateX(-150%)}
  100% {transform: translateX(150%)}
`;

export const ShimmerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${loading} 1.5s infinite;
`;

export const Shimmer = styled.div`
  width: 50%;
  height: 100%;
  background: ${(props) => props.theme.skeletonColors.shimmer};
  transform: skewX(-20deg);
  box-shadow: 0 0 30px 30px rgba(255, 255, 255, 0.05);
`;
