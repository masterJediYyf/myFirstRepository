import React from 'react';
import { useRequest } from 'ahooks';
import Mock from 'mockjs';

// 请求  hooks
// 1. state  loading  error 
// 2. axios  请求 mockjs
// 3. 分页  
function App() {
    // hooks
    const getUsername = () => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(Mock.mock('@cname'))
            },1000)
        })
    }
    const { data, error, loading } = useRequest(getUsername);
    return (
        <>
            {error && <div>failed to load</div>}
            {loading ? <div>loading........</div> : <div>Username: {data}</div>}
        </>
    )
}

export default App;