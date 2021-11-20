import logo from './logo.svg';
import React, { PureComponent } from 'react';
import './App.css';

function App() {
  return React.createElement('div',{
    className:"box"
  },React.createElement('div',{
    className:"item"
  },"生命周期"),
  React.createElement(React.Fragment,null,"Fragment"),
  "text文本"
  )
}

export default App;
