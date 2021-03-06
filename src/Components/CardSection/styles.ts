import { darken, lighten, saturate } from "polished";
import { contentPadding } from "src/styles/global";
import styled from "styled-components";
import { CardLiProp, TPokemonTypes } from "~types/TPokemonTypes";

export const PokeCardWrapper = styled.div`
  display: flex;
  justify-content: center;

  /* width: min(98rem, 100%); */
  width: min(81rem, 100%);

  margin-inline: auto;
`;

export const PokeCardContainer = styled.ul`
  padding-block: ${contentPadding}rem 1.5rem;

  list-style: none;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-block: 3rem 1.5rem;
    width: 90%;
  }

  @media (max-width: 375px) {
    width: 100%;
  }

  @media (max-width: 320px) {
    padding-block: 2rem 1.5rem;
  }
`;

export const PokeCard = styled.li<CardLiProp>`
  background: ${(props) => {
    if (props.typesArray.length == 2) {
      return `linear-gradient(-225deg, ${
        props.theme.typeColors[props.typesArray[0]]
      }, ${props.theme.typeColors[props.typesArray[1]]} )`;
    }
    return props.theme.typeColors[props.typesArray[0]];
  }};

  padding: 1.25rem;

  display: flex;
  align-items: center;

  border-radius: 20px;

  position: relative;

  cursor: pointer;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02) translateY(-5px);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding: 1.25rem 0;
  }
`;
export const ImageBackground = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 8rem;
    height: 8rem;
  }

  @media (max-width: 375px) {
    width: 5rem;
    height: 5rem;
  }

  @media (max-width: 320px) {
    width: 4rem;
    height: 4rem;
  }
`;

export const CardDetails = styled.div`
  color: ${(props) => props.theme.colors.text};

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;

  text-transform: capitalize;

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 0;
    justify-content: space-evenly;

    width: 100%;

    ul {
      flex-direction: column;
    }
  }
`;

export const InfoAndNameWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 375px) {
    gap: 0.5rem;
  }
`;

export const DexNumber = styled.span`
  background-color: rgba(0, 0, 0, 0.2);
  ${(props) => {
    if (props.theme.title == "dark") {
      return "background-color: rgba(255, 255, 255, 0.2);";
    }
  }}

  width: fit-content;

  padding: 0.3rem 0.5rem;

  text-align: center;

  border-radius: 20px;
`;

export const TypeContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 0.5rem;

  list-style: none;
`;
