import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './mock';
import Router from './routes';
import { Provider } from 'react-redux';   
import store from './store';
import "antd/dist/antd.css";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
