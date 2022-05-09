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

export type TPokemonTypesArray = Array<TPokemonTypes>;

export interface CardLiProp {
  typesArray: TPokemonTypesArray;
}
