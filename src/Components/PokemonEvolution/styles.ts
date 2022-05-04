import { darken } from "polished";
import styled from "styled-components";
import { TPokemonTypes } from "~types/TPokemonTypes";

// Evolution Container

export const EvolutionContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  max-height: 344px;
  overflow-y: auto;
`;

export const EvoColumn = styled.div<{ isSticky?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 1.5rem;
  gap: 1.5rem;
  ${(props) => {
    if (props.isSticky) {
      return "position: sticky; top: 0px";
    }
  }}
`;

export const ArrowColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

// Arrow + Evolution Card

export const ArrowAndCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

// Evolution Card

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const ImageContainer = styled.div<{ type: TPokemonTypes }>`
  display: flex;
  background: ${(props) => darken(0.07, props.theme.typeColors[props.type])};
  border-radius: 50%;
`;

export const InfoContainer = styled.div<{ type: TPokemonTypes }>`
  background: ${(props) => darken(0.07, props.theme.typeColors[props.type])};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: capitalize;
  border-radius: 10px;
  padding: 0.8rem;
`;

export const NameContainer = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  text-shadow: ${(props) => {
    if (props.theme.title === "dark") {
      return `1px 1px ${props.theme.colors.textSecondary};`;
    }
  }};
`;
