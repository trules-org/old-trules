import React from 'react';
import {
    gql,
    graphql,
} from 'react-apollo';

import AddEventWithMutation from './AddEvent';

// ...
const EventsList = ({ data: {loading, error, events }}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <div className="eventsList">
      <AddEventWithMutation />
      { events.map( ev => 
        (<div key={ev.id} className="event">{ev.name}</div>)
      )}
    </div>
  );
};

export const eventsListQuery = gql`
  query EventsListQuery {
    events {
      id
      name
    }
  }
`;

export default graphql(eventsListQuery, {
  options: { pollInterval: 5000 },
})(EventsList);