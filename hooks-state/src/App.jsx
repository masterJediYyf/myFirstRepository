import React, { useReducer } from 'react';
import Header from "./components/Header";
import Login from './components/Login';
import Home from './components/Home';
import './App.css';

var print = console.log.bind(console);
// 用户的登录状态 天生需要共享
// 跨层级调用
// context 父级提供 context 输出
export const AuthContext = React.createContext();
// reducer 初始值
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null
}

const reducer = (state, action) => {
  switch(action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user
      }
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated:false,
        user: null,
        token: null
      }
    default:
      return state;
  }
} 

function App() {
  // state reducer 状态树
  const [state, dispatch] = useReducer(reducer, initialState);
  // print(state,'--------');
  return (
    <AuthContext.Provider value={{
      state,
      dispatch
    }}>
      <Header />
      <div className='App'>{!state.isAuthenticated?<Login />: <Home />}</div>
    </AuthContext.Provider>
  )
}

export default App
