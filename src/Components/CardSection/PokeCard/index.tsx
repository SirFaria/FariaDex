import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import usePokemonInfo from "../../../hooks/SWR/usePokemonInfo";
import { memo } from "react";

import * as S from "../styles";

import { TPokeCardProps } from "../types";
import { PokeCardSkeleton, SkeletonDetails } from "./skeleton";
import PokemonType from "../../PokemonType";

function PokeCard({ pkmName }: TPokeCardProps) {
  // está desestruturado, poderia ser apenas props e depois usar props.pkmName
  const { pokemonInfo } = usePokemonInfo(pkmName);

  if (!pokemonInfo) {
    // Renderizar Skeletons
    return (
      <PokeCardSkeleton>
        <SkeletonDetails>
          <Skeleton width={50} height={25} borderRadius={20} />
          <Skeleton width={120} height={25} borderRadius={20} />
          <Skeleton width={200} height={200} borderRadius="50%" />
          <Skeleton width={60} height={22} borderRadius={10} />
        </SkeletonDetails>
      </PokeCardSkeleton>
    );
  }

  const dexNumber = pokemonInfo.id.toString().padStart(3, "0"); // Formatar os IDs em Três digitos

  const poke_types = pokemonInfo.types.map(({ type }) => type.name); // DESESTRUTUREI A PROPRIEDADE TYPE DENTRO DO OBJETO TYPES

  return (
    <S.PokeCard typesArray={poke_types}>
      <S.CardDetails>
        <S.DexNumber>#{dexNumber}</S.DexNumber>

        <h3>{pokemonInfo.name}</h3>

        <S.ImageBackground>
          <Image
            className="pokemon-image"
            src={pokemonInfo.sprites.other["official-artwork"].front_default}
            width={200}
            height={200}
            alt={pokemonInfo.name}
          />
        </S.ImageBackground>

        <PokemonType types={pokemonInfo.types} />
      </S.CardDetails>
    </S.PokeCard>
  );
}

export default memo(PokeCard);
