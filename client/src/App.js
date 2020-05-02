import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TripState from './context/trip/TripState';
import './App.css';

import Trips from './components/Pages/Trips';
import OfferTrip from './components/trips/OfferTrip';
import Navigation from './components/navigation/Navigation';
import Home from './components/Pages/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <TripState>
      <Router>
        <div className='main__container'>
          <div className='navbar__container'>
            <Navigation />
          </div>
          <div className='content__container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/trips' component={Trips} />
              <Route exact path='/offertrip' component={OfferTrip} />
            </Switch>
          </div>
          <div className='className=footer__container'>
            <Footer />
          </div>
        </div>
      </Router>
    </TripState>
  );
}

export default App;
