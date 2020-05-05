import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TripState from './context/trip/TripState';
import UserState from './context/user/UserState';

import './App.css';

import Trips from './components/Pages/Trips';
import OfferTrip from './components/trips/OfferTrip';
import Navigation from './components/navigation/Navigation';
import Home from './components/Pages/Home';
import Footer from './components/Footer/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <UserState>
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
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
              </Switch>
            </div>
            <div className='className=footer__container'>
              <Footer />
            </div>
          </div>
        </Router>
      </TripState>
    </UserState>
  );
}

export default App;
