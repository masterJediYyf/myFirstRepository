import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomePage } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/signIn" render={() => <h1>登录页面</h1>}/>
          <Route path="/detail" render={() => <h1>详情页面</h1>}/>
          <Route render={() => <h1>404 not found 页面丢失了！</h1>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
