- react 是一种声明式的组件开发

- Router 何为？
  单页应用的发起者
  声明式, 路由相关操作才能生效

- Route
  如果当前链接 / 匹配了 Route path 字段
  component 在他的 DOM 位置, 插入多级路由
  一级路由
  <Route path="/posts/:id/comments" component={} />
  useHistory() params

- Route component 直接接页面级别组件
  const DemoA = lazy(() => import(url)) //延迟加载 w
  高阶组件 connect() memo()

- Suspense + lazy 动态加载问题
