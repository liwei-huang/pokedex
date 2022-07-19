import useSWR from 'swr';
import { Suspense, lazy } from 'react';

// 加载骨架。
import LoadingSkeleton from './LoadingSkeleton.jsx';
// 引入加载骨架的 CSS 样式。
import { StyledGrid } from './Pokemon.styled.js';

// 单个 Pokemon。
const Pokemon = lazy(() => import('./Pokemon.jsx'));

function Pokedex() {
  // 使用 SWR 请求 150 个 Pokemon 数据，并解构出结果。
  const { data: { results } } = useSWR('https://pokeapi.co/api/v2/pokemon?limit=150');
  return (
    <>
      {results.map((pokemon) => (
        <Suspense fallback={<StyledGrid><LoadingSkeleton /></StyledGrid>} key={pokemon.name}>
          <Pokemon key={pokemon.name} pokemonName={pokemon.name} />
        </Suspense>
      ))}
    </>
  );
}

export default Pokedex;