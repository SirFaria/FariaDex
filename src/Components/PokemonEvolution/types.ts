import { TPokemonEvolutions } from "~types/TPokemonEvolution";
import { TPokemonTypes } from "~types/TPokemonTypes";

export type TEvolutionCardsProps = {
  pkmName: string;
  key?: string;
  type: TPokemonTypes;
  hasMarginBottom?: boolean;
  secondEvo?: boolean;
};

export type TPokemonEvolutionProps = {
  pkmEvos: TPokemonEvolutions;
  type: TPokemonTypes;
};
