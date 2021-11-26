import React,{useEffect} from 'react';
// 职责分离 一个文件只做一件事
import { apiLogin } from './api/user.api';

function App() {

  useEffect(() => {
    // 函数式编程思想
    const fn = async() => {
      await apiLogin({username:'root',password:'123456'})
    }
    fn();
  },[]);

  return (
    <div>

    </div>
  );
}

export default App;
