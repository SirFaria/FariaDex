export type TPokemonSpecies = {
  evolution_chain: {
    url: string;
  };
  flavor_text_entries: TPokedexInfo[];
};

export type TPokedexInfo = {
  flavor_text: string;
  language: {
    name: string;
  };
};
