import { TPokemonTypes } from "./TPokemonTypes";

export type TPokemonInfo = {
  abilities: {
    ability: {
      name: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  height: number;
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: IPokemonType[];
  weight: number;
};

export interface IPokemonType {
  type: {
    name: TPokemonTypes;
  };
}
