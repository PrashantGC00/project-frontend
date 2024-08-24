import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import Users from './users/pages/Users';
import Place from './places/pages/Place';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces'

import './App.css';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/place" exact>
            <Place />
          </Route>
          <Route path="/:uID/places" exact>
            <UserPlaces />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>

    </Router>
  )
}

export default App;
