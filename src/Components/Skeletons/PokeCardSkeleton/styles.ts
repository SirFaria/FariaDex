import styled from "styled-components";

export const SkeletonWrapper = styled.div`
  background: ${(props) => props.theme.skeletonColors.background};
  height: 367px;
  width: 240px;
  border-radius: 20px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 0;
    justify-content: space-evenly;

    width: 100%;
    height: auto;
    padding: 1.25rem 0;
  }
`;

export const TextTitleWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  position: relative;

  @media (max-width: 768px) {
    width: 30%;
    gap: 0.5rem;
  }
`;

export const TextWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;

  @media (max-width: 768px) {
    width: 20%;
  }
`;

export const SkeletonElement = styled.div`
  background: ${(props) => props.theme.skeletonColors.primary};
  border-radius: 4px;

  &.image {
    width: 9.375rem;
    height: 9.375rem;
    border-radius: 50%;

    @media (max-width: 375px) {
      width: 5rem;
      height: 5rem;
    }

    @media (max-width: 320px) {
      width: 4rem;
      height: 4rem;
    }
  }

  &.title {
    width: 100%;
    height: 1.7rem;
  }

  &.text {
    width: 30%;
    height: 1.7rem;

    @media (max-width: 768px) {
      width: 40%;
      gap: 0.5rem;
    }
  }
`;
