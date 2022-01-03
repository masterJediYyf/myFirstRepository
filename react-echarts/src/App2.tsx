import { createRef, useRef, RefObject, useEffect } from 'react'

// react 中获取上一次的值
const usePrevious = (state: any) => {
  const ref = useRef();
  
  useEffect(() => {
    ref.current = state;
  });
  return ref.current;
}

function App() {
  const inputElement:RefObject<HTMLInputElement> = createRef();

  const handleFocusInput = () => {
    inputElement.current?.focus()
  }

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={handleFocusInput}>Focus Input</button>
    </>
  )
}

export default App;