import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import useSWR from "swr";
import CardSection from "../Components/CardSection";
import * as S from "./gen1.styles";
import { TPokemonData } from "~types/TPokemon";
import { BackToTopButton } from "src/Components/BackToTopButton";
import { HaikeiBackground } from "./home.styles";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function Home() {
  const { data: pokemonApiResponse } = useSWR<TPokemonData>(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151",
    fetcher
  );

  if (!pokemonApiResponse) {
    return null;
  }

  return (
    <S.Homepage>
      <Head>
        <title>Faria Dex</title>
      </Head>
      <BackToTopButton />
      <HaikeiBackground />
      <CardSection pkmList={pokemonApiResponse.results} />
    </S.Homepage>
  );
}
