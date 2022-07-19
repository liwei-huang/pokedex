// 使用 styled-components 定义 CSS 样式。
import styled from 'styled-components';

const type = {
  bug: '#2ADAB1',
  dark: '#636363',
  dragon: '#E9B057',
  electric: '#ffeb5b',
  fairy: '#ffdbdb',
  fighting: '#90a4b5',
  fire: '#F7786B',
  flying: '#E8DCB3',
  ghost: '#755097',
  grass: '#2ADAB1',
  ground: '#dbd3a2',
  ice: '#C8DDEA',
  normal: '#ccc',
  poison: '#cc89ff',
  psychic: '#705548',
  rock: '#b7b7b7',
  steel: '#999',
  water: '#58ABF6'
};

export const StyledPokedex = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto;

  &::after {
    content: '';
    flex: auto;
  }
`;

export const StyledCard = styled.div`
  position: relative;
  ${({ pokemonType }) => `
    background: ${type[pokemonType]} url(./pokeball.png) no-repeat;
    background-size: 65%;
    background-position: center;
  `}
  color: #000;
  font-size: 13px;
  border-radius: 20px;
  margin: 5px;
  width: 200px;

  img {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
`;

export const StyledTypes = styled.div`
  display: flex;
  padding-left: 6px;
  padding-right: 6px;
  padding-bottom: 8px;
`;

export const StyledType = styled.span`
  display: inline-block;
  background-color: black;
  color: white;
  border-radius: 20px;
  font-weight: bold;
  padding: 6px;
  margin-right: 3px;
  opacity: 0.4;
  text-transform: capitalize;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  h2 {
    color: white;
    margin-top: 6px;
    text-transform: capitalize;
  }

  div {
    color: white;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const StyledTitle = styled.h1`
  text-align: center;
`;

export const StyledGrid = styled.div`
  display: flex;
  flex-flow: row wrap;

  div {
    margin-right: 5px;
    margin-bottom: 5px;
  }
`;