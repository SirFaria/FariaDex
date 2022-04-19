import axios from 'axios';
import Head from 'next/head'
import { useState } from 'react';
import useSWR from 'swr';
import CardSection from '../Components/CardSection';
import { TPokemon, TPokemonData } from '../contexts/types';
import * as S from './styles';



const fetcher = (url: string) => axios.get(url).then(res => res.data)

export default function Home () {
  // const [pokemonList, setPokemonList] = useState<TPokemon[]>([]);
  
  const { data: pokemonApiResponse } = useSWR<TPokemonData>('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151', fetcher);
  
  if(!pokemonApiResponse){
    return null
  }

  return (
    <S.Homepage>
      <Head>
        <title>Faria Dex</title>
      </Head>
      <S.HaikeiBackground />
      <CardSection pkmList={pokemonApiResponse.results}/>
    </S.Homepage>
  )
}

