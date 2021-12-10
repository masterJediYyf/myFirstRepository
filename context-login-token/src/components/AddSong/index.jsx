import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';

const AddSong = () => {
    const { state, dispatch} = useContext(AuthContext)

    useEffect(() => {
        fetch('https://www.fastmock.site/mock/4f8c468ae7202f91850147535d932340/sbt/ali/login', {
            method: 'POST',
            headers: {
                Authorization: `${state.token.t}`,
                "Content-Type": "application/json"
            },
            // 请求体
            body: JSON.stringify({
                username: '111',
                password: 'abc'
            })
        });
    },[])
    return(
        <>
            AddSong
        </>
    )
}

export default AddSong;
