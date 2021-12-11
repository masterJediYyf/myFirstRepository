import React,{ useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useClipboard } from 'use-clipboard-copy';
import { message } from 'antd'; 

function App() {
  const clipboard = useClipboard();

  // ref 对对象的标记
  const ref = React.createRef();
  // console.log(ref);

  useEffect(() => {
    // console.log(ref);
  },[])

  const doCopy = function() {
    clipboard.copy();
    message.info('复制成功了');
  }

  return (
    <div className="App">
      <input ref={clipboard.target} type="text"/>
      <button onClick={doCopy}>Copy Link</button>
    </div>
  )
}

export default App
