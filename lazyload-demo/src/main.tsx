import React, { Component, FC, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
const  DemoA = lazy(() => import('./demo/demoA'));
const  DemoB = lazy(() => import('./demo/demoB'));

// const SuspenseComponent = Component => props => {
//   return (
//     <Suspense fallback={null}>
//       <Component {...props}></Component>
//     </Suspense>
//   )
// }}

const NotFuond:FC = () => {
  return (
    <div>
      404NotFound
    </div>
  )
}

ReactDOM.render(
  <div>
    Main
    <br />
    {/* 动态规划部分  lazyload 主战场 */}
    <Suspense fallback={<div>Loading....</div>}>
      <Router>
        <NavLink to="/demoA">DemoA</NavLink>
        <br />
        <NavLink to="/demoB">DemoB</NavLink>
        <Switch>
          {/* <App /> */}
          <Route path="/demoA" component={DemoA} />
          <Route path="/demoB" component={DemoB} />
          <Route path="*" component={NotFuond} />
        </Switch>
      </Router>
    </Suspense>
  </div>,
  document.getElementById('root')
)
