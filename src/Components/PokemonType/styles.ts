import { darken } from "polished";
import styled from "styled-components";
import { TPokemonTypes } from "~types/TPokemonTypes";

export const TypeContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 0.5rem;
`;

export const TypeBox = styled.li<{ type: TPokemonTypes }>`
  text-align: center;
  padding: 0.2rem;
  text-transform: capitalize;

  text-shadow: ${(props) => {
    if (props.theme.title === "light") {
      return `1px 1px ${props.theme.colors.text};`;
    }
  }};

  color: ${(props) => props.theme.colors.secondary};
  background: ${(props) => darken(0.07, props.theme.typeColors[props.type])};
  min-width: 3.6rem;
  border-radius: 10px;
`;
