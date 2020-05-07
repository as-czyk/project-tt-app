import React, { Component } from 'react';
import TripContext from '../../context/trip/TripContext';
import UserContext from '../../context/user/UserContext';

class TipsReservation extends Component {
  state = {
    journey_id: this.props.location.state.current.id,
    journey_seats: '',
    journey_text: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    //Call Function from TripState here
    console.log('Submitted Reservation');
    this.setState({
      journey_seats: '',
      journey_text: '',
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>
          Hello this is a single trip form for the id: {this.state.journey_id}
        </h1>
        <form onSubmit={this.onSubmit} className='trips__form'>
          <h3>Heading for submitting Form</h3>
          <input
            type='text'
            placeholder='Anzahl der Plätze'
            name='journey_seats'
            value={this.state.journey_seats}
            onChange={this.onChange}
          />
          <input
            type='text'
            placeholder='Nachricht an den Fahrer'
            name='journey_text'
            value={this.state.journey_text}
            onChange={this.onChange}
          />
          <button className='btn btn-sumbit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default TipsReservation;
