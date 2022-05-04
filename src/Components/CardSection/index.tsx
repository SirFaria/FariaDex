import Link from "next/link";
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
    <section>
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
    </section>
  );
}

export default CardSection;
