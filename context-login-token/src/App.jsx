import { useEffect, useReducer } from 'react';
import './App.css';
import { AuthContext, authInitialState, authReducer } from './contexts/authContext';
import Header from './components/Header';
import AddSong from './components/AddSong';


function App() {
  // 比 useState 更严格的状态管理
  const [ state, dispatch ] = useReducer(authReducer, authInitialState);

  useEffect(() => {
    setTimeout(() => [
      dispatch({type:"LOGIN",payload: {user:{name: 'yyf', age: 18}, token:{t:'111111121111e'}}})
    ],1000);
  },[])

  return (
    <AuthContext.Provider value={{      
      state,
      dispatch
    }}
    >
      <Header />
      {state.isAuthenticated && <AddSong />}
    </AuthContext.Provider>
  )
}

export default App;
