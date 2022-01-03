/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import './App.css';
import { setToken } from './utils/auth';
import { reqLogin } from './api/login';

function App() {
  
  // console.log(setToken('yuyifan555'));
  
  useState(() => {
    reqLogin([{username: 'admin', password: '123456'}])
      .then(data => {
        console.log(data,'---------');
        const { token } = data;
        setToken(token);
      });
  },[]);

  return (
    <div className="App">

    </div>
  )
}

export default App;
