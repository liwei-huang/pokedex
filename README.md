# React Suspense with SWR

此代码展示 React Suspense 的基本使用，代码来源《React 17 Design Patterns and Best Practices - THIRD EDITION》中第 6 章 “Introducing React Suspense with SWR” 小节。

React Suspense 渲染一个回落（fallback）组件，通常是加载动画或加载骨架。

一般只在下面两种情形使用 React Suspense：

1. **代码拆分**(code splitting)：将应用的代码拆分为多个块（chunk），当用户访问某个组件时，才开始加载对应的代码块。
2. **获取数据**（data fetching）：当网速较慢，内容还没有加载出来时，Suspense 渲染一个表示加载的组件，直到数据请求成功，菜渲染原本应该渲染的组件。

**SWR**（Stale-While-Revalidate）是一个用于请求数据的 React 钩子，是一种 HTTP 缓存策略。
