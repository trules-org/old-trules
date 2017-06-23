import React from 'react';
import {
    gql,
    graphql,
} from 'react-apollo';

const AddEvent = ({ mutate }) => {
  const handleKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      evt.persist();
      mutate({ 
        variables: { name: evt.target.value }
      })
      .then( res => {
        evt.target.value = '';  
      });
    }
  };
  return (
    <input
      type="text"
      placeholder="New event"
      onKeyUp={handleKeyUp}
    />
  );
};

const addEventMutation = gql`
  mutation addEvent($name: String!) {
    addEvent(name: $name) {
      id
      name
    }
  }
`;
const AddEventWithMutation = graphql(
  addEventMutation
)(AddEvent);
export default AddEventWithMutation;

