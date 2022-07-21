import { ReactNode } from "react";

export type TSearchContext = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

export type SearchContextProviderProps = {
  children: ReactNode;
};
