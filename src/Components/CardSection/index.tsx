import Link from "next/link";
import { Wrapper } from "src/styles/global";
import { useSearch } from "../../contexts/searchContext";
import PokeCard from "./PokeCard";
import * as S from "./styles";
import { TCardSectionProps } from "./types";

function CardSection({ pkmList }: TCardSectionProps) {
  const { searchValue } = useSearch();

  const filteredPokemon = pkmList.filter((pkm) =>
    pkm.name.includes(searchValue.toLowerCase())
  );

  return (
    <Wrapper>
      <S.PokeCardContainer>
        {filteredPokemon.map((pkm) => {
          return (
            <Link href={`/pokemon/${pkm.name}`} key={pkm.url}>
              <a>
                <PokeCard pkmName={pkm.name} />
              </a>
            </Link>
          );
        })}
      </S.PokeCardContainer>
    </Wrapper>
  );
}

export default CardSection;
