import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './mock';
import DefaultRouter from './router';
import 'antd/dist/antd.css'

ReactDOM.render(
  <DefaultRouter>
    <App />
  </DefaultRouter>,
  document.getElementById('root')
)
