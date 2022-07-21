interface TEvolveTo {
  evolution_details: [];
  evolves_to: TEvolveTo[];
  is_baby: boolean;
  species: {
    name: string;
  };
}

type TPokemonEvolutionChain = {
  evolution_details: [];
  evolves_to: TEvolveTo[];
  is_baby: boolean;
  species: {
    name: string;
  };
};

export interface IApiResponse {
  chain: TPokemonEvolutionChain;
}

export interface IPokemonEvolutions extends TEvolveTo {
  evolution_order: string;
  evolved_from: string;
  evo_name: string;
}

export type TPokemonEvolutions = {
  hasEvo: boolean;
  unevolved: IApiResponse["chain"];
  firstEvos: IPokemonEvolutions[];
  secondEvos: IPokemonEvolutions[];
};

// assert function to ensure object is from type TPokemonEvolution
export const isPokemonEvolutions = (
  pkmEvos: TPokemonEvolutions | any
): pkmEvos is TPokemonEvolutions => {
  return !!pkmEvos.unevolved;
};
