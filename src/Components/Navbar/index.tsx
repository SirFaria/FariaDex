import Image from "next/image";
import Link from "next/link";

import { MdOutlineDarkMode, MdOutlineWbSunny, MdSearch } from "react-icons/md";
import { Wrapper } from "src/styles/global";
import { useSearch } from "../../contexts/searchContext";
import * as S from "./styles";

function Navbar({ toggleTheme, theme }: any) {
  const { setSearchValue, searchValue } = useSearch();

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  return (
    <S.NavbarContainer>
      <Wrapper>
        <S.NavbarWrapper>
          <Link href="/" passHref>
            <a>
              {theme.title === "light" ? (
                <Image width={283} height={55} src="/logo-light.svg" alt="" />
              ) : (
                <Image width={283} height={55} src="/logo-dark.svg" alt="" />
              )}
            </a>
          </Link>
          <S.SearchAndThemeContainer>
            <S.SearchContainer>
              <MdSearch />

              <S.SearchInput
                type="text"
                onChange={handleChange}
                value={searchValue}
                placeholder="Search any Pokémon"
              ></S.SearchInput>
            </S.SearchContainer>

            <S.ThemeButton type="button" onClick={toggleTheme}>
              {theme.title === "light" ? (
                <MdOutlineDarkMode />
              ) : (
                <MdOutlineWbSunny />
              )}
            </S.ThemeButton>
          </S.SearchAndThemeContainer>
        </S.NavbarWrapper>
      </Wrapper>
    </S.NavbarContainer>
  );
}

export default Navbar;
