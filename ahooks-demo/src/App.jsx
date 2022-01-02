import { useState, useCallback } from 'react';
import './App.css';
import Button from './Button';

//  toggle 功能
function App() {
  const [count2, setCount2] = useState(0);

  // useCallback 依赖的第二个参数变成了一个空的数组, 这就意味着这个方法没有依赖值, 将不会更新
  const handleClickButton2 = useCallback(() => {
    setCount2(() => count2 + 1)
  },[]);

  return (
    <Button
      count={count2}
      onClickButton={handleClickButton2}
    >
      Button2
    </Button>
  )
}

export default App;
