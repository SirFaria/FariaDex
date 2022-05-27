import styled from "styled-components";
import { darken } from "polished";
import { navHeight } from "src/styles/global";

export const NavbarContainer = styled.nav`
  background: ${(props) => props.theme.colors.navbarBackground};
  backdrop-filter: blur(5px);

  display: flex;
  justify-content: center;

  width: 100%;
  height: ${navHeight}rem;

  padding-block: 1rem;

  position: fixed;
  top: 0;
  z-index: 999;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const SearchAndThemeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ThemeButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};

  width: 2.375rem;
  height: 2.375rem;

  border: none;
  border-radius: 6px;

  font-size: 0;

  transition: filter 0.2s;

  svg {
    color: ${(props) => props.theme.colors.navbarText};
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

export const SearchContainer = styled.div`
  background: ${(props) => props.theme.colors.primary};

  padding-left: 0.5rem;

  border-radius: 6px;

  height: 2.375rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  svg {
    color: ${(props) => props.theme.colors.navbarText};
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const SearchInput = styled.input`
  background: transparent;

  height: 100%;

  font-family: Ubuntu, sans-serif;
  font-weight: 700;

  border: none;
  border-radius: 8px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.navbarText};
    letter-spacing: 0.5px;
  }
`;
