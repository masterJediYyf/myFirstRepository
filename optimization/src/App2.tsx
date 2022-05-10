import React, { useState, useEffect, ReactNode, useContext, useMemo } from 'react';

// 该如何比较props
// 全等比较 
// 浅比较

const numCtx = React.createContext<number>(0);
const updateNumCtx = React.createContext<React.Dispatch<number>>(() => { });

export default function App() {
  const [num, updateNum] = useState<number>(0);

  return (
    <numCtx.Provider value={num}>
      <updateNumCtx.Provider value={updateNum}>
        <Middle />
      </updateNumCtx.Provider>
    </numCtx.Provider>
  )
}

// 这里 Button 会发生重新渲染
// 原因是因为 Middle 中的props是一个{}, 每次渲染生成不同的{}
// 现在就需要性能优化API了
// useMemo 起作用的前提是这个组件必须是浅比较
// const Middle = React.memo(() => {
//   return (
//     <>
//       <Button />
//       <Show />
//     </>
//   )
// })

// 依赖数组为空, 相当于useMemo每次返回一样的值, 
// 就相当于每次传给子组件的props都是不变的 
const Middle = () => {
  return useMemo(() => {
    return (
      <>
        <Button />
        <Show />
      </>
    )
  }, [])
}

function Button() {
  const updateNum = useContext(updateNumCtx);
  console.log('btn render');
  return (
    <button onClick={() => updateNum(Math.random())}>产生随机数</button>
  )
}

function Show() {
  const num = useContext(numCtx);
  return (
    <p>
      num is: {num}
    </p>
  )
}
