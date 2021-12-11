import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import TableComponent from '../views/table'


const DefaultRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/table" component={TableComponent}></Route>
            </Switch>
        </Router>
    )
}

export default DefaultRouter;