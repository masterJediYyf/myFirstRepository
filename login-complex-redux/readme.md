# 如何介绍自己的项目

1. 使用数据流管理 redux, 精细化完成登录功能

- utils 业务工具模块
  auth 业务
  localstorage token ---> cookie
  userInfo 对象存储

- js-cookie
  方便进行 cookie 配置
  str c 盘特定文件中
  cookie 转化为 json 对象 --> 用 util 来封装一下

- mockjs 做接口模拟

  1. 每个接口模块文件 数据模拟 /user /posts
  2. url 和 方法的设计 Mock.mock(/\/login/, "post", )

- api 打理流程
  api/login.js reqLogin post 请求体
  {username: 'admin', password: '123456'}
  axios request

- mockjs 模拟登录 token 授权

  1. 如果成功的话 status: 0, 有问题是 1, statusCode: 202
  2. 后台要准备多权限 admin, editor, guest

- useEffect, connect(action, dispatch) <--> api reqLogin 方法 <--> request(通用) <--> Mock.mock || backend

- 后台管理系统路由
  <Route path="/" component={Home} /> 原来的组件
  <Route path="/" render={() => { return <></> }}/> 和原来是一样的 render 方法可以打理更加复杂的方法

- 容器类组件
  Table Form Layout

- Layout 首页打造技巧

  1. 先模块化
  2. Sider return Layout.Sider menu

- 在打理后台首页时, 最忌讳的是一点点组件搭建
  Layout 容器组件来打理

  1. 侧边栏
     Layout.Sider
  2. header
     Menu SubMenu 一级菜单 二级菜单
  3. Content 行内 css {{width: calc(100% - 100px)}}
     <Route>
  4. 抽屉 drawer
     由全局状态驱动 打开或者关闭

- antd 布局的理解

  1. Row + Col
  2. Layout
     后台 Layout 先左右 Sider + Layout
     上下结构 Header + Content

- redux 去驱动状态

- 后台会有 50+ 100+
  设置标题这个细节 react-document-title ==> ahooks useTitle
