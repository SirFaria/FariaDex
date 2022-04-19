import { TPokemon } from "../../contexts/types";

export type TPokemonTypes = 
  "fire" |
  "grass" |
  "electric" |
  "water" |
  "ground" |
  "rock" |
  "fairy" |
  "poison" |
  "bug" |
  "dragon" |
  "psychic" |
  "flying" |
  "fighting" |
  "normal" | 
  "ghost" | 
  "ice" | 
  "steel" |
  "dark"


export type TPokemonInfo = {
  name: string;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      }
    }
  };
  types: {
    type: {
      name: TPokemonTypes
    }
  }[];
  id: number;
}

export type TCardSectionProps = {
  pkmList: TPokemon[];
}

export type TPokeCardProps = {
  pkmName: string;
}

export interface CardLiProp {
  typesArray: TPokemonTypesArray;
}

export type TPokemonTypesArray = Array<TPokemonTypes>





