import { darken, lighten, saturate } from "polished";
import styled from "styled-components";
import { CardLiProp, TPokemonTypes } from "../../Types/TPokemonTypes";


export const PokeCardContainer = styled.ul`
  padding-top: 4rem;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`


export const PokeCard = styled.li<CardLiProp>`
  background: ${props => {
    if(props.typesArray.length == 2){
      return `linear-gradient(-225deg, ${props.theme.typeColors[props.typesArray[0]]}, ${props.theme.typeColors[props.typesArray[1]]} )`
    }
      return props.theme.typeColors[props.typesArray[0]]
  }};

  text-shadow: ${props => {
      if(props.theme.title === 'light'){
        return `1px 1px ${props.theme.colors.text};`
      }
    }};

  padding: 1.25rem;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02) translateY(-5px);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  }
`
export const ImageBackground = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
`

export const CardDetails = styled.div`
  color: ${props => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  text-transform: capitalize;
`

export const DexNumber = styled.span`
  text-align: center;
  padding: 0.3rem 0.5rem;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.2);
`

export const TypeContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 0.5rem;

`

export const TypeBox = styled.li<{type: TPokemonTypes}>`
  text-align: center;
  padding: 0.2rem;
  
  text-shadow: ${props => {
    if(props.theme.title === 'light'){
      return `1px 1px ${props.theme.colors.text};`
    }
  }};

  color: ${props => props.theme.colors.secondary};
  background: ${props => darken(0.07, props.theme.typeColors[props.type])};    
  min-width: 3.6rem;
  /* border: 1px solid #9e9e9e; */
  border-radius: 10px;
`