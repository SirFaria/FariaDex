import styled from "styled-components";
import { navHeight } from "src/styles/global";

export const NavbarContainer = styled.nav`
  background: ${(props) => props.theme.colors.navbarBackground};
  backdrop-filter: blur(5px);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: ${navHeight}rem;

  padding-block: 1rem;

  position: fixed;
  top: 0;
  z-index: 999;

  #navbarWrapper {
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 375px) {
    a.logo {
      width: 15rem;
      height: max-content;
    }
  }

  @media (max-width: 320px) {
    a.logo {
      width: 13rem;
      height: max-content;
    }
  }
`;

export const ReturnButton = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.navbarText};
  height: 2.375rem;
  padding-inline: 0.5rem;
  border: none;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 1rem;
  font-weight: 500;

  transition: filter 0.2s;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.colors.navbarText};
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

export const SearchContainer = styled.div`
  background: ${(props) => props.theme.colors.primary};

  padding-left: 0.5rem;

  border-radius: 6px;

  height: 2.375rem;

  position: relative;

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

export const ThemeButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};

  position: relative;

  width: 2.375rem;
  height: 2.375rem;

  border: none;
  border-radius: 6px;

  font-size: 0;

  transition: filter 0.2s;

  user-select: none;

  svg {
    color: ${(props) => props.theme.colors.navbarText};
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-right: 0.5rem;
  }
`;

// ----------------------- Menu expanded ---------------------------------

export const MenuButton = styled.button`
  background: ${(props) => props.theme.colors.primary};

  border-radius: 6px;
  border: 0;

  width: 2.375rem;
  height: 2.375rem;

  padding: 0.5rem;

  display: none;

  position: relative;
  user-select: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MenuHamburguer = styled.div<{ isActive: boolean }>`
  background: ${(props) =>
    props.isActive ? "transparent" : props.theme.colors.textSecondary};
  position: relative;
  user-select: none;

  &,
  &::before,
  &::after {
    display: block;

    width: 20px;
    height: 2px;

    outline: 1px solid transparent;

    transition-property: background-color, transform;
    transition-duration: 300ms;
  }

  &::before,
  &::after {
    background: ${(props) => props.theme.colors.textSecondary};
    position: absolute;
    content: "";
  }

  &::before {
    top: -0.45rem;
    transform: ${(props) =>
      props.isActive ? "translateY(7px) rotate(45deg)" : "unset"};
  }

  &::after {
    top: 0.45rem;
    transform: ${(props) =>
      props.isActive ? "translateY(-7px) rotate(-45deg)" : "unset"};
  }
`;

export const Menu = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  width: 60%;

  @media (max-width: 768px) {
    background: ${(props) => props.theme.colors.navbarBackground};

    justify-content: center;
    flex-direction: column;

    width: 100vw;
    height: 100vh;

    padding-top: unset;

    position: fixed;
    top: 0;
    left: 0;

    transition: transform 300ms;

    //Active

    opacity: ${(props) => (props.isActive ? "1" : "0")};
    visibility: ${(props) => (props.isActive ? "visible" : "hidden")};
    transform: ${(props) =>
      props.isActive ? "translateX(0)" : "translateX(100%)"};
  }
`;
