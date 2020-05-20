import React, { Component } from 'react';
import TripContext from '../../context/trip/TripContext';

class ChangeForm extends Component {
  static contextType = TripContext;
  state = {
    journey_id: this.props.location.state.current.id,
    journey_car: this.props.location.state.current.journey_car,
    journey_date: this.props.location.state.current.journey_date,
    journey_empty_spaces: this.props.location.state.current
      .journey_empty_spaces,
    journey_text: this.props.location.state.current.journey_text,
    pickup_zip_code: this.props.location.state.current.pickup_zip_code,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.context.updateTrip(this.state);
    this.setState({
      journey_text: '',
      journey_date: '',
      journey_empty_spaces: '',
      journey_car: '',
      pickup_zip_code: '',
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
          <button className='button'>Submit</button>
        </form>
      </div>
    );
  }
}

export default ChangeForm;
