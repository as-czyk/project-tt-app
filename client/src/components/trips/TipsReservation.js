import React, { Component } from 'react';
import ReservationContext from '../../context/reservation/ReservationContext';

class TipsReservation extends Component {
  static contextType = ReservationContext;

  state = {
    journey_id: this.props.location.state.current.id,
    reservation_requested_seats: undefined,
    reservation_text: '',
    user_id: this.props.location.state.current.user_id,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.context.addReservation(this.state);
    this.setState({
      reservation_requested_seats: '',
      reservation_text: '',
    });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]:
        e.target.type === 'number' ? parseInt(e.target.value) : e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>
          Hello this is a single trip form for the id: {this.state.journey_id}
        </h1>
        <form onSubmit={this.onSubmit} className='reservation__form'>
          <div className='input__wrapper'>
            <input
              type='number'
              placeholder='Seats'
              name='reservation_requested_seats'
              value={this.state.reservation_requested_seats}
              onChange={this.onChange}
            />
          </div>
          <div className='input__wrapper'>
            <input
              type='text'
              placeholder='Description'
              name='reservation_text'
              value={this.state.reservation_text}
              onChange={this.onChange}
            />
          </div>
          <button className='button'>Submit</button>
        </form>
      </div>
    );
  }
}

export default TipsReservation;
