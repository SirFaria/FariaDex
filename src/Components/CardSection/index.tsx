import Link from "next/link";
import { Wrapper } from "src/styles/global";
import { useSearch } from "../../contexts/searchContext";
import { Grid, GridCellProps, AutoSizer } from "react-virtualized";
import PokeCard from "./PokeCard";
import * as S from "./styles";
import { TCardSectionProps } from "./types";
import { useRef } from "react";

const CARD_WIDTH = 256;
const CARD_HEIGHT = 383;

function CardSection({ pkmList }: TCardSectionProps) {
  const { searchValue } = useSearch();

  const filteredPokemon = pkmList.filter((pkm) =>
    pkm.name.includes(searchValue.toLowerCase())
  );

  function CellRenderer({ columnIndex, rowIndex, style, key }: GridCellProps) {
    const arrayIndex = columnIndex + rowIndex * 5;

    const pkm = filteredPokemon[arrayIndex];

    if (!pkm) {
      return null;
    }
    return (
      <Link href={`/pokemon/${pkm.name}`} key={key}>
        <a
          style={{
            ...style,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PokeCard pkmName={pkm.name} />
        </a>
      </Link>
    );
  }

  return (
    <Wrapper>
      <S.PokeCardContainer>
        <AutoSizer>
          {({ width, height }) => {
            console.log(width, height);
            return (
              <Grid
                width={width}
                // height={Math.ceil(filteredPokemon.length / 5) * CARD_HEIGHT}
                height={CARD_HEIGHT * 2}
                autoContainerWidth
                cellRenderer={CellRenderer}
                columnWidth={CARD_WIDTH}
                rowHeight={CARD_HEIGHT}
                columnCount={5}
                rowCount={Math.ceil(filteredPokemon.length / 5)}
                overscanRowCount={2}
              />
            );
          }}
        </AutoSizer>
      </S.PokeCardContainer>
    </Wrapper>
  );
}

export default CardSection;
