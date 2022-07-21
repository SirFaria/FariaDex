import "styled-components";
import { TPokemonTypes } from "~types/TPokemonTypes";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      primaryI: string;

      secondary: string;
      secondaryLight: string;

      background: string;
      text: string;
      textSecondary: string;

      navbarText: string;
      navbarBackground: string;
    };

    skeletonColors: {
      primary: string;
      background: string;
      shimmer: string;
    };

    themeButton: {
      hoverFilter: string;
    };

    typeColors: {
      [key in TPokemonTypes]: string; //tipando a chave do objeto, e o valor
    };
  }
}
