import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Link, useRoutes } from 'react-router-dom';
import routes from './routes';

function App () {
  return useRoutes(routes)
}

ReactDOM.render(
  <BrowserRouter>
    <ul>
      <li><Link to="/">首页</Link></li>
      <li><Link to="/user">用户管理</Link></li>
      <li><Link to="/profile">个人中心</Link></li>
    </ul>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
