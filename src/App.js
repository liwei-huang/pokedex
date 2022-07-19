import { SWRConfig } from 'swr';
import fetcher from './fetcher.js';

// 引入 CSS 样式。
import { StyledPokedex, StyledTitle } from './Pokemon.styled.js';

import PokeContainer from './PokeContainer.jsx';

function App() {
  return (
    <>
      <StyledTitle>图鉴</StyledTitle>
      {/* 配置 SWR，fetcher 定义请求数据的过程，suspense 表示是否启用 Suspense。 */}
      <SWRConfig
        value={{
          fetcher,
          suspense: true
        }}
      >
        <StyledPokedex>
          <PokeContainer />
        </StyledPokedex>
      </SWRConfig>
    </>
  );
}

export default App;