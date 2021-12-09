// 拿到登录状态
import { useContext, useEffect } from 'react';
import { AuthContext  } from '../App';

var print = console.log.bind(console);
const Header = () => {
  const {state, dispatch} = useContext(AuthContext);
  // console.log(state);
  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch({type: 'LOGIN', payload: 
  //       {
  //         isAuthenticated: true, 
  //         user: {name: 'keli'}
  //       }
  //     })
  //   }, 2000)
  // }, [])
  // 修改用户的登录状态 dispatch
  return(
    <nav id='navigation'>
      <h1 href="#" className='logo'>
        HOOKED
      </h1>
      <button onClick={() => dispatch({
        type:'LOGOUT'
      })}>
        <h1>Log out</h1>
      </button>
    </nav>
  )
}

export default Header