import React, { Component, Fragment } from 'react';
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
      <Fragment>
        <h1 style={{ paddingLeft: '20px' }}>Please update your trip</h1>
        <form onSubmit={this.onSubmit} className='change__form'>
          <div className='change__form__field'>
            <div className='input__wrapper'>
              <input
                type='text'
                placeholder='Anzahl der Plätze'
                name='journey_empty_spaces'
                value={this.state.journey_empty_spaces}
                onChange={this.onChange}
              />
            </div>
            <div className='input__wrapper'>
              <input
                type='text'
                placeholder='Auto'
                name='journey_car'
                value={this.state.journey_car}
                onChange={this.onChange}
              />
            </div>
            <div className='input__wrapper'>
              <input
                type='text'
                placeholder='Datum der Fahrt'
                name='journey_date'
                value={this.state.journey_date}
                onChange={this.onChange}
              />
            </div>
            <div className='input__wrapper'>
              <input
                type='text'
                placeholder='Abfahrtort'
                name='pickup_zip_code'
                value={this.state.pickup_zip_code}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className='change__form__text'>
            <textarea
              type='text'
              placeholder='Freitext'
              name='journey_text'
              value={this.state.journey_text}
              onChange={this.onChange}
            />
            <button className='button__sge__1'>Update</button>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default ChangeForm;
