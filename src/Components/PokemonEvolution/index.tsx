import EvolutionCard from "./EvolutionCard";
import * as S from "./styles";
import { TPokemonEvolutionProps } from "./types";

function PokemonEvolution({ pkmEvos, type }: TPokemonEvolutionProps) {
  function renderEvoColumn1() {
    return (
      <S.EvoColumn className="unevolved">
        <EvolutionCard
          type={type}
          key={pkmEvos.unevolved.species.name}
          pkmName={pkmEvos.unevolved.species.name}
        />
      </S.EvoColumn>
    );
  }

  function renderArrowColumn1() {
    return (
      <S.ArrowColumn className="arrow">
        {pkmEvos.firstEvos.map((evolucao) => {
          return <div key={evolucao.evo_name}>→</div>;
        })}
      </S.ArrowColumn>
    );
  }

  function renderEvoColumn2() {
    return (
      <S.EvoColumn className="firstEvo">
        {pkmEvos.firstEvos.map((evolucao) => {
          // Primeira evolução
          return (
            <EvolutionCard
              type={type}
              key={evolucao.evo_name}
              pkmName={evolucao.evo_name}
            />
          );
        })}
      </S.EvoColumn>
    );
  }

  function renderArrowColumn2() {
    if (pkmEvos.secondEvos.length > 0) {
      return (
        <S.ArrowColumn>
          {pkmEvos.secondEvos.map((evolucao) => {
            return <div key={evolucao.evo_name}>→</div>;
          })}
        </S.ArrowColumn>
      );
    }
  }

  function renderEvoColumn3() {
    if (pkmEvos.secondEvos.length > 0) {
      return (
        <S.EvoColumn>
          {pkmEvos.secondEvos.map((evolucao) => {
            return (
              <EvolutionCard
                type={type}
                key={evolucao.evo_name}
                pkmName={evolucao.evo_name}
              />
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
        {renderArrowColumn1()}
        {renderEvoColumn2()}
        {renderArrowColumn2()}
        {renderEvoColumn3()}
      </S.EvolutionContainer>
    );
  }

  return <S.EvolutionContainer>Sem evoluções</S.EvolutionContainer>;
}

export default PokemonEvolution;
