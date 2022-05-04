import { createContext, useContext, useState } from "react";
import { SearchContextProviderProps, TSearchContext } from "./types";

export const SearchContext = createContext({} as TSearchContext);

export function SearchContextProvider({
  children,
}: SearchContextProviderProps) {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => {
  return useContext(SearchContext);
};
