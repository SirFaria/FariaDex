export type TPokemon = {
  name: string;
  url: string;
} 

export type TPokemonData = {
  count: number;
  next: string | null;
  previous: string | null;
  results: TPokemon[];
}