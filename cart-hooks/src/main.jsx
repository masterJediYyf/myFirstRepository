import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductsContextProvider from './context/ProductsContext';
import DefaultRoutes from './routes';

// store 管理

ReactDOM.render(
  <ProductsContextProvider>
    <DefaultRoutes />
  </ProductsContextProvider>,
  document.getElementById('root')
)
