import React, { Suspense }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { Main, Loading } from './styled';
import Card from './card';

ReactDOM.render(
  <React.StrictMode>
    <Main>
      {/* <App /> */}
      <Suspense fallback={<Loading />}>
        <Card />
      </Suspense>
    </Main>
  </React.StrictMode>,
  document.getElementById('root')
)
