import { darken } from "polished";
import { navHeight } from "src/styles/global";
import styled from "styled-components";
import { TPokemonTypes } from "~types/TPokemonTypes";

// Main

export const MainPanel = styled.div`
  padding-inline: 9rem;
  padding-top: calc(5.5rem + ${navHeight}rem);
`;

export const PokemonDetailsContainer = styled.div`
  background: ${(props) => props.theme.colors.secondary};

  margin-inline: auto;
  padding: 3rem;

  border-radius: 40px;

  display: flex;
  flex-direction: row;
  gap: 10rem;
`;

// Cards

export const TitleBox = styled.div<{ type: TPokemonTypes; left?: boolean }>`
  background: ${(props) => darken(0.07, props.theme.typeColors[props.type])};
  color: ${(props) => props.theme.colors.text};

  border-radius: 10px 10px 0 0;

  padding: 0.3rem;
  padding-left: ${(props) => (props.left ? "1.5rem" : "0.3rem")};

  font-size: 1.5rem;
  font-weight: 500;

  width: 100%;

  text-align: ${(props) => (props.left ? "left" : "center")};
  text-shadow: ${(props) => {
    if (props.theme.title === "dark") {
      return `1px 1px ${props.theme.colors.textSecondary};`;
    }
  }};
`;

export const InfoBox = styled.div<{
  noPaddingBottom?: boolean;
  noGap?: boolean;
}>`
  background: ${(props) => props.theme.colors.full};

  padding-bottom: ${(props) => (props.noPaddingBottom ? "0" : "0.5rem")};

  width: -webkit-fill-available;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${(props) => (props.noGap ? "0" : "0.5rem")};

  border-radius: 10px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

// Left container

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

// Name info

export const NameInfo = styled.div`
  background: ${(props) => props.theme.colors.full};

  border-radius: 20px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

export const ImageBox = styled.div<{ type: TPokemonTypes }>`
  background: ${(props) => darken(0.07, props.theme.typeColors[props.type])};

  border-radius: 20px;

  width: 100%;

  display: flex;
  justify-content: center;
`;

export const TextBox = styled.div`
  padding: 0.5rem;

  font-size: 1.5rem;
  font-weight: 500;

  text-transform: capitalize;

  display: flex;
  gap: 0.5rem;
`;

// Abilities Info

export const AbilityContainer = styled.div`
  padding: 0 0.8rem;

  display: flex;
  gap: 1.5rem;

  .hidden {
    font-size: 0.8rem;
  }
`;

export const AbilityBox = styled.div`
  font-size: 1rem;
  text-align: center;
  align-self: center;
`;

// Height and weight info

export const HeightWeightContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const HeightWeightBox = styled.p`
  font-size: 1rem;
  text-align: center;
`;
// ----------------------------------------------------------------- //

// Right container

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
