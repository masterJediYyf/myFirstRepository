import { useState } from 'react';
import { useI18n, setLang } from './lang'; 
import './App.css';

function App() {

  const [lang, setNewLang] = setLang();

  const t = useI18n()
  // console.log(t);

  const change = () => {
    setNewLang('en');
  }

  return (
    <div className="App">
      {t.welcome}
      <div>{lang}</div>
      <div onClick={change}>change</div>
    </div>
  )
}

export default App
