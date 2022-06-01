import { darken } from "polished";
import styled from "styled-components";
import { TPokemonTypes } from "~types/TPokemonTypes";

export const TypeContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 0.5rem;

  list-style: none;
`;

export const TypeBox = styled.li<{ type: TPokemonTypes }>`
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => darken(0.07, props.theme.typeColors[props.type])};

  padding: 0.2rem;
  padding-inline: 0.3rem;

  min-width: 3.6rem;

  border-radius: 10px;

  font-size: 0.875rem;
  text-align: center;
  text-transform: capitalize;
`;
