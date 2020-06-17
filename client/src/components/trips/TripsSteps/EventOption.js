import React from 'react';

const EventOption = (props) => {
  const { event_id, event_name } = props;

  return <option value={event_id.event_id}>{event_id.event_name}</option>;
};

export default EventOption;
