import { useDebouncedValue } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { MdOutlineDarkMode, MdOutlineWbSunny, MdSearch } from "react-icons/md";
import { Wrapper } from "src/styles/global";
import { useSearch } from "../../contexts/searchContext";
import * as S from "./styles";

function Navbar({ toggleTheme, theme }: any) {
  const router = useRouter();
  const route = router.route;
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

  function showSearchbar() {
    if (route === "/gen1") {
      return (
        <S.SearchContainer>
          <MdSearch />

          <S.SearchInput
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder="Search any Pokémon"
          ></S.SearchInput>
        </S.SearchContainer>
      );
    }
    return;
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
          {showSearchbar()}

          <S.ThemeButton
            type="button"
            onClick={() => {
              toggleTheme();
              setMenuExpanded(false);
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
