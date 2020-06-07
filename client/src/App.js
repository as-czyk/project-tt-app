import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TripState from './context/trip/TripState';
import UserState from './context/user/UserState';
import AlertState from './context/alert/AlertState';
import ReservationState from './context/reservation/ReservationState';

import './App.css';
import './components/main.scss';

import Trips from './components/Pages/Trips';
import OfferTrip from './components/trips/OfferTrip';
import Navigation from './components/navigation/Navigation';
import Home from './components/Pages/Home';
import Footer from './components/Footer/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profile from './components/Pages/Profile';
import TripsReservation from './components/trips/TipsReservation';
import ChangeForm from './components/profile/ChangeForm';
import Reservation from './components/reservation/Reservation';
import PrivateRoute from './components/routing/PrivateRoute';

function App() {
  return (
    <UserState>
      <TripState>
        <AlertState>
          <ReservationState>
            <Router>
              <div className='main__container'>
                <div className='navbar__container'>
                  <Navigation />
                </div>
                <div className='content__container'>
                  <Switch>
                    <PrivateRoute exact path='/' component={Home} />
                    <PrivateRoute exact path='/trips' component={Trips} />
                    <PrivateRoute
                      exact
                      path='/offertrip'
                      component={OfferTrip}
                    />
                    <PrivateRoute exact path='/profile' component={Profile} />
                    <PrivateRoute
                      exact
                      path='/tripsreservation'
                      component={TripsReservation}
                    />
                    <PrivateRoute
                      exact
                      path='/changeform'
                      component={ChangeForm}
                    />
                    <PrivateRoute
                      exact
                      path='/reservation'
                      component={Reservation}
                    />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                  </Switch>
                </div>
                <div className='footer__container'>
                  <Footer />
                </div>
              </div>
            </Router>
          </ReservationState>
        </AlertState>
      </TripState>
    </UserState>
  );
}

export default App;
