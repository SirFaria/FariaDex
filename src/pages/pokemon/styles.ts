import { darken } from "polished";
import { contentPadding, navHeight } from "src/styles/global";
import styled from "styled-components";
import { TPokemonTypes } from "~types/TPokemonTypes";

// Main

export const MainPanel = styled.div`
  padding-top: calc(${contentPadding}rem + ${navHeight}rem);
  padding-bottom: 1.5rem;

  @media (max-width: 1024px) {
    padding-top: calc(3rem + ${navHeight}rem);
  }
`;

export const PokemonDetailsContainer = styled.div`
  background: ${(props) => props.theme.colors.secondary};

  width: 100%;

  padding: 3rem;

  border-radius: 40px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 3rem;

  position: relative;

  @media (max-width: 1344px) {
    padding: 3rem 0;
    gap: 0;
  }

  @media (max-width: 1024px) {
    padding: 2rem;
    flex-direction: column;
    gap: 2rem;
  }

  @media (max-width: 375px) {
    padding: 0;
  }
`;

// Cards

export const TitleBox = styled.div<{ type: TPokemonTypes; left?: boolean }>`
  background: ${(props) => props.theme.typeColors[props.type]};
  color: ${(props) => props.theme.colors.text};

  border-radius: 10px 10px 0 0;

  padding: 0.3rem;
  padding-left: ${(props) => (props.left ? "1.5rem" : "0.3rem")};

  font-size: 1.5rem;
  font-weight: 500;

  width: 100%;

  text-align: ${(props) => (props.left ? "left" : "center")};
`;

export const InfoBox = styled.div<{
  noPaddingBottom?: boolean;
  noGap?: boolean;
  left?: boolean;
  stretch?: boolean;
}>`
  color: ${(props) => props.theme.colors.textSecondary};
  background: ${(props) => props.theme.colors.secondaryLight};

  padding-bottom: ${(props) => (props.noPaddingBottom ? "0" : "0.5rem")};

  width: -webkit-fill-available;

  display: flex;
  align-items: ${(props) =>
    props.left ? "flex-start" : props.stretch ? "stretch" : "center"};
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${(props) => (props.noGap ? "0" : "0.5rem")};

  border-radius: 10px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

// Buttons

export const BackAndNextButton = styled.a<{ type: TPokemonTypes }>`
  background: ${(props) => props.theme.typeColors[props.type]};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 8px;
  width: 3rem;
  height: 3rem;
  position: absolute;
  z-index: 5;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  span {
    color: ${(props) => props.theme.colors.text};
    font-size: 1.2rem;
    display: none;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    white-space: nowrap;
  }

  svg {
    width: 2rem;
    height: 2rem;
    color: ${(props) => props.theme.colors.text};
  }

  &.back {
    left: 0;
    top: 10%;
    transform: translate(-50%, -50%);

    svg {
      transform: rotate(-90deg);
    }

    @media (max-width: 1344px) {
      transform: translate(0);
      align-self: center;
      margin-inline: auto;
    }

    @media (max-width: 375px) {
      margin-top: 2rem;
    }
  }

  &.next {
    right: 0;
    top: 10%;
    transform: translate(50%, -50%);

    svg {
      transform: rotate(90deg);
    }

    @media (max-width: 1344px) {
      transform: translate(0);
      align-self: center;
      margin-inline: auto;
    }

    @media (max-width: 375px) {
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 1344px) {
    position: unset;
  }

  @media (max-width: 1024px) {
    display: flex;
    gap: 0.5rem;
    width: fit-content;
    padding: 0 0.5rem;

    span {
      display: block;
      opacity: 1;
      visibility: visible;
      width: min-content;
    }
  }
`;

// Left container

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

// Name info

export const NameInfo = styled.div`
  color: ${(props) => props.theme.colors.textSecondary};
  background: ${(props) => props.theme.colors.secondaryLight};

  border-radius: 20px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

export const ImageBox = styled.div<{ type: TPokemonTypes }>`
  background: ${(props) => props.theme.typeColors[props.type]};

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
  justify-content: space-between;
  flex-direction: column;

  margin-left: auto;

  @media (max-width: 1024px) {
    gap: 2rem;
    margin-left: 0;
  }
`;
