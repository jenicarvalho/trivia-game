import React from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import { createBrowserHistory } from "history"
import Home from '../pages/Home'
import Quiz from '../pages/Quiz'
import Result from '../pages/Result'

const history = createBrowserHistory()

const Routes = () => (
  <Router history={history}>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/quiz" exact  component={Quiz} />
        <Route path="/result" exact  component={Result} />
    </Switch>
  </Router>
)

export default Routes
