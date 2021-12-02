import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { ColorBrowser } from './components/colorBrowser';
import { ColorPicker } from './components/colorPicker';
import { RGBcolor } from './model/color';

function App() {
  const [color, setColor] = useState<RGBcolor>({
    red:20,
    green:40,
    blue:180
  });

  return (
    <div className="App">
      <ColorPicker color={color} onColorUpdated={setColor}/>
      <ColorBrowser color={{red:color.red,green:color.green,blue:color.blue}} size={24}/>
    </div>
  )
}

export default App
