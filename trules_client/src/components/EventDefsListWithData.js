import React from 'react';
import {
    gql,
    graphql,
} from 'react-apollo';

import AddEventDefsWithMutation from './AddEventDef';

// ...
const EventDefsList = ({ data: {loading, error, eventDefs }}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <div className="eventDefsList">
      <AddEventDefsWithMutation />
      { eventDefs.map( ev => 
        (<div key={ev.id} className="eventDef">{ev.name}</div>)
      )}
    </div>
  );
};

export const eventDefsListQuery = gql`
  query EventDefsListQuery {
    eventDefs {
      id
      name
    }
  }
`;

export default graphql(eventDefsListQuery, {
  options: { pollInterval: 5000 },
})(EventDefsList);