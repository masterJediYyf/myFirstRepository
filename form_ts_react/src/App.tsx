import { useState } from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
import LoginContainer from './pages/login.container';
import PageB from './pages/pageB';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={LoginContainer}></Route>
        <Route exact={true} path="/pageB" component={PageB}></Route> 
      </Switch>
    </Router>
  )
}

export default App
