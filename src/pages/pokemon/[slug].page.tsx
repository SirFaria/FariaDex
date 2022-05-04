import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import PokemonAbility from "../../Components/PokemonAbility";
import PokemonEvolution from "../../Components/PokemonEvolution";
import PokemonType from "../../Components/PokemonType";
import usePokemonEvolution from "../../hooks/SWR/usePokemonEvolution";
import usePokemonInfo from "../../hooks/SWR/usePokemonInfo";
import usePokemonSpecies from "../../hooks/SWR/usePokemonSpecies";
import * as S from "../../styles/home/pokemon/styles";
import { HaikeiBackground } from "../../styles/home/styles";
import { isPokemonEvolutions, TPokemonEvolutions } from "../../Types/TPokemonEvolution";


export default function Teste() {
  const router = useRouter();
  const pkmName = router.query.slug;
  const { pokemonInfo } = usePokemonInfo(pkmName as string);
  const { pokemonSpecies } = usePokemonSpecies(pkmName as string);

  const evolutionUrl = pokemonSpecies?.evolution_chain.url;

  const { pokemonEvolutions } = usePokemonEvolution(evolutionUrl as string);
  const isPokemonEvolution = isPokemonEvolutions(pokemonEvolutions);


  const isLoading = (!pokemonInfo || !pokemonSpecies || !isPokemonEvolution);
  if(isLoading) {
    return null;
  }

  const firstType = pokemonInfo.types[0].type.name;
  const dexNumber = pokemonInfo.id.toString().padStart(3, '0');
  const pkmHeight = (pokemonInfo.height * 0.1).toFixed(1);
  const pkmWeight = (pokemonInfo.weight * 0.1).toFixed(1);

  console.log(pokemonEvolutions);


  function toTitleCase(str: string) { // função para fazer capitalize em todas as palavras inseridas
    return str.replace(
      /\w\S*/g,
      function(txt: string) {
        return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
      }
    );
  }

  return (
    <>
    <HaikeiBackground />
    <S.MainPanel >
      <Head>
        <title>{`#${dexNumber} ${toTitleCase(pokemonInfo.name)}`} | Faria Dex</title>
      </Head>
      <S.PokemonDetailsContainer >
        <S.LeftContainer>
          <S.NameInfo >
            <S.ImageBox type={firstType}>
              <Image
                className="pokemon-image" 
                src={pokemonInfo.sprites.other["official-artwork"].front_default} 
                width={250} 
                height={250} 
                alt={pokemonInfo.name}
              />
            </S.ImageBox>

            <S.TextBox>
              <span>#{dexNumber}</span>
              <span>{pkmName}</span>
            </S.TextBox>
          </S.NameInfo>

          <S.InfoBox className="types">
            <S.TitleBox type={firstType}>Type</S.TitleBox>
            <PokemonType types={pokemonInfo.types} />
          </S.InfoBox>

          <S.InfoBox className="abilities">
            <S.TitleBox type={firstType}>Abilities</S.TitleBox>
            <PokemonAbility pkmAbilities={pokemonInfo.abilities} />
          </S.InfoBox>

          <S.HeightWeightContainer>
            <S.InfoBox className="height">
              <S.TitleBox type={firstType}>Height</S.TitleBox>
              <S.HeightWeightBox>{pkmHeight} m</S.HeightWeightBox>
            </S.InfoBox>

            <S.InfoBox className="weight">
              <S.TitleBox type={firstType}>Weight</S.TitleBox>
              <S.HeightWeightBox>{pkmWeight} kg</S.HeightWeightBox>
            </S.InfoBox>
          </S.HeightWeightContainer>
        </S.LeftContainer>

        <S.RightContainer>
          <S.InfoBox className="evolutionLine" removePaddingBottom>
            <S.TitleBox type={firstType} left >Evolution</S.TitleBox>
            <PokemonEvolution pkmEvos={pokemonEvolutions} type={firstType} />
          </S.InfoBox>
        </S.RightContainer>
      </S.PokemonDetailsContainer>
    </S.MainPanel>
    </>

  )
}