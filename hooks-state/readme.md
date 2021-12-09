- 登录
  提交表单 token 登录

- useReducer 的老大是 React.cteateContext()
  React.createContext() 是上下文对象

  - 其中 Provider 属性相当于 React-redux Provider 组件

  const [state, dispatch] = useReducer(reducer 纯函数, initialState)

  当把 state, dispatch 交给 context 后 , reducer 状态就实现了跨层级共享

- React.createContext + useContext 用 useContext() 来摇人
  App.jsx 要 export const authContext
  Context.provider value = {{state,dispatch}}

- Redux
  1. 跨层级
  2. useReducer 负责状态的严格转变

# 回答技巧

1. hooks 使用 useReducer + useContext 实现数据共享(createContext + export), 状态集中管理, reducer 纯函数严格把控数据状态改变(action.type)
   所有组件 goon 共享到安全的状态

2. Redux 数据管理哲学得以继承
