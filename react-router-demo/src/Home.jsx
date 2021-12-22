import React from 'react'
import { useNavigate } from 'react-router';

const Home = (props) => {
    let navigate = useNavigate();
    
    function navigateToUser() {
        navigate('/user')
    }
    
    return (
        <div>
            <p>Home {props.title}</p>
            <button onClick={navigateToUser}>跳转到User</button>
        </div>
    )
}

export default Home;