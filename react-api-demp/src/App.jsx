import { createRef, useEffect, useRef, useState } from 'react';
import './App.css';

var print = console.log.bind(console);

function App() {
  const [count, setCount] = useState(0);
  // const timer = createRef(); // 每次调用的时候返回一次新的 ref
  const timer = useRef(); // 利用闭包 每次调用都是之前第一次创建的 ref
  // const [time, setTime] = useState(0);

  // useEffect(() => {
  //   if(time < 5) {
  //     setTimeout(() => {
  //       setCount(count + 1);
  //       setTime(time + 1);
  //     },1000)
  //   } else {
  //     console.log('计时结束');
  //   }
  // },[time])

  useEffect(() => {
    // print(timer,'-----------');
    timer.current = setInterval(() => {
      // setCount(count + 1);
      // 多了一个传参的过程
      setCount(count => count + 1);
    },1000)
  },[])

  useEffect(() => {
    if(count > 5) {
      clearInterval(timer.current)
    }
  },[count])

  const addCount = function() {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <p></p>
      {`${count}`}
      <button onClick={addCount}>add one</button>
    </div>
  )
}

export default App
