import axios from "axios";
import useSWR from "swr";
import { TPokemonSpecies } from "../../Types/TPokemonSpecies";


const fetcher = (url: string) => axios.get(url).then(res => res.data)

export default function usePokemonSpecies (pkmName: string) {
  
  const { data: pokemonSpecies, error } = useSWR<TPokemonSpecies>(`https://pokeapi.co/api/v2/pokemon-species/${pkmName}/`, fetcher);  
  const isLoading = !pokemonSpecies && !error

  return {
    pokemonSpecies,
    error,
    isLoading,
  }
}