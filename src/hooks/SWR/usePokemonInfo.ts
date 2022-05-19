import axios from "axios";
import useSWR from "swr";
import { TPokemonInfo } from "~types/TPokemonInfo";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function usePokemonInfo(pkmName: string) {
  const { data: pokemonInfo, error } = useSWR<TPokemonInfo>(
    pkmName ? `https://pokeapi.co/api/v2/pokemon/${pkmName}/` : null,
    fetcher
  );
  const isLoading = !pokemonInfo && !error;

  return {
    pokemonInfo,
    error,
    isLoading,
  };
}
