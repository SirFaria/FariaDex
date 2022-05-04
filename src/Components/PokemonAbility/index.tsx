import { TPokemonAbilityProps } from "./types"
import * as S from './styles';



function toTitleCase(str: string) { // função para fazer capitalize em todas as palavras inseridas
  return str.replace(
    /\w\S*/g,
    function(txt: string) {
      return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
    }
  );
}

function PokemonAbility({pkmAbilities}: TPokemonAbilityProps) {

  if(pkmAbilities.length > 2) {
    return (
      <S.AbilityContainer>
        <S.AbilityBox>
          {pkmAbilities.map(({ability, is_hidden, slot}) => {
            if(is_hidden) {
              return;
            }
            if(slot === 2) {
              return ` or ${toTitleCase(ability.name)}`;
            }
            return toTitleCase(ability.name);

          })}
        </S.AbilityBox>
        <S.AbilityBox>
          {pkmAbilities.map(({ability, is_hidden}) => {
              if(is_hidden) {
                return toTitleCase(ability.name);
              }
              return;

            })}
            <div className="hidden">Hidden ability</div>
        </S.AbilityBox>
      </S.AbilityContainer>
    )
  }

  return (
    <S.AbilityContainer>
      {pkmAbilities.map(({ability, is_hidden, slot}) => {
        if(is_hidden) {
          return <S.AbilityBox key={slot}>{toTitleCase(ability.name)}<div className="hidden">Hidden ability</div></S.AbilityBox>
        }
        return <S.AbilityBox key={slot}>{toTitleCase(ability.name)}</S.AbilityBox>
      })}
    </S.AbilityContainer> 
  )
  
}

export default PokemonAbility