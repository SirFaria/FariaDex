import axios from "axios";
import Head from "next/head";
import useSWRInfinite from "swr/infinite";
import CardSection from "../Components/CardSection";
import * as S from "./gen1.styles";
import { TPokemonData } from "~types/TPokemon";
import { BackToTopButton } from "src/Components/BackToTopButton";
import { HaikeiBackground } from "./home.styles";

const TOTAL_ITEMS = 151;
const ITEMS_PER_PAGE = 10;

const TOTAL_PAGES = Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE);

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function Home() {
  const getKey = (index: number) => {
    if (index > TOTAL_PAGES) {
      return null;
    }

    let params = `offset=${index * ITEMS_PER_PAGE}&limit=${ITEMS_PER_PAGE}`;

    const totalItemsShown = (index + 1) * ITEMS_PER_PAGE;

    if (totalItemsShown > TOTAL_ITEMS) {
      const itemsLeft = TOTAL_ITEMS - index * ITEMS_PER_PAGE;

      params = `offset=${index * ITEMS_PER_PAGE}&limit=${itemsLeft}`;
    }

    return `https://pokeapi.co/api/v2/pokemon?${params}`;
  };

  const { data, size, setSize } = useSWRInfinite<TPokemonData>(getKey, fetcher);

  const fetchNext = () => {
    if (size >= TOTAL_PAGES) {
      return;
    }

    setSize((state) => state + 1);
  };

  if (!data) {
    return null;
  }

  const pkmList = data?.map((response) => response.results).flat();

  return (
    <S.Homepage>
      <Head>
        <title>Faria Dex</title>
      </Head>
      <BackToTopButton />
      <HaikeiBackground />
      <CardSection pkmList={pkmList} />

      <button onClick={fetchNext}>Load More</button>
    </S.Homepage>
  );
}
