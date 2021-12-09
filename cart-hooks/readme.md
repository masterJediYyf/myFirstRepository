- craete-react-app appname react 官方
  npx create-react-app appname 不用安装 试一下的时候特别合适
  npm init @vitejs/app appname --template react 来自 youyuxi 的推荐,没有用 webpack 所以更加快速

- 我们想为购物车应用提供数据流管理

  1. 用一个 Context.Provider 包住原有购物车 UI 组件树

  2. 父组件中可以通过 {children} 找到要包的子组件
     ProductsContextProvider 这个组件要写一下
     return JSX
     Context.Provider

  3. contexts 被模块化了, 有专有文件夹
