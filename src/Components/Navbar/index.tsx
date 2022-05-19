import Image from "next/image";
import Link from "next/link";

import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { navHeight } from "src/styles/global";
import { useSearch } from "../../contexts/searchContext";
import * as S from "./styles";

function Navbar({ toggleTheme, theme }: any) {
  const { setSearchValue, searchValue } = useSearch();

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const imageHeight = navHeight * 16;

  return (
    <S.NavbarContainer>
      <S.NavbarWrapper>
        <Link href="/" passHref>
          <a>
            {theme.title === "light" ? (
              <Image
                width={200}
                height={imageHeight}
                src="/logo-light.svg"
                alt=""
              />
            ) : (
              <Image
                width={200}
                height={imageHeight}
                src="/logo-dark.svg"
                alt=""
              />
            )}
          </a>
        </Link>
        <S.SearchInput
          type="text"
          onChange={handleChange}
          value={searchValue}
          placeholder="Search any Pokémon"
        ></S.SearchInput>
        <S.ThemeButton type="button" onClick={toggleTheme}>
          {theme.title === "light" ? (
            <MdOutlineDarkMode />
          ) : (
            <MdOutlineWbSunny />
          )}
        </S.ThemeButton>
      </S.NavbarWrapper>
    </S.NavbarContainer>
  );
}

export default Navbar;
