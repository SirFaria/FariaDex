import axios from "axios";
import useSWR from "swr";
import { IApiResponse, TPokemonEvolutions } from "../../Types/TPokemonEvolution";



const fetcher = (url: string) => axios.get(url).then(res => res.data)

function getEvolutions(evolutionChain: IApiResponse):TPokemonEvolutions {
  const unevolved = evolutionChain.chain
  const hasEvo =  evolutionChain.chain.evolves_to.length > 0;

  const firstEvos = unevolved.evolves_to.map(firstEvo => {
    return {
      ...firstEvo,
      evolution_order: 'first',
      evolved_from: unevolved.species.name,
      evo_name: firstEvo.species.name,
    }
  });

  const secondEvos = firstEvos.map(firstEvo => {
    const secondEvoWithEvolvedFrom = firstEvo.evolves_to.map(evo => {
      return {
        ...evo,
        evolved_from: firstEvo.species.name,
        evolution_order: 'second',
        evo_name: evo.species.name,
      }
    });

    return secondEvoWithEvolvedFrom;
  }).flat();
  
  return {
    hasEvo,
    unevolved,
    firstEvos,
    secondEvos,
  }
}

export default function usePokemonEvolution (url: string) {
  
  const { data, error } = useSWR<IApiResponse>(url, fetcher);

  const pokemonEvolutions: TPokemonEvolutions | {} = data ? getEvolutions(data) : {};

  return {
    pokemonEvolutions,
    error,
  }
}