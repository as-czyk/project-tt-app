import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TripState from './context/trip/TripState';
import './App.css';

import Trips from './components/trips/Trips';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Home from './components/Pages/Home';

function App() {
  return (
    <TripState>
      <Router>
        <Fragment>
          <Header />
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/trips' component={Trips} />
          </Switch>
        </Fragment>
      </Router>
    </TripState>
  );
}

export default App;
