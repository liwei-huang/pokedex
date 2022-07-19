import { Suspense } from 'react';

// Pokedex 组件，包含许多单个的 Pokemon 组件。
import Pokedex from './Pokedex.jsx';

function PokeContainer() {
  return (
    <Suspense fallback={<h2>加载中......</h2>}>
      <Pokedex />
    </Suspense>
  );
}

export default PokeContainer;