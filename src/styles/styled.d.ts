import 'styled-components';
import { TPokemonTypes } from '../Components/CardSection/types';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      primaryI: string;
  
      background: string;
      text: string;
    }

    themeButton: {
      hoverFilter: string; 
    }

    typeColors: {
      [key in TPokemonTypes]: string; //tipando a chave do objeto, e o valor
    };
  }
}