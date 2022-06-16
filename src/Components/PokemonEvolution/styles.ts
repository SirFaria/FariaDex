import styled from "styled-components";
import { TPokemonTypes } from "~types/TPokemonTypes";

// Evolution Container

export const EvolutionContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  padding: 1.5rem;

  max-height: 21.625rem;

  overflow-y: auto;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    max-height: fit-content;
    max-width: 100%;
    overflow: auto;
  }

  @media (max-width: 375px) {
  }
`;

export const EvoColumn = styled.div<{
  isSticky?: boolean;
  hasPaddingTop?: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.5rem;

  position: ${(props) => (props.isSticky ? "sticky" : "unset")};
  top: ${(props) => (props.isSticky ? "0px" : "unset")};

  @media (max-width: 1024px) {
    justify-content: ${(props) => (props.isSticky ? "flex-end" : "flex-start")};
    padding-top: ${(props) =>
      !props.isSticky && props.hasPaddingTop ? "1.2rem" : "unset"};
  }

  @media (max-width: 768px) {
    justify-content: ${(props) => (props.isSticky ? "center" : "unset")};
    padding-top: ${(props) =>
      !props.isSticky && props.hasPaddingTop ? "0.8rem" : "unset"};
  }

  @media (max-width: 600px) {
    flex-direction: ${(props) => (props.isSticky ? "unset" : "row")};
    position: ${(props) => (props.isSticky ? "sticky" : "unset")};
    left: ${(props) => (props.isSticky ? "0px" : "unset")};
    justify-content: ${(props) => (props.isSticky ? "center" : "flex-start")};
  }

  @media (max-width: 375px) {
    .arrow {
      margin-right: ${(props) => (props.isSticky ? "unset" : "1.5rem")};
    }
  }
`;

// Arrow + Evolution Card

export const ArrowAndCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0;
  }

  @media (max-width: 600px) {
    .arrow {
      transform: rotate(90deg);
    }
    flex-direction: column;
    gap: 0.5rem;
  }

  @media (max-width: 375px) {
  }
`;

// Evolution Card

export const CardContainer = styled.div<{ hasMarginBottom?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  ${(props) => (props.hasMarginBottom ? "margin-bottom: 1.5rem;" : "")}

  @media (max-width: 600px) {
    width: 12.5rem;
  }

  @media (max-width: 375px) {
    ${(props) => (props.hasMarginBottom ? "margin-right: 1.5rem;" : "")}
    margin-bottom: 0px;
    width: 11rem;
  }

  @media (max-width: 320px) {
    width: 8rem;
  }
`;

export const ImageContainer = styled.div<{ type: TPokemonTypes }>`
  background: ${(props) => props.theme.typeColors[props.type]};
  display: flex;
  border-radius: 50%;
`;

export const InfoContainer = styled.div<{
  type: TPokemonTypes;
  secondEvo?: boolean;
}>`
  background: ${(props) => props.theme.typeColors[props.type]};
  color: ${(props) => props.theme.colors.text};

  padding: 0.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-transform: capitalize;

  border-radius: 10px;

  @media (max-width: 768px) {
    gap: 0.5rem;
    min-height: ${(props) => (props.secondEvo ? "7.125rem" : "unset")};
    justify-content: center;
    ul {
      flex-direction: column;
    }
  }
`;

export const NameContainer = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
`;
