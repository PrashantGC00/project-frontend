import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import Users from './users/pages/Users';
import Place from './places/pages/Place';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/" exact>
          <Users />
        </Route>

        <Route path="/place" exact>
          <Place />
        </Route>

        <Redirect to="/" />

      </Switch>
    </Router>
  )
}

export default App;
