import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';


const Header = () => {
    const { state, dispatch} = useContext(AuthContext);
    console.log(state);
    return (
        <>
            Header
            {state.isAuthenticated 
                ? 
                (<div>
                    登陆了{state.user.name}:{state.token.t}
                    <button onClick={() => dispatch({
                        type:"LOGOUT"
                    })}>
                        退出
                    </button>
                </div>) 
                : 
                (<div>未登陆</div>) 
            }

        </>
    )
}

export default Header;