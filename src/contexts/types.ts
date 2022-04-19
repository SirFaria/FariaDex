import { ReactNode } from "react";

export type TPokemon = {
  name: string;
  url: string;
} 

export type TSearchContext = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

export type TPokemonData = {
  count: number;
  next: string | null;
  previous: string | null;
  results: TPokemon[];
}

export type SearchContextProviderProps = {
  children: ReactNode;
}
