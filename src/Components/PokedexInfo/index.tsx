import { TextBox } from "./styles";
import { TPokedexInfoProps } from "./types";

export default function PokedexInfo({ pokedexInfo }: TPokedexInfoProps) {
  const filteredFlavorText = pokedexInfo.filter(
    (texts) => texts.language.name == "en"
  );

  const pokemonInfoText = filteredFlavorText[0].flavor_text;

  const pokemonInfoText2 = pokemonInfoText
    .toLowerCase()
    .replace(/\u000c/g, " ")
    .split(". ");

  console.log(pokemonInfoText.toLowerCase());

  return (
    <>
      {pokemonInfoText2.map((string, idx) => {
        const newText = string.endsWith(".") ? string : `${string}.`;
        return <TextBox key={idx}>{newText}</TextBox>;
      })}
    </>
  );
}
