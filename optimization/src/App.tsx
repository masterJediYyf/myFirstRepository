import { useState } from 'react'

function App() {
  return (
    <>
      <Input />
      <ExpensiveCpn />
    </>
  )
}

// 将变的部分与不变的部分分离开
function Input() {
  const [num, updateNum] = useState(0)

  return (
    <>
      <input value={num} onChange={(e) => updateNum(+e.target.value)} />
      <p>num is {num}</p>
    </>
  )
}

function ExpensiveCpn() {
  let now = performance.now();
  while (performance.now() - now < 100) { };
  console.log('耗时的组件 render');
  return <p>耗时的组件</p>
}

export default App
