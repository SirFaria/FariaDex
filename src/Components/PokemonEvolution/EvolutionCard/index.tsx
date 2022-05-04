import Image from "next/image";
import usePokemonInfo from "../../../hooks/SWR/usePokemonInfo";
import PokemonType from "../../PokemonType";
import * as S from "../styles";
import { TEvolutionCardsProps } from "../types";

function EvolutionCard({ pkmName, type }: TEvolutionCardsProps) {
  const { pokemonInfo } = usePokemonInfo(pkmName);

  const isLoading = !pokemonInfo;
  if (isLoading) {
    return null;
  }

  return (
    <S.CardContainer>
      <S.ImageContainer type={type}>
        <Image
          className="pokemon-image"
          src={pokemonInfo.sprites.other["official-artwork"].front_default}
          width={200}
          height={200}
          alt={pokemonInfo.name}
        />
      </S.ImageContainer>

      <S.InfoContainer type={type}>
        <S.NameContainer>{pokemonInfo.name}</S.NameContainer>
        <PokemonType types={pokemonInfo.types} />
      </S.InfoContainer>
    </S.CardContainer>
  );
}

export default EvolutionCard;
