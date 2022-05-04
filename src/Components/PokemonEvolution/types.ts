import { TPokemonEvolutions } from "../../Types/TPokemonEvolution";
import { TPokemonTypes } from "../../Types/TPokemonTypes";


export type TEvolutionCardsProps = {
  pkmName: string;
  key: string;
  type: TPokemonTypes;
}

export type TPokemonEvolutionProps = {
  pkmEvos: TPokemonEvolutions;
  type: TPokemonTypes;
}