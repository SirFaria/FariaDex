import axios from "axios";
import useSWRImmutable from "swr";
import { TPokemonSpecies } from "~types/TPokemonSpecies";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function usePokemonSpecies(pkmName: string) {
  const { data: pokemonSpecies, error } = useSWRImmutable<TPokemonSpecies>(
    pkmName ? `https://pokeapi.co/api/v2/pokemon-species/${pkmName}/` : null,
    fetcher
  );
  const isLoading = !pokemonSpecies && !error;

  return {
    pokemonSpecies,
    error,
    isLoading,
  };
}
