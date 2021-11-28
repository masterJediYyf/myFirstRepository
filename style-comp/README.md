- 项目是怎么开发的

  1. 本项目的样式 采用 styled-component 来进行开发

  2. 使用 react-router-config 优化路由配置

  3. 图片的懒加载
     img 加载要进行 http 请求
     lazyload

  4. 切页面
     静态页面 styled-component
     动态 react-router Link redux
     banner + list /api

     music -> api -> store(通过 connect(mapSate,dispatch) 让组件与 store 进行连接) -> applications <- router

     nodejs 后端 api http://47.99.137.223:3000/

  5. 使用 Tab > TabItem 父子样式组件,思路来源于 antd 源码

  6. connect 联上 Provide
     redux 本质就是让数据可以跨层级, 跨页面的共享, 随时随地拿取
     Provider mapState 可读 mapDispatch 怎么 action
     connect(mapStateToProps, mapDispatchToProps)(Recommend) HOC

  7. DOM 树
     组件树
     store 树
     Provider 是 App 的子组件, 是 react-redux 提供的一个把我们的单一状态树作为数据流 便于其他组件进行连接的组件
