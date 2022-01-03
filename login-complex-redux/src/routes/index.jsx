import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../views/login';
import Layout from '../layout';
import { getToken } from '../utils/auth';


const Router = () => {
  let token = getToken();

  return (
    <HashRouter>
      <Switch>
        <Route 
          path="/login"
          component={Login}
        />
        <Route 
          exact
          path='/' 
          render={() => {
            if(!token) {
              return <Redirect to="/login" />
            } else {
              console.log('已登录');
              return <Layout />
            }
          }}
        />
      </Switch>
    </HashRouter>
  )
}

export default Router;