import "styled-components";
import { TPokemonTypes } from "~types/TPokemonTypes";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      full: string;

      primaryI: string;

      background: string;
      text: string;
      textSecondary: string;

      navbarText: string;
    };

    themeButton: {
      hoverFilter: string;
    };

    typeColors: {
      [key in TPokemonTypes]: string; //tipando a chave do objeto, e o valor
    };
  }
}
