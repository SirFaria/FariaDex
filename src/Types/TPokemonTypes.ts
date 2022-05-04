export type TPokemonTypes =
  | "fire"
  | "grass"
  | "electric"
  | "water"
  | "ground"
  | "rock"
  | "fairy"
  | "poison"
  | "bug"
  | "dragon"
  | "psychic"
  | "flying"
  | "fighting"
  | "normal"
  | "ghost"
  | "ice"
  | "steel"
  | "dark";

export interface CardLiProp {
  typesArray: TPokemonTypesArray;
}

export type TPokemonTypesArray = Array<TPokemonTypes>;
