import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import PokemonAbility from "../../Components/PokemonAbility";
import PokemonEvolution from "../../Components/PokemonEvolution";
import PokemonType from "../../Components/PokemonType";
import usePokemonEvolution from "../../hooks/SWR/usePokemonEvolution";
import usePokemonInfo from "../../hooks/SWR/usePokemonInfo";
import usePokemonSpecies from "../../hooks/SWR/usePokemonSpecies";
import * as S from "./styles";
import { isPokemonEvolutions } from "~types/TPokemonEvolution";
import { Wrapper } from "src/styles/global";
import PokedexInfo from "src/Components/PokedexInfo";
import { MdArrowUpward } from "react-icons/md";
import Link from "next/link";
import PokemonDetailsPageSkeleton from "src/Components/Skeletons/PokemonDetailsPageSkeleton";
import { HaikeiBackground } from "../home.styles";

export default function PokemonPage() {
  const router = useRouter();
  const slug = router.query.slug;
  const { pokemonInfo } = usePokemonInfo(slug as string);
  const { pokemonSpecies } = usePokemonSpecies(slug as string);

  const evolutionUrl = pokemonSpecies?.evolution_chain.url;
  const pokedexInfo = pokemonSpecies?.flavor_text_entries;

  const { pokemonEvolutions } = usePokemonEvolution(evolutionUrl as string);
  const isPokemonEvolution = isPokemonEvolutions(pokemonEvolutions);

  const isLoading =
    !pokemonInfo || !pokemonSpecies || !isPokemonEvolution || !pokedexInfo;
  if (isLoading) {
    return <PokemonDetailsPageSkeleton />;
  }

  const firstType = pokemonInfo.types[0].type.name;
  const pkmId = pokemonInfo.id;
  const dexNumber = pkmId.toString().padStart(3, "0");
  const pkmName = pokemonInfo.name;
  const pkmHeight = (pokemonInfo.height * 0.1).toFixed(1);
  const pkmWeight = (pokemonInfo.weight * 0.1).toFixed(1);

  function toTitleCase(str: string) {
    // função para fazer capitalize em todas as palavras inseridas
    return str.replace(/\w\S*/g, function (txt: string) {
      return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
    });
  }

  return (
    <>
      <HaikeiBackground />
      <S.MainPanel>
        <Head>
          <title>{`#${dexNumber} ${toTitleCase(pkmName)}`} | Faria Dex</title>
        </Head>
        <Wrapper>
          <S.PokemonDetailsContainer>
            {pkmId !== 1 && (
              <Link passHref href={`/pokemon/${pkmId - 1}`}>
                <S.BackAndNextButton className="back" type={firstType}>
                  <MdArrowUpward />
                  <span>Previous Pokemon</span>
                </S.BackAndNextButton>
              </Link>
            )}

            <S.LeftContainer>
              <S.NameInfo>
                <S.ImageBox type={firstType}>
                  <Image
                    className="pokemon-image"
                    src={
                      pokemonInfo.sprites.other["official-artwork"]
                        .front_default
                    }
                    width={250}
                    height={250}
                    alt={pkmName}
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
              <S.InfoBox className="pokedexInfo" left>
                <S.TitleBox type={firstType} left>
                  Pokedex Info
                </S.TitleBox>
                <PokedexInfo pokedexInfo={pokedexInfo} />
              </S.InfoBox>

              <S.InfoBox
                className="evolutionLine"
                noPaddingBottom
                noGap
                stretch
              >
                <S.TitleBox type={firstType} left>
                  Evolution
                </S.TitleBox>
                <PokemonEvolution
                  pkmEvos={pokemonEvolutions}
                  type={firstType}
                />
              </S.InfoBox>
            </S.RightContainer>
            {pkmId !== 898 && (
              <Link passHref href={`/pokemon/${pkmId + 1}`}>
                <S.BackAndNextButton type={firstType} className="next">
                  <span>Next Pokemon</span>
                  <MdArrowUpward />
                </S.BackAndNextButton>
              </Link>
            )}
          </S.PokemonDetailsContainer>
        </Wrapper>
      </S.MainPanel>
    </>
  );
}
