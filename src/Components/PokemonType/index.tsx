import { TPokemonInfo } from "~types/TPokemonInfo";
import * as S from "./styles";
import { TPokemonTypeProps } from "./types";

function PokemonType({ types }: TPokemonTypeProps) {
  return (
    <S.TypeContainer>
      {types.map(({ type }) => {
        return (
          <S.TypeBox type={type.name} key={type.name}>
            {type.name}
          </S.TypeBox>
        );
      })}
    </S.TypeContainer>
  );
}

export default PokemonType;
