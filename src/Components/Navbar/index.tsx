import Image from "next/image";
import Link from "next/link";

import { MdOutlineDarkMode, MdOutlineWbSunny} from 'react-icons/md';
import { useSearch } from "../../contexts/searchContext";
import * as S from "./styles";

function Navbar({toggleTheme, theme}: any) {
  const {
    setSearchValue,
    searchValue
  } = useSearch();

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
  }

  return (
    <S.NavbarContainer>
      <Link href="/" passHref>
        <a>
          {theme.title === 'light' ? <Image width={300} height={100} src="/logo-light.svg" alt="" /> : <Image width={300} height={100} src="/logo-dark.svg" alt="" />}
        </a>
      </Link>
      <S.SearchInput type="text" onChange={handleChange} value={searchValue} placeholder="Search any Pokémon"></S.SearchInput>
      <S.ThemeButton type="button" onClick={toggleTheme}>
        {theme.title === 'light' ? <MdOutlineDarkMode /> : <MdOutlineWbSunny />}
      </S.ThemeButton>
    </S.NavbarContainer>
  )
}

export default Navbar;