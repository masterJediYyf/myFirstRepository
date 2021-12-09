import { useState } from 'react';
import './App.css';
import { useToggle } from 'ahooks';

//  toggle 功能
function App() {
  // const [isOn, setIsOn] = useState(false);
  //   const doToggle = () => {
  //   setIsOn(!isOn);
  // }
  const [state, { toggle }] = useToggle();

  return (
    <div className="App">
      <p>Effects: {`${state}`}</p>
      {/* {isOn?'开启':"关闭"}  */}
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}

export default App;
