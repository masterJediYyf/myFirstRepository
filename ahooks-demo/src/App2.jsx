import React, { useState } from 'react';
import { useRequest } from 'ahooks';
import 'antd/dist/antd.css';
import { message } from 'antd';
// react 数据绑定是单向的

function App() {
    const changeUsername = (username) => {
        // console.log(username);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({success: true});
            },1000);
        })
    }
    const [state, setState] = useState('');
    const {data, loading, run} = useRequest(changeUsername, {
        manual: true, //手动
        onSuccess: (result, params) => {
            if(result.success){
                setState('');
                message.success('提交成功');
            }
        }
    }); 

    return (
        <>  
            <p>{data && JSON.stringify(data)}</p>
            <input 
                type="text" 
                value={state}
                onChange={ (e) => setState(e.target.value) }
                placeholder='please enter message'
                style={{width: 240, marginRight: 16}}
            />
            <button disabled={loading} onClick={() => run(state)} type='button'>
                {loading ? 'Loading' : 'Edit'}
            </button>
                
        </>
    )
}

export default App;