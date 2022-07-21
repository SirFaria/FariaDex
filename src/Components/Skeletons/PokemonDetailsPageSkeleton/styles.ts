import styled, { keyframes } from "styled-components";

export const PokemonDetailsContainerSkeleton = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 40px;
  width: 100%;
  min-height: 719.16px;
  padding: 3rem;
  display: flex;
  gap: 11.875rem;

  @media (max-width: 1024px) {
    padding: 2rem;
    flex-direction: column;
    gap: 2rem;
  }

  @media (max-width: 375px) {
    padding: 0;
  }
`;

export const SkeletonWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &.left {
    width: fit-content;

    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  @media (max-width: 1024px) {
    height: fit-content;
  }
`;

export const NameInfoSkeleton = styled.div`
  background: ${(props) => props.theme.skeletonColors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  overflow: hidden;

  width: 250px;
  border-radius: 20px;
  height: 100%;

  @media (max-width: 1024px) {
    padding: 1rem;
    width: 100%;
    gap: 1rem;
  }
`;

export const InfoSkeleton = styled.div`
  background: ${(props) => props.theme.skeletonColors.background};
  border-radius: 20px;
  height: 30%;
  padding-inline: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    justify-content: center;
    width: 100%;
    padding: 1rem;
  }
`;

export const SkeletonElement = styled.div`
  background: ${(props) => props.theme.skeletonColors.primary};
  border-radius: 4px;

  &.image {
    width: 9.375rem;
    height: 9.375rem;
    border-radius: 50%;
  }

  &.title {
    width: 70%;
    height: 1.7rem;
    margin-top: 1rem;

    @media (max-width: 1024px) {
      margin-top: 0;
    }
  }

  &.text {
    width: 100%;
    height: 1rem;
  }
`;

// Animation effect
