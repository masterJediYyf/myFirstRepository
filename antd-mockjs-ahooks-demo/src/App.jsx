import { useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  useEffect(() => {
    axios.post('/table/list', {
      body: {
        
      }
    })
    .then(data => {
      console.log(data);
    })
  },[])

  return (
    <div className="App">
    </div>
  )
}

export default App
