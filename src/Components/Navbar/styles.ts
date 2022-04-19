import styled from 'styled-components'
import { darken } from "polished";


export const NavbarContainer = styled.nav`
background: ${props => props.theme.colors.primary};
display: flex;
align-items: center;
width: 100%;
top: 0;
padding: 1rem 2rem;

z-index: 999;
position: fixed;

`

export const ThemeButton = styled.button `
  background-color: ${props => props.theme.colors.primary};

  margin-left: 10%;
  margin-right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 50%;
  font-size: 0;
  
  transition: filter 0.2s;

  svg {
    color: ${props => props.theme.colors.background};
    width: 2rem;
    height: 2rem;
  }
  
  &:hover {
    filter: brightness(0.90);
    cursor: pointer;
  }
`

export const SearchInput = styled.input `
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.background};
  border: none;
  border-radius: 15px;
  margin-left: auto;
  padding: 0.5rem;

  &:focus {
    outline: none;
    background: ${props => darken(0.01, props.theme.colors.background)};
  }
`