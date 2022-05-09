import EvolutionCard from "./EvolutionCard";
import * as S from "./styles";
import { TPokemonEvolutionProps } from "./types";

function PokemonEvolution({ pkmEvos, type }: TPokemonEvolutionProps) {
  const willBeSticky = pkmEvos.firstEvos.length <= 1; // true e false invertidos para corresponder com o resto
  function renderEvoColumn1() {
    return (
      <S.EvoColumn isSticky>
        <EvolutionCard
          type={type}
          key={pkmEvos.unevolved.species.name}
          pkmName={pkmEvos.unevolved.species.name}
        />
      </S.EvoColumn>
    );
  }

  function renderEvoColumn2() {
    return (
      <S.EvoColumn isSticky={willBeSticky}>
        {pkmEvos.firstEvos.map((evolucao) => {
          // Primeira evolução
          return (
            <S.ArrowAndCardContainer key={evolucao.evo_name}>
              <div key={evolucao.evo_name}>→</div>
              <EvolutionCard type={type} pkmName={evolucao.evo_name} />
            </S.ArrowAndCardContainer>
          );
        })}
      </S.EvoColumn>
    );
  }

  function renderEvoColumn3() {
    if (pkmEvos.secondEvos.length > 0) {
      return (
        <S.EvoColumn>
          {pkmEvos.secondEvos.map((evolucao) => {
            return (
              <S.ArrowAndCardContainer key={evolucao.evo_name}>
                <div key={evolucao.evo_name}>→</div>
                <EvolutionCard type={type} pkmName={evolucao.evo_name} />
              </S.ArrowAndCardContainer>
            );
          })}
        </S.EvoColumn>
      );
    }
  }

  if (pkmEvos.hasEvo) {
    return (
      <S.EvolutionContainer>
        {renderEvoColumn1()}
        {renderEvoColumn2()}
        {renderEvoColumn3()}
      </S.EvolutionContainer>
    );
  }

  return <S.EvolutionContainer>Sem evoluções</S.EvolutionContainer>;
}

export default PokemonEvolution;
