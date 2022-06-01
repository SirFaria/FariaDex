import { useDebouncedValue } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { MdOutlineDarkMode, MdOutlineWbSunny, MdSearch } from "react-icons/md";
import { Wrapper } from "src/styles/global";
import { useSearch } from "../../contexts/searchContext";
import * as S from "./styles";

function Navbar({ toggleTheme, theme }: any) {
  const { setSearchValue } = useSearch();

  const [value, setValue] = useState("");
  const [debounce] = useDebouncedValue(value, 400);

  useEffect(() => {
    setSearchValue(debounce);
  }, [debounce]);

  const [menuExpanded, setMenuExpanded] = useState(false);

  function toggleMenu() {
    setMenuExpanded(!menuExpanded);
  }

  return (
    <S.NavbarContainer>
      <Wrapper id="navbarWrapper">
        <Link href="/" passHref>
          <a className="logo">
            {theme.title === "light" ? (
              <Image width={283} height={55} src="/logo-light.svg" alt="" />
            ) : (
              <Image width={283} height={55} src="/logo-dark.svg" alt="" />
            )}
          </a>
        </Link>
        <S.Menu isActive={menuExpanded}>
          <S.SearchContainer>
            <MdSearch />

            <S.SearchInput
              type="text"
              onChange={(e) => setValue(e.target.value)}
              value={value}
              placeholder="Search any Pokémon"
            ></S.SearchInput>
          </S.SearchContainer>

          <S.ThemeButton
            type="button"
            onClick={() => {
              toggleTheme();
              setMenuExpanded(!menuExpanded);
            }}
          >
            {theme.title === "light" ? (
              <MdOutlineDarkMode />
            ) : (
              <MdOutlineWbSunny />
            )}
          </S.ThemeButton>
        </S.Menu>
        <S.MenuButton onClick={toggleMenu}>
          <S.MenuHamburguer isActive={menuExpanded} />
        </S.MenuButton>
      </Wrapper>
    </S.NavbarContainer>
  );
}

export default Navbar;
