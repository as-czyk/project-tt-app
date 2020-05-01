import React, { useReducer } from 'react';
import TripContext from './TripContext';
import TripReducer from './TripReducer';

const TripState = (props) => {
  const initialState = {
    trips: [
      {
        id: '1',
        seats: '3',
        user_id: '290',
        status: true,
        text: 'Hallo das ist eine Fahrt die ich anbieten möchte',
        time: '16:00',
        car_type: 'Auto',
        meeting_point: 'Hanau Hauptbahnhof',
      },
      {
        id: '2',
        seats: '1',
        user_id: '291',
        status: true,
        text: 'Hallo das ist eine Fahrt die ich anbieten möchte',
        time: '16:00',
        car_type: 'Auto',
        meeting_point: 'Hanau Hauptbahnhof',
      },
      {
        id: '3',
        seats: '4',
        user_id: '292',
        status: true,
        text: 'Hallo das ist eine Fahrt die ich anbieten möchte',
        time: '16:00',
        car_type: 'Auto',
        meeting_point: 'Hanau Hauptbahnhof',
      },
    ];
  }
  

  const [state, dispatch] = useReducer(TripReducer, initialState);

  /**
   * Api Calls go here, functionallity goes here
   */

  return (
    <TripContext.Provider
      value={{
        trips: state.trips
        /*id: state.id,
        seats: state.user,
        user_id: state.user_id,
        status: state.status,
        text: state.text,
        time: state.time,
        car_type: state.car_type,
        meeting_point: state.meeting_point,*/
      }}
    >
      {props.children}
    </TripContext.Provider>
  );
};

export default TripState;
