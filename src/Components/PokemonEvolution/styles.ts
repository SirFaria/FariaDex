import { darken } from "polished";
import styled from "styled-components";
import { TPokemonTypes } from "~types/TPokemonTypes";

// Evolution Container

export const EvolutionContainer = styled.div`
  display: flex;
  /* align-items: center; */
`;

export const EvoColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const ArrowColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

// Evolution Card

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
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
