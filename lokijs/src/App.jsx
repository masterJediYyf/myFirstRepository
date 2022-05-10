import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {

      const [count, setCount] = useState(0);
      // console.log(count);
      
      useEffect(() => {
        setInterval(() => {setCount(count + 1)},1000);
      },[])
      return (
        <div>
          <p>You clicked {count} times</p>
        </div>
      );
}

export default App
