import useSWR from 'swr';

// 引入 CSS 样式。
import { StyledCard, StyledTypes, StyledType, StyledHeader } from './Pokemon.styled.js';

function Pokemon({ pokemonName }) {
  // 获取单个 Pokemon 的数据。
  const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

  if (error || data.error) {
    return <div></div>;
  }

  // 解构出单个 Pokemon 的 ID、名字、精灵图和类型。
  const { id, name, sprites, types } = data;
  // Pokemon 可能有多个类型。
  const pokemonTypes = types.map((pokemonType) => pokemonType.type.name);

  return (
    // pokemonType 传递给 Pokemon.styled.js 中的 StyledCard 样式，
    // 用来生成对应的背景颜色。
    <StyledCard pokemonType={pokemonTypes[0]}>
      <StyledHeader>
        <h2>{name}</h2>
        <div>#{id}</div>
      </StyledHeader>
      <img src={sprites.front_default} alt={name} />
      <StyledTypes>
        {pokemonTypes.map((pokemonType) => (
          <StyledType key={pokemonType}>{pokemonType}</StyledType>
        ))}
      </StyledTypes>
    </StyledCard>
  );
}

export default Pokemon;