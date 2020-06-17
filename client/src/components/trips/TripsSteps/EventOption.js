import React from 'react';

const EventOption = (props) => {
  const { event_id } = props;

  return <option value={event_id.event_id}>{event_id.event_id}</option>;
};

export default EventOption;
