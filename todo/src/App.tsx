import React, { useEffect, useState } from 'react';
import './App.css';

interface Todo {
  title: string,
  status: boolean
}

function App() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      setInterval(() => {setCount(count + 1)},1000);
    },[])
    return (
      <div>
        <p>You clicked {count} times</p>
      </div>
    );
}

export default App;
