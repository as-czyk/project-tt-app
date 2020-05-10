import React, { Component } from 'react';

class ChangeForm extends Component {
  state = {
    journey_id: this.props.location.state.current.id,
    event_id: this.props.location.state.current.event_id,
    event_start_time: this.props.location.state.current.event_start_time,
    event_start_date: this.props.location.state.current.event_start_date,
    event_address: this.props.location.state.current.event_address,
    journey_car: this.props.location.state.current.journey_car,
    journey_date: this.props.location.state.current.journey_date,
    journey_empty_spaces: this.props.location.state.current
      .journey_empty_spaces,
    journey_text: this.props.location.state.current.journey_text,
    pickup_zip_code: this.props.location.state.current.pickup_zip_code,
    user_id: this.props.location.state.current.user_id,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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

  render() {
    return (
      <div>
        <h1>You can change the form for trip id: {this.state.journey_id} </h1>
        <form onSubmit={this.onSubmit} className='change__form'>
          <input
            type='text'
            placeholder='Anzahl der Plätze'
            name='journey_empty_spaces'
            value={this.state.journey_empty_spaces}
            onChange={this.onChange}
          />
          <input
            type='text'
            placeholder='Auto'
            name='journey_car'
            value={this.state.journey_car}
            onChange={this.onChange}
          />
          <input
            type='text'
            placeholder='Datum der Fahrt'
            name='journey_date'
            value={this.state.journey_date}
            onChange={this.onChange}
          />
          <input
            type='text'
            placeholder='Freitext'
            name='journey_text'
            value={this.state.journey_text}
            onChange={this.onChange}
          />
          <input
            type='text'
            placeholder='Abfahrtort'
            name='pickup_zip_code'
            value={this.state.pickup_zip_code}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

export default ChangeForm;
