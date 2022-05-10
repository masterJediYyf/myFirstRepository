import React, { useState, useEffect, ReactNode } from 'react'

export default function App() {

  return (
    <InputWrapper>
      <ExpensiveCpn />
    </InputWrapper>
  )
}

function InputWrapper({ children }: { children: ReactNode }) {
  const [num, updateNum] = useState(0);

  return (
    <div title={num + ''}>
      <input value={num} onChange={(e) => updateNum(+e.target.value)} />
      <p>num is {num}</p>
      {children}
    </div>
  )
}

function ExpensiveCpn() {
  let now = performance.now();
  while (performance.now() - now < 100) { };
  console.log('耗时的组件 render');
  return <p>耗时的组件</p>
}
